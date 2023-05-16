const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

function timeDifference(current, previous) {
  var msPerMinute = 60 * 1000;
  var msPerHour = msPerMinute * 60;
  var msPerDay = msPerHour * 24;
  var msPerMonth = msPerDay * 30;
  var msPerYear = msPerDay * 365;

  var elapsed = current - previous;

  if (elapsed < msPerMinute) {
    return Math.round(elapsed / 1000) + " seconds of experience";
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + " minutes of experience";
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + " hours of experience";
  } else if (elapsed < msPerMonth) {
    return Math.round(elapsed / msPerDay) + " days of experience";
  } else if (elapsed < msPerYear) {
    return Math.round(elapsed / msPerMonth) + " months of experience";
  } else {
    return Math.round(elapsed / msPerYear) + " years of experience";
  }
}

// experience
var current = new Date();

// html5
const html = document.getElementById("html5");
html.innerHTML = timeDifference(
  current,
  new Date(2020, 09, 01, 00, 00, 00, 00)
);

// css
const css = document.getElementById("css");
css.innerHTML = timeDifference(current, new Date(2020, 09, 01, 00, 00, 00, 00));

// javascript
const javascript = document.getElementById("javascript");
javascript.innerHTML = timeDifference(
  current,
  new Date(2021, 09, 01, 00, 00, 00, 00)
);

// php
const php = document.getElementById("php");
php.innerHTML = timeDifference(current, new Date(2021, 09, 01, 00, 00, 00, 00));

// laravel
const laravel = document.getElementById("laravel");
laravel.innerHTML = timeDifference(
  current,
  new Date(2022, 04, 01, 00, 00, 00, 00)
);

// git
const git = document.getElementById("git");
git.innerHTML = timeDifference(current, new Date(2022, 04, 01, 00, 00, 00, 00));

// bootstrap
const bootstrap = document.getElementById("bootstrap");
bootstrap.innerHTML = timeDifference(
  current,
  new Date(2021, 04, 01, 00, 00, 00, 00)
);

// tailwindcss
const tailwindcss = document.getElementById("tailwindcss");
tailwindcss.innerHTML = timeDifference(
  current,
  new Date(2022, 04, 01, 00, 00, 00, 00)
);

// react
const react = document.getElementById("react");
react.innerHTML = timeDifference(
  current,
  new Date(2022, 07, 01, 00, 00, 00, 00)
);

// photoshop
const photoshop = document.getElementById("photoshop");
photoshop.innerHTML = timeDifference(
  current,
  new Date(2020, 09, 01, 00, 00, 00, 00)
);

// figma
const figma = document.getElementById("figma");
figma.innerHTML = timeDifference(
  current,
  new Date(2021, 09, 01, 00, 00, 00, 00)
);

// ilustrator
const ilustrator = document.getElementById("ilustrator");
ilustrator.innerHTML = timeDifference(
  current,
  new Date(2018, 09, 01, 00, 00, 00, 00)
);
