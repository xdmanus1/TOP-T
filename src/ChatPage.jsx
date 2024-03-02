import React from 'react';
import './ChatPage.css';

function PortfolioItem({ name, image, description, link }) {
    return (
        <div className="portfolio-item">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <h3>{name}</h3>
            </a>
            <img src={image} alt={name} />
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <button>Learn More</button>
                <canvas className="noise-canvas"></canvas>
            </a>
        </div>
    );
}

function Bubble({ style }) {
    return (
        <div className="bubble" style={style}></div>
    );
}

function PortfolioPage() {
    const projects = [
        {
            name: 'Project 1',
            image: 'path/to/image1.jpg',
            description: 'A brief description of the project.',
            link: 'https://example.com/project1',
        },
        {
            name: 'Project 2',
            image: 'path/to/image2.jpg',
            description: 'Another brief description.',
            link: 'https://example.com/project2',
        },
        {
            name: 'Project 3',
            image: 'path/to/image3.jpg',
            description: 'The last project description.',
            link: 'https://example.com/project3',
        },
        {
            name: 'Project 3',
            image: 'path/to/image3.jpg',
            description: 'The last project description.',
            link: 'https://example.com/project3',
        },
    ];

    const bubbleStyles = [
        { top: '2vh', left: '20vw', gradientAngle: '120deg' },
        { top: '5vh', left: '60vw', gradientAngle: '210deg' },
        { top: '10vh', left: '5vw', gradientAngle: '45deg' },
        { top: '36vh', left: '70vw', gradientAngle: '330deg' },
        { top: '30vh', left: '10vw', gradientAngle: '150deg' },
        { top: '50vh', left: '25vw', gradientAngle: '270deg' },
        { top: '70vh', left: '75vw', gradientAngle: '180deg' },
        { top: '63vh', left: '40vw', gradientAngle: '90deg' },
        { top: '70vh', left: '15vw', gradientAngle: '0deg' },
        { top: '36vh', left: '50vw', gradientAngle: '300deg' },
        { top: '20vh', left: '35vw', gradientAngle: '60deg' },
    ];



    const bubbles = bubbleStyles.map((style, index) => (
        <Bubble key={index} style={{ ...style, background: `linear-gradient(${style.gradientAngle}, #ff8080, #ffcc99)` }} />
    ));

    return (
        <div className="portfolio">
            <h2>My Portfolio</h2>
            {/* {bubbles} */}
            <div className="portfolio-grid">
                {projects.map((project, index) => (
                    <PortfolioItem key={index} {...project} />
                ))}
            </div>
        </div>
    );
}

export default PortfolioPage;
