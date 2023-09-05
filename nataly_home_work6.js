//1 - create a function that takes one param and inside makes the value Uppercase

function name1 (param1) {
      return param1.toUpperCase()
    } 
    let task1 = name1 ("test text for task 1");
    let task1string = "test text for task 2";
    console.log(task1);

//2 -if the parameter not string type - console message about the incorrect type of data.

if (typeof task1string !== "string") {
    console.log("type is not correct");
    }

//3 - create js function that add properties for the object, allowing only number

function Func3(a, b = 45) {
    return a + b;
    }
    console.log(Func3(5))

//4 - create JS object with 5 different properties
var newProp = { propName: 'newNum', value: 10 };

var obj = {
    valNum: 1,
    valString: 'tast',
    valBoolean: true,
    valArray: ['t1', 't2', 2],
    valDate: new Date()
}


// 5 -with previously created function add a new property
var AddNewProperty = function (obj, newProp) {

    if (typeof newProp.value !== 'number') {
        console.log('Incorect type of data');
        throw new Error('Incorect type of data');       
    }
    
    return obj[newProp.propName] = newProp.value;
}

AddNewProperty(obj, newProp)
console.log(obj)



// 6 -check the function syntax and if some issues propose
// let sum == function{a, b} (
//   return a + b;
// )

let sum = function (a,b) {
    return a + b
 }
