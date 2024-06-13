document.addEventListener('DOMContentLoaded', function () {
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
});