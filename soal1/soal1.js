const geometry = require("./geometry");

// fungsi dari modul geometry.js
const sisiPersegi = 5;
const panjangPersegiPanjang = 6;
const lebarPersegiPanjang = 4;

const luasPersegi = geometry.hitungLuasPersegi(sisiPersegi);
const kelilingPersegi = geometry.hitungKelilingPersegi(sisiPersegi);
const luasPersegiPanjang = geometry.hitungLuasPersegiPanjang(
  panjangPersegiPanjang,
  lebarPersegiPanjang
);
const kelilingPersegiPanjang = geometry.hitungKelilingPersegiPanjang(
  panjangPersegiPanjang,
  lebarPersegiPanjang
);

console.log(`Luas Persegi dengan sisi ${sisiPersegi}: ${luasPersegi}`);
console.log(`Keliling Persegi dengan sisi ${sisiPersegi}: ${kelilingPersegi}`);
console.log(
  `Luas Persegi Panjang dengan panjang ${panjangPersegiPanjang} dan lebar ${lebarPersegiPanjang}: ${luasPersegiPanjang}`
);
console.log(
  `Keliling Persegi Panjang dengan panjang ${panjangPersegiPanjang} dan lebar ${lebarPersegiPanjang}: ${kelilingPersegiPanjang}`
);
