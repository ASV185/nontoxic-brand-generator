function generateBrand(event) {
  event.preventDefault();

  new Typewriter("#brands", {
    strings: "Attitude",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let brandFormElement = document.querySelector("#nontoxic-brand-generator-form");
brandFormElement.addEventListener("submit", generateBrand);
