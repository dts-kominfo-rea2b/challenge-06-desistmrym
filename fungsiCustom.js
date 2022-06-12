// TODO: import module bila dibutuhkan di sini
const fs = require('fs')
// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3

const bacaData = async(fnCallback) => {
  let res = [];  
  fs.readFile(file1, (err, data) => {
    if (err) {
      fnCallback(err)
    }
    const response = getProcess(data)
    res.push(response)

    fs.readFile(file2, (err, data) => {
      if (err) {
        fnCallback(err)
      }
      const response = getProcess(data)
      res.push(response)

      fs.readFile(file3, (err, data) => {
        if (err) {
          fnCallback(err)
        }
        const response = getProcess(data)
        res.push(response)
      
        fnCallback(null, res)
      })
    })
  })                  
};

function getProcess(res) {
  const data = JSON.parse(res);
  if (data.message !== undefined) {
    const word = data.message.split(" ");
    return word[1];
  } else if (data[0].message != undefined){ 
    const word = data[0].message.split(" ");
    return word[1];
  } else if (data[0].data.message != undefined){                      
    const word = data[0].data.message.split(" "); 
    return word[1];}
}

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
