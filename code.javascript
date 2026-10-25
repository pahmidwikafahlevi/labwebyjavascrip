function ubahTampilan() {
  const pesan = document.getElementById("pesan");
  const sudahDiubah = pesan.dataset.diubah === "true";

  pesan.textContent = sudahDiubah
    ? "Konten awal."
    : "Tampilan berhasil diubah dengan JavaScript!";
  pesan.dataset.diubah = String(!sudahDiubah);
}

function latihanPrompt() {
  const nama = prompt("Masukkan nama Anda:");
  if (nama === null) return;

  const namaBersih = nama.trim();
  alert(namaBersih ? `Halo, ${namaBersih}! Selamat datang.` : "Nama belum diisi.");
}

function operasiDasar(a, b) {
  const hasil = [
    `Penjumlahan: ${a + b}`,
    `Pengurangan: ${a - b}`,
    `Perkalian: ${a * b}`,
    `Pembagian: ${b !== 0 ? a / b : "Tidak dapat dibagi nol"}`,
    `Modulus: ${b !== 0 ? a % b : "Tidak dapat dibagi nol"}`
  ].join("\n");

  document.getElementById("hasilOperasi").textContent = hasil;
  console.log(hasil);
}

function operasiDariPrompt() {
  const teksA = prompt("Masukkan bilangan pertama:");
  if (teksA === null) return;
  const teksB = prompt("Masukkan bilangan kedua:");
  if (teksB === null) return;

  const a = teksA.trim() === "" ? NaN : Number(teksA);
  const b = teksB.trim() === "" ? NaN : Number(teksB);
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    alert("Masukkan dua bilangan yang valid.");
    return;
  }

  operasiDasar(a, b);
}

function latihanNilai() {
  const teks = prompt("Masukkan nilai (0–100):");
  if (teks === null) return;

  const nilai = teks.trim() === "" ? NaN : Number(teks);
  if (!Number.isFinite(nilai) || nilai < 0 || nilai > 100) {
    alert("Input tidak valid. Masukkan angka dari 0 sampai 100.");
  } else {
    alert(nilai >= 65 ? "LULUS" : "BELUM LULUS!");
    alert(nilai <= 40 ? "MAKANNYA BELAJAR YANG BENAR! " : "MANTAP TINGKATKAN PRESTASIMU!");
  }
}

function latihanSwitch() {
  const pilihan = prompt("Masukkan angka 1–10:");
  if (pilihan === null) return;

  const bilangan = {
    "1": "Bilangan satu",
    "2": "Bilangan dua",
    "3": "Bilangan tiga",
    "4": "Bilangan empat",
    "5": "Bilangan lima",
    "6": "Bilangan enam",
    "7": "Bilangan tujuh",
    "8": "Bilangan delapan",
    "9": "Bilangan sembilan",
    "10": "Bilangan sepuluh"
  };
  alert(bilangan[pilihan.trim()] || "Pilihan tidak tersedia.");
}

function cekBilangan() {
  const input = document.getElementById("bilangan");
  const hasil = document.getElementById("hasilBilangan");

  if (input.value.trim() === "" || !Number.isInteger(input.valueAsNumber)) {
    hasil.textContent = "Masukkan bilangan bulat yang valid.";
    hasil.classList.add("error");
    return;
  }

  hasil.textContent = input.valueAsNumber % 2 === 0
    ? "Bilangan genap."
    : "Bilangan ganjil.";
  hasil.classList.remove("error");
}

function ubahWarnaLatar(warna) {
  document.body.style.backgroundColor = warna;
}

function hitungTotalMenu() {
  const total = Array.from(document.querySelectorAll(".menu:checked"))
    .reduce((jumlah, item) => jumlah + Number(item.value), 0);
  document.getElementById("total").textContent = total.toLocaleString("id-ID");
}

function nilaiValid(input) {
  const nilai = input.valueAsNumber;
  return input.value.trim() !== ""
    && Number.isFinite(nilai)
    && nilai >= 0
    && nilai <= 100;
}

function prosesNilai() {
  const inputs = ["tugas", "uts", "uas"].map((id) => document.getElementById(id));
  const hasil = document.getElementById("hasilNilai");

  if (!inputs.every(nilaiValid)) {
    hasil.textContent = "Isi semua nilai dengan angka dari 0 sampai 100.";
    hasil.classList.add("error");
    return;
  }

  const [tugas, uts, uas] = inputs.map((input) => input.valueAsNumber);
  const nilaiAkhir = tugas * 0.3 + uts * 0.3 + uas * 0.4;
  let predikat = "E";
  if (nilaiAkhir >= 85) predikat = "A";
  else if (nilaiAkhir >= 75) predikat = "B";
  else if (nilaiAkhir >= 65) predikat = "C";
  else if (nilaiAkhir >= 50) predikat = "D";

  hasil.textContent = `Nilai akhir: ${nilaiAkhir.toFixed(2)} | Predikat: ${predikat} | Status: ${nilaiAkhir >= 60 ? "Lulus" : "Belum lulus"}`;
  hasil.classList.remove("error");
}

function demoCekGenap() {
  const hasil = document.getElementById("hasilCekGenap");
  hasil.textContent = `cekGenap(8): ${8 % 2 === 0 ? "genap" : "ganjil"}; cekGenap(7): ${7 % 2 === 0 ? "genap" : "ganjil"}.`;
}

function validasiForm() {
  const nama = document.getElementById("nama").value.trim();
  const inputNilai = document.getElementById("nilai");
  const hasil = document.getElementById("hasilForm");

  if (!nama) {
    hasil.textContent = "Nama tidak boleh kosong.";
    hasil.classList.add("error");
  } else if (!nilaiValid(inputNilai)) {
    hasil.textContent = "Nilai harus berupa angka dari 0 sampai 100.";
    hasil.classList.add("error");
  } else {
    hasil.textContent = `Data valid: ${nama} memperoleh nilai ${inputNilai.valueAsNumber}.`;
    hasil.classList.remove("error");
  }
}

function toggleElemen() {
  const elemen = document.getElementById("elemenToggle");
  elemen.hidden = !elemen.hidden;
}

document.querySelectorAll(".menu").forEach((item) => {
  item.addEventListener("change", hitungTotalMenu);
});

const daftarPerkalian = document.getElementById("tabel7");
for (let i = 1; i <= 10; i++) {
  const baris = document.createElement("li");
  baris.textContent = `7 × ${i} = ${7 * i}`;
  daftarPerkalian.appendChild(baris);
}
