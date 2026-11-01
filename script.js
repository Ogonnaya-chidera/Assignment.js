const students = [
 {
    name: "Amaka",
    age: 15,
    course: "Chemistry",
    score: 52
 },

 {
    name: "Chukwu",
    age: 14,
    course: "Physics",
    score: 29
 },

{ 
    name: "Okoro",
    age: 16,
    course: "Biology",
    score: 70
 },

 {
    name: "Glory",
    age: 17,
    course: "English",
    score: 80
 },

 {
    name: "Jude",
    age: 15,
    course: "Further Mathematics",
    score: 44
 },
]

function getGrade(score) {
    if (score >= 70) {
        return "A";
    }
    else if (score >= 50 && score <= 69) {
        return "B";
    }
     else if (score >= 35 && score <= 49) {
        return "C";
    }
     else if (score <= 35) {
        return "F";
    }
}

function displayStudent(student) {
console.log(
    `${student.name} (${student.age}) is studying ${student.course} and scored ${student.score} - Grade ${getGrade(student.score)}`
);
}

students.forEach(student => displayStudent(student));

const passedStudents = students.filter((student) => student.score >= 50);
console.log("students who passed:");
passedStudents.forEach(student => displayStudent(student));

const studentNames = students.map((student) => student.name);
console.log("Student Names:", studentNames);

function averageScore(students) {
    const totalScore = students.reduce((total, student) => total + student.score, 0);
    return totalScore / students.length;
}

console.log("Average Score:", averageScore(students));