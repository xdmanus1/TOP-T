// LandingPage.jsx
import React, { useState } from 'react';
import './LandingPage.css'; // import CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import testimg1 from './assets/1test.jpg';
import testimg2 from './assets/2test.jpg';
import testimg3 from './assets/test3.jpg';
import testimg4 from './assets/test4.jpg';

const LandingPage = () => {
    const images = [
        testimg1,
        testimg2,
        testimg3,
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToSlide = (index) => {
        setCurrentImageIndex(index);
    };

    const goToNextSlide = () => {
        const newIndex = (currentImageIndex + 1) % images.length;
        setCurrentImageIndex(newIndex);
    };

    const goToPrevSlide = () => {
        const newIndex = (currentImageIndex - 1 + images.length) % images.length;
        setCurrentImageIndex(newIndex);
    };

    return (
        <div className="landing-page">
            <h1>Üdv a Top T corp. Weboldalán</h1>

            <div className="image-carousel">
                <button className="carousel-button prev" onClick={goToPrevSlide}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt="carousel"
                        className={index === currentImageIndex ? 'active' : ''}
                        onClick={() => goToSlide(index)}
                    />
                ))}
                <button className="carousel-button next" onClick={goToNextSlide}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>

                <div className="navigation-dots">
                    {images.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                        ></span>
                    ))}
                </div>
            </div>
            <div>
                <h2>Miért válasszon minket?</h2>
                <ul className='why-us'>
                    <li><h3>Tapasztalt csapat:</h3> Top T-nk elkötelezett, tapasztalt szakemberekből áll, akik szerteágazó tudással rendelkeznek az informatika területén.</li>
                    <li><h3>Ügyfélközpontú megközelítés:</h3>Minden projektünkben az ügyfelek igényeire és céljaira koncentrálunk, hogy olyan egyedi megoldásokat nyújtsunk, amelyek valóban kiemelkedő eredményeket hoznak.</li>
                    <li><h3>Innováció és minőség:</h3> Top T mindig a legújabb technológiák felé nyitott, és minden munkánkat a legmagasabb minőségi sztenderdek szerint végezzük el.</li>
                </ul>
            </div>
            <div className="flex-container">
                <div className="box">
                    <h4>Szolgáltatásaink:</h4>
                    <ul>
                        <li>Webfejlesztés és tervezés</li>
                        <li>Mobilalkalmazás fejlesztés</li>
                        <li>Felhőalapú megoldások</li>
                        <li>Tanácsadás</li>
                    </ul>
                </div>
                <div className="box1">
                    <h4>Kódolás:</h4>
                    <img className='imgbox' src={testimg4} alt="testimg" />
                </div>
            </div>
            <div className='pricing'>
                <div className='pricingbox'>
                    <h4 className='typethingy'>Basic</h4>
                    <h4 className='price'>Ár: 100.000ft-tól</h4>
                    <p className='ppric'>- Egy oldalas web oldal <br />- Custom Domain <br />- Support</p>
                    <button className='kapcs'>Kapcsolatfelvétel</button>
                </div>
                <div className='pricingbox'>
                    <h4 className='typethingy'>Pro</h4>
                    <h4 className='price'>Ár: 200.000ft-tól</h4>
                    <p className='ppric'>- Több oldalas web oldal <br />- Custom Domain <br />- Support</p>
                    <button className='kapcs'>Kapcsolatfelvétel</button>
                </div>
                <div className='pricingbox'>
                    <h4 className='typethingy'>Enterprise</h4>
                    <h4 className='price'>Ár: 300.000ft-tól</h4>
                    <p className='ppric'>- Több oldalas web oldal <br />- Custom Domain <br />- Support</p>
                    <button className='kapcs'>Kapcsolatfelvétel</button>
                </div>

            </div>
        </div >
    );
};

export default LandingPage;
