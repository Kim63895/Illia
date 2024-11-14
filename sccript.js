function Student(name, lastName, birthYear, grades = []) {
  this.name = name;
  this.lastName = lastName;
  this.birthYear = birthYear;
  this.grades = grades;
  this.attendance = new Array(10).fill(null);

  this.getAge = function () {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  };

  this.getAverageGrade = function () {
    if (this.grades.length === 0) return 0;
    const total = this.grades.reduce((sum, grade) => sum + grade, 0);
    return total / this.grades.length;
  };

  this.present = function () {
    const index = this.attendance.indexOf(null); 
    if (index !== -1) {
      this.attendance[index] = true;
    }
  };

  this.absent = function () {
    const index = this.attendance.indexOf(null);
    if (index !== -1) {
      this.attendance[index] = false;
    }
  };
this.markPresence = function (count) {
  for (let i = 0; i < count; i++) {
    this.present();
  }
};
  this.summary = function () {
    const averageGrade = this.getAverageGrade();
    const attendedClasses = this.attendance.filter((item) => item === true).length;
    const totalClasses = this.attendance.filter((item) => item !== null).length;
    const attendanceRate = totalClasses === 0 ? 0 : attendedClasses / totalClasses;

    if (averageGrade > 90 && attendanceRate > 0.9) {
      return "Молодець!";
    } else if (averageGrade > 90 || attendanceRate > 0.9) {
      return "Добре, але можна краще";
    } else {
      return "Редиска!";
    }
  };
}

const student1 = new Student("Іван", "Петренко", 2000, [100, 95, 85, 90, 88]);
const student2 = new Student("Марія", "Коваль", 2001, [100, 70, 80, 75, 60]);


student1.markPresence(3);
student1.absent(2);
student2.markPresence(4);
student2.absent(1);
console.log(`${student1.name} ${student1.lastName}`);
console.log(`Вік: ${student1.getAge()}`);
console.log(`Середній бал: ${student1.getAverageGrade()}`);
console.log(`Оцінка: ${student1.summary()}`);

console.log(`${student2.name} ${student2.lastName}`);
console.log(`Вік: ${student2.getAge()}`);
console.log(`Середній бал: ${student2.getAverageGrade()}`);
console.log(`Оцінка: ${student2.summary()}`);