const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];

// filter only the passing grades => at least 70

const passingGrades = grades.filter((grade) => grade >= 70);

console.log(passingGrades);