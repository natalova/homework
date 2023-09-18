class Human {

    name

    constructor(name) {
        this.name = name
        if (this.constructor == Human) {
            throw new Error('it is abstract class')
        } 
    }
    eat(){console.log('eating')}
    listen() { console.log('listening') }
}


class Worker extends  Human {

    workTimeStart = 9
    workTimeEnd = 18

    salary
    workTime

    constructor(name) {
        super(name)
        if (this.constructor == Human) {
            throw new Error('it is abstract class')
        } 
    }

    sayHello(){
        console.log(`Hello, my name is ${this.name}`)
    }

    sayWorkIsFinish(){
        console.log(`My work is finished`)
    }

    isWork() {
        let currentTime = new Date().getHours();
        if(this.workTimeStart >= currentTime && this.workTimeEnd <= currentTime) {
            return true;
        }
        else {
            this.sayWorkIsFinish();
            return false;
        }
    }
}

let worker = new Worker("Worker1")
console.log(worker.sayHello())
console.log(worker.isWork())