
let remainingItems = [...ARCHIVE];
const stage = document.getElementById("stage");
const hint = document.getElementById("hint");
const panel = document.getElementById("panel");
const closeBtn = document.getElementById("closeBtn");
const archivePicker = document.getElementById("archivePicker");
const STAGE_WIDTH = 10000;
const STAGE_HEIGHT = 7000;
const POSTER_TITLE_GRAPHIC = "asset/poster-title.svg";
const POSTER_CATEGORY_TAB_GRAPHIC = "asset/poster-category-tab.svg";
const PRINT_WINDOW_FAVICON = "asset/fakekammer-favicon.svg";

const DISPLAY_TEXT = {
    category: {
        "Abandoned Hypothesis": "Abandoned Hypothesis",
        "Conceptual Form": "Conceptual Form",
        "Enigmatic Form": "Enigmatic Form",
        "Forgotten Legend": "Forgotten Legend",
        "Form of Illusion": "Form of Illusion",
        "Living Legend": "Living Legend",
        "Mythic Form": "Mythic Form",
        "Mythic Prototype": "Mythic Prototype",
        "Prototype of Verification": "Prototype of Verification",
        "Record of Failure": "Record of Failure",
        "Remembered Misbelief": "Remembered Misbelief",
        "Remnant of Lesson": "Remnant of Lesson",
        "Source of Curiosity": "Source of Curiosity",
        "Structure of Reference": "Structure of Reference",
        "Trace of Belief": "Trace of Belief"
    },
    realityMode: {
        realised_fake: "realised fake",
        spent_fake: "spent fake"
    },
    presentStatus: {
        cautionary_case: "cautionary case",
        cultual_icon: "cultual icon",
        discarded_fake: "discarded fake",
        theoretical_model: "theoretical model",
        unresolved_mystery: "unresolved mystery"
    },
    valueType: {
        aesthetic_value: "aesthetic value",
        conceptual_value: "conceptual value",
        educational_value: "educational value",
        folkloric_value: "folkloric value",
        historical_value: "historical value"
    },
    historicalStatus: {
        fictional: "fictional",
        forgery: "forgery",
        hoax: "hoax",
        undecidable: "undecidable"
    },
    medium: {},
    materialType: {},
    materialStrategy: {},
    scriptType: {},
    legibility: {},
    intendedFunction: {},
    targetAudience: {},
    impactScope: {},
    impactDomain: {},
    trustDevices: {},
    ambiguityStrategy: {}
};

function displayArchiveValue(field, value) {
    if (!value) return "";

    const map = DISPLAY_TEXT[field] || {};

    return String(value)
    .split(",")
    .map(part => part.trim())
    .filter(Boolean)
    .map(part => map[part] || part.replaceAll("_", " "))
    .join(", ");
}

const initialViewport = {
    x: Math.round((window.innerWidth - STAGE_WIDTH) / 2),
    y: Math.round((window.innerHeight - STAGE_HEIGHT) / 2)
};

let zCounter = 20;
const viewport = {
    x: initialViewport.x,
    y: initialViewport.y
};

document.getElementById("centerBtn").addEventListener("click", e => {
    e.stopPropagation();

    viewport.x = initialViewport.x;
    viewport.y = initialViewport.y;

    applyViewport();
    closePanel();
});

function applyViewport() {
    stage.style.transform = `translate(${viewport.x}px, ${viewport.y}px)`;
}

function screenToWorld(clientX, clientY) {
    return {
    x: clientX - viewport.x,
    y: clientY - viewport.y
    };
}

function clampViewport() {
    const minX = window.innerWidth - STAGE_WIDTH;
    const maxX = 0;

    const minY = window.innerHeight - STAGE_HEIGHT;
    const maxY = 0;

    viewport.x = Math.min(maxX, Math.max(minX, viewport.x));
    viewport.y = Math.min(maxY, Math.max(minY, viewport.y));
}

function panBy(dx, dy) {
    viewport.x -= dx;
    viewport.y -= dy;

    clampViewport();
    applyViewport();
    closePanel();
}

applyViewport();

