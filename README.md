# Lab5Web — Praktikum 5: JavaScript
 
**Mata kuliah:** Pemrograman Web — Pertemuan 6

**Pahmi Dwika Fahlevi / 312510389 / Kelas: I253C** 
 
## Tujuan
1. Memahami sintaks dasar JavaScript dan cara menyisipkan JavaScript pada HTML.
2. Menggunakan variabel, tipe data, operator, percabangan, perulangan, dan function.
3. Menampilkan informasi melalui console, alert, prompt, dan elemen HTML.
4. Memanipulasi konten dan gaya elemen HTML.
5. Membuat interaksi form dan validasi input.
## Struktur Folder
```
Lab5Web/
├── index.html
├── script.js
├── README.md
└── screenshots/   (isi dengan screenshot hasil)
```
 
## Cara Menjalankan
1. Buka folder `Lab5Web` di Visual Studio Code.
2. Buka `index.html` di browser (klik dua kali atau Live Server).
3. Tekan F12 → tab **Console** untuk melihat output `console.log`.
## Langkah Kerja
1. Membuat folder kerja, `index.html`, dan `script.js` (dihubungkan dengan `<script src="script.js">` di akhir `<body>`).
2. Mengerjakan Latihan 1–8, Mini Project, dan Eksperimen Mandiri secara berurutan.
3. Setiap latihan diberi tombol/form sendiri di `index.html` agar `prompt` tidak muncul sekaligus saat halaman dibuka.
4. Mengambil screenshot dan menyimpannya di folder `screenshots/`.
## Hasil Setiap Latihan
 
| Latihan | Ringkasan | Hasil yang diharapkan | Screenshot |
|---|---|---|---|
| 1 | Output halaman dan Console | Teks halaman berubah menjadi "Hello World"; Console juga menampilkan "Hello World". Perbedaan: `textContent` tampil bagi pengunjung di halaman, `console.log` hanya terlihat di DevTools (untuk developer). | `screenshots/latihan1.png` |
| 2 | `prompt` + `alert` | Isi nama → alert "Halo, nama!" dan teks halaman berubah. **Cancel** (`null`) dan input kosong → alert "Nama belum diisi." | `screenshots/latihan2.png` |
| 3 | Function aritmetika | `operasiDasar(9, 4)` → 13, 5, 36, 2.25, 1. Kasus `b = 0` ditangani (pembagian dan modulus menampilkan "Tidak dapat dibagi nol"). | `screenshots/latihan3.png` |
| 4 | if–else nilai | Nilai ≥ 60 → "Lulus", < 60 → "Belum lulus", kosong/huruf/di luar 0–100/Cancel → "Input nilai tidak valid." | `screenshots/latihan4.png` |
| 5 | switch 1–5 | Angka 1–5 → nama bilangan; selain itu → "Pilihan tidak tersedia". | `screenshots/latihan5.png` |
| 6 | Genap/ganjil | 4 → genap; -3 → ganjil; 0 → genap; 2.5 dan kosong → "Masukkan bilangan bulat yang valid." | `screenshots/latihan6.png` |
| 7 | Warna latar | Tiga tombol memakai satu function `ubahWarnaLatar(warna)`. | `screenshots/latihan7.png` |
| 8 | Checkbox menu | Total berubah otomatis saat dicentang/dilepas, ditampilkan format `id-ID` (mis. Ayam + Telur = 7.500). | `screenshots/latihan8.png` |
 
### Mini Project — Kalkulator Nilai
Nilai akhir = 30% tugas + 30% UTS + 40% UAS. Function perhitungan (`hitungNilaiAkhir`, `tentukanPredikat`, `tentukanStatus`) dipisah dari function tampilan (`prosesNilai`). Input divalidasi 0–100 dan hasil tampil di halaman.
 
| Skenario | Tugas | UTS | UAS | Nilai akhir | Predikat | Status |
|---|---|---|---|---|---|---|
| 1 | 85 | 78 | 88 | 84.10 | B | Lulus |
| 2 | 90 | 90 | 90 | 90.00 | A | Lulus |
| 3 | 60 | 60 | 60 | 60.00 | C | Lulus |
| 4 | 50 | 40 | 55 | 49.00 | E | Belum lulus |
| 5 | 120 | 80 | 80 | — | — | Ditolak: "Semua nilai harus diisi dengan angka 0–100." |
 
Screenshot: `screenshots/miniproject.png`
 
### Eksperimen Mandiri
1. `operasiDariPrompt()` — dua nilai dari `prompt`, dikonversi dengan `Number()`.
2. Tabel perkalian 7 (1–10) dibuat dengan perulangan `for`.
3. `cekGenap(angka)` mengembalikan `true` jika genap.
4. `validasiForm()` — kolom tidak boleh kosong.
5. Menu Latihan 8 ditambah **Nasi Putih (Rp3.000)** dan **Es Teh (Rp2.000)**.
6. Tombol sembunyikan/tampilkan elemen (`style.display`).
## Jawaban Pertanyaan
 
