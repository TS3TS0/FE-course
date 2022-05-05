// Task 1 after Lecture 13 - find the biggest number from array:
var Numbers = [2,4,6,3,2,-123,34,0,8];

console.log(Numbers);

var SortedNumbers = Numbers.sort(function(a, b){return b-a});

console.log(SortedNumbers);

var maxValue = SortedNumbers[0];

console.log(maxValue);



// Task 2 after Lecture 13 - split one array into two - even and odd values:
var students;

students = ['Gosho', 'Tosho', 'Pesho', 'Ivan'];

console.log(students);

var evenStudents = [];
var oddSudents = [];

for (var i = 0; i < students.length; i++) {
       if ((i % 2) === 0) {
              evenStudents.push(students[i])
       } else {
              oddSudents.push(students[i])
       }
}

console.log(evenStudents);
console.log(oddSudents);