function imageWithFallback(img, base) {
    const exts = [".jpg", ".png", ".jpeg", ".webp"];
    let index = 0;

    function tryNext() {
    if (index >= exts.length) return;
    img.src = base + exts[index];
    index++;
    }

    img.onerror = tryNext;
    tryNext();
}

function randomItem() {
    if (remainingItems.length === 0) {
    remainingItems = [...ARCHIVE];
    }

    const index = Math.floor(Math.random() * remainingItems.length);

    return remainingItems.splice(index, 1)[0];
}

function createArtifact(item = randomItem(), x = null, y = null) {
    if (hint) hint.classList.add("hidden");

    const el = document.createElement("article");
    el.className = "artifact";

    const size = 200 + Math.random() * 50;
    el.style.setProperty("--size", size + "px");

    const visibleTopLeft = screenToWorld(0, 0);
    const visibleBottomRight = screenToWorld(window.innerWidth, window.innerHeight);

    const px = x ?? Math.floor(
    visibleTopLeft.x + 120 + Math.random() * Math.max(240, visibleBottomRight.x - visibleTopLeft.x - 280)
    );

    const py = y ?? Math.floor(
    visibleTopLeft.y + 120 + Math.random() * Math.max(220, visibleBottomRight.y - visibleTopLeft.y - 260)
    );

    el.style.setProperty("--x", px + "px");
    el.style.setProperty("--y", py + "px");
    el.style.setProperty("--z", ++zCounter);
    el.dataset.id = item.id;
    el.__archiveItem = item;

    el.innerHTML = `
    <button class="delete" type="button" aria-label="remove artifact">×</button>
    <figure>
        <img alt="${escapeHtml(item.title)}" draggable="false" />
        <span class="artifact-id-badge">${String(item.id).padStart(2, "0")}</span>
        <figcaption></figcaption>
    </figure>
    `;

    const img = el.querySelector("img");

    imageWithFallback(img, item.assetBase);

    el.querySelector(".delete").addEventListener("click", e => {
    e.stopPropagation();
    el.remove();

    if (!stage.querySelector(".artifact")) {
        if (hint) hint.classList.remove("hidden");
    }
    });

    img.addEventListener("mouseenter", () => {
    if (el.dataset.dragged === "true") return;
    openPanel(item, img.currentSrc || img.src, img);
    });

    img.addEventListener("click", e => {
    e.stopPropagation();

    if (window.matchMedia("(hover: none)").matches) {
        if (archivePicker.classList.contains("has-detail") && archivePicker.dataset.id === String(item.id)) {
        closePanel();
        } else {
        openPanel(item, img.currentSrc || img.src, img);
        }

        archivePicker.dataset.id = String(item.id);
    }
    });

    el.addEventListener("pointerdown", e => {
    if (e.target.closest("button")) return;
    openPanel(item, img.currentSrc || img.src, img);
    });

    makeDraggable(el);

    el.addEventListener("mouseleave", () => {
    if (el.dataset.dragged === "true") return;
    closePanel();
    });

    stage.appendChild(el);

    return el;
}

function makeDraggable(el) {
    let startX;
    let startY;
    let baseX;
    let baseY;

    el.addEventListener("pointerdown", e => {
    if (e.target.closest("button")) return;

    el.setPointerCapture(e.pointerId);
    el.style.setProperty("--z", ++zCounter);
    el.dataset.dragged = "false";

    startX = e.clientX;
    startY = e.clientY;

    const style = getComputedStyle(el);

    baseX = parseFloat(style.getPropertyValue("--x")) || 0;
    baseY = parseFloat(style.getPropertyValue("--y")) || 0;
    });

    el.addEventListener("pointermove", e => {
    if (startX === undefined) return;

    const dx = e.clientX - startX;
    const dy = e.clientY - startY;

    if (Math.abs(dx) + Math.abs(dy) > 4) {
        el.dataset.dragged = "true";
    }

    el.style.setProperty("--x", baseX + dx + "px");
    el.style.setProperty("--y", baseY + dy + "px");
    });

    el.addEventListener("pointerup", e => {
    try {
        el.releasePointerCapture(e.pointerId);
    } catch (err) { }

    startX = undefined;
    startY = undefined;

    setTimeout(() => {
        el.dataset.dragged = "false";

        if (!el.matches(":hover")) closePanel();
    }, 80);
    });
}

