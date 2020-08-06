console.log("Welcome");

const hamburger = () => {
  var hamburgerDiv = document.querySelector("#hamburger");
  var navList = document.querySelector("#navList");

  console.log("clicked");
  hamburgerDiv.classList.toggle("is-active");
  navList.classList.toggle("show-list");
};
