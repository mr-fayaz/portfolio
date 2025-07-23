// -------------------------- Tab Functionality --------------------------
const tablinks = document.querySelectorAll(".tab-links");
const tabcontents = document.querySelectorAll(".tab-contents");

function opentab(tabname) {
  tablinks.forEach((link) => link.classList.remove("active-link"));
  tabcontents.forEach((content) => content.classList.remove("active-tab"));

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname)?.classList.add("active-tab");
}

// -------------------------- Side Menu Toggle --------------------------
const sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}

// -------------------------- Section Observer for Active Menu --------------------------
const sections = document.querySelectorAll("section");
const menuLinks = document.querySelectorAll("#sidemenu .menu-link");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.id;
      const menuLink = document.querySelector(
        `#sidemenu .menu-link[href="#${id}"]`
      );

      if (entry.isIntersecting) {
        menuLinks.forEach((link) => link.classList.remove("active"));
        menuLink?.classList.add("active");
      }
    });
  },
  { threshold: 0.6 }
);

sections.forEach((section) => observer.observe(section));

// -------------------------- Dialog Functionality --------------------------
const works = document.querySelectorAll(".work");
const dialogBox = document.querySelector(".dialog-box");
const dialogImage = document.querySelector(".dialog img");
const closeBtn = document.querySelector(".dialog-close-box");
const overlay = document.querySelector(".dialog-overlay");

function openDialog(src) {
  dialogImage.setAttribute("src", src);
  dialogBox.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeDialog() {
  dialogBox.style.display = "none";
  document.body.style.overflow = "";
}

works.forEach((work) => {
  work.addEventListener("click", (e) => {
    e.preventDefault();

    const img = work.querySelector("img");
    if (img) {
      const src = img.dataset.src || img.src;
      openDialog(src);
    }
  });
});

closeBtn?.addEventListener("click", closeDialog);
overlay?.addEventListener("click", closeDialog);
