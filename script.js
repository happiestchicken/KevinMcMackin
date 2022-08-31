function CS50_appear() {    
    document.getElementById("CS50-display").style.display="flex";
    document.getElementById("CS50-display").style.flexDirection="row";
    document.getElementById("python-display").style.display="none"
}

function python_appear() {    
    document.getElementById("python-display").style.display="flex";
    document.getElementById("python-display").style.flexDirection="row";
    document.getElementById("CS50-display").style.display="none";

}

const sections = [...document.querySelectorAll("section")];

let options = {
  rootMargin: "0px",
  threshold: 0.75,
};

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    const { target } = entry;

    if (entry.intersectionRatio >= 0.75) {
      target.classList.add("is-visible");
    } else {
      target.classList.remove("is-visible");
    }
  });
};

const observer = new IntersectionObserver(callback, options);

sections.forEach((section, index) => {
  const sectionChildren = [...section.querySelector("[data-content]").children];

  sectionChildren.forEach((el, index) => {
    el.style.setProperty("--delay", `${index * 250}ms`);
  });

  observer.observe(section);
});