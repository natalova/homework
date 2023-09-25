class User {
    arms = 2
    static planet = "Earth"
   #legs = 2

    constructor(name, legs, arms){
    this.name = name 
    this.#legs = legs
    this.arms = arms
}



static sayHello(){
    console.log('Hello')
}

get getName() {
    return this.name


}
setName(val) {
    if (val.length < 5 || typeof(val) == "string") {
        throw new Error ('Please fill only letters')
        
    }
    this.name = val
}
}

class Student extends User {
    mark = 5

    speak() {
        console.log('Yes, I know answer')
    }
}

class SchoolStudent extends Student {
    speak(){
        super.speak()
        console.log('My answer very short and correct')
    }
}

let student1 = new Student("jenkins", 2, 2)
student1.speak()
console.log(student1.getName())
console.log('-------')
let student2 = new Student("Travis", 2, 2)
student2.speak()





// let userD = new User('Birdss', 2, 2)
// let nnn = userD.getName

// console.log(nnn)
// console.log(User.planet)
// //userD.arms = 3
// console.log(userD.arms)

// let userD2 = new User(2)
// let nnn2 = userD2.getName
// console.log(nnn2)

// // let userN = new User()
// // console.log(userN.arms)