function openPanel(item, imgSrc, anchor) {
    document.getElementById("pickerTitle").textContent = item.title || "Untitled object";
    document.getElementById("pickerId").textContent = "FAKE_" + String(item.id).padStart(2, "0");
    document.getElementById("pickerYear").textContent = item.year || "unknown";
    document.getElementById("pickerMode").textContent = displayArchiveValue("realityMode", item.realityMode) || "uncertain";
    document.getElementById("pickerStatus").textContent = displayArchiveValue("presentStatus", item.presentStatus) || "unverified";
    document.getElementById("pickerValue").textContent = displayArchiveValue("valueType", item.valueType) || "ambiguous";
    document.getElementById("pickerDesc").textContent = item.description || "No stable caption exists for this object.";

    archivePicker.classList.add("has-detail");
    archivePicker.dataset.id = String(item.id);
    document.body.classList.add("detail-open");
    document.getElementById("pickerDetail").setAttribute("aria-hidden", "false");
}

function positionPanel(anchor) {
    const gap = 12;
    const rect = anchor.getBoundingClientRect();
    const pw = Math.min(360, window.innerWidth - 32);

    panel.style.width = pw + "px";

    let left = rect.right + gap;
    let top = rect.top;

    if (left + pw + 16 > window.innerWidth) {
    left = rect.left - pw - gap;
    }

    if (left < 16) {
    left = 16;
    }

    panel.style.left = left + "px";
    panel.style.top = Math.max(16, top) + "px";
}

function fitCaptionToPanel() {
    const desc = document.getElementById("panelDesc");

    if (!desc || !panel.classList.contains("open")) return;

    let size = window.innerWidth < 760 ? 10.5 : 11;

    desc.style.setProperty("--caption-size", size + "px");
    panel.style.maxHeight = "none";

    const maxH = window.innerHeight - 32;

    let guard = 0;

    while (panel.offsetHeight > maxH && size > 7.5 && guard < 24) {
    size -= 0.35;
    desc.style.setProperty("--caption-size", size + "px");
    guard++;
    }

    const h = panel.offsetHeight;
    const currentTop = parseFloat(panel.style.top) || 16;

    if (currentTop + h + 16 > window.innerHeight) {
    panel.style.top = Math.max(16, window.innerHeight - h - 16) + "px";
    }
}

function closePanel() {
    panel.classList.remove("open");
    panel.setAttribute("aria-hidden", "true");
    archivePicker.classList.remove("has-detail");
    archivePicker.dataset.id = "";
    document.body.classList.remove("detail-open");
    document.getElementById("pickerDetail").setAttribute("aria-hidden", "true");
}

function escapeHtml(str) {
    return String(str).replace(/[&<>'"]/g, c => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;"
    }[c]));
}

