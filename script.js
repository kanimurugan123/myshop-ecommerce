const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.onclick = () => {
  menu.style.display =
    menu.style.display === "block" ? "none" : "block";
};

// Slider
let index = 0;
let slides = document.querySelectorAll(".slide");

setInterval(() => {
  slides.forEach(s => s.style.display = "none");
  index = (index + 1) % slides.length;
  slides[index].style.display = "block";
}, 3000);

// Add to cart
function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to Cart");
}
