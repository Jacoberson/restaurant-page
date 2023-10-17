const contactItem = (name, title, number, email, image) => {
    const card = document.createElement('div');
    card.classList.add('contact-card')

    const cardText = document.createElement('div');
    cardText.classList.add('card-text');

    const cardName = document.createElement('h3');
    cardName.textContent = name;
    cardName.classList.add('contact-item');

    const cardTitle = document.createElement('p');
    cardTitle.textContent = title;
    cardTitle.classList.add('contact-item');

    const cardNumber = document.createElement('p');
    cardNumber.textContent = number;
    cardNumber.classList.add('contact-item');

    const cardEmail = document.createElement('p');
    cardEmail.textContent = email;
    cardEmail.classList.add('contact-item');

    cardText.appendChild(cardName);
    cardText.appendChild(cardTitle);
    cardText.appendChild(cardNumber);
    cardText.appendChild(cardEmail);

    const cardImage = new Image();
    cardImage.src = image;
    cardImage.classList.add('contact-item', 'contact-image');

    card.appendChild(cardText);
    card.appendChild(cardImage);

    return card;
}

export default contactItem;