let ul = document.querySelector('ul');

fetch("https://6084debc9b2bed001704158d.mockapi.io/api/Articles")
.then(response => response.json())
.then(articles => {
    let newArticles = articles.map(article => `<li><img src=${article.Image}<h2>${article.Title}</h2><p>${article.Date}</p><p>${article.Content}</p></li>`)
    newArticles.join('');
    ul.innerHTML = newArticles
})