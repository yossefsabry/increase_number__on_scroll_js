let nums = document.querySelectorAll(".box .num");
let section = document.querySelector(".section_two");
let startedScroll = false;

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 400) {
    if (!startedScroll) {
      nums.forEach((num) => startCount(num));
      console.log("hello");
    }
    startedScroll = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
