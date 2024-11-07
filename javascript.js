function Slider(picturesSelector) {
  const slides = document.querySelectorAll(picturesSelector);
  let currentSlide = 0;

  const showSlide = () => {
    slides.forEach((slide, index) => {
      slide.style.display = index === currentSlide ? "block" : "none";
    });
    updateButtons();
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

  this.nextSlide = function () {
    currentSlide = (currentSlide + 1) % slides.length; 
    showSlide();
  };

  this.prevSlide = function () {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide();
  };

  this.init = function (prevButtonSelector, nextButtonSelector) {
    const prevButton = document.querySelector(prevButtonSelector);
    const nextButton = document.querySelector(nextButtonSelector);

    prevButton.addEventListener("click", this.prevSlide);
    nextButton.addEventListener("click", this.nextSlide);

    showSlide();
  };
}
const firstStep = new Slider(".img img");
firstStep.init(".btn1", ".btn2");
