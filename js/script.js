// Menangkap elemen form
const form = document.querySelector('form');

// Menangkap tombol kirim
const submitButton = form.querySelector('button');

// Event saat form disubmit
form.addEventListener('submit', function (e) {
  e.preventDefault(); 

  // Ambil nilai pesan
  const pesan = document.getElementById('pesan').value;

  // Validasi pesan minimal 10 karakter
  if (pesan.length < 10) {
    alert('Pesan minimal harus 10 karakter.');
    return;
  }

  // Jika validasi lolos
  alert('Terima kasih, pesan Anda telah terkirim!');

  // Reset form setelah submit
  form.reset();
});

// Efek hover animasi sederhana untuk tombol
submitButton.addEventListener('mouseover', () => {
  submitButton.style.backgroundColor = '#777';
});

submitButton.addEventListener('mouseout', () => {
  submitButton.style.backgroundColor = '#333';
});
