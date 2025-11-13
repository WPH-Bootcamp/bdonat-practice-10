// JSON -> JavaScript Object Notation

// 1. JSON.stringify -> mengubah object menjadi JSON
/*
    PATTERN :
    JSON.stringfy(objectReference, replacer, spacing)
*/

let student = {
  name: "John",
  age: 30,
  isAdmin: false,
  courses: ["html", "css", "js"],
};
console.log(student);

let json = JSON.stringify(student, null, 2);
console.log(json);

// -. Pengabaian Properti dalam JSON.stringify
/*
    Ada beberapa tipe properti yang diabaikan oleh `JSON.stringify`:
    - Properti fungsi (method).
    - Kunci dan nilai simbolik.
    - Properti yang menyimpan `undefined`.
*/

let user = {
  sayHi() {
    // diabaikan
    console.log("Hello");
  },
  [Symbol("id")]: 123, // diabaikan
  something: undefined, // diabaikan
  a: 10,
};

console.log(JSON.stringify(user)); // {}

// -. Mengatasi Objek Bersarang dan Referensi Circular
let room = {
  number: 123,
};

let meetup = {
  title: "Discuss about Javascript",
  participants: ["Dicky", "Fernando"],
  place: room,
};
room.occupiedBy = meetup;

// let result = JSON.stringify(meetup);
// console.log(result);

// -. Mengabaikan dan Mengubah Properti: replacer
result = JSON.stringify(
  meetup,
  ["title", "participants", "place", "number"],
  2
);
console.log(result);

// -. Formatting JSON: space
let user2 = {
  name: "John",
  age: 25,
  roles: {
    isAdmin: false,
    isEditor: true,
  },
};

console.log(JSON.stringify(user2, null, 2));

// 2. JSON.parse -> mengubah json menjadi object
let objectStudent = JSON.parse(json);
console.log(objectStudent);
