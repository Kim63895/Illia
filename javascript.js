function Slider(picturesSelector) {
  const slides = document.querySelectorAll(picturesSelector);
  const dots = document.querySelectorAll(".dots li");
  let currentSlide = 0;

  const showCurrentDot = () => {
  dots.forEach((dot, index) => {
    dot.style.backgroundColor = index === currentSlide ? "blue" : "";
  });
}
  const showSlide = () => {
    slides.forEach((slide, index) => {
      slide.style.display = index === currentSlide ? "block" : "none";
    });
    updateButtons();
    showCurrentDot();
  };
  const updateButtons = () => {
    const prevButton = document.querySelector(".btn1");
    const nextButton = document.querySelector(".btn2");

    if (currentSlide === 0) {
      prevButton.style.visibility = "hidden";
    } else {
      prevButton.style.visibility = "visible";
    }

    if (currentSlide === slides.length - 1) {
      nextButton.style.visibility = "hidden";
    } else {
      nextButton.style.visibility = "visible";
    }
  };
  this.dots = function (index) {
    currentSlide = index;
    showSlide();
    showCurrentDot();
  };
  this.nextSlide = function () {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide();
    showCurrentDot();
  };

  this.prevSlide = function () {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide();
    showCurrentDot();
  };

  this.init = function (prevButtonSelector, nextButtonSelector) {
    const prevButton = document.querySelector(prevButtonSelector);
    const nextButton = document.querySelector(nextButtonSelector);

    prevButton.addEventListener("click", this.prevSlide);
    nextButton.addEventListener("click", this.nextSlide);

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => this.dots(index));
    });
    showSlide();
  };
}
const firstStep = new Slider(".img img");
firstStep.init(".btn1", ".btn2");
