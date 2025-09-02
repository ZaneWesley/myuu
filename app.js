const LINKS = [
  { name: "Academic Checkup", url: "https://outlook.office365.com/book/AcademicCheckup@myuu.onmicrosoft.com/", category: "Academics", icon: "fas fa-clipboard-check", tags: "checkup advising" },
  { name: "Academic Calendar", url: "https://www.uu.edu/academics/calendars/", category: "Academics", icon: "fas fa-calendar", tags: "calendar schedule dates" },
  { name: "Alumni", url: "https://www.uu.edu/alumni/", category: "Campus", icon: "fas fa-user-friends", tags: "graduates alumni" },
  { name: "Athletics", url: "https://uuathletics.com/", category: "Campus", icon: "fas fa-basketball-ball", tags: "sports games athletics" },
  { name: "Title IX", url: "https://www.uu.edu/studentlife/accountability/title-ix/", category: "Services", icon: "fas fa-balance-scale", tags: "safety accountability" },
  { name: "Campus Map", url: "https://www.uu.edu/jackson/map/", category: "Help", icon: "fas fa-map", tags: "map directions buildings" },
  { name: "Canvas", url: "https://uu.instructure.com/", category: "Academics", icon: "fas fa-book", tags: "learning courses" },
  { name: "Chapel Balance", url: "https://selfservice.uu.edu/Student/Account/SsoLogin?preserveSession=true&returnUrl=%2FStudent%2FStudent%2FUnion%2FChapelInformation", category: "Campus", icon: "fas fa-church", tags: "chapel attendance" },
  { name: "Change UU Password", url: "https://password.uu.edu/", category: "Help", icon: "fas fa-key", tags: "password security login" },
  { name: "Class Schedule & Roster", url: "https://selfservice.uu.edu/Student/Account/SsoLogin?preserveSession=true&returnUrl=%2FStudent%2FStudent%2FUnion%2FClassSchedule", category: "Academics", icon: "fas fa-list", tags: "schedule classes roster" },
  { name: "Cobo Menu", url: "https://www.fdmealplanner.com/#Union?fbclid=PAZXh0bgNhZW0CMTEAAac1-8B_p7eYva3KrcXZ_mZDk2yJx5xBwubQBeHbruqsPUK_VVQELemHX8s78A_aem_B2VUMcOkqs6wmLgRe8anBA", category: "Campus", icon: "fas fa-utensils", tags: "food cafeteria meals" },
  { name: "Counseling Services", url: "https://www.uu.edu/studentlife/counseling-services/", category: "Services", icon: "fas fa-comments", tags: "counseling mental health" },
  { name: "Degree Audit", url: "https://www.uu.edu/academics/advising/students/degree-audit.cfm", category: "Academics", icon: "fas fa-graduation-cap", tags: "degree audit advising" },
  { name: "Disability Services", url: "https://www.uu.edu/studentlife/disability-services/", category: "Services", icon: "fas fa-wheelchair", tags: "disability accessibility" },
  { name: "Download Microsoft 365", url: "https://www.uu.edu/it/SuccessStart/?type=office#Office", category: "Help", icon: "fab fa-microsoft", tags: "microsoft office download" },
  { name: "Financial Summary", url: "https://selfservice.uu.edu/Student/Account/SsoLogin?preserveSession=true&returnUrl=%2FStudent%2FFinance", category: "Campus", icon: "fas fa-dollar-sign", tags: "finance billing tuition" },
  { name: "Find Textbooks", url: "https://bookstore.uu.edu/textbooks", category: "Academics", icon: "fas fa-book-open", tags: "books bookstore" },
  { name: "Graduation Info", url: "https://www.uu.edu/events/graduation/", category: "Academics", icon: "fas fa-user-graduate", tags: "graduation commencement" },
  { name: "Get IT Help", url: "https://help.uu.edu/", category: "Help", icon: "fas fa-headset", tags: "support helpdesk" },
  { name: "Health Services", url: "https://www.uu.edu/studentlife/health-services/", category: "Services", icon: "fas fa-heartbeat", tags: "health clinic" },
  { name: "Library", url: "https://www.uu.edu/library/", category: "Academics", icon: "fas fa-university", tags: "library research study" },
  { name: "Meal Plan Balance", url: "https://idx.transactcampus.com/accounts/uu-edu/bulldogs/home", category: "Campus", icon: "fas fa-utensil-spoon", tags: "meal dining balance" },
  { name: "Microsoft Teams", url: "https://teams.microsoft.com/v2/", category: "Services", icon: "fab fa-microsoft", tags: "teams collaboration zoom" },
  { name: "Official Grades", url: "https://selfservice.uu.edu/Student/Student/Grades?preserveSession=true", category: "Academics", icon: "fas fa-graduation-cap", tags: "grades transcript" },
  { name: "Self Service Portal", url: "https://selfservice.uu.edu/", category: "Academics", icon: "fas fa-laptop", tags: "portal selfservice student" },
  { name: "Safety & Security", url: "https://www.uu.edu/studentlife/safety-security/", category: "Services", icon: "fas fa-shield-alt", tags: "safety security" },
  { name: "Setup Email", url: "https://www.uu.edu/it/SuccessStart/?type=email#Email", category: "Help", icon: "fas fa-envelope", tags: "email setup outlook" },
  { name: "Success Start", url: "https://www.uu.edu/it/SuccessStart/", category: "Help", icon: "fas fa-rocket", tags: "new student help success start" },
  { name: "Employee Directory", url: "https://www.uu.edu/employee/", category: "Campus", icon: "fas fa-address-book", tags: "directory staff" },
  { name: "Employee Timecard", url: "https://selfservice.uu.edu/Student/Account/SsoLogin?preserveSession=true&returnUrl=%2FStudent%2FTimeManagement%2FTimeSheet", category: "Campus", icon: "fas fa-clock", tags: "timecard work" },
  { name: "Res Life", url: "https://www.uu.edu/studentlife/residence-life/", category: "Campus", icon: "fas fa-home", tags: "residence housing" },
  { name: "UU Email", url: "https://outlook.office.com/owa/my.uu.edu/", category: "Services", icon: "fas fa-envelope", tags: "email outlook" },
  { name: "Verkada Pass App", url: "https://www.verkada.com/access-control/pass/", category: "Campus", icon: "fas fa-id-card", tags: "verkada access" },
  { name: "Vocatio Center", url: "https://www.uu.edu/studentlife/vocatio-center/", category: "Services", icon: "fas fa-briefcase", tags: "career vocatio" },
  { name: "Wellness Center", url: "https://www.uu.edu/studentlife/campus-recreation/wellness-center/", category: "Services", icon: "fas fa-dumbbell", tags: "fitness gym wellness" },
  { name: "Writing Center", url: "https://www.uu.edu/academics/writing-center/", category: "Academics", icon: "fas fa-pencil-alt", tags: "writing tutoring" },
  { name: "PawPrint", url: "https://printing.uu.edu/", category: "Services", icon: "fas fa-print", tags: "printing printer documents" },
  { name: "Library Study Room Booking", url: "https://uu.libcal.com/reserve/studyrooms", category: "Academics", icon: "fas fa-door-open", tags: "study rooms reserve booking library" },
  { name: "Bulldog Depot", url: "https://bookstore.uu.edu/", category: "Campus", icon: "fas fa-store", tags: "merch merchandise bookstore shop apparel" }
];

