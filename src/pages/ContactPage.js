import React, { useState, useEffect } from 'react';
import { FaSearch, FaBars, FaFacebook, FaTwitter, FaInstagram, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
//import './SportsHomePage.css';
import './contact.css';
import '@fortawesome/fontawesome-free/css/all.css';
import axios from 'axios';

const ContactFormPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = ["50 care.jpg", "handcare.jpg", "elder lady home care.jpg"]; // Add paths to your images

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleWhatsAppClick = () => {
        const message = 'Hello! I have a question.';
        axios.post('/api/send-whatsapp', { message })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    const categories = [
        { name: 'Home', id: 1, link: '/' },
        { name: 'About Us', id: 4, link: '/about-us' },
        { name: 'Services', id: 2, link: '/services' },
        { name: 'blog', id: 3, link: '/blog' },
        { name: 'Contact Us', id: 5, link: '/contact' },
    ];

    const footerCategories = [
        {
            name: 'About Us',
            id: 5,
            dropdownItems: ['Mission', 'Team', 'History', 'Careers', 'Partnerships']
        },
        {
            name: 'Visit Us',
            id: 6,
            dropdownItems: ['123 Anywhere  St., Any City, ST 12345', '+2347084649728', 'homehealthcare@gmail.com']
        },
        {
            name: 'Quick Link',
            id: 7,
            dropdownItems: ['About us', 'Services', 'Collections']
        }
    ];

    return (
        <div className="contact-form-page">
            <nav className="navbar">
                <div className="logo">
                    <img src={process.env.PUBLIC_URL + '/logo.JPG'} alt="Logo" style={{ width: '70px', height: 'auto', borderRadius: '10px' }} />
                </div>
                <div className="menu-icon" onClick={toggleMenu}>
                    <FaBars />
                </div>
                <div className={`menu-links ${isMenuOpen ? 'active' : ''}`}>
                    {categories.map(category => (
                        <Link key={category.id} to={category.link} onClick={toggleMenu} className="nav-link">
                            {category.name}
                        </Link>
                    ))}
                </div>
                <div className="search">
                    <input type="text" placeholder="Search..." />
                    <button><FaSearch /></button>
                </div>
            </nav>

            <div className="hero" style={{ position: "relative" }}>
                <img src={images[currentImageIndex]} alt="Hero Image" style={{ width: "100%", height: "400px", objectFit: "cover" }} />
                <div className="hero-text" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                    {/* <h1>Welcome to My Portfolio</h1> */}
                </div>
            </div>

            <div className="contact-section">
                <div className="container">
                    <div className="contact-content">
                        <div className="contact-form">
                            <h2>Contact Us</h2>
                            <form method="post" action="https://formspree.io/f/your_form_id">
                                <label>
                                    Name:
                                    <input type="text" name="name" required />
                                </label>
                                <label>
                                    Email:
                                    <input type="email" name="email" required />
                                </label>
                                <label>
                                    Message:
                                    <textarea name="message" required></textarea>
                                </label>
                                <button type="submit">Send</button>
                            </form>
                        </div>
                        <div className="contact-map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0197887832456!2d144.96316!3d-37.814217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5770c4e5f4564d7!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1589264692038!5m2!1sen!2sau"
                                width="100%" height="400" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="footer">
                
                {footerCategories.map(category => (
                    <div className="footer-column" key={category.id}>
                        <h2>{category.name}</h2>
                        <ul>
                            {category.dropdownItems.map((item, index) => (
                                <li key={index}>
                                    <Link to={`/${item}`}>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                 {/* Social media icons */}
    <div className="footer-column social-media">
        <h2>Follow Us</h2>
        <div className="social-icons">
            <a href="https://www.facebook.com/share/hgi5x3MKEztwx8hd/?mibextid=K35XfP"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="https://www.instagram.com/mazidukeduchess?igsh=MndnZjJja2tzNzI0&utm_source=qr"><FaInstagram /></a>
            {/* Add more social media icons as needed */}
        </div>
        <div className="logo">
                    <img 
                        src={process.env.PUBLIC_URL + '/logo.JPG'} 
                        alt="Logo" 
                        style={{ 
                            width: '70px', 
                            height: 'auto',
                            borderRadius: '10px'  // Adjust the border radius as per your design
                        }} 
                    />
                </div>
    </div>
    
 </footer>

<div className="copyright">
    <p>© 2015 home healthcare services. All rights reserved.</p>
</div>

{/* WhatsApp button */}

<div className="whatsapp-container">
<div className="whatsapp-text-container">
<span className="whatsapp-text">How can I help you ?</span>
</div>
    <button className="whatsapp-button" onClick={handleWhatsAppClick}>
        <FaWhatsapp />
    </button>
    </div>  
</div>
    );
};

export default ContactFormPage;