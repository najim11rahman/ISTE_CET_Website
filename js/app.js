// HAMBURGER CONTROLLER

const hamburger = () => {
  var hamburgerDiv = document.querySelector("#hamburger");
  var navList = document.querySelector("#navList");
  var backgroundContent = document.querySelector("#about-page-content");

  hamburgerDiv.classList.toggle("is-active");
  navList.classList.toggle("show-list");
};

// ANIMATION CONTROLLER

document.getElementById("loading-animation").style.display = "flex";
document.getElementById("iframe").classList.add("blur");

// FRAME LOADER

document.getElementById("home").className = "active-desktop-tab";
document.getElementById("home-mob").classList.add("active-tab");
let currentPage = "home";
let prevPage = "";

const loadFrame = (pageName, device) => {
  prevPage = currentPage;
  currentPage = pageName;

  document.getElementById("loading-animation").style.display = "flex";
  document.getElementById("iframe").classList.add("blur");

  switch (device) {
    case "desk":
      iframe.setAttribute("src", "./pages/" + pageName + ".html");
      document.getElementById(pageName).classList.add("active-desktop-tab");
      document.getElementById(prevPage).classList.remove("active-desktop-tab");
      break;

    case "mob":
      iframe.setAttribute("src", "./pages/" + pageName + ".html");
      document.getElementById(pageName + "-mob").classList.add("active-tab");
      document.getElementById(prevPage + "-mob").classList.remove("active-tab");
      break;
  }

  iframe.addEventListener("load", () => {
    document.getElementById("loading-animation").style.display = "none";
    document.getElementById("iframe").classList.remove("blur");
  });
};

// IFRAME HEIGHT CONTROLLER

const headerOffsetHeight = document.getElementById("header").offsetHeight;
let iframe = document.getElementById("iframe");

iframe.style.marginTop = headerOffsetHeight + "px";

const resizeIframe = (obj) => {
  // console.log(obj.contentWindow.document.body.scrollHeight);
  obj.style.height = window.innerHeight - headerOffsetHeight - 4 + "px";
};

// ANIMATION CONTROLLER

iframe.addEventListener("load", () => {
  document.getElementById("loading-animation").style.display = "none";
  document.getElementById("iframe").classList.remove("blur");
});
