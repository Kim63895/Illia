
class Timer {
  #isRunning = false;
  #intervalId = null;
  #sec;
  #min;
  constructor(display, initialMinuts, initialSeconds) {
    this.element = document.querySelector(display);
    this.#min = initialMinuts;
    this.#sec = initialSeconds;
  }
  startClock = () => {
    if (!this.#isRunning) {
      this.#isRunning = true;
      this.#intervalId = setInterval(this.setDisplay, 1000);
      this.updateClock();
    }
  };

  setDisplay = () => {
    if (this.#sec === 0) {
      if (this.#min === 0) {
        clearInterval(this.#intervalId);
        this.#isRunning = false;
        this.element.textContent = "time is over";
      } else {
        this.#min -= 1;
        this.#sec = 59;
      }
    } else {
      this.#sec -= 1;
    }
    this.updateClock();
  };
  updateClock = () => {
    if(this.#min === 0 && this.#sec === 0) return;
    const minutes = this.#min.toString().padStart(2, "0");
    const seconds = this.#sec.toString().padStart(2, "0");
    this.element.textContent = `${minutes}:${seconds} `;
    
  };
}

const timer = new Timer('p', 1, 25);

const button = document.querySelector("button").addEventListener('click', () => timer.startClock())
