const A1_POSTER = {
    width: 594,
    height: 841,
    fieldInset: 22,
    titleWidth: 400,
    titleRatio: 172.78 / 638.91,
    titleDrop: 4.6,
    itemFrame: 3,
    tabWidth: 8,
    minGap: 5
};

const IMAGE_EXTENSIONS = [".png", ".jpg", ".jpeg", ".webp"];

function seededRandom(seed) {
    let value = seed % 2147483647;

    if (value <= 0) value += 2147483646;

    return () => {
    value = value * 16807 % 2147483647;
    return (value - 1) / 2147483646;
    };
}

function imageSourceWithFallback(img, base, extensionIndex = 0) {
    img.src = `${base}${IMAGE_EXTENSIONS[extensionIndex]}`;
    img.onerror = () => {
    const nextIndex = extensionIndex + 1;

    if (nextIndex < IMAGE_EXTENSIONS.length) {
        imageSourceWithFallback(img, base, nextIndex);
    }
    };
}

function loadArchiveImage(item) {
    return new Promise(resolve => {
    const img = new Image();

    img.onload = () => resolve({
        item,
        img,
        aspect: img.naturalWidth / img.naturalHeight
    });
    img.onerror = () => resolve({
        item,
        img,
        aspect: 1
    });

    imageSourceWithFallback(img, item.assetBase);
    });
}

function shuffleItems(items) {
    const random = seededRandom(713);
    const ordered = [...items];

    for (let index = ordered.length - 1; index > 0; index--) {
    const target = Math.floor(random() * (index + 1));
    [ordered[index], ordered[target]] = [ordered[target], ordered[index]];
    }

    return ordered;
}

function getFieldSize() {
    return {
    width: A1_POSTER.width - A1_POSTER.fieldInset * 2,
    height: A1_POSTER.height - A1_POSTER.fieldInset * 2
    };
}

function getTitleBox() {
    const field = getFieldSize();
    const titleHeight = A1_POSTER.titleWidth * A1_POSTER.titleRatio;

    return {
    x: field.width - A1_POSTER.titleWidth,
    y: field.height - titleHeight + A1_POSTER.titleDrop,
    width: A1_POSTER.titleWidth,
    height: titleHeight - A1_POSTER.titleDrop
    };
}

function getItemSize(entry, cellWidth, random) {
    const ratio = 0.78 + random() * 0.28;

    const imageWidth = Math.max(30, Math.min(54, cellWidth * ratio));
    const imageHeight = Math.max(22, Math.min(70, imageWidth / entry.aspect));

    const frameHeight = imageHeight + A1_POSTER.itemFrame * 2;
    const tabHeight = getPosterTabHeight(entry.item.category, frameHeight);

    return {
        imageWidth,
        imageHeight,
        width: imageWidth + A1_POSTER.itemFrame * 2 + A1_POSTER.tabWidth,
        height: Math.max(frameHeight, tabHeight),
        frameHeight,
        tabHeight
    };
}

function overlapsTitle(box, titleBox) {
    return !(
    box.x + box.width < titleBox.x - A1_POSTER.minGap ||
    box.x > titleBox.x + titleBox.width ||
    box.y + box.height < titleBox.y - A1_POSTER.minGap ||
    box.y > titleBox.y + titleBox.height
    );
}

function isMostlyHiddenBehindTitle(box, titleBox) {
    const overlapLeft = Math.max(box.x, titleBox.x);
    const overlapTop = Math.max(box.y, titleBox.y);
    const overlapRight = Math.min(box.x + box.width, titleBox.x + titleBox.width);
    const overlapBottom = Math.min(box.y + box.height, titleBox.y + titleBox.height);

    const overlapWidth = Math.max(0, overlapRight - overlapLeft);
    const overlapHeight = Math.max(0, overlapBottom - overlapTop);
    const overlapArea = overlapWidth * overlapHeight;
    const boxArea = box.width * box.height;

    return overlapArea / boxArea > 0.72;
}

function isMostlyHiddenBehindAny(box, others) {
    return others.some(other => {
        const overlapLeft = Math.max(box.x, other.x);
        const overlapTop = Math.max(box.y, other.y);
        const overlapRight = Math.min(box.x + box.width, other.x + other.width);
        const overlapBottom = Math.min(box.y + box.height, other.y + other.height);

        const overlapWidth = Math.max(0, overlapRight - overlapLeft);
        const overlapHeight = Math.max(0, overlapBottom - overlapTop);
        const overlapArea = overlapWidth * overlapHeight;
        const boxArea = box.width * box.height;

        return overlapArea / boxArea > 0.62;
    });
}

