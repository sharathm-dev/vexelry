export const scrollToTop = () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

};

export const scrollToElement = (elementId) => {

  const element = document.getElementById(elementId);

  if (element) {

    element.scrollIntoView({
      behavior: "smooth"
    });

  }

};

export const navbarScrollEffect = () => {

  window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

      navbar.style.background = "#0a0f1e";
      navbar.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";

    } else {

      navbar.style.background = "#0f1628";
      navbar.style.boxShadow = "none";

    }

  });

};