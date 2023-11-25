document.addEventListener("DOMContentLoaded", function() {
    // Ambil semua elemen dengan kelas 'animate-on-scroll'
    const animateElements = document.querySelectorAll('.animate-on-scroll');
  
    // Fungsi untuk mengecek apakah elemen masuk dalam pandangan saat scroll
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    // Fungsi untuk menangani animasi elemen
    function handleAnimation() {
      animateElements.forEach((element) => {
        if (isElementInViewport(element)) {
          element.classList.add('animate');
        }
      });
    }
  
    // Panggil fungsi handleAnimation saat scroll
    window.addEventListener('scroll', handleAnimation);
  
    // Panggil fungsi handleAnimation saat halaman dimuat (untuk menangani elemen yang sudah dalam pandangan)
    handleAnimation();
  });