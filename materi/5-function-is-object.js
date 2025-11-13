// Function is Object

// 1. Properti name
function sayHi(name) {
  console.log("Hellooo", name);
}
sayHi("Dicky");
console.log(sayHi.name);

let nama = "Ucup";
console.log(nama.toUpperCase());

let obj = {
  sayHi() {
    console.log("Helo");
  },
  saySomething() {
    console.log("Iyaa");
  },
};

console.log(obj.sayHi.name);
console.log(obj.saySomething.name);

// 2. Properti length
function tambah(a, b, c, ...d) {}
console.log(tambah.length);

// 3. Menambahkan Properti Kustom
function sayHello() {
  console.log("Hello");
  sayHello.counter++;
}

sayHello.counter = 0;

sayHello();
sayHello();

console.log(sayHello.counter);

let obj2 = {
  nama: "John",
};
obj2.umur = 20;
console.log(obj2);

let sayOla = function func(who) {
  who ? console.log(`Hello, ${who}`) : func("Guest");
};

let welcome = sayOla;
sayOla = null; // Pembuktian walaupun fungsi diubah, tidak berpengaruh ke fungsi yang sudah diinisialisasi

welcome("Redpunk");