async function saveCurrentView() {
    closePanel();

    const exportScale = Math.min(2, window.devicePixelRatio || 1);
    const capture = getCaptureBounds();

    const canvas = document.createElement("canvas");

    canvas.width = Math.round(capture.width * exportScale);
    canvas.height = Math.round(capture.height * exportScale);

    const ctx = canvas.getContext("2d");

    ctx.scale(exportScale, exportScale);

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, capture.width, capture.height);

    ctx.fillStyle = "rgba(0,0,0,.3)";

    const grid = 36;
    const dotSize = 0.8;

    const startX = (((viewport.x - capture.x) % grid) + grid) % grid;
    const startY = (((viewport.y - capture.y) % grid) + grid) % grid;

    for (let x = startX; x < capture.width; x += grid) {
    for (let y = startY; y < capture.height; y += grid) {
        ctx.beginPath();
        ctx.arc(x, y, dotSize, 0, Math.PI * 2);
        ctx.fill();
    }
    }

    ctx.save();

    ctx.font = "16px acid-green, sans-serif";
    ctx.fillStyle = "rgba(255,0,255,0.1)";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.rotate(-Math.PI / 10);

    const gapX = 150;
    const gapY = 70;

    let row = 0;

    for (let y = -capture.height; y < capture.height * 2; y += gapY) {
    const offsetX = row % 2 === 0 ? 0 : gapX / 2;

    for (let x = -capture.width; x < capture.width * 2; x += gapX) {
        ctx.fillText("Fakekammer", x + offsetX, y);
    }

    row++;
    }

    ctx.restore();

    const artifacts = [...document.querySelectorAll(".artifact")].sort((a, b) => {
    const za = Number(getComputedStyle(a).getPropertyValue("--z")) || 0;
    const zb = Number(getComputedStyle(b).getPropertyValue("--z")) || 0;

    return za - zb;
    });

    for (const el of artifacts) {
    const img = el.querySelector("img");

    if (!img || !img.complete || img.naturalWidth === 0) continue;

    const rect = img.getBoundingClientRect();

    if (
        rect.right < capture.x ||
        rect.bottom < capture.y ||
        rect.left > capture.x + capture.width ||
        rect.top > capture.y + capture.height
    ) {
        continue;
    }

    try {
        ctx.drawImage(img, rect.left - capture.x, rect.top - capture.y, rect.width, rect.height);
    } catch (err) {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(rect.left - capture.x, rect.top - capture.y, rect.width, rect.height);
        ctx.strokeStyle = "rgba(0,0,0,.3)";
        ctx.strokeRect(rect.left - capture.x, rect.top - capture.y, rect.width, rect.height);
    }
    }

    /* ctx.font = "10px ABCsolar, sans-serif";
    ctx.fillStyle = "rgba(0,0,0,0.5)";
    ctx.fillText("generated by fakekammer", 24, window.innerHeight - 24); */

    const link = document.createElement("a");

    link.download = "fakekammer-view.png";
    link.href = canvas.toDataURL("image/png");
    link.click(); 
}

function getCaptureBounds() {
    const pickerRect = archivePicker.getBoundingClientRect();
    const headerRect = document.querySelector(".site-header").getBoundingClientRect();
    const margin = 24;
    const leftEdge = Math.max(pickerRect.right, headerRect.right);
    const left = Math.min(window.innerWidth - 240, Math.max(0, leftEdge + 32));
    const top = margin;
    const right = Math.max(left + 240, window.innerWidth - margin);
    const bottom = Math.max(top + 240, window.innerHeight - margin);

    return {
    x: Math.round(left),
    y: Math.round(top),
    width: Math.round(right - left),
    height: Math.round(bottom - top)
    };
}

function getPosterArtifacts() {
    return [...document.querySelectorAll(".artifact")].map((el, index) => {
    const img = el.querySelector("img");
    const item = el.__archiveItem || ARCHIVE.find(entry => String(entry.id) === String(el.dataset.id));

    if (!img || !img.complete || img.naturalWidth === 0) return null;

    return {
        el,
        img,
        item,
        index,
        rect: img.getBoundingClientRect(),
        z: Number(getComputedStyle(el).getPropertyValue("--z")) || 0
    };
    }).filter(Boolean).sort((a, b) => a.z - b.z);
}

function getPosterCategoryText(artifact) {
    return artifact.item && artifact.item.category
    ? displayArchiveValue("category", artifact.item.category)
    : `CATEGORY ${String(artifact.index + 1).padStart(2, "0")}`;
}

function getPosterTabHeight(ctx, artifact, frameHeight, tabFontSize = 13) {
    const categoryText = getPosterCategoryText(artifact);
    ctx.save();
    ctx.font = `${tabFontSize}px ABCsolar, Apple SD Gothic Neo, sans-serif`;
    const categoryWidth = ctx.measureText(categoryText).width;
    ctx.restore();

    return Math.max(96, Math.min(frameHeight + 64, categoryWidth + 44));
}

