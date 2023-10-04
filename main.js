let lis = document.querySelectorAll("ul li");
let div = document.querySelector(".experiement");

if (localStorage.color) {
  div.style.backgroundColor = localStorage.color;
  lis.forEach((li) => {
    li.classList.remove("active");
  });
  document
    .querySelector(`[data-color = ${localStorage.color}]`)
    .classList.add("active");
}

lis.forEach((li) => {
  li.classList.remove("active");
  li.addEventListener("click", function (e) {
    e.currentTarget.classList.add("active");
    div.style.backgroundColor = e.currentTarget.getAttribute("data-color");
    localStorage.setItem("color", e.currentTarget.getAttribute("data-color"));
  });
});
