import "./style.css";
import MainImage from './main-image.jpg';

const content = document.getElementById('content');

const headerComponent = () => {
    const header = document.createElement('h1');
    header.textContent = "Mort's Macarons";

    return header;
}

const imageComponent = () => {
    const mainImage = new Image();
    mainImage.src = MainImage;

    return mainImage;
}

const headlineComponent = () => {
    const headline = document.createElement('h2');
    headline.textContent = 'Small Macarons, Big Flavors';

    return headline;
}

const blurbContainerComponent = () => {

    const blurbContainer = document.createElement('div');
    blurbContainer.classList.add('blurb-container');
    content.appendChild(blurbContainer);

    const firstP = document.createElement('p');
    firstP.classList.add('blurb');
    firstP.textContent = "Mort's macarons has the best macarons I've ever had!";

    const secondP = document.createElement('p');
    secondP.classList.add('blurb');
    secondP.textContent = "I'll never order anywhere else again.";

    const author = document.createElement('p');
    author.classList.add('blurb-author');
    author.textContent = '- Mickey M.';

    blurbContainer.appendChild(firstP);
    blurbContainer.appendChild(secondP);
    blurbContainer.appendChild(author);

    return blurbContainer;
}

content.appendChild(headerComponent());
content.appendChild(imageComponent());
content.appendChild(headlineComponent());
content.appendChild(blurbContainerComponent());