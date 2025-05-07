loadSection('navbar', 'sections/navbar.html');
loadSection('hero', 'sections/hero.html');
loadSection('tentang', 'sections/tentang_ubhi.html');
loadSection('beasiswa', 'sections/beasiswa.html');
loadSection('footer', 'sections/footer.html');

loadSection('kontak', 'sections/kontak.html', () => {
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const nama = document.getElementById('nama').value.trim();
    const pesan = document.getElementById('pesan').value.trim();
    const whatsappNumber = '6287796400973';

    if (nama && pesan) {
      const fullMessage = `Halo, saya ${nama}. ${pesan}`;
      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(fullMessage)}`;
      window.open(url, '_blank');
    } else {
      alert('Nama dan pesan tidak boleh kosong.');
    }
  });
});

function loadSection(id, file, callback) {
  fetch(file)
    .then((res) => res.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;
      if (callback) callback();
    });
}
