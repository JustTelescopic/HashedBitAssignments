
const students = [
  { name: "student1", subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
  { name: "student2", subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
  { name: "student3", subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 }
];

const result = students.map(student => {
  const subjects = Object.values(student).slice(1); // Remove name
  const average = subjects.reduce((sum, score) => sum + score, 0) / subjects.length;
  return { [student.name]: { average } };
});

console.log(result);
  