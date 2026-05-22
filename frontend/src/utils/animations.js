export const fadeIn = (element) => {

  element.style.opacity = 0;

  let opacity = 0;

  const interval = setInterval(() => {

    opacity += 0.1;

    element.style.opacity = opacity;

    if (opacity >= 1) {
      clearInterval(interval);
    }

  }, 50);

};

export const slideUp = (element) => {

  element.style.transform = "translateY(50px)";
  element.style.opacity = 0;

  setTimeout(() => {

    element.style.transition = "all 0.6s ease";

    element.style.transform = "translateY(0)";
    element.style.opacity = 1;

  }, 100);

};

export const zoomIn = (element) => {

  element.style.transform = "scale(0.5)";
  element.style.opacity = 0;

  setTimeout(() => {

    element.style.transition = "all 0.5s ease";

    element.style.transform = "scale(1)";
    element.style.opacity = 1;

  }, 100);

};