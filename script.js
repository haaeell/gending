
      function toggleNav() {
        var nav = document.getElementById("navbarNav");
        var toggle = document.getElementById("toggleMenu");
        nav.classList.toggle("show");
        toggle.classList.toggle("active");
      }
       // Menutup navbar saat mengklik di luar area navbar
    document.addEventListener("click", function(event) {
      var nav = document.getElementById("navbarNav");
      var toggle = document.getElementById("toggleMenu");

      if (!nav.contains(event.target) && !toggle.contains(event.target)) {
        nav.classList.remove("show");
        toggle.classList.remove("active");
      }
    });

    var map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

      var swiper = new Swiper(".mySwiper", {
        pagination: {
          el: ".swiper-pagination",
        },
      });

      const navbar = document.querySelector('.navbar');
    
      window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
          navbar.classList.add('transparent');
        } else {
          navbar.classList.remove('transparent');
        }
      });
      var swiper = new Swiper(".mySwiper", {
        loop: true, // Aktifkan auto loop
  pagination: {
    el: ".swiper-pagination",
    clickable: true, // Dots bisa diklik untuk pindah slide
  },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      document.addEventListener("DOMContentLoaded", function () {
        const scrollToTopButton = document.getElementById("scrollToTop");
      
        window.addEventListener("scroll", function () {
          if (window.scrollY > 200) {
            scrollToTopButton.classList.add("show-scroll");
          } else {
            scrollToTopButton.classList.remove("show-scroll");
          }
        });
      
        scrollToTopButton.addEventListener("click", function () {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        });
      });
      document.addEventListener("DOMContentLoaded", function () {
        const targetNumber = 2023; // Ganti dengan angka yang Anda inginkan
        const counterElement = document.getElementById("counter");
      
        new Waypoint({
          element: counterElement,
          handler: function () {
            anime({
              targets: counterElement,
              innerHTML: [0, targetNumber],
              duration: 1500,
              easing: "linear",
              round: 1, // Bulatkan angka ke satu desimal
            });
            this.destroy(); // Hentikan pengamatan setelah animasi selesai
          },
          offset: "bottom-in-view",
        });
      });
            