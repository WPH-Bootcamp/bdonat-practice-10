// Lexical Environment

// Contoh
let kolamRenangKomplek = "Kolam Renang Umum";

function RumahDicky() {
  let kolamRenangDicky = "KolamRenangDicky";
  console.log({ kolamRenangDicky, kolamRenangKomplek });
  return kolamRenangDicky;
}
RumahDicky();

let kolamBebas = RumahDicky();
console.log(kolamBebas);

function makeCounter() {
  let count = 0;
  return function () {
    return count++;
  };
}

let counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
