import img1 from '../assets/images/img4.webp'
import img2 from '../assets/images/img1.webp'
import img3 from '../assets/images/img2.jpg'
import img4 from '../assets/images/img3.avif'
import img5 from '../assets/images/img5.webp'
import img6 from "../assets/images/img6.jpg"
import img7 from "../assets/images/img7.jpeg"
import img8 from "../assets/images/img8.jpg"
import img9 from "../assets/images/img9.jpg"
import img10 from "../assets/images/img10.jpg"
import img11 from "../assets/images/img11.jpg"
import img12 from "../assets/images/img12.jpg"
import img13 from "../assets/images/img13.jpg"
import img14 from "../assets/images/img14.webp"
import img15 from "../assets/images/img15.jpg"
import img16 from "../assets/images/img16.avif"
import img17 from "../assets/images/img17.jpg"
import img18 from "../assets/images/img18.jpg"
import img19 from "../assets/images/img19.jpg"
import img20 from "../assets/images/img20.jpeg"
import img21 from "../assets/images/img21.avif"
import img22 from "../assets/images/img22.jpg"
import img23 from "../assets/images/img23.webp"
import img24 from "../assets/images/img24.jpg"
import img25 from "../assets/images/img25.avif"
import img26 from "../assets/images/img26.jpg"
import img27 from "../assets/images/img27.jpg"
import img28 from "../assets/images/img28.jpg"
import img29 from "../assets/images/img29.jpg"
import img30 from "../assets/images/img30.jpeg"
import img31 from "../assets/images/img31.jpeg"
import img32 from "../assets/images/img32.jpg"
import img33 from "../assets/images/img33.avif"
import img34 from "../assets/images/img34.avif"
import img35 from "../assets/images/img35.avif"
import img36 from "../assets/images/img36.jpg"
import img37 from "../assets/images/img37.avif"
import img38 from "../assets/images/img38.jpeg"
import img39 from "../assets/images/img39.jpg"
import img40 from "../assets/images/img40.webp"

// const imageData = [
//     "../assets/images/img1.webp",
//     "../assets/images/img2.jpeg",
//     "../assets/images/img3.avif",
//     "../assets/images/img4.webp",
//     "../assets/images/img5.webp",
//     "../assets/images/img6.jpg",
//     "../assets/images/img7.jpeg",
//     "../assets/images/img8.jpg",
//     "../assets/images/img9.jpg",
//     "../assets/images/img10.jpg",
//     "../assets/images/img11.jpg",
//     "../assets/images/img12.jpg",
//     "../assets/images/img13.jpg",
//     "../assets/images/img14.webp",
//     "../assets/images/img15.jpg",
//     "../assets/images/img16.avif",
//     "../assets/images/img17.jpg",
//     "../assets/images/img18.jpg",
//     "../assets/images/img19.jpg",
//     "../assets/images/img20.jpeg",
//     "../assets/images/img21.avif",
//     "../assets/images/img22.jpg",
//     "../assets/images/img23.webp",
//     "../assets/images/img24.jpg",
//     "../assets/images/img25.avif",
//     "../assets/images/img26.jpg",
//     "../assets/images/img27.jpg",
//     "../assets/images/img28.jpg",
//     "../assets/images/img29.jpg",
//     "../assets/images/img30.jpeg",
//     "../assets/images/img31.jpeg",
//     "../assets/images/img32.jpg",
//     "../assets/images/img33.avif",
//     "../assets/images/img34.avif",
//     "../assets/images/img35.avif",
//     "../assets/images/img36.jpg",
//     "../assets/images/img37.avif",
//     "../assets/images/img38.jpeg",
//     "../assets/images/img39.jpg",
//     "../assets/images/img40.webp"
// ];


const randomImg = () => {
    const images = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img10,
        img11,
        img12,
        img13,
        img14,
        img15,
        img16,
        img17,
        img18,
        img19,
        img20,
        img21,
        img22,
        img23,
        img24,
        img25,
        img26,
        img27,
        img28,
        img29,
        img30,
        img31,
        img32,
        img33,
        img34,
        img35,
        img36,
        img37,
        img38,
        img39,
        img40] 
        
const randomIndex = Math.floor(Math.random() * images.length);
const randomImage = images[randomIndex];
    
return randomImage;
}

export default randomImg

