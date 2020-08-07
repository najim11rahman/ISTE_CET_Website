// HAMBURGER CONTROLLER

const hamburger = () => {
  var hamburgerDiv = document.querySelector("#hamburger");
  var navList = document.querySelector("#navList");
  var backgroundContent = document.querySelector("#about-page-content");

  hamburgerDiv.classList.toggle("is-active");
  navList.classList.toggle("show-list");
};

// FRAME LOADER

document.getElementById("about").className = "active-desktop-tab";
document.getElementById("about-mob").classList.add("active-tab");
let currentPage = "about";
let prevPage = "";

const loadFrame = (pageName, device) => {
  prevPage = currentPage;
  currentPage = pageName;

  switch (device) {
    case "desk":
      iframe.setAttribute("src", "./" + pageName + ".html");
      document.getElementById(pageName).classList.add("active-desktop-tab");
      document.getElementById(prevPage).classList.remove("active-desktop-tab");
      break;

    case "mob":
      iframe.setAttribute("src", "./" + pageName + ".html");
      document.getElementById(pageName + "-mob").classList.add("active-tab");
      document.getElementById(prevPage + "-mob").classList.remove("active-tab");
      break;
  }
};

// IFRAME HEIGHT CONTROLLER

const headerOffsetHeight = document.getElementById("header").offsetHeight;
let iframe = document.getElementById("iframe");

iframe.style.paddingTop = headerOffsetHeight + "px";

const resizeIframe = (obj) => {
  // console.log(obj.contentWindow.document.body.scrollHeight);
  obj.style.height = window.innerHeight + "px";
};
