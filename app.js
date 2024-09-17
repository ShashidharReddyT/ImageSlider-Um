document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slider");
  const images = document.querySelectorAll(".slider-image");
  const totalImages = images.length;
  const indicatorsContainer = document.querySelector(".indicators");
  let index = 0;


  for (let i = 0; i < totalImages; i++) {
    const dot = document.createElement("span");
    dot.className = "indicator-dot";
    dot.addEventListener("click", () => goToImage(i));
    indicatorsContainer.appendChild(dot);
  }

  const dots = document.querySelectorAll(".indicator-dot");

  function updateIndicators() {
    dots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx === index);
    });
  }

  function showImage(index) {
    const offset = -index * 100;
    slider.style.transform = `translateX(${offset}%)`;
    updateIndicators();
  }

  function nextImage() {
    index = (index + 1) % totalImages;
    showImage(index);
  }

  function prevImage() {
    index = (index - 1 + totalImages) % totalImages;
    showImage(index);
  }

  function goToImage(newIndex) {
    index = newIndex;
    showImage(index);
  }

  document.querySelector(".next").addEventListener("click", nextImage);
  document.querySelector(".prev").addEventListener("click", prevImage);


  let autoSlide = setInterval(nextImage, 3000);

  // Pause on hover
  document
    .querySelector(".slider-container")
    .addEventListener("mouseenter", () => clearInterval(autoSlide));
  document
    .querySelector(".slider-container")
    .addEventListener(
      "mouseleave",
      () => (autoSlide = setInterval(nextImage, 3000))
    );

  showImage(index);
});
