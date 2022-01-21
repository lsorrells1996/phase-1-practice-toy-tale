let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

const toyUrl = 'http://localhost:3000/toys'

fetch(toyUrl)
  .then( r => r.json() )
  .then(toys => {

    const toyBox = document.querySelector('#toy-collection')

    toys.forEach(obj => {

      const toyCard = document.createElement('div')
      const toyCardName = document.createElement('h2')
      const toyCardImg = document.createElement('img')
      const toyCardLikes = document.createElement('p')
      const toyCardButton = document.createElement('button')

      toyCard.className = 'card'
      toyCardImg.className = 'toy-avatar'
      toyCardButton.className = 'like-btn'

      toyCardName.textContent = obj.name
      toyCardImg.src = obj.image
      toyCardLikes.textContent = `${obj.likes} Likes`
      toyCardButton.setAttribute('id', obj.id)
      toyCardButton.textContent = 'Like ❤️'

      toyBox.appendChild(toyCard)
      toyCard.appendChild(toyCardName)
      toyCard.appendChild(toyCardImg)
      toyCard.appendChild(toyCardLikes)
      toyCard.appendChild(toyCardButton)
    })
  })