**1. Perbedaan `console.log()`, `alert()`, `prompt()`, dan `textContent`/`innerHTML`**
- `console.log()` mencetak pesan ke Console browser, untuk debugging; tidak terlihat pengunjung biasa.
- `alert()` menampilkan kotak dialog berisi pesan dan menghentikan interaksi sampai ditutup.
- `prompt()` menampilkan dialog yang meminta masukan; hasilnya berupa string (atau `null` jika Cancel).
- `textContent` mengubah isi teks elemen HTML (aman, tidak menafsirkan tag); `innerHTML` mengubah isi sebagai HTML sehingga tag ditafsirkan (hati-hati terhadap input pengguna).
**2. Perbedaan `let` dan `const`**
`let` dapat ditetapkan ulang, `const` tidak.
```js
let umur = 20;  umur = 21;      // boleh
const nama = "Rani";  // nama = "Dina";  → TypeError
```
 
**3. Perbedaan `==` dan `===`**
`==` membandingkan nilai setelah konversi tipe otomatis (`5 == "5"` → `true`). `===` membandingkan nilai **dan** tipe tanpa konversi (`5 === "5"` → `false`). Disarankan memakai `===`.
 
**4. Fungsi if–else dan switch**
`if–else` menguji kondisi logis/rentang (mis. `nilai >= 60`). `switch` memilih satu tindakan dari sejumlah nilai tertentu yang pasti (mis. pilihan menu "1", "2", "3"); `break` mencegah eksekusi berlanjut ke case berikutnya.
 
**5. Fungsi parameter dan return**
Parameter menerima data masukan ke dalam function agar bisa dipakai ulang dengan nilai berbeda. `return` mengembalikan hasil ke pemanggil, sehingga hasilnya dapat disimpan, dihitung lagi, atau ditampilkan.
 
**6. `document.getElementById()`**
Method ini mencari elemen di DOM yang atribut `id`-nya sama persis dengan string yang diberikan dan mengembalikan objek elemen tersebut (atau `null` jika tidak ada). Objek itu kemudian dapat diubah, mis. `document.getElementById("pesan").textContent = "Halo"`.
 
**7. Validasi form (nama tidak kosong, nilai 0–100)**
Lihat `validasiForm()` di `script.js` (bagian "Eksperimen 4 dan Tugas 7").
 
 # Lab5Web — Praktikum 5: JavaScript
 
**Mata kuliah:** Pemrograman Web — Pertemuan 6

**Rahsya Alfrendika / 312510339 / Kelas: I253C** 
 
## Tujuan
1. Memahami sintaks dasar JavaScript dan cara menyisipkan JavaScript pada HTML.
2. Menggunakan variabel, tipe data, operator, percabangan, perulangan, dan function.
3. Menampilkan informasi melalui console, alert, prompt, dan elemen HTML.
4. Memanipulasi konten dan gaya elemen HTML.
5. Membuat interaksi form dan validasi input.
## Struktur Folder
```
Lab5Web/
├── index.html
├── script.js
├── README.md
└── screenshots/   (isi dengan screenshot hasil)
```
 
## Cara Menjalankan
1. Buka folder `Lab5Web` di Visual Studio Code.
2. Buka `index.html` di browser (klik dua kali atau Live Server).
3. Tekan F12 → tab **Console** untuk melihat output `console.log`.
## Langkah Kerja
1. Membuat folder kerja, `index.html`, dan `script.js` (dihubungkan dengan `<script src="script.js">` di akhir `<body>`).
2. Mengerjakan Latihan 1–8, Mini Project, dan Eksperimen Mandiri secara berurutan.
3. Setiap latihan diberi tombol/form sendiri di `index.html` agar `prompt` tidak muncul sekaligus saat halaman dibuka.
4. Mengambil screenshot dan menyimpannya di folder `screenshots/`.
## Hasil Setiap Latihan
 
