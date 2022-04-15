import axios from 'axios'
const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
const {headline, authorPhoto, authorName} = article;
  
const card = document.createElement('div');
const cardHeadline = document.createElement('div');
const cardAuthor = document.createElement('div');
const cardContainer = document.createElement('div');
const cardImg = document.createElement('img');
const cardName = document.createElement('span');

card.classList.add('card');
cardHeadline.classList.add('headline');
cardAuthor.classList.add('author');
cardContainer.classList.add('img-container');

card.appendChild(cardHeadline);
card.appendChild(cardAuthor);
cardAuthor.appendChild(cardContainer);
cardContainer.appendChild(cardImg);
cardAuthor.appendChild(cardName);

cardHeadline.textContent = headline;
cardImg.src = authorPhoto;
cardName.textContent = `By:${authorName}`;

card.addEventListener('click', () => {
  card.classList.toggle('selected');
});
return card
};

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
const entryPoint = document.querySelector(selector);
axios.get(`http://localhost:5001/api/articles`)
.then((res) => {
  let article = Object.values(res.data.articles);
  article.forEach((arr) => {
    arr.forEach((obj) => {
      let card = Card(obj);
      entryPoint.appendChild(card);
    })
  })
})
}

export { Card, cardAppender }