const linksGrid = document.getElementById("linksGrid");
const favoritesGrid = document.getElementById("favoritesGrid");
const searchInput = document.getElementById("search");
const tabs = document.querySelectorAll(".tab");

function loadData() {
  return JSON.parse(localStorage.getItem("my.uu") || "{}");
}
function saveData(data) {
  localStorage.setItem("my.uu", JSON.stringify(data));
}

let store = loadData();
let UUID = store.id || null;
let editMode = false;

function loadOrder(key) {
  return loadData()[key] || [];
}

function saveOrder(gridId, key) {
  const order = [...document.getElementById(gridId).children]
    .map(card => card.dataset.name)
    .filter(Boolean);
  store = loadData();
  store[key] = order;
  saveData(store);
}

function renderLinks(category = "All", query = "") {
  linksGrid.innerHTML = "";
  favoritesGrid.innerHTML = "";

  const favOrder = loadOrder("favoritesOrder");
  const linkOrder = loadOrder("linksOrder");
  const favSet = new Set(favOrder);

  // Favorites
  let favLinks = LINKS.filter(l => favSet.has(l.name));
  if (favOrder.length) {
    favLinks.sort((a, b) => favOrder.indexOf(a.name) - favOrder.indexOf(b.name));
  }
  favLinks.forEach(link => favoritesGrid.appendChild(createCard(link, true)));

  // Main links
  let filtered = LINKS.filter(link =>
    (category === "All" || link.category === category) &&
    (link.name.toLowerCase().includes(query) || link.tags.includes(query))
  );

  if (linkOrder.length) {
    filtered.sort((a, b) => linkOrder.indexOf(a.name) - linkOrder.indexOf(b.name));
  }

  filtered.forEach(link => {
    if (!favSet.has(link.name)) linksGrid.appendChild(createCard(link, false));
  });

  // Student ID card
  if (category !== "Favorites") {
    const idCard = document.createElement("div");
    idCard.className = "card idCard";
    idCard.innerHTML = `<i class="fas fa-id-card"></i><div>Student ID</div>`;
    idCard.onclick = handleId;
    linksGrid.prepend(idCard);
  }

  initSortable();
}

function createCard(link, isPinned) {
  const card = document.createElement("div");
  card.className = "card";
  card.dataset.name = link.name;

  card.innerHTML = `
    <i class="${link.icon}"></i>
    <div>${link.name}</div>
    ${editMode ? (isPinned 
        ? '<button class="unpin-btn"><i class="fa-light fa-circle-xmark"></i>'
        : '<button class="pin-btn"><i class="fa-solid fa-thumbtack"></i></button>')
      : ""}
  `;

  if (!editMode) card.onclick = () => window.open(link.url, "_blank");

  card.querySelector(".pin-btn")?.addEventListener("click", e => {
    e.stopPropagation(); pinCard(link.name);
  });
  card.querySelector(".unpin-btn")?.addEventListener("click", e => {
    e.stopPropagation(); unpinCard(link.name);
  });

  return card;
}

