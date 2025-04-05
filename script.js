//Part 1: Understanding and Creating Objects
let student = { // Creating an object student
    name: "jeff", // Object name property
    age: 20, // Object age property
    enrolled: true, // Object enrolled property(boolean)
    courses: ["Algo", "JavaScript", "Web Dev", "Writ", "OS", "Databases"], // Object courses property(array)
    studentInfo: function() { 
        console.log('Name: ' + this.name, 'Age: ' + this.age); // the output
    }
};

student.studentInfo(); // Calling the studentInfo method

//Part 2: Working with JSON
