document.addEventListener('DOMContentLoaded', () => {

    const header = document.getElementById('main-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    const slides = document.querySelectorAll('.slide');
    const btnPrev = document.querySelector('.slider-btn.prev');
    const btnNext = document.querySelector('.slider-btn.next');
    
    if (slides.length > 0) {
        let currentSlide = 0;
        let slideInterval;

        const showSlide = (index) => {
            slides.forEach((slide, i) => {
                slide.classList.remove('active');
                if (i === index) {
                    slide.classList.add('active');
                }
            });
        };
        
        const nextSlide = () => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        };
        
        const prevSlide = () => {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        };

        const startSlider = () => {
            slideInterval = setInterval(nextSlide, 5000);
        };

        const stopSlider = () => {
            clearInterval(slideInterval);
        };

        showSlide(currentSlide);
        startSlider();

        btnNext.addEventListener('click', () => {
            stopSlider();
            nextSlide();
            startSlider();
        });

        btnPrev.addEventListener('click', () => {
            stopSlider();
            prevSlide();
            startSlider();
        });
    }

    const portfolioSwiper = new Swiper('.portfolio-swiper', {
        loop: true,
        spaceBetween: 20, 
        grabCursor: true,

        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },

        navigation: {
          nextEl: '.portfolio-carousel-wrapper .swiper-button-next',
          prevEl: '.portfolio-carousel-wrapper .swiper-button-prev',
        },
      
        breakpoints: {
          320: {
            slidesPerView: 1.4, 
            spaceBetween: 15,
            centeredSlides: true, 
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 20,
            centeredSlides: false, 
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 30
          }
        }
    });

    const locationTabs = document.querySelectorAll('.location-tab-btn');
    const locationPanes = document.querySelectorAll('.location-pane');

    locationTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = tab.getAttribute('data-target');

            locationTabs.forEach(t => t.classList.remove('active'));
            locationPanes.forEach(p => p.classList.remove('active'));

            tab.classList.add('active');
            document.getElementById(targetId).classList.add('active');
        });
    });

});