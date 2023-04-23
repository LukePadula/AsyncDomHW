// Task 1
const firstGhostElem = document.getElementById("first_ghost");
firstGhostElem.style.fill = "orange";

// Task 2
const secondWaveClassElems = document.getElementsByClassName("second_wave");

for (const el of secondWaveClassElems) {
  el.style.fill = "blue";
}

// Task 3

const area51Div = document.getElementById("area-51");

const area51DivSVG = area51Div.getElementsByTagName("svg");

for (const el of area51DivSVG) {
  el.style.fill = "green";
}

// Task 4
const a51NthChild = document.querySelector("#area-51 svg:nth-child(4n)");

a51NthChild.style.stroke = "red";
a51NthChild.style.strokeWidth = "15px";

// Task 5
a51NthChild.parentElement.style.border = "dashed 5px";

// Task 6
const a50Ghosts = document.querySelectorAll("#area-50 .ghost");

for (const el of a50Ghosts) {
  el.style.fill = "red";
}
// GET AREA, DRILL DOWN using GET BY TAG NAME

// querySelector nth-child

// from the last child, select the div immediately above the ghost and make its border '5px dashed'

// querySelectorAll
