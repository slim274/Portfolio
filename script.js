function toggleMenu(icon) {
  const menu = document.getElementById("navMenu");
  const orbit = document.getElementById("orbit");

  menu.classList.toggle("active");
  icon.classList.toggle("active");

  if (menu.classList.contains("active")) {
    orbit.style.display = "none";
  } else {
    orbit.style.display = "block";
  }
}