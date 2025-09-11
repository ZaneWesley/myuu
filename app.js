const LINKS = [
  { name: "Academic Checkup", url: "https://outlook.office365.com/book/AcademicCheckup@myuu.onmicrosoft.com/", category: "Academics", icon: "fas fa-clipboard-check", tags: "checkup advising" },
  { name: "Academic Calendar", url: "https://www.uu.edu/academics/calendars/", category: "Academics", icon: "fas fa-calendar", tags: "calendar schedule dates" },
  { name: "Alumni", url: "https://www.uu.edu/alumni/", category: "Campus", icon: "fas fa-user-friends", tags: "graduates alumni" },
  { name: "Athletics", url: "https://uuathletics.com/", category: "Campus", icon: "fas fa-basketball-ball", tags: "sports games athletics" },
  { name: "Title IX", url: "https://www.uu.edu/studentlife/accountability/title-ix/", category: "Services", icon: "fas fa-balance-scale", tags: "safety accountability title 9" },
  { name: "Campus Map", url: "https://www.uu.edu/jackson/map/", category: "Help", icon: "fas fa-map", tags: "map directions buildings" },
  { name: "Camppus Rec App", url: "https://apps.apple.com/us/app/uu-campus-rec/id6749281547", category: "Campus", icon: "fas fa-running", tags: "fitness gym rec intermurals sports" },
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
  { name: "Student Forms", url: "https://myuu.sharepoint.com/sites/StudentHomesite", category: "Services", icon: "fas fa-file", tags: "forms documents microsoft sharepoint" },
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
let theme = store.theme || "system";

applyTheme(theme || "system");

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
  linksGrid.classList.add("grid");
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
  // if (category !== "Favorites") {
  //   const idCard = document.createElement("div");
  //   idCard.className = "card idCard";
  //   idCard.innerHTML = `<i class="fas fa-id-card"></i><div>Student ID</div>`;
  //   idCard.onclick = handleId;
  //   linksGrid.prepend(idCard);
  // }

  initSortable();
}

function renderCategorizedLinks() {
  linksGrid.innerHTML = "";
  linksGrid.classList.remove("grid");
  favoritesGrid.innerHTML = "";

  const favOrder = loadOrder("favoritesOrder");
  const favSet = new Set(favOrder);

  // Group links by category
  const categories = {};
  LINKS.forEach(link => {
    if (!categories[link.category]) categories[link.category] = [];
    categories[link.category].push(link);
  });

  Object.keys(categories).forEach(category => {
    // Category header
    const header = document.createElement("h3");
    header.textContent = category;
    linksGrid.appendChild(header);

    // Category grid
    const categoryGrid = document.createElement("div");
    categoryGrid.className = "grid";

    categories[category].forEach(link => {
      if (!favSet.has(link.name)) categoryGrid.appendChild(createCard(link, false));
    });

    linksGrid.appendChild(categoryGrid);
  });

  // Favorites
  if (favOrder.length) {
    let favLinks = LINKS.filter(l => favSet.has(l.name));
    favLinks.sort((a, b) => favOrder.indexOf(a.name) - favOrder.indexOf(b.name));
    favLinks.forEach(link => favoritesGrid.appendChild(createCard(link, true)));
  }

  // Student ID card (optional: include at top)
  // const idCard = document.createElement("div");
  // idCard.className = "card idCard";
  // idCard.innerHTML = `<i class="fas fa-id-card"></i><div>Student ID</div>`;
  // idCard.onclick = handleId;
  // linksGrid.prepend(idCard);

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
        ? '<button class="unpin-btn" aria-label="Unpin link"><i class="fa-light fa-circle-xmark"></i>'
        : '<button class="pin-btn" aria-label="Pin link"><i class="fa-solid fa-thumbtack"></i></button>')
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
    delay: 200,
    delayOnTouchOnly: true,
    touchStartThreshold: 5,
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

  favoritesGrid._sortable = new Sortable(favoritesGrid, { ...baseOptions });
  linksGrid._sortable = new Sortable(linksGrid, { ...baseOptions, filter: ".idCard" });
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

// Settings
document.getElementById("settings-btn").onclick = () => document.querySelector("#settings").showModal();

// ID card
document.querySelector('.idCard').onclick = handleId;
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

document.querySelector('#logout').onclick = () => {
  store = loadData();
  store.id = "";
  saveData(store);
  location.reload();
};

// Tabs
/*tabs.forEach(tab => tab.onclick = () => {
  document.querySelector(".tab.active").classList.remove("active");
  tab.classList.add("active");
  renderLinks(tab.dataset.category, searchInput.value.toLowerCase());
});*/
tabs.forEach(tab => tab.onclick = () => {
  document.querySelector(".tab.active").classList.remove("active");
  tab.classList.add("active");

  const view = tab.dataset.view;

  if (view === "search") {
    searchInput.value = "";
    var isActive = document.querySelector(".search-container").classList.toggle('active');
    var searchIcon = document.querySelector(".tab.active i");
    if (isActive) {
      searchIcon.classList.remove('fa-magnifying-glass');
      searchIcon.classList.add('fa-xmark');
      searchInput.focus();
    } else {
      searchIcon.classList.remove('fa-xmark');
      searchIcon.classList.add('fa-magnifying-glass');
      searchInput.blur();
      document.querySelector('.tab[data-view="grid"]').click();
    }
    //renderLinks("All"); // fallback to all links for search
  } else if (view === "grid") {
    renderLinks("All"); // show all links
  } else if (view === "categorized") {
    renderCategorizedLinks(); // render catoregorized view
  }
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

// Initial load
renderLinks();

// Tour
document.addEventListener("DOMContentLoaded", () => {
  if (!localStorage.getItem("my.uu-tour")) {
    introJs().setOptions({
      steps: [
        { element: 'header h1', intro: 'Welcome to My.UU!'},
        { element: '.tabs', intro: 'Use the bottom tabs to switch views or search.' },
        {element: '#editToggle', intro: 'Use this button to rearrange your links.'},
        {element: '.idCard', intro: 'Login and view your ID card.'},
        { element: '#favorites-section', intro: 'Here are your pinned favorites!' }
      ],
      showProgress: false,
      exitOnOverlayClick: false,
      nextLabel: 'Next',
      prevLabel: 'Back',
      skipLabel: '\u2715',
      doneLabel: 'Got it!'
    }).oncomplete(() => localStorage.setItem("my.uu-tour", "true"))
      .onexit(() => localStorage.setItem("my.uu-tour", "true"))
      .start();
  }
});

// Theme Handler
function applyTheme(newtheme) {
  if (newtheme === "system") {
    document.documentElement.removeAttribute("data-theme");
  } else {
    document.documentElement.setAttribute("data-theme", newtheme);
  }
  
  theme = newtheme;

  // Save theme in store
  store = loadData();
  store.theme = newtheme;
  saveData(store);
}

const themeSelect = document.getElementById("theme-select");
themeSelect.value = theme;
themeSelect.addEventListener("change", e => applyTheme(e.target.value));