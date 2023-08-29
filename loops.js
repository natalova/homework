// the initial changes for work with JS
// author Nataly K


let num = 10

// while (num <= 7) {
//     console.log (num)
//     num ++
// }

// do while
// do {
    
//     num++
//     console.log (num)
// } while (num <=7)


let sumOLoop = 0

for (let i = 0; i <= num; i+=2) {
    console.log(i)
    if (i ==6) break
    sumOLoop += i
}
console.log(sumOLoop)