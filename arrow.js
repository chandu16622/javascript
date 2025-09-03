let students = [
  { name: "Amar", marks: 85 },
  { name: "Tittu", marks: 90 },
  { name: "Chandu", marks: 96 },
  { name: "Dharani", marks: 88 }
];


let topStudent = students.reduce((highest, student) => 
  student.marks > highest.marks ? student : highest
);

console.log("Top Student:", topStudent.name, "with marks", topStudent.marks);