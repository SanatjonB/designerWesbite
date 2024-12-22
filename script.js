// Add to Cart Interaction
document.querySelectorAll(".product button").forEach((button) => {
  button.addEventListener("click", () => {
    const productName = button.parentElement.querySelector("h3").textContent;
    alert(`${productName} added to cart!`);
  });
});

// Smooth Scrolling
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});
