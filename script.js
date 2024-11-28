//JS Event Listener

// An evet is an action performed by the user on a website
// E.g. clicking a button, pressing a keyboard key

// Always add an ID to any element that Javascript needs to find (e.g buttons and inputs)

// addEventListener("event", function) command is used to "turn on" a button
// getElementById("ID-name") command tells JavaScript to look for an element using the ID
// A function is a group of code that runs when called on.
// Name your function similar to how you name variables

// Console error:  Cannot read properties of null. This is almost always a spelling mistake on the ID.
// Console errors give you the line of code where the error was found.

document.getElementById("pizza-btn").addEventListener("click", orderPizza);

// Function definition
function orderPizza() {
  var size = prompt("What size pizz?");
  var topping1 = prompt("First topping");
  var topping2 = prompt("Second topping");

  var output = `Your ${size} pizza with ${topping1} and ${topping2} will be ready in 15 minutes!`;

  alert(output);
}

// create a button that, when clicked, Asks the user for their name and city.
// In the CONSOLE, display: Hello, <name> from <city>!

document.getElementById("greet-btn").addEventListener("click", greet);

function greet() {
  // input: get the name and city from the user
  let userName = prompt("What is your name?");
  let userCity = prompt("What city do you live in?");

  // process: create the output sentence
  let output = "Hello, " + userName + " from " + userCity + "!";

  // output: send output to the console
  console.log(output);
}

// You try:
// Asks the user for tow numbers
// Asks the suer for tow animals
// - Displays a sentence in an alert window that says, for e.g.
//     "I own 75 cats and 21 dogs!"  or
//     "I own 5 lizards and 1000 chickens

//Add a <p> tag to your website that defines each of the following.
// Where Appropriate,give an example of how to use the command
// - document
// - getElementById
//- addEventListener
// - function
// - null error (and how to find the line of code where the error occured)

// Then, complete the assignment "Complete the Phrase"
