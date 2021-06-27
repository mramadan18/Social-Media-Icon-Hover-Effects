let list = document.querySelectorAll(".scl li"),
    bg = document.querySelector(".socialMedia");

list.forEach(element => {
  element.addEventListener("mouseenter", function (e) {
    let item = e.target.getAttribute("data-color");
    bg.style.backgroundColor = item;
  });

  element.addEventListener("mouseleave", function (e) {
    bg.style.backgroundColor = "#fff"
  });
})

VanillaTilt.init(document.querySelectorAll(".scl li a"), {
  max: 50,
  speed: 1000,
  glare: true,
  "max-glare": 1
});