function getPosterVisualBounds(artifacts, frame, tabWidth, tabFontSize) {
    const measureCanvas = document.createElement("canvas");
    const measureCtx = measureCanvas.getContext("2d");

    measureCtx.font = `${tabFontSize}px ABCsolar, Apple SD Gothic Neo, sans-serif`;

    const boxes = artifacts.map(artifact => {
    const { rect } = artifact;
    const frameHeight = rect.height + frame * 2;
    const tabHeight = getPosterTabHeight(measureCtx, artifact, frameHeight);

    return {
        left: rect.left - frame,
        top: rect.top - frame,
        right: rect.right + frame + tabWidth,
        bottom: Math.max(rect.bottom + frame, rect.top - frame + tabHeight)
    };
    });

    const left = Math.min(...boxes.map(box => box.left));
    const top = Math.min(...boxes.map(box => box.top));
    const right = Math.max(...boxes.map(box => box.right));
    const bottom = Math.max(...boxes.map(box => box.bottom));

    return { left, top, right, bottom, width: right - left, height: bottom - top };
}

function drawRoundedRect(ctx, x, y, width, height, radius) {
    const r = Math.min(radius, width / 2, height / 2);

    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + width - r, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + r);
    ctx.lineTo(x + width, y + height - r);
    ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
    ctx.lineTo(x + r, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
}

function drawPosterTab(ctx, x, y, width, height, radius, graphic) {
    if (graphic && graphic.naturalWidth && graphic.naturalHeight) {
    ctx.drawImage(graphic, x, y, width, height);
    return;
    }

    drawRoundedRect(ctx, x, y, width, height, radius);
    ctx.fill();
}

function drawPosterCategoryLabel(ctx, text, x, y, maxWidth, fontSize) {
    let size = fontSize;

    ctx.save();
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    do {
    ctx.font = `${size}px ABCsolar, Apple SD Gothic Neo, sans-serif`;
    if (ctx.measureText(text).width <= maxWidth || size <= 9) break;
    size -= 0.5;
    } while (size > 9);

    ctx.fillText(text, x, y);
    ctx.restore();
}

function drawPosterBackground(ctx, width, height) {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = "rgba(0,0,0,.28)";

    for (let x = 28; x < width; x += 36) {
    for (let y = 28; y < height; y += 36) {
        ctx.beginPath();
        ctx.arc(x, y, 0.8, 0, Math.PI * 2);
        ctx.fill();
    }
    }

    ctx.save();
    ctx.font = "16px ABCsolar, Apple SD Gothic Neo, sans-serif";
    ctx.fillStyle = "rgba(255,0,255,.1)";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.rotate(-Math.PI / 10);

    let watermarkRow = 0;

    for (let y = -height; y < height * 2; y += 72) {
    const offsetX = watermarkRow % 2 === 0 ? 0 : 78;

    for (let x = -width; x < width * 2; x += 156) {
        ctx.fillText("Fakekammer", x + offsetX, y);
    }

    watermarkRow++;
    }

    ctx.restore();
}

function loadPosterGraphic(src) {
    return new Promise(resolve => {
    const img = new Image();

    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = src;
    });
}

function fitContain(boxWidth, boxHeight, imageWidth, imageHeight) {
    const scale = Math.min(boxWidth / imageWidth, boxHeight / imageHeight);
    const width = imageWidth * scale;
    const height = imageHeight * scale;

    return {
    width,
    height,
    x: (boxWidth - width) / 2,
    y: (boxHeight - height) / 2
    };
}

function drawPosterTitleFallback(ctx, width, height, box) {
    const title = "Fakekammer";
    const subtitle = "A GENERATED WUNDERKAMMER OF DOUBTFUL OBJECTS";
    const x = box.x;
    const y = box.y + box.height - 46;

    ctx.save();
    ctx.font = "72px acid-green, ABCsolar, sans-serif";
    ctx.lineJoin = "round";
    ctx.lineWidth = 14;
    ctx.strokeStyle = "#ff00ff";
    ctx.fillStyle = "#ffffff";
    ctx.strokeText(title, x, y);
    ctx.fillText(title, x, y);

    ctx.font = "16px ABCsolar, Apple SD Gothic Neo, sans-serif";
    ctx.fontStretch = "normal";
    ctx.lineWidth = 5;
    ctx.strokeStyle = "#ff00ff";
    ctx.fillStyle = "#ffffff";
    ctx.strokeText(subtitle, x + 12, y + 34);
    ctx.fillText(subtitle, x + 12, y + 34);
    ctx.restore();
}

