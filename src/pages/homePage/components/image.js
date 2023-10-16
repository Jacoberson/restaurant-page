import MainImage from '../assets/main-image.jpg';

const image = () => {
    const mainImage = new Image();
    mainImage.src = MainImage;

    return mainImage;
}

export default image;