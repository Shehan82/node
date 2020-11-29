// const stduent = {
//     name:"shehan",
//     age:23,
//     school:"jhons"
// }

class Student{
    constructor(name, town)
    {
        this.name = name;
        this.town = town;
    }

    details()
    {
        // console.log("Helloo " + this.name );
        console.log(`hello this is ${this.name}`);
    }
}

module.exports = Student;