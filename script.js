
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