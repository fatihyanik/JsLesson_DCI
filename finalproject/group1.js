let students = [
  "Ivo Serra", 
  "Scharif (JsMan)",
  "Francesco Bruschi",
  "Divyaa",
  "Ali Raza",
  "James",
  "Sonny",
  "Piet",
  "Ammar",
  "Carlos",
  "Edoardo",
  "Fabio",
  "Victor",
  "Gino",
  "Salim",
  "Francesco Luraghi",
  "Andre",
  "Irene",
  "Murat Fatih",
];

const group1 = [];
const group2 = [];
const group3 = [];
const group4 = [];

const groupSize = 5;

function randomGroup() {
  const randomNum = function () {
    return Math.floor(Math.random() * students.length);
  };
  for (let i = 0; i < students.length; i++) {
    if (group1.length < groupSize) {
      let randomIndex = randomNum();
      group1.push(students[randomIndex]);
      students = students.filter((i) => i != students[randomIndex]);
    } 
   if (group2.length < groupSize) {
      let randomIndex = randomNum();
      group2.push(students[randomIndex]);
      students = students.filter((i) => i != students[randomIndex]);
    }
    if (group3.length < groupSize) {
      let randomIndex = randomNum();
      group3.push(students[randomIndex]);
      students = students.filter((i) => i != students[randomIndex]);
    } else {
      let randomIndex = randomNum();
      group4.push(students[randomIndex]);
      students = students.filter((i) => i != students[randomIndex]);
    }
  }
  return {
    Group1: group1,
    Group2: group2,
    Group3: group3,
    Group4: group4.concat(students),
  };
}

const groups = randomGroup();

const renderTemplate = Object.keys(groups)
  .map((group) => {
    return (
      group.toUpperCase() +
      ": " +
      "\n" +
      groups[group].map((item, index) => ` ${index + 1}- ${item}`).join("\n") +
      "\n" +
      "------------------------"
    );
  })
  .join("\n");

console.log(renderTemplate);
