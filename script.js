// example of targeting an HTML element by its ID and modifying it with JS
const id_example = document.getElementById("h1-example");
// another solution using querySelector instead of getElementByID: const id_example = document.querySelector("#h1-example");
id_example.innerHTML = id_example.innerHTML + ", but because of JS the font color is now blue.";
id_example.style.color = "blue";

// example of targeting an HTML element by its class and modifying it with JS
const div_example = document.querySelector(".div-example");
let myString = " THIS is text that I infused into the div with the help of JavaScript."
div_example.innerHTML = div_example.innerHTML + myString; // you can add string to an HTML element's innerHTML

// example of targeting an HTML element by its name and modifying it with JS
const new_name = document.getElementsByName("new-name"); // selects all that have this name value
new_name[2].innerHTML = new_name[2].innerHTML + " because of JS, this now displays the name 'Nick'"; // treat the variable as an array and target the element you want
new_name[2].style.backgroundColor = "yellow"; // highlights the affected div