
let remainingItems = [...ARCHIVE];
const allArchiveItems = [...remainingItems];
const stage = document.getElementById("stage");
const hint = document.getElementById("hint");
const panel = document.getElementById("panel");
const closeBtn = document.getElementById("closeBtn");
const archivePicker = document.getElementById("archivePicker");
const STAGE_WIDTH = 10000;
const STAGE_HEIGHT = 7000;
const POSTER_TITLE_GRAPHIC = "asset/poster_title.svg";
const POSTER_CATEGORY_TAB_GRAPHIC = "asset/poster_category.svg";
const PRINT_WINDOW_FAVICON = "asset/poster_favicon.png";
const POSTER_CATEGORY_TAB_CROP = {
    x: 26.9,
    y: 21.3,
    width: 32.1,
    height: 126.4
};
const POSTER_TITLE_CROP = {
    x: 0,
    y: 0,
    width: 700,
    height: 200
};
const OPTION_FIELDS = [
    {
        key: "medium",
        label: "Medium",
        fields: ["medium", "Medium"],
        values: [
            "artifact_object",
            "digital",
            "imaginary_object",
            "machine",
            "manuscript",
            "map_diagram",
            "painting_drawing",
            "photograph_film",
            "printed_book"
        ]
    },
    {
        key: "trustDevices",
        label: "Trust device",
        fields: ["trustDevices", "trust_devices", "trust_device", "Trust_device"],
        values: [
            "aging_patina",
            "aging_petina",
            "cartographic_style",
            "encyclopedic_layout",
            "material_format",
            "official_letterhead",
            "provenance_docs",
            "sacred_aura",
            "scientific_format",
            "seal_stamp",
            "signature_handwriting",
            "visual_element",
            "visual_elements"
        ]
    },
    {
        key: "ambiguityStrategy",
        label: "Ambiguity strategy",
        fields: ["ambiguityStrategy", "ambiguity_strategy", "Ambiguity_strategy"],
        values: [
            "author_masking",
            "genre_blurring",
            "invent_missing_link",
            "mimic_existing_style",
            "overload_information",
            "partial_truth_mixing",
            "partitial_truth_mixing",
            "under_specify"
        ]
    }
];

