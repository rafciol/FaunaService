// Rozdzielczości
var resWid = window.screen.width * window.devicePixelRatio;
var resHei = window.screen.height * window.devicePixelRatio;

var y = window.innerHeight || document.documentElement.clientHeight || body.clientHeight * window.devicePixelRatio;
var x = window.innerWidth || document.documentElement.clientWidth || body.clientWidth * window.devicePixelRatio;

// Czas rzeczywisty
const data = new Date();
var sekunda = data.getSeconds();
var minuta = data.getMinutes();
var godzina = data.getHours();
var dzien = data.getDay();
var miesiac = data.getMonth() + 1;
var rok = data.getFullYear();

// Labels clickable

function labelFunction1() {
  window.location.href = "#slider-text-1";
}
function labelFunction2() {
  window.location.href = "#slider-text-2";
}
function labelFunction3() {
  window.location.href = "#slider-text-3";
}

//Pasek animation

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("top-header").style.height = "100px";
    document.getElementById("top-logo").style.width = "95px";
    document.getElementById("top-logo").style.height = "96px";
    document.getElementById("con-header-links-id").style.top = "4px";
    document.getElementById("button-event").style.marginBottom = "35px";
    document.getElementById("top-header").style.transition = "0.5s";
    document.getElementById("top-logo").style.transition = "0.5s";
    document.getElementById("top-logo").style.transition = "0.5s";
    document.getElementById("con-header-links-id").style.transition = "0.3s";
    document.getElementById("button-event").style.transition = "0.5s";
    document.getElementById("top-header").style.height = "130px";
  } else {
    document.getElementById("top-header").style.height = "130px";
    document.getElementById("top-logo").style.width = "auto";
    document.getElementById("top-logo").style.height = "auto";
    document.getElementById("con-header-links-id").style.top = "20px";
    document.getElementById("button-event").style.marginBottom = "auto";
    document.getElementById("top-header").style.transition = "0.5s";
    document.getElementById("top-logo").style.transition = "0.5s";
    document.getElementById("top-logo").style.transition = "0.5s";
    document.getElementById("con-header-links-id").style.transition = "0.3s";
    document.getElementById("button-event").style.transition = "0.5s";
  }
}
//form reset
function resetDataForm() {
    document.getElementById("formularz").reset();
}

// Formularz 
function fbGoto() {
    window.open('https://facebook.com/faunaservicepl', '_blank')
}
function goto() {
    window.location.href = 'form.html';
}
function aboutusGoto() {
    window.location.href = 'aboutus.html';
}
function offerGoto() {
    window.location.href = 'offer.html';
}
function contactGoto() {
    window.location.href = 'contact.html';
}
// Hamburger system

function hamLinkAnimationOver1() {
  var xm = document.getElementById("ham-link-1")
  var x1 = document.getElementById("ham-link-2");
  var y1 = document.getElementById("ham-link-3");
  var z1 = document.getElementById("ham-link-4");
  xm.classList.add("ham-link-anim-m");
  x1.classList.add("ham-link-anim");
  y1.classList.add("ham-link-anim");
  z1.classList.add("ham-link-anim");
}
function hamLinkAnimationOut1() {
  var xm = document.getElementById("ham-link-1")
  var x1 = document.getElementById("ham-link-2");
  var y1 = document.getElementById("ham-link-3");
  var z1 = document.getElementById("ham-link-4");
  xm.classList.remove("ham-link-anim-m");
  x1.classList.remove("ham-link-anim");
  y1.classList.remove("ham-link-anim");
  z1.classList.remove("ham-link-anim");
}

function hamLinkAnimationOver2() {
  var xm = document.getElementById("ham-link-2")
  var x1 = document.getElementById("ham-link-1");
  var y1 = document.getElementById("ham-link-3");
  var z1 = document.getElementById("ham-link-4");
  xm.classList.add("ham-link-anim-m");
  x1.classList.add("ham-link-anim");
  y1.classList.add("ham-link-anim");
  z1.classList.add("ham-link-anim");
}
function hamLinkAnimationOut2() {
  var xm = document.getElementById("ham-link-2")
  var x1 = document.getElementById("ham-link-1");
  var y1 = document.getElementById("ham-link-3");
  var z1 = document.getElementById("ham-link-4");
  xm.classList.remove("ham-link-anim-m");
  x1.classList.remove("ham-link-anim");
  y1.classList.remove("ham-link-anim");
  z1.classList.remove("ham-link-anim");
}

