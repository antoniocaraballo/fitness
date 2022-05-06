const nav = document.querySelector(".nav");

function openNav() {
  nav.style.right = "0%";
  document.body.style.overflowY = "hidden";
}

function closeNav() {
  nav.style.right = "-80%";
  document.body.style.overflowY = "scroll";
}
