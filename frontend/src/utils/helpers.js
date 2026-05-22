export const truncateText = (text, maxLength) => {

  if (text.length <= maxLength) {
    return text;
  }

  return text.substring(0, maxLength) + "...";

};

export const formatCurrency = (amount) => {

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(amount);

};

export const scrollToSection = (id) => {

  const section = document.getElementById(id);

  if (section) {

    section.scrollIntoView({
      behavior: "smooth"
    });

  }

};

export const generateRandomId = () => {

  return Math.random().toString(36).substring(2, 10);

};