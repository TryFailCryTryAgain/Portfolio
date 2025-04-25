import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact_Form = () => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (form.current) {
            emailjs.sendForm(
                'service_zcp3lro', 
                'template_rkuds7o', 
                form.current, 
                'PVbKHmDgq6WpPC8bJ'
            )
            .then((result) => {
                console.log(result.text);
                alert("Message sent successfully!");
                form.current?.reset();
            }, (error) => {
                console.log(error.text);
                alert("Failed to send the message, please try again.");
            });
        }
    };

    return (
        <div className="contact-container">
            <div className="contact-info">
                <h2>Contact Information</h2>
                <div className="contact-details">
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
            
            <form ref={form} onSubmit={sendEmail} className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        className="form-control" 
                        required 
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        className="form-control" 
                        required 
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input 
                        type="text" 
                        id="subject" 
                        name="subject" 
                        className="form-control" 
                        required 
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea 
                        id="message" 
                        name="message" 
                        className="form-control" 
                        required
                    ></textarea>
                </div>
                
                <button type="submit" className="contact-form-btn contact-form-btn-primary">
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact_Form;