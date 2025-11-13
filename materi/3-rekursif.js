// Rekursif -> Cara program memanggil dirinya sendiri ke operasi yang lebih sederhana

// Contoh 1 : Sebelum menggunakan rekursif
function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

console.log(pow(2, 10));

// Contoh 2 : Sesudah menggunakan rekursif
function pow2(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow2(x, n - 1);
  }
}
console.log(pow2(2, 3));

// Contoh 3
function factorial(n) {
  if (n == 1) {
    return 1;
  }

  return n * factorial(n - 1);
}
console.log(factorial(5));
