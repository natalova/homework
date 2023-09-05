
// массив
let arr1 = ['kil', 'ooo', 234, 'dsdfasd', 123123, true, function() {console.log('Hi from array')}]

let value = arr1[0]
console.log(value)
// заменили 3 позицию в массиве
arr1[3] = 'New'

console.log(arr1[3])
console.log(arr1)

arr1[6]()
// узнали длину масива
let lArr1 = arr1.length
console.log(lArr1)
console.log(arr1.at(-3))

// циклы + массив
let result = [];
resultWithUpperC = [];
for (let i = 0; i < arr1.length; i++) {
    // вывели массив
 //   console.log(arr1[i])
resultWithUpperC = [];

if (typeof arr1[i] === 'string') {
    result.push(arr1[i])
}

}
for (let y= 0; y < result.length; y++) {
    let word = result.at(y)
    let firstLetter = String(word[0]).toUpperCase()
    
    let restLetters = String(word.slice(1))
    resultWithUpperC.push(firstLetter + restLetters)
    }
//console.log(result)
console.log(resultWithUpperC)

//асиннхронная функция
async function getOnlyString(baseArr) {
let result2 = [];
resultWithUpperC2 = [];
for (let z = 0; z < baseArr.length; z++) {
    // вывели массив
 //   console.log(arr1[i])
resultWithUpperC2 = [];

if (typeof baseArr[z] === 'string') {
    await result2.push(baseArr[z])
}

}
for (let w= 0; w < result2.length; w++) {
    let word = result2.at(w)
    let firstLetter2 = await String(word[0]).toUpperCase()
    let restLetters2 = await String(word.slice(1))
    await resultWithUpperC2.push(firstLetter2 + restLetters2)
    }
    console.log(resultWithUpperC2)
}
getOnlyString(arr1)