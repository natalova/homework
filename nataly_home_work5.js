//1 - rewrite to while
// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` )
//   }


let i = 0
while (i < 3) {
  console.log( `number' ${i}!` )
  i++
}


//2 - create a loop from 0 to 10, inside create a variable 'NotDivide', 
//and assign numbers that can't divide 2
//and console every time that number. 


for (let i2 = 0; i2 < 10; i2++) {    
    let notDivide = (i2%2)  > 0
      if(notDivide) {    
          console.log(`The number ${i2} cannot be divisible by 2`)
      }    
    }


//3 - create loop with condition from 0 to 10, and jump to the next iteration when i is 5.
for (let i3 = 0; i3 < 10; i3++) {
    if(i3 == 5) {
        continue;
    }
      console.log(`number is: ${i3}`);
  }

//4 - create if/else for checking numbers, if lower than 10 console 'Hello', if higher than 10 console 'Bye'

let num4 = 11
if (num4 <= 10) {
    console.log ('Hello')
} else 
    console.log('Bye')