function layoutEntries(entries) {
    const random = seededRandom(1429);
    const field = getFieldSize();
    const titleBox = getTitleBox();

    const padding = 7;
    const placed = [];
    const shuffled = shuffleItems(entries);

    const columns = 10;
    const rows = Math.ceil(shuffled.length / columns);

    const cellWidth = (field.width - padding * 2) / columns;
    const cellHeight = (field.height - padding * 2) / rows;

    function emptySpaceScore(box) {
        let score = 0;

        const samplePoints = [
            [box.x, box.y],
            [box.x + box.width, box.y],
            [box.x, box.y + box.height],
            [box.x + box.width, box.y + box.height],
            [box.x + box.width / 2, box.y + box.height / 2]
        ];

        for (const [px, py] of samplePoints) {
            let nearest = Infinity;

            for (const other of placed) {
                const ox = other.x + other.width / 2;
                const oy = other.y + other.height / 2;
                const distance = Math.hypot(px - ox, py - oy);
                nearest = Math.min(nearest, distance);
            }

            score += Math.min(nearest, 90);
        }

        return score;
    }

    return shuffled.map((entry, index) => {
        const baseCellWidth = cellWidth * (0.95 + random() * 0.4);
        const size = getItemSize(entry, baseCellWidth, random);

        let best = null;
        let bestScore = -Infinity;

        for (let attempt = 0; attempt < 520; attempt++) {
            const x = padding + random() * (field.width - size.width - padding * 2);
            const y = padding + random() * (field.height - size.height - padding * 2);

            const trial = {
                x,
                y,
                width: size.width,
                height: size.height
            };

            if (isMostlyHiddenBehindTitle(trial, titleBox)) continue;
            if (isMostlyHiddenBehindAny(trial, placed)) continue;


            let overlapPenalty = 0;
            let crowdPenalty = 0;

            for (const other of placed) {
                if (boxesOverlap(trial, other, A1_POSTER.minGap)) {
                    overlapPenalty += 260;
                }

                const cx = trial.x + trial.width / 2;
                const cy = trial.y + trial.height / 2;
                const ox = other.x + other.width / 2;
                const oy = other.y + other.height / 2;
                const distance = Math.hypot(cx - ox, cy - oy);

                if (distance < 48) {
                    crowdPenalty += 48 - distance;
                }
            }

            const edgeBalance =
                Math.min(trial.x, field.width - trial.x - trial.width) +
                Math.min(trial.y, field.height - trial.y - trial.height);

            const score =
                emptySpaceScore(trial) * 1.25 +
                edgeBalance * 0.18 -
                overlapPenalty -
                crowdPenalty;

            if (score > bestScore) {
                bestScore = score;
                best = trial;
            }
        }

        if (!best) {
            best = {
                x: padding + random() * (field.width - size.width - padding * 2),
                y: padding + random() * (field.height - size.height - padding * 2),
                width: size.width,
                height: size.height
            };
        }

        placed.push(best);

        return {
            entry,
            index,
            x: best.x,
            y: best.y,
            ...size
        };
    });
}

function boxesOverlap(a, b, gap = 0) {
    return !(
    a.x + a.width + gap < b.x ||
    a.x > b.x + b.width + gap ||
    a.y + a.height + gap < b.y ||
    a.y > b.y + b.height + gap
    );
}

function fillTitleLeftSpace(layouts, field, titleBox, random) {
    const leftWidth = titleBox.x - 18;
    const candidates = layouts
    .filter(layout => layout.width < leftWidth - 8 && layout.height < 70)
    .slice(-10);
    const placed = layouts.filter(layout => !candidates.includes(layout));
    const slots = [
    { x: 14, y: titleBox.y + 8 },
    { x: 74, y: titleBox.y + 18 },
    { x: 24, y: titleBox.y + 72 },
    { x: 88, y: titleBox.y + 86 }
    ];

    candidates.slice(0, slots.length).forEach((layout, index) => {
    const slot = slots[index];
    const x = Math.min(Math.max(10, slot.x + (random() - 0.5) * 10), titleBox.x - layout.width - 5);
    const y = Math.min(Math.max(12, slot.y + (random() - 0.5) * 10), field.height - layout.height - 8);
    const trial = { x, y, width: layout.width, height: layout.height };

    if (
        x > 0 &&
        y > 0 &&
        trial.x + trial.width < titleBox.x - A1_POSTER.minGap &&
        !overlapsTitle(trial, titleBox) &&
        !placed.some(other => boxesOverlap(trial, other, -7))
    ) {
        layout.x = x;
        layout.y = y;
    }

    placed.push(layout);
    });

    return layouts;
}

function getPosterTabHeight(text, itemHeight) {
    const length = String(text || "").length;

    return Math.max(
        itemHeight,
        24 + length * 1.45
    );
}

function categoryFontSize(text, tabHeight) {
    const length = String(text).length;
    const available = tabHeight - 5;
    const estimated = available / Math.max(5, length * 0.72);

    return Math.max(2.4, Math.min(4.0, estimated));
}

function createPosterItem(layout) {
    const { item, img } = layout.entry;
    const element = document.createElement("article");
    const frame = document.createElement("div");
    const image = document.createElement("img");
    const id = document.createElement("span");
    const category = document.createElement("div");
    const categoryText = document.createElement("span");

    element.className = "poster-item";
    element.style.left = `${layout.x.toFixed(2)}mm`;
    element.style.top = `${layout.y.toFixed(2)}mm`;
    element.style.setProperty("--img-w", `${layout.imageWidth.toFixed(2)}mm`);
    element.style.setProperty("--img-h", `${layout.imageHeight.toFixed(2)}mm`);
    element.style.setProperty("--item-h", `${layout.height.toFixed(2)}mm`);
    element.style.setProperty("--tab-h", `${layout.tabHeight.toFixed(2)}mm`);
    element.style.setProperty("--category-size", `3.4mm`);
    element.style.zIndex = String(layout.index + 1);

    frame.className = "poster-frame";
    image.src = img.currentSrc || img.src;
    image.alt = item.enTitle || item.title || "";

    id.className = "poster-id";
    id.textContent = String(item.id).padStart(2, "0");

    category.className = "poster-category";
    categoryText.textContent = item.category || "Category";

    category.appendChild(categoryText);
    frame.append(image, id, category);
    element.appendChild(frame);

    return element;
}

async function buildA1Poster() {
    const container = document.getElementById("posterItems");
    const loaded = await Promise.all(ARCHIVE.map(loadArchiveImage));
    const layouts = layoutEntries(loaded);
    const fragment = document.createDocumentFragment();

    layouts.forEach(layout => fragment.appendChild(createPosterItem(layout)));
    container.replaceChildren(fragment);
    document.body.classList.add("ready");
}

document.getElementById("printA1Btn").addEventListener("click", () => {
    window.print();
});

window.addEventListener("load", buildA1Poster);
