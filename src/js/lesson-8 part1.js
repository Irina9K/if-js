class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const userInstance = new User('Iryna', 'Kulai');
console.log(userInstance.fullName);

class Student extends User {
  constructor(firstName, lastName, admissionYear, courseName) {
    super(firstName, lastName);
    this.admissionYear = admissionYear;
    this.courseName = courseName;
  }

  get course() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.admissionYear;
  }
}

const studentInstance = new Student('Iryna', 'Kulai', 2019, 'Android');
console.log(studentInstance.course);
console.log(studentInstance.courseName);
console.log(studentInstance.fullName);
