function displayBrands(response) {
  new Typewriter("#brands", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateBrand(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "6a8co22f6f92bdd5a654001ta38ff409";
  let prompt = `Please generate nontoxic ${instructionsInput.value} brands.`;
  let context =
    "User instructions: You are a smart AI assistant please name a nontoxic product brand. Make sure to follow user instructions. The brands must be provided in HTML format. Example: <p>this is a brand</p>";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayBrands);
}

let brandFormElement = document.querySelector("#nontoxic-brand-generator-form");
brandFormElement.addEventListener("submit", generateBrand);
