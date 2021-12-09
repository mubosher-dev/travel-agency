window.addEventListener('DOMContentLoaded', () => {
    let searchBtn = document.querySelector('#search-btn'),
        searchBar = document.querySelector('.seachbar-container');
    let loginClose = document.querySelector('#login-bar'),
        loginBar = document.querySelector('.login-form-container'),
        loginOpen = document.querySelector('#login-btn'),
        searchInp = document.querySelector('#search-bar'),
        searchLabel = document.querySelector('.label');


    let menuBtn = document.querySelector('#menu'),
        navbar = document.querySelector('.navbar'),
        header = document.querySelector('header'),
        navLink = navbar.querySelectorAll('a'),
        loader = document.querySelector('.loader');

    setTimeout(() => {
        loader.style.opacity = 0;
        setTimeout(() => {
            loader.style.display = 'none';
        }, 2000);
    }, 3000);


    searchInp.addEventListener('click', (e) => {
        e.preventDefault();
    })

   navLink.forEach(navs => {
       navs.addEventListener('click', () => {
        document.querySelector(`.navbar .active`).classList.remove('active');
        navs.classList.add('active');
       })
   })
 


    searchLabel.addEventListener('click', () => {
        if (searchInp.value == "service") {
            document.body.scrollTop = 2500;
            document.documentElement.scrollTop = 2500;
        }
        else if (searchInp.value == "book") {
            document.body.scrollTop = 600;
            document.documentElement.scrollTop = 600;
        }
        else if (searchInp.value == "package") {
            document.body.scrollTop = 1200;
            document.documentElement.scrollTop = 1200;
        }
        else if (searchInp.value == "gallery") {
            document.body.scrollTop = 3000;
            document.documentElement.scrollTop = 3000;
        }
        else if (searchInp.value == "preview") {
            document.body.scrollTop = 4000;
            document.documentElement.scrollTop = 4000;
        }
        else if (searchInp.value == "contacts") {
            document.body.scrollTop = 4800;
            document.documentElement.scrollTop = 4800;
        }
        else if (searchInp.value == '') {
            alert('nima qidiryapsiz shuni yozing');
        }
    });


    window.addEventListener('scroll', () => {
        header.classList.toggle('active', window.scrollY > 0);
        searchBar.classList.remove('active', window.scrollY > 0);
        searchBtn.classList.remove('fa-times', window.scrollY > 0);
        scrolBtn.classList.toggle('active', window.scrollY > 500);
    });

    menuBtn.addEventListener('click', () => {
        navbar.classList.toggle('active');
        menuBtn.classList.toggle('fa-times')
    });



    loginOpen.addEventListener('click', () => {
        loginBar.classList.toggle('active');
    });

    loginClose.addEventListener('click', () => {
        loginBar.classList.remove('active');
    });

    searchBtn.addEventListener('click', () => {
        searchBtn.classList.toggle('fa-times');
        searchBar.classList.toggle('active');
    });

    let vidioBtn = document.querySelectorAll('.vid-btn');

    vidioBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector(`.controls .active`).classList.remove('active');
            btn.classList.add('active');

            let src = btn.getAttribute('dara-src');

            document.querySelector('#vidio_slider').src = src;
        })
    });



    let scrolBtn = document.querySelector('.scrolbtn');

    scrolBtn.addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })


    var swiper = new Swiper(".review-slider", {
        spaceBetwen: 20,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            }
        }

    });

    var swiper = new Swiper(".brand-container", {
        spaceBetwen: 20,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
            450: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 4,
            },
            1024: {
                slidesPerView: 6,
            }
        }

    });

});