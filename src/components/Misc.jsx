import React from 'react';
import Header from './Header'; // Assuming you have a Header component
import Footer from './Footer'; // Assuming you have a Footer component
import '../styles/Misc.css'; // We'll create this CSS file for styling



const categories = [
    { title: 'Chariots', description: 'Our Animals that are carved by Dentzel' },
    { title: 'Band Organs', description: 'Our Animals that are carved by Dentzel' },
    { title: 'Figures', description: '19th Century heavy carved wood plaque figures' },
    { title: 'Targets + Gambling', description: 'Our Animals that are carved by Dentzel' },
    { title: 'Sports Memorabilia', description: 'Our collection includes sports memorabilia, coming soon.' },
    { title: 'Shields', description: 'Our Animals that are carved by Dentzel' },
];

const Miscellaneous = () => (
    <div className="miscellaneous-page light-bg">
        <main className="miscellaneous-content">
            <h1 className="miscellaneous-title">Miscellaneous Antiques for your collection.</h1>
            <p className="miscellaneous-subtitle">Our collection includes miscellaneous collections like our beautiful
                figures as well as sports memorabilia</p>

            <div className="content-wrapper">
                <div className="category-grid">
                    {categories.map((category, index) => (
                        <div key={index} className="category-card dark-bg">
                            <h2>{category.title}</h2>
                            <p>{category.description}</p>
                            <img src="/Aboutus/carouselrandom.jpg" alt="Antique horse"/>
                        </div>
                    ))}
                </div>
            </div>

        </main>
    </div>
);

export default Miscellaneous;