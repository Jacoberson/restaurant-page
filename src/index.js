import "./style.css";
import homePage from './pages/homePage/homePage';
import contactPage from './pages/contactPage/contactPage';
const content = document.getElementById("content");

const menu = () => {
    const menuBar = document.createElement('ul');
    menuBar.classList.add('menu');

    const homePageItem = document.createElement('li');
    homePageItem.textContent = 'Home';
    homePageItem.addEventListener('click', () => {
        menuPageItem.classList.remove('selected');
        contactPageItem.classList.remove('selected');

        homePageItem.classList.add('selected')
    })

    const menuPageItem = document.createElement('li');
    menuPageItem.textContent = 'Menu';
    menuPageItem.addEventListener('click', () => {
        homePageItem.classList.remove('selected');
        contactPageItem.classList.remove('selected');

        menuPageItem.classList.add('selected');
    })

    const contactPageItem = document.createElement('li');
    contactPageItem.textContent = 'Contact';
    contactPageItem.addEventListener('click', () => {
        homePageItem.classList.remove('selected');
        menuPageItem.classList.remove('selected');

        contactPageItem.classList.add('selected')
    })

    menuBar.appendChild(homePageItem);
    menuBar.appendChild(menuPageItem);
    menuBar.appendChild(contactPageItem);


    return menuBar;
}

content.appendChild(menu());
content.appendChild(homePage());
