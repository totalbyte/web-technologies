//3.1
function gradeMyGrades(grade) {
    if (grade >= 90) {
        return "Відмінно";
    } else if (grade >= 75) {
        return "Добре";
    } else if (grade >= 60) {
        return "Задовільно";
    } else {
        return "Незадовільно";
    }
}

// //3.1(?)
// function gradeMyGrades(grade) {
//     return grade >= 90 ? "Відмінно" :
//         grade >= 75 ? "Добре" :
//             grade >= 60 ? "Задовільно" :
//                 "Незадовільно";
// }

console.log(gradeMyGrades(91));
console.log(gradeMyGrades(78));
console.log(gradeMyGrades(68));
console.log(gradeMyGrades(50));


//3.2
function getSeason(month) {
    if (month >= 1 && month <= 12) {
        if (month >= 3 && month <= 5) {
            return "Весна";
        } else if (month >= 6 && month <= 8) {
            return "Літо";
        } else if (month >= 9 && month <= 11) {
            return "Осінь";
        } else {
            return "Зима";
        }
    }
}

// //3.2(?)
// function getSeason(month) {
//     return (month >= 3 && month <= 5) ? "Весна" :
//         (month >= 6 && month <= 8) ? "Літо" :
//             (month >= 9 && month <= 11) ? "Осінь" :
//                 "Зима";
// }

console.log(getSeason(3));
console.log(getSeason(7));
console.log(getSeason(10));
console.log(getSeason(12));