async function drawPosterTitle(ctx, width, height) {
    const box = {
    width: Math.min(420, Math.max(280, width * 0.32)),
    height: Math.min(126, Math.max(86, height * 0.13))
    };

    box.x = width - box.width - 56;
    box.y = height - box.height - 42;

    const svg = await loadPosterGraphic(POSTER_TITLE_GRAPHIC);

    if (!svg || !svg.naturalWidth || !svg.naturalHeight) {
    drawPosterTitleFallback(ctx, width, height, box);
    return;
    }

    const fitted = fitContain(box.width, box.height, svg.naturalWidth, svg.naturalHeight);

    ctx.drawImage(
    svg,
    box.x + fitted.x,
    box.y + fitted.y,
    fitted.width,
    fitted.height
    );
}

async function makePosterCanvas() {
    closePanel();

    const artifacts = getPosterArtifacts();

    if (artifacts.length === 0) return null;

    if (document.fonts && document.fonts.ready) {
    await document.fonts.ready;
    }

    const frame = 10;
    const tabWidth = 36;
    const tabFontSize = 12;
    const bounds = getPosterVisualBounds(artifacts, frame, tabWidth, tabFontSize);
    const posterSideMargin = Math.max(94, Math.round(Math.max(bounds.width, bounds.height) * 0.1));
    const posterTopMargin = Math.max(58, Math.round(Math.max(bounds.width, bounds.height) * 0.055));
    const posterBottomMargin = posterSideMargin;
    const posterWidth = Math.round(bounds.width + posterSideMargin * 2);
    const posterHeight = Math.round(bounds.height + posterTopMargin + posterBottomMargin);
    const exportScale = Math.min(2, window.devicePixelRatio || 1);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = Math.round(posterWidth * exportScale);
    canvas.height = Math.round(posterHeight * exportScale);
    ctx.scale(exportScale, exportScale);

    drawPosterBackground(ctx, posterWidth, posterHeight);

    const categoryTabGraphic = await loadPosterGraphic(POSTER_CATEGORY_TAB_GRAPHIC);

    const originX = posterSideMargin - bounds.left;
    const originY = posterTopMargin - bounds.top;
    const magenta = "#ff00ff";

    for (const artifact of artifacts) {
    const { img, rect } = artifact;
    const imageX = rect.left + originX;
    const imageY = rect.top + originY;
    const frameX = imageX - frame;
    const frameY = imageY - frame;
    const frameWidth = rect.width + frame * 2;
    const frameHeight = rect.height + frame * 2;
    const categoryText = getPosterCategoryText(artifact);

    const tabHeight = getPosterTabHeight(ctx, artifact, frameHeight, tabFontSize);

    ctx.fillStyle = magenta;
    ctx.fillRect(frameX, frameY, frameWidth, frameHeight);

    try {
        ctx.drawImage(img, imageX, imageY, rect.width, rect.height);
    } catch (err) {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(imageX, imageY, rect.width, rect.height);
    }

    ctx.fillStyle = magenta;
    drawPosterTab(ctx, frameX + frameWidth - 1, frameY, tabWidth, tabHeight, 16, categoryTabGraphic);

    ctx.save();
    ctx.translate(frameX + frameWidth + tabWidth / 2, frameY + tabHeight / 2);
    ctx.rotate(Math.PI / 2);
    drawPosterCategoryLabel(ctx, categoryText, 0, 0, tabHeight - 14, tabFontSize);
    ctx.restore();
    }

    ctx.strokeStyle = magenta;
    ctx.lineWidth = 12;
    ctx.strokeRect(17, 17, posterWidth - 34, posterHeight - 34);

    await drawPosterTitle(ctx, posterWidth, posterHeight);

    return canvas;
}

function downloadPosterFallback(canvas) {
    const link = document.createElement("a");

    link.download = "fakekammer-poster.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
}