function pinCard(name) {
  let favOrder = loadOrder("favoritesOrder");
  let linkOrder = loadOrder("linksOrder").filter(n => n !== name);

  if (!favOrder.includes(name)) favOrder.push(name);

  store = loadData();
  Object.assign(store, { favoritesOrder: favOrder, linksOrder: linkOrder });
  saveData(store);

  rerenderWithAnimation(name, favoritesGrid, "pin");
}

function unpinCard(name) {
  let favOrder = loadOrder("favoritesOrder").filter(n => n !== name);
  let linkOrder = loadOrder("linksOrder");
  if (!linkOrder.includes(name)) linkOrder.unshift(name);

  store = loadData();
  Object.assign(store, { favoritesOrder: favOrder, linksOrder: linkOrder });
  saveData(store);

  rerenderWithAnimation(name, linksGrid, "unpin");
}

function rerenderWithAnimation(name, grid, animationClass) {
  const activeCategory = document.querySelector(".tab.active").dataset.category;
  renderLinks(activeCategory, searchInput.value.toLowerCase());
  grid.querySelector(`[data-name="${name}"]`)?.classList.add(animationClass);
}

function initSortable() {
  [favoritesGrid, linksGrid].forEach(grid => grid._sortable?.destroy());

  const baseOptions = {
    group: "links",
    animation: 150,
    ghostClass: "dragging",
    chosenClass: "chosen",
    dragClass: "dragging-real",
    disabled: !editMode,
    swapThreshold: 0.65,
    onEnd: () => {
      saveOrder("favoritesGrid", "favoritesOrder");
      saveOrder("linksGrid", "linksOrder");
      renderLinks(document.querySelector(".tab.active").dataset.category, searchInput.value.toLowerCase());
    }
  };

  favoritesGrid._sortable = new Sortable(favoritesGrid, { ...baseOptions, filter: ".unpin-btn" });
  linksGrid._sortable = new Sortable(linksGrid, { ...baseOptions, filter: ".idCard, .pin-btn" });
}

// Toggle edit mode
document.getElementById("editToggle").onclick = () => {
  editMode = !editMode;
  document.body.classList.toggle("edit", editMode);
  document.querySelector('#editToggle i').className = editMode
    ? "fa-regular fa-circle-check"
    : "fa-light fa-sliders-simple";
  [favoritesGrid._sortable, linksGrid._sortable].forEach(s => s?.option("disabled", !editMode));
  renderLinks(document.querySelector(".tab.active").dataset.category, searchInput.value.toLowerCase());
};

// Dark mode
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
function applyTheme(e) {
  const dark = e.matches;
  document.body.classList.toggle("dark", dark);
  ["#id-card img", "#signin img"].forEach(sel => {
    document.querySelector(sel).src = dark
      ? "https://www.uu.edu/styleguide/universitylogos/logos/University_Crest_2015/_Horizontal_Center/UU_Crest_Center_Color.svg"
      : "https://www.uu.edu/styleguide/universitylogos/logos/University_Crest_2015/_Horizontal_Center/UU_Crest_Center_Color_RGB.png";
  });
}
applyTheme(prefersDark);
prefersDark.addEventListener("change", applyTheme);

// ID card
function handleId() {
  if (UUID) {
    document.querySelector("#id-card .portrait").src = `https://www.uu.edu/bbidimages/photo.cfm?ID=${UUID}`;
    document.querySelector("#id-card .qr").src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${UUID}`;
    document.querySelector("#id-card p").innerText = UUID;
    document.querySelector("#id-card").showModal();
  } else {
    document.querySelector("#signin").showModal();
  }
}

document.querySelector('#signin button').onclick = () => {
  UUID = document.querySelector('#signin input').value.trim();
  if (UUID) {
    store = loadData();
    store.id = UUID;
    saveData(store);
  }
  document.querySelector("#signin").close();
};

document.querySelector('#id-card #logout').onclick = () => {
  store = loadData();
  store.id = "";
  saveData(store);
  location.reload();
};

// Tabs
tabs.forEach(tab => tab.onclick = () => {
  document.querySelector(".tab.active").classList.remove("active");
  tab.classList.add("active");
  renderLinks(tab.dataset.category, searchInput.value.toLowerCase());
});

// Search with debounce
let searchTimeout;
searchInput.addEventListener("input", () => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    renderLinks(document.querySelector(".tab.active").dataset.category, searchInput.value.toLowerCase());
  }, 200);
});

// Keyboard shortcuts
document.addEventListener("keydown", e => {
  if (e.key === "/") {
    e.preventDefault(); searchInput.focus();
  } else if (e.key === "Escape") {
    searchInput.value = "";
    renderLinks(document.querySelector(".tab.active").dataset.category, "");
  }
});

renderLinks();
