//Part 1: Understanding and Creating Objects
let student = { // Creating an object student
    name: "Jeff", // Object name property
    age: 20, // Object age property
    enrolled: true, // Object enrolled property(boolean)
    courses: ["Algo", "JavaScript", "Web Dev", "Writ", "OS", "Databases"], // Object courses array
    studentInfo: function() { 
        console.log('Name: ' + this.name + '\n' + 'Age: ' + this.age); // the output
    }
};
student.studentInfo(); // Calling the studentInfo method

//Part 2: Working with JSON
let jsonString = '{"name": "jeff", "age": 20, "enrolled": true, "courses": ["Algo", "JavaScript", "Web Dev", "Writ", "OS", "Databases"]}'; // JSON string
console.log(jsonString); // Logging the json string
let jsonObject = JSON.parse(jsonString); // Pback inot an object
console.log(jsonObject); // Logging the json object

//Part 3: Using destructuring assignment
var { name, courses } = student; // Destructuring the student object
console.log(name); // Logging the name
console.log(courses); // Logging the courses

const scores = [85, 92, 78, 90]; // Array of scores
const [firstScore, secondScore] = scores; // Destructuring array
console.log(firstScore, secondScore); // logging the first and second scores

//Part 4: The spread operator
const studentClone = { ...student }; // Using spread operator to copy the student object
const modifiedClone = { ...studentClone, GraduationYear: 2026}; // Modifying the copied object
//console.log(studentClone); // Logging the cloned object
console.log(modifiedClone); // Logging the modified cone object
const newCourses = ["Math", "French", "Front-End", "Writ", "Art", "Databases"]; // New Array of courses
const allCourses = [...student.courses, ...newCourses]; // Using spread operator to combine arrays
console.log(allCourses); // Logging the combined array
modifiedClone.courses = allCourses; // Assigning the combined array to the student object
console.log(modifiedClone); // Logging the updated courses array

//Part 5:Object Methods
function addCourse(course) {
    this.courses.push(course); // Adding a course to the courses array
}
console.log(student.courses);
addCourse.call(student, "Python"); //Adding a course
console.log(student.courses);
console.log(student);
 //Upadtreed course array