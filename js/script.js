function myFunction() {
  const navBar = document.getElementById("myNavbar");
  const navToggleButton = document.querySelector(".icon");

  // Toggle the 'responsive' class on the navbar
  navBar.classList.toggle("responsive");

  // Get the current boolean state of aria-expanded
  const expanded =
    navToggleButton.getAttribute("aria-expanded") === "true" || false;

  // Set the aria-expanded attribute to the opposite boolean value
  navToggleButton.setAttribute("aria-expanded", !expanded);
}
