import "./FormStyles.css";
import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://formspree.io/f/mldronwz', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => alert('Email sent successfully'))
    .catch(error => alert('Error sending email'));
  };

  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name</label>
        <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Enter your name" />

        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />

        <label htmlFor="subject">Subject</label>
        <input id="subject" name="subject" type="text" value={formData.subject} onChange={handleChange} placeholder="Enter the subject" />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="6" value={formData.message} onChange={handleChange} placeholder="Type your message" />

        <button className="btn" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
