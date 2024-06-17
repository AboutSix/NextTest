document.addEventListener('DOMContentLoaded', function () {
    // api
    const apiEndpoint = 'https://2r2t6f8ohx.microcms.io/api/v1/blogs';
    const apiKey = 'DWIYGBhtttLHaxgOikw2Y15tAoBJ4wpSeZQU';

    fetch(apiEndpoint, {
        headers: {
            'X-API-KEY': apiKey
        }
    })
    .then(response => response.json())
    .then(data => {
        const newss = data.contents.slice(1, 4).reverse();;
        const newsContainer = document.getElementById('news');
        newss.forEach(news => {
            const newsItem = document.createElement('a');
            const title = document.createElement('p');
            const image = document.createElement('img');

            image.src = news.eyecatch.url;
            image.alt = news.title;
            image.width = news.eyecatch.width;
            image.height = news.eyecatch.height;
            title.textContent = news.title;

            newsItem.setAttribute('href', `javascript:void(0)`);
            newsItem.appendChild(image);
            newsItem.appendChild(title);
            newsContainer.appendChild(newsItem);
        });
    })
    .catch(error => {
        console.error('Error fetching news:', error);
    });

    // nav
    var menuToggle = document.getElementById('menu-toggle');
    var header = document.querySelector('.header .top')
    var nav = document.querySelector('.nav');
    var img = menuToggle.querySelector('img');
    var body = document.body;

    menuToggle.addEventListener('click', function() {
        if (nav.classList.contains('show')) {
            img.src = './assets/menu.png';
            nav.classList.remove('show');
            body.classList.remove('no-scroll');
            header.classList.remove('navshow');
            setTimeout(function() {
                nav.style.display = 'none';
            }, 500);
        } else {
            img.src = './assets/close.png';
            nav.style.display = 'block';
            body.classList.add('no-scroll');
            header.classList.add('navshow');
            setTimeout(function() {
                nav.classList.add('show');
            }, 10);
        }
    });

    var navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            var targetId = link.getAttribute('data-target');
            var targetElement = document.getElementById(targetId);
            if (targetElement) {
                event.preventDefault();

                img.src = './assets/menu.png';
                nav.classList.remove('show');
                body.classList.remove('no-scroll');
                header.classList.remove('navshow');
                setTimeout(function() {
                    nav.style.display = 'none';
                }, 500);

                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        });
    });
});