const DISPLAY_TEXT = {
    category: {
        /* "Abandoned Hypothesis": "폐기의 가설",
        "Conceptual Form": "개념의 형상",
        "Enigmatic Form": "수수께끼의 형상",
        "Forgotten Legend": "망각의 전설",
        "Form of Illusion": "환영의 형상",
        "Living Legend": "살아있는 전설",
        "Mythic Form": "신화적 형상",
        "Mythic Prototype": "신화의 원형",
        "Prototype of Verification": "검증의 원형",
        "Record of Failure": "실패의 기록",
        "Remembered Misbelief": "기억된 오해",
        "Remnant of Lesson": "교훈의 잔재",
        "Source of Curiosity": "호기심의 원천",
        "Structure of Reference": "참조의 구조",
        "Trace of Belief": "믿음의 흔적" */

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
        realised_fake: "진짜가 된 가짜",
        spent_fake: "가짜로 남은 가짜"
    },
    presentStatus: {
        cautionary_case: "경고의 사례",
        cultual_icon: "문화의 상징",
        cultural_icon: "문화의 상징",
        discarded_fake: "사라진 가짜",
        theoretical_model: "이론적 모델",
        unresolved_mystery: "열린 미스터리"
    },
    valueType: {
        aesthetic_value: "미적 가치",
        conceptual_value: "개념적 가치",
        educational_value: "교육적 가치",
        folkloric_value: "민속적 가치",
        historical_value: "역사적 가치"
    },
    historicalStatus: {
        fictional: "허구",
        forgery: "위조",
        hoax: "사기",
        undecidable: "미결"
    },
    medium: {
        manuscript:"필사본",
        printed_book:"인쇄물",
        map_diagram:"지도 및 도표",
        artifact_object:"유물 및 오브제",
        painting_drawing:"회화 및 드로잉",
        photograph_film:"사진 및 영상",
        digital:"디지털",
        imaginary_object:"상상 속 오브제",
        machine:"기계"
    },
    materialType: {
        parchment:"양피지",
        paper:"종이",
        stone:"석재",
        bone:"뼈",
        metal:"금속",
        resin:"레진",
        plastic:"플라스틱",
        digital_only:"없음",
        clay:"점토",
        film:"필름",
        jewel:"보석",
        none:"없음",
        wood:"목재"
    },
    materialStrategy: {
        reused_old_material:"오래된 재료 활용",
        similar_substitute:"유사 재료 활용",
        artificial_aging:"인위적 노화",
        hybrid_composite:"복합적 조합",
        none:"없음"
    },
    scriptType: {
        natural_language:"실제 언어",
        pseudo_script:"유사 문자",
        invented_language:"인공 언어",
        asemic:"비의미 문자",
        decorative_only:"장식 문자",
        none:"없음"
    },
    legibility: {
        readable:"해독 가능",
        contested:"해독 논쟁 중",
        unreadable:"해독 불가",
        none:"없음"
    },
    intendedFunction: {
        religious_legitimacy:"종교적 정당화",
        political_propaganda:"정치적 선전",
        scientific_evidence:"과학적 증거 제시",
        literary_entertainment:"문학적 유희",
        market_fraud:"시장 사기",
        artistic_experiment:"예술적 실험",
        identity_myth:"정체성 신화",
        research_fabrication:"연구 조작",
        recognition_seeking:"인정 추구",
        media_literacy:"미디어 리터러시",
        parody:"패러디",
        "playful intent":"유희적 의도",
        playful_intent:"유희적 의도",
        unknown:"미상"
    },
    targetAudience: {
        scholars:"학자 및 연구자",
        believers:"성직자 및 신자",
        general_public:"일반 대중",
        collectors:"수집가 및 박물관",
        institutions:"제도 및 기관",
        unknown:"미상"
    },
    impactScope: {
        none:"영향 없음",
        symbolic:"상징적 영향",
        institutional:"제도적 영향",
        violent:"폭력적 영향"
    },
    impactDomain: {
        religious:"종교",
        scientific:"과학",
        political:"정치",
        cultural:"문화",
        economic:"경제"
    },
    trustDevices: {
        official_letterhead:"공식 문서 양식",
        seal_stamp:"인장 및 직인",
        signature_handwriting:"자필 서명",
        aging_patina:"세월의 흔적",
        provenance_docs:"문서 및 보증서",
        sacred_aura:"성스러운 분위기",
        material_format:"물질적 형식",
        scientific_format:"과학적 형식",
        cartographic_style:"지도 및 도식화",
        encyclopedic_layout:"도감 및 백과사전",
        aging_petina:"세월의 흔적",
        visual_element:"시각적 요소",
        visual_elements:"시각적 요소"
    },
    ambiguityStrategy: {
        mimic_existing_style:"기존 양식 모방",
        invent_missing_link:"잃어버린 연결고리 창작",
        overload_information:"정보 과잉",
        under_specify:"의도적 모호성",
        genre_blurring:"장르 혼합",
        author_masking:"저자 위장",
        partial_truth_mixing:"사실과 허구의 혼합",
        partitial_truth_mixing:"사실과 허구의 혼합"
    }
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

function splitArchiveValues(value) {
    return String(value || "")
    .split(",")
    .map(part => part.trim())
    .filter(Boolean);
}

const OPTION_VALUE_ALIASES = {
    aging_petina: "aging_patina",
    visual_elements: "visual_element",
    partitial_truth_mixing: "partial_truth_mixing"
};

function normalizeOptionValue(value) {
    return OPTION_VALUE_ALIASES[value] || value;
}

function getOptionValues(field) {
    const definition = OPTION_FIELDS.find(option => option.key === field);
    const values = new Set();

    (definition?.values || []).forEach(value => values.add(normalizeOptionValue(value)));
    Object.keys(DISPLAY_TEXT[field] || {}).forEach(value => values.add(normalizeOptionValue(value)));

    allArchiveItems.forEach(item => {
    getItemFieldValues(item, field).forEach(value => values.add(normalizeOptionValue(value)));
    });

    return [...values].sort((a, b) => displayArchiveValue(field, a).localeCompare(displayArchiveValue(field, b), "ko"));
}

function getItemFieldValues(item, field) {
    const definition = OPTION_FIELDS.find(option => option.key === field);
    const fields = definition?.fields || [field];

    return fields.flatMap(key => splitArchiveValues(item[key]));
}

function getSelectedOptions() {
    return OPTION_FIELDS.reduce((selected, field) => {
    const checked = document.querySelector(`input[name="${field.key}"]:checked`);

    if (checked) selected[field.key] = checked.value;

    return selected;
    }, {});
}

function isOptionSelectionComplete() {
    const selected = getSelectedOptions();

    return OPTION_FIELDS.every(field => selected[field.key]);
}

function updateMakeImageState() {
    const makeImageBtn = document.getElementById("makeImageBtn");

    makeImageBtn.disabled = !isOptionSelectionComplete();
}

function itemMatchesOptions(item, selected) {
    return OPTION_FIELDS.every(field => {
    const selectedValue = normalizeOptionValue(selected[field.key]);
    const itemValues = getItemFieldValues(item, field.key).map(normalizeOptionValue);

    return itemValues.includes(selectedValue);
    });
}

function optionMatchScore(item, selected) {
    return OPTION_FIELDS.reduce((score, field) => {
    const selectedValue = normalizeOptionValue(selected[field.key]);
    const itemValues = getItemFieldValues(item, field.key).map(normalizeOptionValue);

    return score + (itemValues.includes(selectedValue) ? 1 : 0);
    }, 0);
}

function selectedOptionItem() {
    const selected = getSelectedOptions();

    if (!isOptionSelectionComplete()) return null;

    const placedIds = getPlacedItemIds();
    const matches = allArchiveItems.filter(item => itemMatchesOptions(item, selected));
    const unplacedMatches = matches.filter(item => !placedIds.has(String(item.id)));

    if (unplacedMatches.length > 0) {
    return unplacedMatches[Math.floor(Math.random() * unplacedMatches.length)];
    }

    if (matches.length > 0) {
    return null;
    }

    const scoredMatches = allArchiveItems
    .map(item => ({ item, score: optionMatchScore(item, selected) }))
    .filter(match => !placedIds.has(String(match.item.id)))
    .filter(match => match.score > 0)
    .sort((a, b) => b.score - a.score);

    if (scoredMatches.length === 0) return null;

    const bestScore = scoredMatches[0].score;
    const closestMatches = scoredMatches
    .filter(match => match.score === bestScore)
    .map(match => match.item);

    return closestMatches[Math.floor(Math.random() * closestMatches.length)];
}

function buildImageMakerOptions() {
    const form = document.getElementById("imageMakerOptions");

    if (!form) return;

    if (form.querySelector("input")) {
    form.addEventListener("change", updateMakeImageState);
    updateMakeImageState();
    return;
    }

    form.innerHTML = OPTION_FIELDS.map(field => {
    const options = getOptionValues(field).map(value => {
        const id = `${field.key}-${value.replace(/[^a-z0-9]+/gi, "-")}`;
        const label = displayArchiveValue(field.key, value);

        return `
        <label class="image-option" for="${escapeHtml(id)}">
            <input id="${escapeHtml(id)}" type="radio" name="${escapeHtml(field.key)}" value="${escapeHtml(value)}">
            <span>${escapeHtml(label)}</span>
        </label>
        `;
    }).join("");

    return `
    <fieldset class="image-option-group">
        <legend>${escapeHtml(field.label)}</legend>
        <div class="image-option-list">${options}</div>
    </fieldset>
    `;
    }).join("");

    form.addEventListener("change", updateMakeImageState);
    updateMakeImageState();
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
    const placedIds = getPlacedItemIds();
    const availableItems = allArchiveItems.filter(item => !placedIds.has(String(item.id)));

    if (availableItems.length === 0) return null;

    remainingItems = remainingItems.filter(item => !placedIds.has(String(item.id)));

    if (remainingItems.length === 0) {
    remainingItems = [...availableItems];
    }
    const index = Math.floor(Math.random() * remainingItems.length);

    return remainingItems.splice(index, 1)[0];
}

function getPlacedItemIds() {
    return new Set(
    [...document.querySelectorAll(".artifact")]
        .map(el => el.dataset.id)
        .filter(Boolean)
    );
}

function createArtifact(item = randomItem(), x = null, y = null) {
    if (!item) return null;

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
    document.getElementById("pickerKrTitle").textContent = item.krTitle || item.title || "제목 없음";
    document.getElementById("pickerEnTitle").textContent = item.enTitle || item.title || "Untitled object";
    document.getElementById("pickerYear").textContent = item.year || "unknown";
    document.getElementById("pickerHistorical").textContent = displayArchiveValue("historicalStatus", item.historicalStatus) || "undecidable";
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

    return Math.min(frameHeight, Math.max(84, categoryWidth + 34));
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

    const r = Math.min(radius, width / 2, height / 2);

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + width - r, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + r);
    ctx.lineTo(x + width, y + height - r);
    ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
    ctx.lineTo(x, y + height);
    ctx.closePath();
    ctx.fill();
}

