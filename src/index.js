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
        console.log('home');
    })

    const menuPageItem = document.createElement('li');
    menuPageItem.textContent = 'Menu';
    menuPageItem.addEventListener('click', () => {
        console.log('menu');
    })

    const contactPageItem = document.createElement('li');
    contactPageItem.textContent = 'Contact';
    contactPageItem.addEventListener('click', () => {
        console.log('contact');
    })

    menuBar.appendChild(homePageItem);
    menuBar.appendChild(menuPageItem);
    menuBar.appendChild(contactPageItem);


    return menuBar;
}

// content.appendChild(homePage());
content.appendChild(menu());
content.appendChild(contactPage());
