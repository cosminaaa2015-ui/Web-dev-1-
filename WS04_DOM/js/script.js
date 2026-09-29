// MUOKATAAN OTSIKKOA KUN NAPPIA PAINETAAN
// MUOKATAAN OTSIKKOA KUN NAPPIA PAINETAAN

const changeHeadingButton = document.querySelector("#changeHeadingButton");
const taskOneHeading = document.querySelector("#taskOneHeading");

changeHeadingButton.addEventListener("click", function () {
    taskOneHeading.textContent = "Muokattu otsikko!";
});

// -------------------------------------------------- EXAMPLE 1 ANIMAL TABLE
// -------------------------------------------------- EXAMPLE 1 ANIMAL TABLE

const animalButton = document.querySelector("#animalButton");
const animalTable = document.querySelector("#animalTable");

animalButton.addEventListener("click", function () {
    animalTable.hidden = !animalTable.hidden;
    console.log("nappia painettu!");

});

// -------------------------------------------------- EXAMPLE 3 LISTEN DROPDOWN SELECT
// -------------------------------------------------- EXAMPLE 3 LISTEN DROPDOWN SELECT

const animalSelect = document.querySelector("#animalSelect");
const animalName = document.querySelector("#animalName");
const animalImage = document.querySelector("#animalImage");
const animalDescription = document.querySelector("#animalDescription");

// listener for the select element from the drop down list.

animalSelect.addEventListener("change", function () {
    const selectedAnimal = animalSelect.value;

      // function to update the DOM based on the selected animal

      console.log("selected animal:", selectedAnimal);

      if (selectedAnimal === "tiger") {
        animalName.textContent = "Tiikeri";
        animalImage.src = "images/tiger.png";
        animalImage.alt = "Tämä on tiikeri";
        animalDescription.textContent = "Tiikerit ovat raidallisia ja melko rauhallisia eläimiä";

      }
      else if (selectedAnimal === "panda") {
    animalName.textContent = "Panda";
    animalImage.src = "images/panda.png";
    animalImage.alt = "Panda";
    animalDescription.textContent = "Pandas spend much of their day eating bamboo.";
      }
      else if (selectedAnimal === "penguin") {
    animalName.textContent = "Penguin";
    animalImage.src = "images/penguin.png";
    animalImage.alt = "Penguin";
    animalDescription.textContent = "Penguins are flightless birds that are excellent swimmers.";
      }
      else if (selectedAnimal === "elephant") {
    animalName.textContent = "Elephant";
    animalImage.src = "images/elephant.png";
    animalImage.alt = "Elephant";
    animalDescription.textContent = "Elephants are the world's largest land animals.";
      }
})
animalImage.addEventListener("mouseenter", function () {
    animalImage.classList.add("image-highlight");
});
animalImage.addEventListener("mouseleave", function () {
    animalImage.classList.remove("image-highlight");
});

// listener for the select element from the drop down list.
// function to update the DOM based on the selected animal

// -------------------------------------------------- EXAMPLE 4 CSS
// -------------------------------------------------- EXAMPLE 4 CSS

const heading = document.querySelector("#taskOneHeading");
const changeStyleButton = document.querySelector("#changeStyleButton");

changeStyleButton.addEventListener("click", function () {
    heading.classList.toggle("highlight");
});
const changeTextButton = document.querySelector("#changeTextButton");
const animalText = document.querySelector("#animalText");

changeTextButton.addEventListener("click", function () {
    animalText.textContent = "Elephants are intelligent and social animals.";
});
const animalContent = document.querySelector("#animalContent");
const animalHeading = document.createElement("h3");
animalHeading.textContent = "Animal of the Day";
animalHeading.classList.add("animal-heading");
const animalParagraph = document.createElement("p");
animalParagraph.textContent = "Pandas are peaceful animals that spend much of their day eating bamboo.";
const animalDayImage = document.createElement("img");
animalDayImage.src = "images/panda.png";
animalDayImage.alt = "Panda";
animalContent.append(animalHeading, animalParagraph, animalDayImage);
const hideAnimalButton = document.querySelector("#hideAnimalButton");

hideAnimalButton.addEventListener("click", function () {
    animalContent.style.display = "none";
});
const showAnimalButton = document.querySelector("#showAnimalButton");

showAnimalButton.addEventListener("click", function () {
    animalContent.style.display = "block";
});
const animalForm = document.querySelector("#animalForm");
const observationAnimal = document.querySelector("#observationAnimal");
const observationLocation = document.querySelector("#observationLocation");
const observationDate = document.querySelector("#observationDate");
const observationTableBody = document.querySelector("#observationTableBody");
animalForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const animal = observationAnimal.value;
const location = observationLocation.value;
const date = observationDate.value;

if (animal === "" || location === "" || date === "") {
    alert("Please fill in all fields.");
    return;
}
const newRow = document.createElement("tr");
const animalCell = document.createElement("td");
const locationCell = document.createElement("td");
const dateCell = document.createElement("td");

animalCell.textContent = animal;
locationCell.textContent = location;
dateCell.textContent = date;
newRow.append(animalCell, locationCell, dateCell);

const tableBody = document.querySelector("#observationTable tbody");
tableBody.append(newRow);
});