function splitPosterCategoryText(text) {
    const words = String(text).split(/\s+/).filter(Boolean);

    if (words.length < 2) return [String(text)];

    let best = [String(text)];
    let bestDiff = Infinity;

    for (let index = 1; index < words.length; index++) {
    const left = words.slice(0, index).join(" ");
    const right = words.slice(index).join(" ");
    const diff = Math.abs(left.length - right.length);

    if (diff < bestDiff) {
        best = [left, right];
        bestDiff = diff;
    }
    }

    return best;
}

function drawPosterCategoryLabel(ctx, text, x, y, maxWidth, fontSize) {
    let size = fontSize;
    const minSize = 5.5;

    ctx.save();
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    function setFont() {
    ctx.font = `${size}px ABCsolar, Apple SD Gothic Neo, sans-serif`;
    }

    setFont();

    while (ctx.measureText(text).width > maxWidth && size > minSize) {
    size -= 0.5;
    setFont();
    }

    const widest = ctx.measureText(text).width;
    const scaleX = widest > maxWidth ? maxWidth / widest : 1;

    ctx.translate(x, y);
    ctx.scale(scaleX, 1);
    ctx.fillText(text, 0, 0);

    ctx.restore();
}

function drawPosterIdBadge(ctx, artifact, x, y) {
    const idText = String(artifact.item?.id ?? artifact.index + 1).padStart(2, "0");
    const radius = 13;

    ctx.save();
    ctx.fillStyle = "#ff00ff";
    ctx.beginPath();
    ctx.arc(x + radius, y + radius, radius, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#ffffff";
    ctx.font = "600 11px ABCsolar, Apple SD Gothic Neo, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(idText, x + radius, y + radius + 0.5);
    ctx.restore();
}

function drawPosterBackground(ctx, width, height, frameInset) {
    ctx.fillStyle = "#ff00ff";
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(frameInset, frameInset, width - frameInset * 2, height - frameInset * 2);

    ctx.save();
    ctx.beginPath();
    ctx.rect(frameInset, frameInset, width - frameInset * 2, height - frameInset * 2);
    ctx.clip();

    ctx.fillStyle = "rgba(0,0,0,.28)";

    for (let x = frameInset + 20; x < width - frameInset; x += 36) {
    for (let y = frameInset + 20; y < height - frameInset; y += 36) {
        ctx.beginPath();
        ctx.arc(x, y, 0.8, 0, Math.PI * 2);
        ctx.fill();
    }
    }

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

async function loadPosterCategoryGraphic() {
    try {
    const response = await fetch(POSTER_CATEGORY_TAB_GRAPHIC);

    if (!response.ok) {
        return loadPosterGraphic(POSTER_CATEGORY_TAB_GRAPHIC);
    }

    const svgText = await response.text();
    const croppedSvg = svgText.replace(
        /viewBox="[^"]+"/,
        `viewBox="${POSTER_CATEGORY_TAB_CROP.x} ${POSTER_CATEGORY_TAB_CROP.y} ${POSTER_CATEGORY_TAB_CROP.width} ${POSTER_CATEGORY_TAB_CROP.height}"`
    );
    const blob = new Blob([croppedSvg], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const graphic = await loadPosterGraphic(url);

    URL.revokeObjectURL(url);
    return graphic;
    } catch (err) {
    return loadPosterGraphic(POSTER_CATEGORY_TAB_GRAPHIC);
    }
}

async function loadPosterTitleGraphic() {
    try {
    const response = await fetch(POSTER_TITLE_GRAPHIC);

    if (!response.ok) {
        return loadPosterGraphic(POSTER_TITLE_GRAPHIC);
    }

    const svgText = await response.text();
    const blob = new Blob([svgText], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const graphic = await loadPosterGraphic(url);

    URL.revokeObjectURL(url);
    return graphic;
    } catch (err) {
    return loadPosterGraphic(POSTER_TITLE_GRAPHIC);
    }
}

async function getAssetDataUrl(src) {
    try {
    const response = await fetch(src);

    if (!response.ok) {
        return new URL(src, window.location.href).href;
    }

    const blob = await response.blob();

    return await new Promise(resolve => {
        const reader = new FileReader();

        reader.onload = () => resolve(reader.result);
        reader.onerror = () => resolve(new URL(src, window.location.href).href);
        reader.readAsDataURL(blob);
    });
    } catch (err) {
    return new URL(src, window.location.href).href;
    }
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

async function drawPosterTitle(ctx, width, height, frameInset) {
    const cropRatio = POSTER_TITLE_CROP.height / POSTER_TITLE_CROP.width;
    const titleWidth = Math.min(605, Math.max(403, width * 0.46));
    const box = {
    width: titleWidth,
    height: titleWidth * cropRatio
    };

    box.x = width - frameInset - box.width;
    box.y = height - frameInset - box.height;

    const svg = await loadPosterTitleGraphic();

    if (!svg || !svg.naturalWidth || !svg.naturalHeight) {
    drawPosterTitleFallback(ctx, width, height, box);
    return;
    }

    ctx.drawImage(
    svg,
    box.x,
    box.y,
    box.width,
    box.height
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
    const tabWidth = 34;
    const tabFontSize = 10;
    const bounds = getPosterVisualBounds(artifacts, frame, tabWidth, tabFontSize);
    const posterSideMargin = Math.max(94, Math.round(Math.max(bounds.width, bounds.height) * 0.1));
    const posterTopMargin = Math.max(58, Math.round(Math.max(bounds.width, bounds.height) * 0.055));
    const posterBottomMargin = Math.max(posterSideMargin, 190);
    const posterWidth = Math.round(bounds.width + posterSideMargin * 2);
    const posterHeight = Math.round(bounds.height + posterTopMargin + posterBottomMargin);
    const posterFrameInset = 18;
    const exportScale = Math.min(2, window.devicePixelRatio || 1);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = Math.round(posterWidth * exportScale);
    canvas.height = Math.round(posterHeight * exportScale);
    ctx.scale(exportScale, exportScale);

    drawPosterBackground(ctx, posterWidth, posterHeight, posterFrameInset);

    const categoryTabGraphic = null;

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

    drawPosterIdBadge(ctx, artifact, imageX + 8, imageY + 8);

    ctx.fillStyle = magenta;
    drawPosterTab(ctx, frameX + frameWidth - 1, frameY, tabWidth, tabHeight, 13, categoryTabGraphic);

    ctx.save();
    ctx.translate(frameX + frameWidth + tabWidth * 0.34, frameY + tabHeight / 2);
    ctx.rotate(Math.PI / 2);
    drawPosterCategoryLabel(ctx, categoryText, 0, 0, tabHeight - 18, tabFontSize);
    ctx.restore();
    }

    ctx.strokeStyle = magenta;
    ctx.lineWidth = 8;
    ctx.strokeRect(posterFrameInset, posterFrameInset, posterWidth - posterFrameInset * 2, posterHeight - posterFrameInset * 2);

    await drawPosterTitle(ctx, posterWidth, posterHeight, posterFrameInset);

    return canvas;
}

function downloadPosterFallback(canvas) {
    const link = document.createElement("a");

    link.download = "fakekammer-poster.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
}

async function printPosterCanvas(canvas, printWindow) {
    const url = canvas.toDataURL("image/png");
    const faviconUrl = await getAssetDataUrl(PRINT_WINDOW_FAVICON);
    const html = `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Fakekammer poster</title>
<link rel="icon" type="image/png" sizes="32x32" href="${faviconUrl}">
<link rel="shortcut icon" type="image/png" href="${faviconUrl}">
<link rel="apple-touch-icon" href="${faviconUrl}">
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

    const pageUrl = URL.createObjectURL(new Blob([html], { type: "text/html" }));

    printWindow.location.replace(pageUrl);
    setTimeout(() => URL.revokeObjectURL(pageUrl), 60000);
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

    await printPosterCanvas(canvas, printWindow);
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

    if (!isOptionSelectionComplete()) return;

    const item = selectedOptionItem();

    if (!item) {
    alert("선택한 조건에 맞는 새 이미지가 없습니다.");
    return;
    }

    const center = screenToWorld(window.innerWidth * 0.62, window.innerHeight * 0.46);
    const offsetX = Math.floor((Math.random() - 0.5) * 260);
    const offsetY = Math.floor((Math.random() - 0.5) * 220);

    createArtifact(item, center.x + offsetX, center.y + offsetY);
});

document.getElementById("randomImageBtn").addEventListener("click", e => {
    e.stopPropagation();

    const item = randomItem();

    if (!item) {
    alert("더 이상 새로 배치할 이미지가 없습니다.");
    return;
    }

    const center = screenToWorld(window.innerWidth * 0.62, window.innerHeight * 0.46);
    const offsetX = Math.floor((Math.random() - 0.5) * 260);
    const offsetY = Math.floor((Math.random() - 0.5) * 220);

    createArtifact(item, center.x + offsetX, center.y + offsetY);
});

buildImageMakerOptions();

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
const mainBrand = document.querySelector(".brand");
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

if (mainBrand) mainBrand.addEventListener("click", () => {
  closePanel();
  landing.classList.remove("hidden");
  landingGuide.classList.add("is-hidden");
});

guideBtn.addEventListener("click", () => {
  landingGuide.classList.toggle("is-hidden");
});

if (closeGuideBtn) {
  closeGuideBtn.addEventListener("click", () => {
    landingGuide.classList.add("is-hidden");
  });
}
