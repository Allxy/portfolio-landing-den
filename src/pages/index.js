import "./index.scss"


document.getElementById("burgerButton").addEventListener("click", (e) => {
  document.getElementById("header").classList.toggle("header_active");
});

document.getElementById("header").addEventListener("click", (e) => {
  if (
    e.target.classList.contains("header__link") ||
    e.target.id === "closeBurgeButton"
  ) {
    document.getElementById("header").classList.remove("header_active");
  }
});
