const blurbContainer = () => {

    const blurbContainer = document.createElement('div');
    blurbContainer.classList.add('blurb-container');
    content.appendChild(blurbContainer);

    const firstP = document.createElement('p');
    firstP.classList.add('blurb');
    firstP.textContent = "Mort's Macarons has the best macarons I've ever had!";

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

export default blurbContainer;