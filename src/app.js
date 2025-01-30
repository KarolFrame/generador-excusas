/* eslint-disable */
import "./style.css";
var who = [
  "My dog",
  "My sister",
  "My grandma",
  "My bird",
  "My cousing",
  "An alien",
  "My neighbor",
  "A ghost"
];
var action = [
  "ate",
  "peed",
  "broke",
  "cooked",
  "set fire to",
  "stole",
  "hid",
  "spilled hot chocolate on"
];
var what = [
  "my homeworks",
  "my laptop",
  "the presentation",
  "my code",
  "my class project"
];
var when = [
  "before the class",
  "during breakfast",
  "while I was sleeping",
  "last night",
  "while I was praying"
];

function printExcuse() {
  let excuse =
    who[Math.floor(Math.random() * who.length)] +
    " " +
    action[Math.floor(Math.random() * action.length)] +
    " " +
    what[Math.floor(Math.random() * what.length)] +
    " " +
    when[Math.floor(Math.random() * when.length)] +
    ".";

  document.body.querySelector("#excuse").innerHTML = excuse;
}

window.onload = function() {
  printExcuse();
};
