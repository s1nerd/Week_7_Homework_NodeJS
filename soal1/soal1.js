// soal1.js
const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const persegipanjang = require("./persegipanjang");
const persegi = require("./persegi");

class Rumus {
  constructor() {
    this.start();
  }

  start() {
    rl.question(
      "Pilih bangun datar (1. Persegi Panjang, 2. Persegi): ",
      (choice) => {
        if (choice === "1") {
          this.hitungPersegiPanjang();
        } else if (choice === "2") {
          this.hitungPersegi();
        } else {
          console.log("Pilihan tidak valid.");
          rl.close();
        }
      }
    );
  }

  hitungPersegiPanjang() {
    rl.question("Masukkan panjang: ", (panjang) => {
      rl.question("Masukkan lebar: ", (lebar) => {
        const luas = persegipanjang.hitungLuas(panjang, lebar);
        const keliling = persegipanjang.hitungKeliling(panjang, lebar);

        // Menyusun hasil perhitungan ke dalam format HTML
        const hasilHTML = `
          <html>
          <head>
            <title>Hasil Perhitungan</title>
          </head>
          <body>
            <h1>Hasil Perhitungan</h1>
            <p>Luas Persegi Panjang: ${luas}</p>
            <p>Keliling Persegi Panjang: ${keliling}</p>
          </body>
          </html>
        `;

        // Menyimpan hasil perhitungan dalam sebuah file HTML
        fs.writeFileSync("hasil.html", hasilHTML);

        console.log("Hasil perhitungan telah disimpan dalam hasil.html");
        rl.close();
      });
    });
  }

  hitungPersegi() {
    rl.question("Masukkan panjang sisi: ", (sisi) => {
      const luas = persegi.hitungLuas(sisi);
      const keliling = persegi.hitungKeliling(sisi);

      // Menyusun hasil perhitungan ke dalam format HTML
      const hasilHTML = `
        <html>
        <head>
          <title>Hasil Perhitungan</title>
        </head>
        <body>
          <h1>Hasil Perhitungan</h1>
          <p>Luas Persegi: ${luas}</p>
          <p>Keliling Persegi: ${keliling}</p>
        </body>
        </html>
      `;

      // Menyimpan hasil perhitungan dalam sebuah file HTML
      fs.writeFileSync("hasil.html", hasilHTML);

      console.log("Hasil perhitungan telah disimpan dalam hasil.html");
      rl.close();
    });
  }
}

new Rumus();
