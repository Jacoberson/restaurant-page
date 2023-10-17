import header from './components/header';
import menuItem from './components/menuItem';
import VanillaImage from './assets/vanilla.png';
import ChocolateImage from './assets/chocolate.png';
import StrawberryImage from './assets/strawberry.png';

const menuPage = () => {
    const menuContent = document.createElement('div');
    menuContent.classList.add('menu', 'page-content');

    const menuCards = document.createElement('div');
    menuCards.classList.add('cards');
    menuCards.appendChild(menuItem('Vanilla Macaron', '3', VanillaImage));
    menuCards.appendChild(menuItem('Chocolate Macaron', '4', ChocolateImage));
    menuCards.appendChild(menuItem('Strawberry Macaron', '4.50', StrawberryImage));

    menuContent.appendChild(header());
    menuContent.appendChild(menuCards);

    return menuContent;
}

export default menuPage;