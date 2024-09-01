import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Cateogry.css';
import '../styles/App.css';
const CategoryTemplate = ({ category }) => {
    if (!category) {
        return <div>Category not found</div>;
    }

    return (
        <div className="page-wrapper">
            <div className="order-banner">
                TO PLACE AN ORDER PLEASE CONTACT US HERE
            </div>
            <div className="maker-page">
                <h1 className="maker-title">Carved By {category.name}</h1>
                <h3>{category.description}</h3>
                <div className="maker-content">
                    <div className="horse-grid">
                        {category.items.map((horse, index) => (
                            <div key={index} className="horse-card">
                                <img src={horse.image} alt={horse.name} className="horse-image"/>
                                <h2>{horse.name}</h2>
                                <p>{horse.description}</p>
                                <p className="horse-price">${horse.price.toLocaleString()}</p>
                                <p className="horse-dimensions">{horse.dimensions}</p> {/* Dimensions line */}
                                <Link to="/contact" className="inquire-button">Inquire</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryTemplate;