function printPosterCanvas(canvas, printWindow) {
    const url = canvas.toDataURL("image/png");
    const faviconUrl = new URL(PRINT_WINDOW_FAVICON, window.location.href).href;
    const html = `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Fakekammer poster</title>
<link rel="icon" type="image/svg+xml" href="${faviconUrl}">
<style>
@page { margin: 0; }
html, body {
  margin: 0;
  width: 100%;
  min-height: 100%;
  background: #fff;
}
body {
  display: grid;
  place-items: center;
}
img {
  display: block;
  width: 100vw;
  height: auto;
  max-height: 100vh;
  object-fit: contain;
}
</style>
</head>
<body>
<img src="${url}" alt="Fakekammer poster">
<script>
const image = document.querySelector("img");
image.addEventListener("load", () => {
  window.focus();
  window.print();
});
<\/script>
</body>
</html>`;

    printWindow.document.open();
    printWindow.document.write(html);
    printWindow.document.close();
}

async function printPoster() {
    const printWindow = window.open("", "_blank");
    const canvas = await makePosterCanvas();

    if (!canvas) {
    if (printWindow) printWindow.close();
    alert("먼저 make image 버튼으로 이미지를 배치해 주세요.");
    return;
    }

    if (!printWindow) {
    downloadPosterFallback(canvas);
    return;
    }

    printPosterCanvas(canvas, printWindow);
}

document.getElementById("saveBtn").addEventListener("click", e => {
    e.stopPropagation();
    saveCurrentView();
});

document.getElementById("printPosterBtn").addEventListener("click", e => {
    e.stopPropagation();
    printPoster();
});

document.getElementById("clearBtn").addEventListener("click", e => {
    e.stopPropagation();

    document.querySelectorAll(".artifact").forEach(a => a.remove());

    closePanel();
    if (hint) hint.classList.remove("hidden");
});

document.getElementById("archivePicker").addEventListener("click", e => {
    e.stopPropagation();
});

document.getElementById("makeImageBtn").addEventListener("click", e => {
    e.stopPropagation();

    const center = screenToWorld(window.innerWidth * 0.62, window.innerHeight * 0.46);
    const offsetX = Math.floor((Math.random() - 0.5) * 260);
    const offsetY = Math.floor((Math.random() - 0.5) * 220);

    createArtifact(randomItem(), center.x + offsetX, center.y + offsetY);
});

closeBtn.addEventListener("click", closePanel);

panel.addEventListener("click", e => {
    if (e.target === panel) closePanel();
});

document.addEventListener("keydown", e => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "p") {
    e.preventDefault();
    printPoster();
    return;
    }

    if (e.key === "Escape") closePanel();
});

window.addEventListener("resize", () => {
    fitCaptionToPanel();
    applyViewport();
});

/* stage.addEventListener("click", e => {
    if (e.target !== stage && e.target !== hint) return;

    const p = screenToWorld(e.clientX, e.clientY);

    createArtifact(randomItem(), p.x - 50, p.y - 50);
}); */

window.addEventListener("wheel", e => {
    e.preventDefault();

    panBy(e.deltaX, e.deltaY);
}, { passive: false });

/* stage.addEventListener("click", () => {
    console.log("stage click");
}); */

window.addEventListener("load", () => {
    document.body.classList.add("ready");
});

const landing = document.getElementById("landing");
const landingBrandBlock = document.querySelector(".landing-brand-block");
const landingIntro = document.querySelector(".landing-intro");
const enterBtn = document.getElementById("enterBtn");
const guideBtn = document.getElementById("guideBtn");
const closeGuideBtn = document.getElementById("closeGuideBtn");
const landingGuide = document.getElementById("landingGuide");

landingBrandBlock.addEventListener("click", () => {
  landingIntro.classList.toggle("is-open");
});

enterBtn.addEventListener("click", () => {
  landing.classList.add("hidden");
});

guideBtn.addEventListener("click", () => {
  landingGuide.classList.toggle("is-hidden");
});

if (closeGuideBtn) {
  closeGuideBtn.addEventListener("click", () => {
    landingGuide.classList.add("is-hidden");
  });
}
