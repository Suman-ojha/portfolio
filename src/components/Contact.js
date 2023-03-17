

import React, { useState } from 'react';
import emailjs from 'emailjs-com';


const ContactPage=(param) =>{
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  // const [status, setStatus] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', event.target, 'YOUR_USER_ID')
    // .then((result) => {
    //   console.log(result.text);
    // }, (error) => {
    //   console.log(error.text);
    // });
    
    setName('');
    setEmail('');
    setMessage('');
    // Do form validation here
    // Send form data to server-side script or API
    // Update status state with success or error message
  }

  return (
    <div className="contact-page" ref={param.contactRef}>
      <h4 className='text-center'>Get In Touch</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
        </div>
        <button type="submit">Send Message</button>
      </form>
      {/* {status && <p className={`status ${status.type}`}>{status.message}</p>} */}
    </div>
  );
}

export default ContactPage;
