//1 - create array with 10 elements
const colour = [
    "red", 
    "blue", 
    "yellow", 
    "white", 
    "black", 
    "grey", 
    "green", 
    "orange", 
    "purple", 
    "pink"
]
console.log (colour)


//2 - create a function that will add value to array under index 500

const arr1 = ["one", "two", "three"]
const index = 500
let newvalue = "five hundred one"

function addValueToArray() {
    arr1[index] = newvalue
    console.log(arr1)
} 
addValueToArray()

//3 - create a function with for inside and conditions to create two new arrays - one with string elements only, another only with numbers
// doesn't matter async or not function

function findValuesType(Array3) {
    let strArr = []
    let numArr = []
    for (const result of Array3) {
      if (typeof result == 'string') 
      { 
        strArr.push(result);
      } 
      else if (typeof result == 'number') 
      {
        numArr.push(result);
      }
    }
    return {strArr, numArr};
  }

  const Array3 = [1000, "test 1", "test 2", "test 3", 3000, 1, true, new Date()];
  
  let {strArr, numArr} = findValuesType(Array3);

  console.log("String:", strArr, "Number:", numArr);
 
