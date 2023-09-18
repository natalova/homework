// створити клас нащадок Worker - у якого має бути свій конструктор 
// з оголошенням двох полів salary, work time. Також має бути два метода 
// який виводить привітання, і каже що робота завершена.

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

// робочий день з 09:00 до 18:00

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
// створити метод який буде виводити в консоль повідомлення чи працює 
// зараз працівник чи ні

    isWork() {
        let currentTime = new Date().getHours()

//і в залежності від години виклику методу відображати текст робочі години чи ні
        if(this.workTimeStart >= currentTime && this.workTimeEnd <= currentTime) {
            return true
        }
        else {
            this.sayWorkIsFinish()
            return false
        }
    }
}

let worker = new Worker("Worker1")
console.log(worker.sayHello())
console.log(worker.isWork())