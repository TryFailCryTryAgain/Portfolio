import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

const Contact_Form = () => {
    const { t } = useTranslation();

    const form = useRef<HTMLFormElement>(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userId = import.meta.env.VITE_EMAILJS_USER_ID;

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (form.current) {
            emailjs.sendForm(
                serviceId,
                templateId,
                form.current,
                userId
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
                <h2>{t('contact_title')}</h2>
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
                    <label htmlFor="name">{t('form_name')}</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        className="form-control" 
                        required 
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="email">{t('form_email')}</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        className="form-control" 
                        required 
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="subject">{t('form_subject')}</label>
                    <input 
                        type="text" 
                        id="subject" 
                        name="subject" 
                        className="form-control" 
                        required 
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="message">{t('form_message')}</label>
                    <textarea 
                        id="message" 
                        name="message" 
                        className="form-control" 
                        required
                    ></textarea>
                </div>
                
                <button type="submit" className="contact-form-btn contact-form-btn-primary">
                    {t('form_send_message')}
                </button>
            </form>
        </div>
    );
};

export default Contact_Form;