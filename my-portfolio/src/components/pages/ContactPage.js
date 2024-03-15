import React, { useState } from 'react';
import '../../css/contact.css';

const ContactPage = () => {
  const initialFormData = {
    name: '',
    email: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [formResult, setFormResult] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://formspree.io/f/mgegzoyd', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then(response => {
      if (response.ok) {
        setFormResult('Thank you for your message! I will get back to you soon.');
        handleReset();
      } else {
        setFormResult('Oops! There was a problem with your submission. Please try again.');
      }
    })
    .catch(error => {
      setFormResult('Oops! There was a problem with your submission. Please try again.');
    });
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setFormResult('');
  };

  return (
    <main>
        <section id="contact">
            <h1>Get in touch with me!</h1>
            <form id="myForm" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="4" required value={formData.message} onChange={handleChange}></textarea>
                </div>
                <button type="submit">Send Message</button>
                <button type="button" onClick={handleReset}>Reset</button>
            </form>
            {formResult && <div id="formResult">{formResult}</div>}
        </section>
    </main>
  );
};

export default ContactPage;