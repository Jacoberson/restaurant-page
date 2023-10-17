const menuItem = (name, price, image) => {
    const card = document.createElement('div');
    card.classList.add('menu-card');

    const cardText = document.createElement('div');
    cardText.classList.add('cardText');

    const cardName = document.createElement('h3');
    cardName.textContent = name;
    cardName.classList.add('menu-item');

    const cardPrice = document.createElement('p');
    cardPrice.textContent = `$${price}`;
    cardPrice.classList.add('menu-item');

    cardText.appendChild(cardName);
    cardText.appendChild(cardPrice);

    const cardImage = new Image();
    cardImage.src = image;
    cardImage.classList.add('menu-item', 'menu-image');

    card.appendChild(cardText);
    card.appendChild(cardImage);

    return card;
}

export default menuItem;