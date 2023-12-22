const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function (){
    nav.classList.toggle('slide');
});
form.addEventListener('submit', e => {
    e.preventDefault(); // Menambahkan ini untuk menghentikan aksi formulir default
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  });
  form.addEventListener('submit', e => {
    e.preventDefault(); // Menambahkan ini untuk menghentikan aksi formulir default
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        console.log('Success!', response);
        alert('Formulir berhasil dikirim!'); // Menambahkan pesan keberhasilan
      })
      .catch(error => console.error('Error!', error.message))
  });
  form.addEventListener('submit', async e => {
    e.preventDefault(); // Menambahkan ini untuk menghentikan aksi formulir default
    try {
      const response = await fetch(scriptURL, { method: 'POST', body: new FormData(form) });
      console.log('Success!', response);
      alert('Formulir berhasil dikirim!'); // Menambahkan pesan keberhasilan
    } catch (error) {
      console.error('Error!', error.message);
    }
  });
  form.addEventListener('submit', async e => {
    e.preventDefault(); // Menambahkan ini untuk menghentikan aksi formulir default
    try {
      const response = await fetch(scriptURL, { method: 'POST', body: new FormData(form) });
  
      if (response.ok) {
        console.log('Success!', response);
        alert('Formulir berhasil dikirim!'); // Menambahkan pesan keberhasilan
      } else {
        console.error('Gagal mengirim formulir. Kode status:', response.status);
        alert('Terjadi kesalahan saat mengirim formulir.');
      }
    } catch (error) {
      console.error('Error!', error.message);
      alert('Terjadi kesalahan saat mengirim formulir.');
    }
  });
    