// animasi text jumbotron
const texts = ["System Analyst", "Instructor", "Frontend Develover"]; // Daftar teks yang ingin Anda tampilkan
let count = 0; // Variabel untuk menghitung indeks teks yang sedang ditampilkan
let index = 0; // Variabel untuk melacak indeks karakter yang sedang ditampilkan
let isDeleting = false; // Variabel untuk menandai apakah proses penghapusan sedang berlangsung
let currentText = ""; // Variabel untuk menyimpan teks yang sedang ditampilkan
let letter = ""; // Variabel untuk menyimpan karakter yang sedang ditampilkan

(function type() {
    if (count === texts.length) {
        count = 0; // Kembali ke teks pertama setelah semua teks selesai ditampilkan
    }
    currentText = texts[count]; // Mengambil teks yang sedang ditampilkan

    if (!isDeleting) {
        letter = currentText.slice(0, ++index);
    } else {
        letter = currentText.slice(0, --index);
    }

    document.getElementById('typing').textContent = letter; // Menampilkan karakter-karakter yang ditambahkan atau dihapus dari elemen

    if (letter.length === currentText.length && !isDeleting) {
        isDeleting = true; // Memulai proses penghapusan setelah teks selesai ditampilkan
        setTimeout(type, 1000); // Waktu jeda sebelum proses penghapusan dimulai
    } else if (letter.length === 0 && isDeleting) {
        isDeleting = false; // Menghentikan proses penghapusan setelah teks dihapus seluruhnya
        count++; // Pindah ke teks berikutnya setelah teks selesai dihapus
        setTimeout(type, 500); // Waktu jeda sebelum menampilkan teks berikutnya
    } else {
        setTimeout(type, 50); // Waktu jeda antara penambahan atau penghapusan karakter
    }
}());


// navbar
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 0) { // Saat di-scroll
        navbar.classList.add('scrolled'); // Tambahkan kelas scrolled
    } else { // Ketika kembali ke atas
        navbar.classList.remove('scrolled'); // Hapus kelas scrolled
    }
});
