/*** EXAMPLE 1: targeting an HTML element by its ID and modifying it with JS ***/
const id_example = document.getElementById("h1-example");
// another solution using querySelector instead of getElementByID: const id_example = document.querySelector("#h1-example");
id_example.innerHTML = id_example.innerHTML + ", but because of JS the font color is now blue.";
id_example.style.color = "blue";

/*** EXAMPLE 2: targeting an HTML element by its class and modifying it with JS ***/
const div_example = document.querySelector(".div-example");
let myString = " THIS is text that I infused into the div with the help of JavaScript."
div_example.innerHTML = div_example.innerHTML + myString; // you can add string to an HTML element's innerHTML

/*** EXAMPLE 3: targeting an HTML element by its name and modifying it with JS ***/
const new_name = document.getElementsByName("new-name"); // selects all that have this name value
new_name[2].innerHTML = new_name[2].innerHTML + " because of JS, this now displays the name 'Nick'"; // treat the variable as an array and target the element you want
new_name[2].style.backgroundColor = "yellow"; // highlights the affected div

/*** EXAMPLE 4: finding a div with no class or id and applying a class to it ***/
const style_example = document.querySelectorAll("div"); // gets all elements that are divs
console.log("My NodeList: ")
console.log(style_example); // open the console and see how it lists every div within the html file
console.log("My specific node: ")
console.log(style_example[4]); // console logs the div we're planning to add a class to 
style_example[4].classList.add("violet-background"); // add class to the 5th div returned from querySelectorAll
console.log("==================================================");

/*** EXAMPLE 5: using parentNode to find a parent element ***/
const parent_example = document.querySelectorAll("li");
console.log("Iterating through each li and checking for a parent: ")
for (i = 0; i<parent_example.length; i++) { 
    console.log(parent_example[i].parentElement);
} // basically, each li points to the SAME ul element - they all have the same parent
console.log("They are all the same parent!")
console.log("==================================================");

/*** EXAMPLE 6: using the firstChild, lastChild, previous sibling and next sibling properties ***/
const children_example = document.getElementById("my-ul");
console.log("Using firstChild and lastChild properties: ");
console.log(children_example.firstChild); // the text that precedes the li elements counts as a child, so it will log the text between the ul declaration tag and the first li tag
console.log(children_example.lastChild); // should also end in text because of the white space between the last li and the ending tag of ul - whitespace can be considered a child!
/**
 * So here's an issue: in this example, you would expect the first child to be the li with the text of item 1 = index 0
 * and the last child to be the li with the text of item 5 = index 4. However, we are given texts for each child.
 * What we can do is use the nextSibling and previousSibling properties attached to these nodes we received.
 */
console.log("Using the nextSibling and previousSibling properties on the elements we printed before: ");
console.log(children_example.firstChild.nextSibling.innerHTML);
console.log(children_example.lastChild.previousSibling.innerHTML);
// Now we are console logging the elements we would expect to see. In conclusion, consider white spaces, texts, and even HTML comments when grabbing children from an element!

/*** EXAMPLE 7: querySelector targeting only the first element it finds ***/
const singleQuery = document.querySelector("li"); // out of the many li elements that exist, querySelector will only target the first one it finds searching from top to bottom
singleQuery.classList.add("violet-background"); // applies class to single li element
