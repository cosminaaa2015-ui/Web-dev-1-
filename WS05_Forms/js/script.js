// WS05 student starter / opiskelijan aloituspohja
// Complete the TODOs. This file is intentionally unfinished.
// Täydennä TODO-kohdat. Tämä tiedosto on tarkoituksella keskeneräinen.

const animalForm = document.getElementById("animalForm");
const animalName = document.getElementById("animalName");
const animalSpecies = document.getElementById("animalSpecies");
const careNote = document.getElementById("careNote");
const nameError = document.getElementById("nameError");
const speciesError = document.getElementById("speciesError");
const noteError = document.getElementById("noteError");
const formResult = document.getElementById("formResult");

// Exercises 1 and 3 / Harjoitukset 1 ja 3
animalForm.addEventListener("submit", function (event) {
event.preventDefault();
nameError.textContent = "";
speciesError.textContent = "";
noteError.textContent = "";
const name = animalName.value.trim();
const species = animalSpecies.value.trim();
const note = careNote.value.trim();
    let isValid = true;
if (name === "") {
    nameError.textContent = "Please enter an animal name.";
    isValid = false;
}
   if (species === "") {
    speciesError.textContent = "Please enter an animal species.";
    isValid = false;
}
if (note.length === 0 || note.length > 150) {
    noteError.textContent = "Care note must contain 1–150 characters.";
    isValid = false;
}
if (!isValid) {
    return;
}
formResult.textContent = "Animal: " + name +
    " | Species: " + species +
    " | Care note: " + note;
const animal = {
    name: name,
    species: species,
    note: note
};
localStorage.setItem("ws05Animal", JSON.stringify(animal));
});

// Exercise 2 / Harjoitus 2
const sponsorForm = document.getElementById("sponsorForm");
const animalType = document.getElementById("animalType");
const yearsInput = document.getElementById("years");
const cost = document.getElementById("cost");
const discountMessage = document.getElementById("discountMessage");

sponsorForm.addEventListener("submit", function (event) {
    event.preventDefault();
const animal = Number(animalType.value);
const years = Number(yearsInput.value);
  if (!Number.isInteger(years) || years <= 0) {
    cost.textContent = "Please enter a positive whole number of years.";
    discountMessage.textContent = "";
    return;
}
let total = animal * years;
if (years > 2) {
    total = total * 0.8;
}
if (years >= 5) {
    total = total - 5;
}
cost.textContent = "Total: €" + total.toFixed(2);
if (years >= 5) {
    discountMessage.textContent = "20% discount + extra €5 discount applied!";
} else if (years > 2) {
    discountMessage.textContent = "20% discount applied!";
} else {
    discountMessage.textContent = "No discount applied.";
}
});

// Exercise 4 / Harjoitus 4
const loadButton = document.getElementById("loadAnimal");
const clearButton = document.getElementById("clearAnimal");
const savedAnimal = document.getElementById("savedAnimal");

function loadAnimal() {
const storedAnimal = localStorage.getItem("ws05Animal");
if (storedAnimal === null) {
    savedAnimal.textContent = "No saved animal found.";
    return;
}
const animal = JSON.parse(storedAnimal);
savedAnimal.textContent = "Animal: " + animal.name +
" | Species: " + animal.species +
" | Care note: " + animal.note;
    // TODO: Lue ws05Animal. Tarkista null ennen JSON.parse()-muunnosta.
    // TODO: Display name, species and note with textContent.
    // TODO: Näytä nimi, laji ja muistio textContent-ominaisuudella.
}

loadButton.addEventListener("click", loadAnimal);
clearButton.addEventListener("click", function () {
    localStorage.removeItem("ws05Animal");
    savedAnimal.textContent = "No saved animal found.";
});

loadAnimal();
