class User {
    arms = 2
    constructor(name){
    this.name = name 
}
sayHello(){
    console.log('Hello')
}
}

let userN = new User()
console.log(userN.arms)