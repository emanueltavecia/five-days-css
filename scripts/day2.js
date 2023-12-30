const techs = [
  "HTML",
  "CSS",
  "JavaScript",
  "ReactJS",
  "Node.js",
  "React Native",
  "and much more...",
];

let index = 0;

function changeTech() {
  document.getElementById("tech").innerHTML = techs[index];
  index = (index + 1) % techs.length;
}

changeTech();

setInterval(changeTech, 1000);
