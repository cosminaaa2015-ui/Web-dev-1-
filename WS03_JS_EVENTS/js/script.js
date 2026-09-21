function showTable() {
    let animal = "Horse";
    let habitat = "Grassland";
    let diet = "Herbivore";
    let table = `
    <table>
        <tr>
            <th>Animal</th>
            <th>Habitat</th>
            <th>Diet</th>
        </tr>
        <tr>
            <td>${animal}</td>
            <td>${habitat}</td>
            <td>${diet}</td>
        </tr>
    </table>
`;
let container = document.querySelector("#tableContainer");
container.innerHTML = table;
}
let headings = document.querySelectorAll("h2");

headings[1].addEventListener("mouseover", function() {
    console.log("Stepped over me with a mouse!");
});
headings[0].addEventListener("click", function() {
    headings[0].style.color = "red";
    headings[0].innerHTML = "Bye bye mouse!";
});
let feedback = document.querySelector("#feedback");
let status = document.querySelector("#status");
feedback.addEventListener("focus", function() {
    status.innerHTML = "Start typing your feedback!";
});
feedback.addEventListener("blur", function() {
    status.innerHTML = "";
});
let charcount = document.querySelector("#charcount");
let preview = document.querySelector("#preview");
feedback.addEventListener("input", function() {
    charcount.innerHTML = feedback.value.length + "/200";
    preview.innerHTML = feedback.value;
});
let feedbackForm = document.querySelector("#feedbackForm");
feedbackForm.addEventListener("submit", function(event) {
    event.preventDefault();
let length = feedback.value.length;
if (length < 10 || length > 200) {
    status.innerHTML = "Feedback must be between 10 and 200 characters.";
}
else {
    feedback.value = "";
    charcount.innerHTML = "0/200";
    preview.innerHTML = "(The preview will appear here)";
    status.innerHTML = "Thank you for your feedback!";
}
});
let keybox = document.querySelector("#keybox");
let keyinfo = document.querySelector("#keyinfo");
let keyCount = 0;
document.addEventListener("keydown", function(event) {
    console.log(event);
    keyCount++;
    keyinfo.innerHTML = "Key: " + event.key + " | Code: " + event.code + " | Key presses: " + keyCount;
    keybox.innerHTML = event.key;
    keybox.style.fontSize = "2em";
});