// import { VIP } from "./tamu.js";

// Hitung Mundur
// Set the date we're counting down to
var countDownDate = new Date("Aug 12, 2023 08:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="countDown"
  document.getElementById("countDown").innerHTML =
    "<li class='countdown-list'><span>" +
    days +
    "</span><span class='countdown-unit'><span clas='md:hidden'>&nbsp</span>h<span class='hidden md:inline'>ari</span> </span></li>" +
    "<li class='countdown-list'><span>" +
    hours +
    "</span><span class='countdown-unit'><span clas='md:hidden'>&nbsp</span>j<span class='hidden md:inline'>am</span></span></li>" +
    "<li class='countdown-list'><span>" +
    minutes +
    "</span><span class='countdown-unit'><span clas='md:hidden'>&nbsp</span>m<span class='hidden md:inline'>enit</span></span></li>" +
    "<li class='countdown-list'><span>" +
    seconds +
    "</span><span class='countdown-unit'><span clas='md:hidden'>&nbsp</span>d<span class='hidden md:inline'>etik</span></span></li>";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countDown").innerHTML =
      "Alhamdulillah, acara sudah selesai";
  }
}, 1000);

// Nama Tamu
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const tujuan = urlParams.get("to");

if (urlParams.has("to")) {
  document.querySelector("#nama-tamu").innerHTML = tujuan;
} else {
  document.querySelector("#nama-tamu").innerHTML = "Tamu Undangan";
}

// Kategori Tamu VIP

const vip = [
  "Hendra Fianto",
  "M. Asep Saepunazat",
  "Rahman Wahid",
  "David Putranegoro",
  "LipHin",
];

if (vip.includes(tujuan)) {
  document.querySelector("#kategori-tamu").innerHTML =
    "<span class='py-1 px-4 mx-2 rounded-md text-white bg-sage-5  items-center'>VIP</span>";
} else {
  document.querySelector("#kategori-tamu").innerHTML = "";
}

// Mencegah Scroll di #amplop
document
  .querySelector("#amplop")
  .addEventListener("wheel", preventScroll, { passive: false });

function preventScroll(e) {
  e.preventDefault();
  e.stopPropagation();

  return false;
}

// Buka Undangan
const bukaUndangan = document.querySelector("#buka-undangan");
const amplop = document.querySelector("#amplop");
const beranda = document.querySelector("#beranda");
const navbar = document.querySelector("#navbar");

bukaUndangan.addEventListener("click", function () {
  amplop.classList.add("translate-y-full");
  navbar.classList.add("navbar-fixed");
  beranda.scrollIntoView({ behavior: "smooth" }, true);
});

// Tutup Undangan
const tutupUndangan = document.querySelector("#tutup-undangan");

tutupUndangan.addEventListener("click", function () {
  amplop.classList.remove("translate-y-full");
  navbar.classList.remove("navbar-fixed");
});

// Bersihkan query di url
// const baseUrl = window.location.href.split("?")[0];
// window.history.pushState("name", "", baseUrl);
