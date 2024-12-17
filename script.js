const tablinks = document.querySelectorAll(".tab-links");
const tabcontents = document.querySelectorAll(".tab-contents");
const sidemenu = document.getElementById("sidemenu");
const sections = document.querySelectorAll("section");
const menuLinks = document.querySelectorAll("#sidemenu .menu-link");

function opentab(tabname) {
  tablinks.forEach((tablink) => tablink.classList.remove("active-link"));
  tabcontents.forEach((tabcontent) =>
    tabcontent.classList.remove("active-tab")
  );

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}

// ------------------------------------- Function to handle intersection events ----------------------------------------

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.id;
      const menuLink = document.querySelector(
        `#sidemenu .menu-link[href="#${id}"]`
      );

      if (entry.isIntersecting) {
        menuLinks.forEach((link) => link.classList.remove("active"));
        menuLink.classList.add("active");
      }
    });
  },
  {
    threshold: 0.6, // Trigger when 60% of the section is visible
  }
);

// Observe each section
sections.forEach((section) => observer.observe(section));
