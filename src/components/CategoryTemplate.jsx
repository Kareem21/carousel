import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../styles/Cateogry.css';
import '../styles/App.css';

const ImagePopup = ({ isOpen, onClose, image }) => {
    if (!isOpen) return null;

    return (
        <div className="popup-overlay" onClick={onClose}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                <img src={image} alt="Enlarged view" className="popup-image" />
                <button className="close-button" onClick={onClose}>
                    &times;
                </button>
            </div>
        </div>
    );
};

const CategoryTemplate = ({ category }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    if (!category) {
        return <div>Category not found</div>;
    }

    const openImagePopup = (image) => {
        setSelectedImage(image);
    };

    const closeImagePopup = () => {
        setSelectedImage(null);
    };

    return (
        <div className="page-wrapper">
            <div className="order-banner">
                TO PLACE AN ORDER PLEASE CONTACT US HERE:
                <button className="order-button">
                    <Link
                        to="/contact"
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        Order here
                    </Link>
                </button>
            </div>
            <div className="maker-page">
                <h1 className="maker-title">Carved By {category.name}</h1>
                <h3>{category.description}</h3>
                <div className="maker-content">
                    <div className="horse-grid">
                        {category.items.map((horse, index) => (
                            <div key={index} className="horse-card">
                                <img
                                    src={horse.image}
                                    alt={horse.name}
                                    className="horse-image"
                                    onClick={() => openImagePopup(horse.image)}
                                />
                                <h2>{horse.name}</h2>
                                <p>{horse.description}</p>
                                {horse.price ? (
                                    <p className="horse-price">
                                        ${horse.price.toLocaleString()}
                                    </p>
                                ) : (
                                    <p className="horse-price" style={{ color: "red" }}>
                                        SOLD
                                    </p>
                                )}
                                <p className="horse-dimensions">{horse.dimensions}</p>
                                <Link to="/contact" className="inquire-button">
                                    Inquire
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <ImagePopup
                isOpen={!!selectedImage}
                onClose={closeImagePopup}
                image={selectedImage}
            />
        </div>
    );
};

export default CategoryTemplate;