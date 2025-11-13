// Decorator and Forwarding
// 1. Call Forwarding: call dan apply
// -. call()
function perkenalan() {
  console.log("Halo, saya", this.nama);
}

const orang1 = { nama: "Ucup" };
const orang2 = { nama: "Renday" };

perkenalan.call(orang1);
perkenalan.call(orang2);

// -. apply()
function tambah(a, b) {
  return a + b;
}
console.log(tambah.apply(null, [3, 7]));

const user = {
  nama: "Bob",
  sapaan(greet, tanda) {
    console.log(`${greet}, ${this.nama}${tanda}`);
  },
};

const orangLain = { nama: "Rafi" };

user.sapaan.apply(null, ["Halo", "!"]);

// 2. Decorators: Pembungkus Fungsi
// STUDI KASUS
function logDecorator(func) {
  return function (...args) {
    console.log("Function callled with : ", args);
    return func.apply(this, args);
  };
}

function multiply(a, b) {
  return a * b;
}

const loggedMultiply = logDecorator(multiply);
console.log(loggedMultiply(3, 5));
