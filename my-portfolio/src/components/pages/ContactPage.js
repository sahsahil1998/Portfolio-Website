import React, { useState } from 'react';
import '../../css/contact.css';

const ContactPage = () => {
  const [formResult, setFormResult] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would handle the form submission, e.g., sending data to a server
    // For demonstration, let's just set a success message
    setFormResult('Thank you for your message! I will get back to you soon.');
  };

  return (
    <main>
        <section id="contact">
            <h1>Get in touch with me!</h1>
            <form id="myForm" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="4" required></textarea>
                </div>
                <button type="submit">Send Message</button>
                <button type="reset">Reset</button>
            </form>
            {formResult && <div id="formResult">{formResult}</div>}
        </section>
    </main>
  );
};

export default ContactPage;