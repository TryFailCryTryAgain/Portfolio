import React from "react";

const Contact_Form = () => {
    return (
        <>
            <div className="contact-container">
                <div className="contact-info">
                    <h2>Contact Information</h2>
                    <div className="contact-details">
                        {/* Replace these with your actual contact details */}
                        <div className="contact-item">
                            <i className="fas fa-envelope"></i>
                            <span>David.k.segerbo@gmail.com</span>
                        </div>
                        <div className="contact-item">
                            <i className="fas fa-phone"></i>
                            <span>+46 (0) 72 703 2004</span>
                        </div>
                        <div className="contact-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Uppsala, SE</span>
                        </div>
                    </div>
                </div>
                
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" className="form-control" required />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" className="form-control" required />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" className="form-control" required />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="message">Your Message</label>
                        <textarea id="message" className="form-control" required></textarea>
                    </div>
                    
                    <button type="submit" className="contact-form-btn contact-form-btn-primary">Send Message</button>
                </form>
            </div>
        </>
    );
};

export default Contact_Form;