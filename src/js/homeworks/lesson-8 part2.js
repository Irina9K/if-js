const studentsData = [
  {
    firstName: 'Василий',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Java',
  },
  {
    firstName: 'Иван',
    lastName: 'Иванов',
    admissionYear: 2018,
    courseName: 'JavaScript',
  },
  {
    firstName: 'Александр',
    lastName: 'Федоров',
    admissionYear: 2017,
    courseName: 'Python',
  },
  {
    firstName: 'Николай',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Android',
  },
];

studentsData.sort((a, b) => (a.admissionYear < b.admissionYear ? 1 : -1));

function Students(studentsArray) {
  this.studentsArray = studentsArray;
}

Students.prototype.fullName = function fullName() {
  const fullNameArr = this.studentsArray.reduce((newArr, item) => {
    if (item.firstName) {
      newArr.push(`${item.firstName}  ${item.lastName}`);
    }

    return newArr;
  }, []);
  return fullNameArr;
};

Students.prototype.course = function course() {
  const currentYear = new Date().getFullYear();
  const courseArr = this.studentsArray.reduce((newArr, item) => {
    if (item.admissionYear) {
      newArr.push(currentYear - item.admissionYear);
    }

    return newArr;
  }, []);
  return courseArr;
};

Students.prototype.courseName = function courseName() {
  const courseNameArr = this.studentsArray.reduce((newArr, item) => {
    if (item.courseName) {
      newArr.push(item.courseName);
    }

    return newArr;
  }, []);
  return courseNameArr;
};

Students.prototype.getInfo = function getInfo() {
  const result = this.fullName().reduce((newArr, item, i) => {
    newArr.push(`${item} ${this.courseName()[i]}, ${this.course()[i]} курс`);
    return newArr;
  }, []);
  return result;
};

const students = new Students(studentsData);
console.log(students.getInfo());
