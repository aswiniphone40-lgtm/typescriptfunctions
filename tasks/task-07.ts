
const students = [
  {
    name: "Alya",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Budi",
    major: "Networking",
    active: false
  },
  {
    name: "Citra",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Dimas",
    major: "Multimedia",
    active: true
  },
  {
    name: "Eka",
    major: "Networking",
    active: false
  }
];

function countActiveStudents(students) {
  return students.filter(student => student.active === true).length;
}

function countInactiveStudents(students) {
  return students.filter(student => student.active === false).length;
}

function countStudentsByMajor(students, major) {
  return students.filter(student => student.major === major).length;
}

function printEnrollmentReport(students) {
  console.log("=== ENROLLMENT REPORT ===");
  console.log("Total Students:", students.length);
  console.log("Active Students:", countActiveStudents(students));
  console.log("Inactive Students:", countInactiveStudents(students));
  console.log("Software Engineering:", countStudentsByMajor(students, "Software Engineering"));
  console.log("Networking:", countStudentsByMajor(students, "Networking"));
  console.log("Multimedia:", countStudentsByMajor(students, "Multimedia"));
}

printEnrollmentReport(students);
