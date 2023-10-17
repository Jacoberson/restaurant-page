import header from './components/header';
import image from './components/image';
import headline from './components/headline';
import blurbContainer from './components/blurbContainer';

const homePage = () => {
    const homeContent = document.createElement('div');
    homeContent.classList.add('home', 'page-content');

    homeContent.appendChild(header());
    homeContent.appendChild(image());
    homeContent.appendChild(headline());
    homeContent.appendChild(blurbContainer());

    return homeContent;
}

export default homePage;

