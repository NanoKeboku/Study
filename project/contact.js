const { rejects } = require("assert");
const fs = require("fs");
const { resolve } = require("path");
const readline = require("readline");

const quest = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//    membuat folder data jikia tidak ada
const dirPath = "./data/";
if (!fs.existsSync(dirPath)) {
  // membuat folder
  fs.mkdirSync(dirPath);
}

// membuat file contacts.json didalam folder data
const dataPath = "./data/contacts.json";
if (!fs.existsSync(dataPath)) {
  // membuat file
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

// refactor
const tulisPertanyaan = (pertanyaan) => {
  return new Promise((resolve, reject) => {
    quest.question(pertanyaan, (nama) => {
      resolve(nama);
    });
  });
};

const simpanContact = (nama, email, noHP) => {
  const data = {
    nama,
    email,
    noHP,
  };
  const read = fs.readFileSync("data/contacts.json", "utf-8");
  const file = JSON.parse(read);
  file.push(data);
  const write = fs.writeFileSync("data/contacts.json", JSON.stringify(file));
  quest.close();
};

module.exports = {
  tulisPertanyaan,
  simpanContact,
};

// const quest2 = () => {
//   return new Promise((resolve, reject) => {
//     quest.question("Masukkan email :", (email) => {
//       resolve(email);
//     });
//   });
// };
