import header from './components/header';
import contactItem from './components/contactItem';
import MortImage from './assets/mort-profile.png';
import CooperImage from './assets/cooper-profile.png';
import MajorImage from './assets/major-profile.png';

const contactPage = () => {
    const contactContent = document.createElement('div');
    contactContent.classList.add('contact');
    contactContent.classList.add('page-content');

    const contactCards = document.createElement('div');
    contactCards.classList.add('cards');
    contactCards.appendChild(contactItem('Mort', 'Manager/Owner', '123-456-7890', 'mort@mortsmacarons.com', MortImage));
    contactCards.appendChild(contactItem('Cooper', 'Baker', '123-078-9045', 'cooper@mortsmacarons.com', CooperImage));
    contactCards.appendChild(contactItem('Major', 'Offical Taster', '123-054-8861', 'major@mortsmacarons.com', MajorImage));

    contactContent.appendChild(header());
    contactContent.appendChild(contactCards);
    

    return contactContent;
}

export default contactPage;