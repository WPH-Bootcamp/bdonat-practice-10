// Date & Time

// 1. Date
// 1.1 Membuat Object Date
// -. new Date()
let sekarang = new Date();
console.log(sekarang);

// -. new Date(milliseconds)
let Jan01_1970 = new Date(0);
console.log(Jan01_1970);

let hour24 = 24 * 3600 * 1000;
let Jan02_1970 = new Date(hour24);
console.log(Jan02_1970);

// -. new Date(datestring)
// PATTERN : YYYY-MM-DD
let tanggal = new Date("2025-11-13");
console.log(tanggal);

// -. new Date(year, month, date, hours, minutes, seconds, ms)
let day = new Date(2025, 10, 13, 10, 30, 59);
console.log(day);

// 1.2 Mengakses Komponen Tanggal
let tanggalLain = new Date(2011, 0, 1, 2, 3, 4, 567);
console.log(tanggalLain.getFullYear());
console.log(tanggalLain.getMonth());
console.log(tanggalLain.getDate());
console.log(tanggalLain.getHours());
console.log(tanggalLain.getMinutes());
console.log(tanggalLain.getSeconds());
console.log(tanggalLain.getMilliseconds());

// 1.3 Mengatur Komponen Tanggal
let today = new Date();
// setHours(hoursValue, minutesValue, secondsValue, miliSecondsValue)
today.setHours(0, 0, 0, 0);
console.log(today);

// 1.4 Koreksi Otomatis
let koreksi = new Date(2025, 1, 30);
console.log(koreksi);

// 1.5 Perhitungan Tanggal
let mulai = new Date();

for (let i = 0; i < 100000; i++) {
  let doSomething = i ** 3;
}

let selesai = new Date();
console.log(`Looping memakan waktu ${selesai - mulai} ms`);

// 1.6 Date.parse dari String
let ms = Date.parse("2012-01-26T13:51:50.417-07:00");
console.log(ms);

const javaScriptRelease = Date.parse("04 Dec 1995 00:12:00 GMT");
console.log(javaScriptRelease);

// STUDI KASUS
const date = new Date("2025-11-12");
console.log(date);

const formatID = (d, zone) => {
  return d.toLocaleString("id-ID", {
    dateStyle: "full",
    timeStyle: "medium",
    timeZone: zone,
  });
};

const wib = formatID(date, "Asia/Jakarta");
const wita = formatID(date, "Asia/Makassar");
const wit = formatID(date, "Asia/Jayapura");

console.log({ wib, wita, wit });
