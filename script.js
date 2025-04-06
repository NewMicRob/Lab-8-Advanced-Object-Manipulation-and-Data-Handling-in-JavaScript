//Part 1: Understanding and Creating Objects
let student = { 
    name: "Jeff", 
    age: 20, 
    enrolled: true, 
    courses: ["Algo", "JavaScript", "Web Dev", "Writ", "OS", "Databases"], 
    studentInfo: function() { 
        console.log('Name: ' + this.name + '\n' + 'Age: ' + this.age); 
    },

    //Part 5: Object Methods
    //Part 5.1
    addCourse: function(course) {
        this.courses.push(course); 
    },
    //Part 5.2
    courseCount: function() {
        return this.courses.length; s
    }
};
student.studentInfo(); 


//Part 2: Working with JSON
let jsonString = '{"name": "jeff", "age": 20, "enrolled": true, "courses": ["Algo", "JavaScript", "Web Dev", "Writ", "OS", "Databases"]}'; 
console.log(jsonString); 
let jsonObject = JSON.parse(jsonString); 
console.log(jsonObject); 

//Part 3: Using destructuring assignment
var { name, courses } = student; 
console.log(name); 
console.log(courses); 

const scores = [85, 92, 78, 90]; 
const [firstScore, secondScore] = scores; 
console.log(firstScore, secondScore); 

//Part 4: The spread operator
const studentClone = { ...student }; 
const modifiedClone = { ...studentClone, GraduationYear: 2026}; 
//console.log(studentClone); 
console.log(modifiedClone); 
const newCourses = ["Math", "French", "Front-End", "Writ", "Art", "Databases"]; 
const allCourses = [...student.courses, ...newCourses]; 
console.log(allCourses);
modifiedClone.courses = allCourses; 
console.log(modifiedClone); 

//logs for part 5
student.addCourse("Python"); //To add a course
console.log("Total courses:", student.courseCount()); //count the number og courses
student.addCourse("Java"); //Add anouther
console.log("Total courses:", student.courseCount()); //count again