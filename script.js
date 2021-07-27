console.log("This is my index js file");

// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=9375f246cb5d40f194db4cb7044dd7ce`, true);

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
            // console.log(element, index)
            let news = `<div class="col">
    <div class="card h-100">
      <img src="${element["urlToImage"]}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${element["title"]}</h5>
        <p class="card-text">${element["content"]}</p>
      </div>
      <a href="${element["url"]}"><button  type="button" class="btn btn-success">Read More About This</button></a>
    </div>
  </div>`;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send()


