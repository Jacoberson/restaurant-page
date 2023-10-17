import header from './components/header';
// import image from './components/image';
// import headline from './components/headline';
// import blurbContainer from './components/blurbContainer';

const menuPage = () => {
    const menuContent = document.createElement('div');
    menuContent.classList.add('menu', 'page-content');

    menuContent.appendChild(header());

    return menuContent;
}

export default menuPage;