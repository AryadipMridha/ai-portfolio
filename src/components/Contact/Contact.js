// src/components/Contact/Contact.js
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import ScrollAnimationWrapper from '../ScrollAnimationWrapper/ScrollAnimationWrapper';
import { motion } from 'framer-motion';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(''); // 'success', 'error', or ''

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // !!! REPLACE THESE WITH YOUR ACTUAL EMAIL.JS CREDENTIALS !!!
    const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log('Email.js SUCCESS!', result.text);
          setSubmitStatus('success');
          form.current.reset(); 
      }, (error) => {
          console.log('Email.js FAILED...', error.text);
          setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus(''), 5000); // Clear status message after 5 seconds
      });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <ScrollAnimationWrapper animationType="fadeIn" tag="h2">
          Contact Me
        </ScrollAnimationWrapper>
        {/* ... intro paragraph ... */}
        
        <ScrollAnimationWrapper animationType="fadeInUp" delay={0.2}>
          <form 
            ref={form}
            className="contact-form-wrapper" 
            onSubmit={sendEmail}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <motion.input 
                type="text" 
                id="name" 
                name="name" // Crucial: matches {{name}} in Email.js template
                required 
                // ... other props
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <motion.input 
                type="email" 
                id="email" 
                name="email" // Crucial: matches {{email}}
                required 
                // ... other props
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <motion.textarea 
                id="message" 
                name="message" // Crucial: matches {{message}}
                required
                // ... other props
              ></motion.textarea>
            </div>
            <motion.button 
              type="submit" 
              className="btn"
              disabled={isSubmitting}
              // ... other props
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
            {submitStatus === 'success' && (
              <p style={{ color: 'green', marginTop: '15px', textAlign: 'center' }}>Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p style={{ color: 'red', marginTop: '15px', textAlign: 'center' }}>Failed to send message. Please check your details or try again later.</p>
            )}
          </form>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};

export default Contact;