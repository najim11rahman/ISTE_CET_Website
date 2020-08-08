const execomList = [
  {
    name: "Sudhidev S",
    designation: "Chairman",
    source: "../Assets/execom_20_21/sudhidev.jpg",
  },
  {
    name: "Devanand M Nair",
    designation: "Vice Chairman",
    source: "../Assets/execom_20_21/devanand.jpg",
  },
  {
    name: "Jithin Sankar",
    designation: "General Secretary",
    source: "../Assets/execom_20_21/jithin.jpg",
  },

  {
    name: "Gopi Krishanan",
    designation: "Treasurer",
    source: "../Assets/execom_20_21/gopikrishnan.jpg",
  },
  {
    name: "Akshay Krishna",
    designation: "Overseer",
    source: "../Assets/execom_20_21/akshayKrishna.jpg",
  },
  {
    name: "Vishnu Vikraman",
    designation: "Overseer",
    source: "../Assets/execom_20_21/vishnuVikraman.jpg",
  },
  {
    name: "Tejas K E",
    designation: "Joint Secretary",
    source: "../Assets/execom_20_21/tejas.jpg",
  },
  {
    name: "Fathima Rinsha PT",
    designation: "Joint Secretary",
    source: "../Assets/execom_20_21/fathimaRinsha.jpg",
  },
  {
    name: "Anusree Sunil",
    designation: "Tech For Society",
    source: "../Assets/execom_20_21/anusree.jpg",
  },
  {
    name: "Devikripa V N",
    designation: "Tech For Society",
    source: "../Assets/execom_20_21/deviKripa.jpg",
  },
  {
    name: "Helga R S",
    designation: "Tech For Society",
    source: "../Assets/execom_20_21/helga.jpg",
  },
  {
    name: "Muzammil Thottathil",
    designation: "Project Head",
    source: "../Assets/execom_20_21/muzammil.jpg",
  },
  {
    name: "Anandhakrishnan",
    designation: "Event Coordinator",
    source: "../Assets/execom_20_21/anandhaKrishnan.jpg",
  },
  {
    name: "Sreeram C V",
    designation: "Membership Coordinator",
    source: "../Assets/execom_20_21/sreeram.jpg",
  },
  {
    name: "Mariyam Jabeen",
    designation: "Publicity Head",
    source: "../Assets/execom_20_21/mariyamJabeen.jpg",
  },
  {
    name: "Lekha R",
    designation: "Publicity Head",
    source: "../Assets/execom_20_21/lekha.jpg",
  },
  {
    name: "Najim Rahman",
    designation: "Web Master",
    source: "../Assets/execom_20_21/najim.jpg",
  },
  {
    name: "Sudev Suresh Sreedevi",
    designation: "CSE Representative",
    source: "../Assets/execom_20_21/sudev.jpg",
  },
  {
    name: "Krishnajith R",
    designation: "ME Representative",
    source: "../Assets/execom_20_21/krishnajith.jpg",
  },
  {
    name: "Amrita A Nair",
    designation: "ECE Representative",
    source: "../Assets/execom_20_21/amrita.jpg",
  },
  {
    name: "Soney John",
    designation: "EEE Representative",
    source: "../Assets/execom_20_21/soney.jpg",
  },
  {
    name: "Aparna E Soman",
    designation: "CE Representative",
    source: "../Assets/execom_20_21/aparna.jpg",
  },
];

function cardCreator(name, designation, source) {
  let cardTag = '<div class="card">';
  let imageTag = '<img src="' + source + '" alt="" />';
  let nameTag = '<p class="name">' + name + "</p>";
  let designationTag = '<p class="designation">' + designation + "</p>";

  return cardTag + imageTag + nameTag + designationTag + "</div>";
}

let totalCards = "";
execomList.forEach((member) => {
  totalCards += cardCreator(member.name, member.designation, member.source);
});

document.getElementById("execom-list").innerHTML = totalCards;
