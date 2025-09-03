
let students = [
  { name: "Amar", marks: 85 },
  { name: "Tittu", marks: 90 },
  { name: "Chandu", marks: 76 },
  { name: "Dharani", marks: 88 }
];
let totalMarks = 0;

students.forEach(student => {
  totalMarks += student.marks;
});

let averageMarks = totalMarks / students.length;

console.log("Average Marks:", averageMarks);