function hamLinkAnimationOver3() {
  var xm = document.getElementById("ham-link-3")
  var x1 = document.getElementById("ham-link-1");
  var y1 = document.getElementById("ham-link-2");
  var z1 = document.getElementById("ham-link-4");
  xm.classList.add("ham-link-anim-m");
  x1.classList.add("ham-link-anim");
  y1.classList.add("ham-link-anim");
  z1.classList.add("ham-link-anim");
}
function hamLinkAnimationOut3() {
  var xm = document.getElementById("ham-link-3")
  var x1 = document.getElementById("ham-link-1");
  var y1 = document.getElementById("ham-link-2");
  var z1 = document.getElementById("ham-link-4");
  xm.classList.remove("ham-link-anim-m");
  x1.classList.remove("ham-link-anim");
  y1.classList.remove("ham-link-anim");
  z1.classList.remove("ham-link-anim");
}

function hamLinkAnimationOver4() {
  var xm = document.getElementById("ham-link-4")
  var x1 = document.getElementById("ham-link-3");
  var y1 = document.getElementById("ham-link-2");
  var z1 = document.getElementById("ham-link-1");
  xm.classList.add("ham-link-anim-m");
  x1.classList.add("ham-link-anim");
  y1.classList.add("ham-link-anim");
  z1.classList.add("ham-link-anim");
}
function hamLinkAnimationOut4() {
  var xm = document.getElementById("ham-link-4")
  var x1 = document.getElementById("ham-link-3");
  var y1 = document.getElementById("ham-link-2");
  var z1 = document.getElementById("ham-link-1");
  xm.classList.remove("ham-link-anim-m");
  x1.classList.remove("ham-link-anim");
  y1.classList.remove("ham-link-anim");
  z1.classList.remove("ham-link-anim");
}

function openHam() {
  document.getElementById("Hamburger").style.height = "100%";
  document.getElementById("closeHamId").style.opacity = "1"
  document.getElementById("overlay-content-id").style.opacity = "1";
}

function closeHam() {
  document.getElementById("Hamburger").style.height = "0%";
  document.getElementById("closeHamId").style.opacity = "0";
  document.getElementById("overlay-content-id").style.opacity = "0";
}

function openHamA() {
  document.getElementById("Hamburger1").style.height = "100%";
  document.getElementById("closeHamId1").style.opacity = "1"
  document.getElementById("overlay-content-id1").style.opacity = "1";
}

function closeHamB() {
  document.getElementById("Hamburger1").style.height = "0%";
  document.getElementById("closeHamId1").style.opacity = "0";
  document.getElementById("overlay-content-id1").style.opacity = "0";
}

function openHamC() {
  document.getElementById("Hamburger2").style.height = "100%";
  document.getElementById("closeHamId2").style.opacity = "1"
  document.getElementById("overlay-content-id2").style.opacity = "1";
}

function closeHamD() {
  document.getElementById("Hamburger2").style.height = "0%";
  document.getElementById("closeHamId2").style.opacity = "0";
  document.getElementById("overlay-content-id2").style.opacity = "0";
}

function openHamE() {
  document.getElementById("Hamburger3").style.height = "100%";
  document.getElementById("closeHamId3").style.opacity = "1"
  document.getElementById("overlay-content-id3").style.opacity = "1";
}

function closeHamF() {
  document.getElementById("Hamburger3").style.height = "0%";
  document.getElementById("closeHamId3").style.opacity = "0";
  document.getElementById("overlay-content-id3").style.opacity = "0";
}

function openHamG() {
  document.getElementById("Hamburger4").style.height = "100%";
  document.getElementById("closeHamId4").style.opacity = "1"
  document.getElementById("overlay-content-id4").style.opacity = "1";
}

function closeHamH() {
  document.getElementById("Hamburger4").style.height = "0%";
  document.getElementById("closeHamId4").style.opacity = "0";
  document.getElementById("overlay-content-id4").style.opacity = "0";
}