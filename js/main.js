$("header .side-menu .bars").click(() => {
  $(".menu").css("left", "0");
  $("header .side-menu .bars").css("left", "270px");
});

$("header .side-menu .menu span").click(() => {
  $(".menu").css("left", "-250px");
  $("header .side-menu .bars").css("left", "20px");
});

$(".singers .slide").eq(0).slideDown();
$(".singers h3").click((e) => {
  const slide = document.querySelectorAll(".singers .container div");
  const ele = $(e.target).next()[0];
  if (ele.style.display == "block") {
    $(e.target).next("div").slideUp();
  } else {
    $(slide).slideUp(500);
    $(e.target).next().slideDown(500);
  }
});

let countDownDate = new Date("Sep 1, 2024 23:59:59").getTime();

let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  
  let dateDiff = countDownDate - dateNow;
  
  if (dateDiff < 0) {
    clearInterval(counter);
    console.log("clear");
    document.getElementById("time-over").textContent = "the time has ended"
  } else {
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
    
    document.getElementById("days").textContent = days < 10 ? days = "0" + days : days;
    document.getElementById("hours").textContent = hours < 10 ? hours = "0" + hours: hours;
    document.getElementById("minutes").textContent = minutes < 10 ? minutes = "0" + minutes : minutes;
    document.getElementById("seconds").textContent = seconds < 10 ? seconds = "0" + seconds : seconds;
  }
}, 1000);

function charCount() {
  const message = document.getElementById("message");
  const countLength = message.value.length;
  const counter = document.querySelector("form h5 span");
  counter.textContent = 100 - countLength;
  countLength >= 100 ? (counter.textContent = "your available character finished") : countLength;
  message.setAttribute("maxlength","100")
}

message.addEventListener("keyup", charCount);

$(".nav-link").on("click", (e) => {
  let selection = $(e.target).attr("href")
  let offset = $(selection).offset().top
  $("html").animate({scrollTop:offset},3000)
})

$(window).on("scroll", () => {
  let arowUpIcon = document.getElementById("arow-up")
  let scrollUp = window.scrollY
  scrollUp > 950 ? arowUpIcon.style.display = "block" : arowUpIcon.style.display = "none" ;
})