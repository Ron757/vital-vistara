import React, { useState } from 'react';
import "./Contact.css";

function Contact() {
  const [user, setUser] = useState({
    Name: '',
    Email: '',
    Mobile: '',
    Message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { Name, Email, Mobile, Message } = user;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ Name, Email, Mobile, Message })
    };
    const res = await fetch('https://vital-vistara-form-default-rtdb.firebaseio.com/UserData.json', options);
    if (res.ok) {
      alert("Message Sent");
      setUser({ Name: '', Email: '', Mobile: '', Message: '' }); // Clear form after successful submission
    } else {
      alert("Failed to send");
    }
  };

  return (
    <div className="contact-container">
      <div className="Contact_heading">
        <h1>Ask Us Anything</h1>
        <p>Anything related to our projects, for everything else there's Google</p>
      </div>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">What Should We Call You?</label>
            <input
              type="text"
              id="name"
              name="Name"
              placeholder="Name"
              value={user.Name}
              autoComplete='off'
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">How do we reach you?</label>
            <input
              type="email"
              id="email"
              name="Email"
              placeholder="E-mail"
              value={user.Email}
              autoComplete='off'
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Want a call from us?</label>
            <input
              type="text"
              id="mobile"
              name="Mobile"
              placeholder="Mobile"
              value={user.Mobile}
              autoComplete='off'
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="Message"
              placeholder="Hi Vital Vistara team, we need a quotation for..."
              autoComplete='off'
              value={user.Message}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Required Services</label>
            <div className="checkbox-group">
              <label><input type="checkbox" name="services" value="branding" /> Branding</label>
              <label><input type="checkbox" name="services" value="marketing" /> Marketing</label>
              <label><input type="checkbox" name="services" value="technology" /> Technology</label>
              <label><input type="checkbox" name="services" value="businessConsulting" /> Business Consulting</label>
              <label><input type="checkbox" name="services" value="other" /> Other</label>
            </div>
          </div>
          <button type="submit" className="submit-button">Next</button>
        </form>
      </div>
      <div className="contact-info">
        <button className='btn'><p>+91 8076650354</p></button>
        <button className='btn'><p>aniket@vitalvistara.com</p></button>
        <button className='btn'><p>+91 8384074925</p></button>
      </div>
    </div>
  );
}

export default Contact;