| Latihan | Ringkasan | Hasil yang diharapkan | Screenshot |
|---|---|---|---|
| 1 | Output halaman dan Console | Teks halaman berubah menjadi "Hello World"; Console juga menampilkan "Hello World". Perbedaan: `textContent` tampil bagi pengunjung di halaman, `console.log` hanya terlihat di DevTools (untuk developer). | `screenshots/latihan1.png` |
| 2 | `prompt` + `alert` | Isi nama → alert "Halo, nama!" dan teks halaman berubah. **Cancel** (`null`) dan input kosong → alert "Nama belum diisi." | `screenshots/latihan2.png` |
| 3 | Function aritmetika | `operasiDasar(9, 4)` → 13, 5, 36, 2.25, 1. Kasus `b = 0` ditangani (pembagian dan modulus menampilkan "Tidak dapat dibagi nol"). | `screenshots/latihan3.png` |
| 4 | if–else nilai | Nilai ≥ 60 → "Lulus", < 60 → "Belum lulus", kosong/huruf/di luar 0–100/Cancel → "Input nilai tidak valid." | `screenshots/latihan4.png` |
| 5 | switch 1–5 | Angka 1–5 → nama bilangan; selain itu → "Pilihan tidak tersedia". | `screenshots/latihan5.png` |
| 6 | Genap/ganjil | 4 → genap; -3 → ganjil; 0 → genap; 2.5 dan kosong → "Masukkan bilangan bulat yang valid." | `screenshots/latihan6.png` |
| 7 | Warna latar | Tiga tombol memakai satu function `ubahWarnaLatar(warna)`. | `screenshots/latihan7.png` |
| 8 | Checkbox menu | Total berubah otomatis saat dicentang/dilepas, ditampilkan format `id-ID` (mis. Ayam + Telur = 7.500). | `screenshots/latihan8.png` |
 
### Mini Project — Kalkulator Nilai
Nilai akhir = 30% tugas + 30% UTS + 40% UAS. Function perhitungan (`hitungNilaiAkhir`, `tentukanPredikat`, `tentukanStatus`) dipisah dari function tampilan (`prosesNilai`). Input divalidasi 0–100 dan hasil tampil di halaman.
 
| Skenario | Tugas | UTS | UAS | Nilai akhir | Predikat | Status |
|---|---|---|---|---|---|---|
| 1 | 85 | 78 | 88 | 84.10 | B | Lulus |
| 2 | 90 | 90 | 90 | 90.00 | A | Lulus |
| 3 | 60 | 60 | 60 | 60.00 | C | Lulus |
| 4 | 50 | 40 | 55 | 49.00 | E | Belum lulus |
| 5 | 120 | 80 | 80 | — | — | Ditolak: "Semua nilai harus diisi dengan angka 0–100." |
 
Screenshot: `screenshots/miniproject.png`
 
### Eksperimen Mandiri
1. `operasiDariPrompt()` — dua nilai dari `prompt`, dikonversi dengan `Number()`.
2. Tabel perkalian 7 (1–10) dibuat dengan perulangan `for`.
3. `cekGenap(angka)` mengembalikan `true` jika genap.
4. `validasiForm()` — kolom tidak boleh kosong.
5. Menu Latihan 8 ditambah **Nasi Putih (Rp3.000)** dan **Es Teh (Rp2.000)**.
6. Tombol sembunyikan/tampilkan elemen (`style.display`).
## Jawaban Pertanyaan
 
**1. Perbedaan `console.log()`, `alert()`, `prompt()`, dan `textContent`/`innerHTML`**
- `console.log()` mencetak pesan ke Console browser, untuk debugging; tidak terlihat pengunjung biasa.
- `alert()` menampilkan kotak dialog berisi pesan dan menghentikan interaksi sampai ditutup.
- `prompt()` menampilkan dialog yang meminta masukan; hasilnya berupa string (atau `null` jika Cancel).
- `textContent` mengubah isi teks elemen HTML (aman, tidak menafsirkan tag); `innerHTML` mengubah isi sebagai HTML sehingga tag ditafsirkan (hati-hati terhadap input pengguna).
**2. Perbedaan `let` dan `const`**
`let` dapat ditetapkan ulang, `const` tidak.
```js
let umur = 20;  umur = 21;      // boleh
const nama = "Rani";  // nama = "Dina";  → TypeError
```
 
**3. Perbedaan `==` dan `===`**
`==` membandingkan nilai setelah konversi tipe otomatis (`5 == "5"` → `true`). `===` membandingkan nilai **dan** tipe tanpa konversi (`5 === "5"` → `false`). Disarankan memakai `===`.
 
**4. Fungsi if–else dan switch**
`if–else` menguji kondisi logis/rentang (mis. `nilai >= 60`). `switch` memilih satu tindakan dari sejumlah nilai tertentu yang pasti (mis. pilihan menu "1", "2", "3"); `break` mencegah eksekusi berlanjut ke case berikutnya.
 
**5. Fungsi parameter dan return**
Parameter menerima data masukan ke dalam function agar bisa dipakai ulang dengan nilai berbeda. `return` mengembalikan hasil ke pemanggil, sehingga hasilnya dapat disimpan, dihitung lagi, atau ditampilkan.
 
**6. `document.getElementById()`**
Method ini mencari elemen di DOM yang atribut `id`-nya sama persis dengan string yang diberikan dan mengembalikan objek elemen tersebut (atau `null` jika tidak ada). Objek itu kemudian dapat diubah, mis. `document.getElementById("pesan").textContent = "Halo"`.
 
**7. Validasi form (nama tidak kosong, nilai 0–100)**
Lihat `validasiForm()` di `script.js` (bagian "Eksperimen 4 dan Tugas 7").
 

