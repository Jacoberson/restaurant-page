import "./style.css";
import homePage from './pages/homePage/homePage';
import menuPage from "./pages/menuPage/menuPage";
import contactPage from './pages/contactPage/contactPage';
const content = document.getElementById("content");

const menu = () => {
    const menuBar = document.createElement('ul');
    menuBar.classList.add('menu-bar');

    const homePageItem = document.createElement('li');
    homePageItem.textContent = 'Home';
    homePageItem.addEventListener('click', () => {
        menuPageItem.classList.remove('selected');
        contactPageItem.classList.remove('selected');
        homePageItem.classList.add('selected')

        renderContent(homePage());
    })

    const menuPageItem = document.createElement('li');
    menuPageItem.textContent = 'Menu';
    menuPageItem.addEventListener('click', () => {
        homePageItem.classList.remove('selected');
        contactPageItem.classList.remove('selected');
        menuPageItem.classList.add('selected');

        renderContent(menuPage());
    })

    const contactPageItem = document.createElement('li');
    contactPageItem.textContent = 'Contact';
    contactPageItem.addEventListener('click', () => {
        homePageItem.classList.remove('selected');
        menuPageItem.classList.remove('selected');
        contactPageItem.classList.add('selected')

        renderContent(contactPage());
    })

    menuBar.appendChild(homePageItem);
    menuBar.appendChild(menuPageItem);
    menuBar.appendChild(contactPageItem);
    homePageItem.classList.add('selected');

    return menuBar;
}

const renderContent = (contentToRender = homePage()) => {
    const previousContent = document.querySelector('.page-content') || null;

    if (previousContent) {
        content.removeChild(previousContent);
    }

    content.appendChild(contentToRender);
}

content.appendChild(menu());
renderContent();
