import "../css/main.scss";
//------------------------
var sale1 = "100%  100%";
var sale2 = "50%  50%";
var sale3 = "30%  30%";

var ass1 = document.querySelector("#ass1 .ass__discount");
var ass2 = document.querySelector("#ass2 .ass__discount");
var ass3 = document.querySelector("#ass3 .ass__discount");
let attempt = 0;

function assClick(assElem) {
  if (attempt > 1) {
    return;
  }

  if (attempt === 0) {
    showFalse(assElem);
  } else {
    document.addEventListener("click", (event) => {
      if (event.target.classList.contains("curr-underwear")) {
        return;
      } else if (event.target.classList.contains("ass__img")) {
        showDiscount(assElem);
      } else {
        return;
      }
    });
  }
}

function showFalse(assElem) {
  attempt += 1;

  if (assElem === "ass1") {
    var imageUnderwear = document.querySelector("#ass1 .ass__img");
    var tryAgainMsg = document.querySelector("#ass1 .ass__discount");
    imageUnderwear.classList.remove("underpants__animation");
    imageUnderwear.style.top = "80%";
    tryAgainMsg.style.opacity = "1";
    tryAgainMsg.classList.add("false-msg");
    imageUnderwear.classList.add("curr-underwear");
    tryAgainMsg.classList.add("curr-underwear");
    document.querySelector("#ass1.ass").classList.add("curr-underwear");
    tryAgainMsg.innerHTML = "Попробуй еще!";
  } else if (assElem === "ass2") {
    var imageUnderwear = document.querySelector("#ass2 .ass__img");
    var tryAgainMsg = document.querySelector("#ass2 .ass__discount");
    imageUnderwear.classList.remove("underpants__animation");
    imageUnderwear.style.top = "80%";
    tryAgainMsg.style.opacity = "1";
    tryAgainMsg.classList.add("false-msg");
    imageUnderwear.classList.add("curr-underwear");
    tryAgainMsg.classList.add("curr-underwear");
    document.querySelector("#ass2.ass").classList.add("curr-underwear");
    tryAgainMsg.innerHTML = "Попробуй еще!";
  } else if (assElem === "ass3") {
    var imageUnderwear = document.querySelector("#ass3 .ass__img");
    var tryAgainMsg = document.querySelector("#ass3 .ass__discount");
    imageUnderwear.classList.remove("underpants__animation");
    imageUnderwear.style.top = "80%";
    tryAgainMsg.style.opacity = "1";
    tryAgainMsg.classList.add("false-msg");
    imageUnderwear.classList.add("curr-underwear");
    tryAgainMsg.classList.add("curr-underwear");
    document.querySelector("#ass3.ass").classList.add("curr-underwear");
    tryAgainMsg.innerHTML = "Попробуй еще!";
  }
}

function showDiscount(assElem) {
  attempt += 1;
  var images = document.querySelectorAll(".ass__img");
  var discounts = document.querySelectorAll(".ass__discount");

  for (var i = 0; i < 3; i++) {
    images[i].classList.remove("underpants__animation");
    images[0].style.top = "80%";
    images[1].style.top = "80%";
    images[2].style.top = "80%";
    discounts[i].style.opacity = "1";
    discounts[i].classList.remove("false-msg");
  }

  if (assElem === "ass1") {
    ass1.classList.add("win");
    ass1.innerHTML = typeof sale1 !== "undefined" ? sale1 : "100% 100%";
    ass2.innerHTML = typeof sale2 !== "undefined" ? sale2 : "50% 50%";
    ass3.innerHTML = typeof sale3 !== "undefined" ? sale3 : "30% 30%";
  } else if (assElem === "ass2") {
    ass2.classList.add("win");
    ass1.innerHTML = typeof sale3 !== "undefined" ? sale3 : "30% 30%";
    ass2.innerHTML = typeof sale1 !== "undefined" ? sale1 : "100% 100%";
    ass3.innerHTML = typeof sale2 !== "undefined" ? sale2 : "50% 50%";
  } else if (assElem === "ass3") {
    ass3.classList.add("win");
    ass1.innerHTML = typeof sale2 !== "undefined" ? sale2 : "50% 50%";
    ass2.innerHTML = typeof sale3 !== "undefined" ? sale3 : "30% 30%";
    ass3.innerHTML = typeof sale1 !== "undefined" ? sale1 : "100% 100%";
  }

  showResultWindow();
  showForm();
}

function showResultWindow() {
  console.log('showResultWindow')
  setTimeout(function () {
    $(".spin-result-wrapper").css("display", "block");
  }, 2000);
}

let intr,
  time = 600;

function start_timer() {
  intr = setInterval(tick, 1e3);
}

function tick() {
  if (0 < time) {
    time -= 1;
    var e = Math.floor(time / 60),
      t = 10 <= (t = time - 60 * e) ? t : "0" + t;
    if (
      (e < 0 && (e = 0),
      $("#min").html("0" + e),
      $("#sec").html(t),
      0 == e && 0 == t)
    )
      return clearInterval(intr), !1;
  }
}

function showForm() {
  setTimeout(function () {
    $(".ass__container").slideUp();
    $(".order_block").slideDown();
    start_timer();
  }, 4000);
}

$(document).ready(function () {
  $(".ass").on("click", function () {
    assClick(this.id);
  });
});

$(".close-popup, .pop-up-button").click(function (e) {
  e.preventDefault();
  $(".spin-result-wrapper").fadeOut();

  let el = $("#roulette");
  if (!el) {
    el = $("#order_form");
  }

  let top = el.offset().top;
  $("body,html").animate({ scrollTop: top }, 800);
});
