// 同时读两个文件
const fs = require('fs');

const readFile = function (filename) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filename, function (error, data) {
      if (error) {
        return reject(error)
      };
      return resolve(data);
    })
  })
}

const asyncReadFile = async function () {
  const f1 = await readFile('./aaa.txt');
  const f2 = await readFile('./bbb.txt');

  console.log(f1.toString());
  console.log(f2.toString());
}

asyncReadFile();