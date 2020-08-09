// HAMBURGER CONTROLLER

const hamburger = () => {
  var hamburgerDiv = document.querySelector("#hamburger");
  var navList = document.querySelector("#navList");
  var backgroundContent = document.querySelector("#about-page-content");

  hamburgerDiv.classList.toggle("is-active");
  navList.classList.toggle("show-list");
};

// ANIMATION CREATOR

let LoadingAnimation = document.createElement("div"),
  loader_outer_animation = document.createElement("span"),
  loader_inner_animation = document.createElement("span");

LoadingAnimation.className = "loading-animation";
loader_outer_animation.className = "loader";
loader_inner_animation.className = "loader-inner";

loader_outer_animation.appendChild(loader_inner_animation);
LoadingAnimation.appendChild(loader_outer_animation);
document.body.insertBefore(LoadingAnimation, document.body.childNodes[0]);

// ANIMATION CONTROLLER

window.addEventListener("load", (event) => {
  LoadingAnimation.classList.add("remove-loader-animation");
});

// CONTENT HEIGHT CONTROLLER

const headerOffsetHeight = document.getElementById("header").offsetHeight;
let contentOffsetHeight = document.getElementById("main-content-in-page");
contentOffsetHeight.style.paddingTop = headerOffsetHeight + "px";
