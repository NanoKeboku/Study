const { tulisPertanyaan, simpanContact } = require("./contact.js");

const main = async () => {
  const nama = await tulisPertanyaan("Masukkan nama anda :");
  const email = await tulisPertanyaan("Masukkan email anda :");
  const noHP = await tulisPertanyaan("Masukkan noHP :");

  simpanContact(nama, email, noHP);
};

main();

// quest.question("Siapa nama anda :", (nama) => {
//   quest.question("Berapa noHP anda :", (nomor) => {
//     const data = {
//       nama,
//       nomor,
//     };

//     // membuat folder data jikia tidak ada
//     const dirPath = "./data/";
//     if (!fs.existsSync(dirPath)) {
//       // membuat folder
//       fs.mkdirSync(dirPath);
//     }

//     // membuat file contacts.json didalam folder data
//     const dataPath = "./data/contacts.json";
//     if (!fs.existsSync(dataPath)) {
//       // membuat file
//       fs.writeFileSync(dataPath, "[]", "utf-8");
//     }

//     const read = fs.readFileSync("data/contacts.json", "utf-8");
//     const file = JSON.parse(read);
//     file.push(data);
//     const write = fs.writeFileSync("data/contacts.json", JSON.stringify(file));
//     quest.close();
//   });
// });
