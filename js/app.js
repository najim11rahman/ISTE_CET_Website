console.log("Welcome");

const hamburger = () => {
  var hamburgerDiv = document.querySelector("#hamburger");
  var navList = document.querySelector("#navList");
  var backgroundContent = document.querySelector("#about-page-content");

  hamburgerDiv.classList.toggle("is-active");
  navList.classList.toggle("show-list");
};
