import fs from 'fs-extra'
import fetch from 'node-fetch'
import log4js from 'log4js'

const logger = log4js.getLogger()
logger.level = "debug"


// const values = require('./values.json')
// console.log(values)
//const fs = require('fs-extra')

// example 1
// const { writeFile, readFile } = require('fs');
// const path = './values.json'
//const newData = {phone: 234234, adress: 'Street'}

// readFile(path, (error, data) => {
//     if (error) {
//       console.log(error);
//       return;
//     }
//     const parsedData = JSON.parse(data);
//     parsedData.createdAt = new Date().toISOString();
//     writeFile(path, JSON.stringify(parsedData, null, 2), (err) => {
//       if (err) {
//         console.log('Failed to write updated data to file');
//         return;
//       }
//       console.log('Updated file successfully');
//     });
//   });
////

// let readDate
// //try {code with problems} catch (err) {cons}
// try {
// fs.readFile(path, 'utf8', (error, data) => {
//     if(error){
//         console.log('Error during')
//     } else {
//         readDate = JSON.parse(data)
//     }
//     readDate.address = 'Streeng1'
// })


// //fs.whriteFile(path, JSON.stringify(readDate))
// }catch(err) {
//     console.log(`Error code action: ${err}`)
// }


//let readData = fs.readFile((path, (error, data) =>

// if (error) {
//     console.log(error)
// }

// ))


//
// function Func() {
//     fetch("./values.json")
//         .then((res) => {
//         return res.json();
//     })
//     .then((data) => console.log(data));
// }



//fs.writeFileSync(path, JSON.stringify(newData))

// let obj1 = {name: "Natalia", lname:"Kovaleva", age:18}
// console.log(obj1)

// let jsonObj1 = JSON.stringify(obj1)
// console.log(jsonObj1)

////

// let jsonObj1 = '{"name": "Natalia", "lname":"Kovaleva", "age":18}'

// let obj2 = JSON.parse(jsonObj1)

// console.log(obj2)
// console.log(obj2.name)

// obj2.city = "Kharkiv"
// console.log(obj2)

// jsonObj1 = JSON.stringify(obj2)
// console.log(jsonObj1)


//exemple 2

// const fs = require('fs-extra');
// let path = "./values.json";
// let data, jsonData;
// try {
//     if(fs.existsSync(path)) {
//         data = fs.readFileSync(path, 'utf8');
//         if(data) {
//             jsonData = JSON.parse(data);
//             if(typeof jsonData === 'object' && jsonData !== null && !Array.isArray(jsonData)) {
//                 jsonData.test = 'test';
//                 jsonData.email = 'test@gmail.com';
//                 fs.writeFileSync(path, JSON.stringify(jsonData));
//             } else {
//                 throw new Error("Parsed JSON data is not an object");
//             }
//         } else {
//             throw new Error("No data read from the file");
//         }
//     } else {
//         throw new Error("File does not exist");
//     }
// } catch (err) {
//     console.error(err.message);
// }

// let ddd = JSON.parse(fs.readFileSync(path, 'utf-8')) 
// console.timeLog(ddd)
// ddd.newVAL = 'Myval'

// fs.writeFileSync(path, JSON.stringify(ddd))

// const fs = require('fs-extra')
// const path = './values.json'

// async function func1 () {
//   let ddd = await JSON.parse(fs.readFileSync(path, 'utf-8')) 
//   console.log(ddd)
//   console.log('Hello from async function')
//   ddd.dkd = 'DKD'
//   await fs.writeFile(path, JSON.stringify(ddd))
// }

// func1()

let arrN = []
async function readJsonAndWriteName(path) {
    let jsonData2 = await fs.readJson(path)

    for (let element of jsonData2.data) {
        arrN.push(element['first_name'])
    }
    console.log(arrN)
    await fs.writeJson('names.json', JSON.stringify(arrN))
}

// readJsonAndWriteName()

async function getDataReqres() {
    let response = await fetch('https://reqres.in/api/users?page=2&per_page=5')
    let data = await response.json()
    await fs.writeFile('responseRreqres.json', JSON.stringify(data))
}
// getDataReqres()

// readJsonAndWriteName('responseRreqres.json')


const dataUser = {
    "username": "Frank",
    "email": "frank@mail.com",
    "password": "54Tr90i30o3o@"
}

async function createUser(data) {
    try {
        const response = await fetch('https://reqres.in/api/user/register', 
        {method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
        })
        logger.debug("request was send successfully")

        logger.debug("Got cheese.");
        logger.info("Cheese is Comté.");
        logger.warn("Cheese is quite smelly.");
        logger.error("Cheese is too ripe!");
        logger.fatal("Cheese was breeding ground for listeria.");

        const dataRStatusCode = await response.status
        const responsed = await response.json()
        logger.debug(dataRStatusCode)
        console.log(dataRStatusCode)
        console.log(responsed)
    } catch(error) {
        console.log(error)
    }
}

createUser(dataUser)
