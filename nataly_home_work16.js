//use the file from the attachments
//create a function with actions: read the json.file 
//=> iterate and save all names into array

const fs = require("fs-extra")
const jsondata = "./homework16.json"

function saveData(data) {
  fs.readFile(data, "utf8", (array, path) => {
      const dataFromJsonFile = JSON.parse(path)
      const ArrayFromJson = [];
      
      for (let email of dataFromJsonFile.data) {
        if (email.email) 
        {
            ArrayFromJson.push(email.email)
        }
      }
      console.log(ArrayFromJson)
  })
}
saveData(jsondata)