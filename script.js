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

// example of finding a div with no class or id and applying a class to it 
const style_example = document.querySelectorAll("div"); // gets all elements that are divs
console.log(style_example); // open the console and see how it lists every div within the html file
console.log(style_example[4]); // console logs the div we're planning to add a class to 
style_example[4].classList.add("violet-background"); // add class to the 5th div returned from querySelectorAll
