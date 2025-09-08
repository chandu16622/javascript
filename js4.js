const passingMarks = 50;

const students = [
    { name: 'ali', marks: 90 },
    { name: 'alia', marks: 70 },
    { name: 'kali', marks: 20 },
    { name: 'meera', marks: 60 },];


function managestudentGrades(students) {
    const passedStudent = students.filter(student => student.marks >= passingMarks);
    passedStudent.forEach(student => {
        const shortName = student.name.slice(0, 3).toUpperCase();
        const hasA = student.name.toUpperCase().includes("A");
        let grade;
        if (student.marks >= 75) {
            grade = "A";
        } else if (student.marks >= 60) {
            grade = "B";
        } else {
            grade = "C";
        }
        console.log(`Name: ${shortName}, Marks: ${student.marks}, Grade: ${grade}, HasA: ${hasA}`);
    });
}


managestudentGrades(students);
