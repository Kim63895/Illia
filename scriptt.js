class Coach {
  constructor(Coach, Specialization, Rating) {
    this.Coach = Coach;
    this.Specialization = Specialization;
    this.Rating = Rating;
  }
  displayInfo() {
    console.log(
      `Coach: ${this.Coach}, Specialization: ${this.Specialization}, Raiting ${this.Rating}`
    );
  }
}

const coach1 = new Coach("John Doe", "Fitness", 4.7);

const coach2 = new Coach("Alice Smith", "Yoga", 4.9);

coach1.displayInfo(); // "Coach: John Doe, Specialization: Fitness, Rating: 4.7"

coach2.displayInfo(); // "Coach: Alice Smith, Specialization: Yoga, Rating: 4.9"
