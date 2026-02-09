import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { toast } from 'sonner';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post(`${API}/contact`, formData);
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-semibold tracking-tight mb-4"
            style={{ fontFamily: 'Syne, sans-serif' }}
            data-testid="contact-title"
          >
            Get In Touch
          </h2>
          <p className="text-white/60 text-sm uppercase tracking-widest">
            We'd love to hear from you
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3
                className="text-2xl font-medium mb-4 uppercase tracking-widest"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                Connect
              </h3>
              <p className="text-white/80 leading-relaxed">
                Whether you have questions about our collection, need styling
                advice, or want to collaborate, our team is ready to answer all
                your questions.
              </p>
            </div>

            <div className="space-y-4">
              <div data-testid="contact-email">
                <p className="text-sm uppercase tracking-widest text-white/60 mb-1">
                  Email
                </p>
                <p className="text-lg">hello@novathreads.com</p>
              </div>

              <div data-testid="contact-phone">
                <p className="text-sm uppercase tracking-widest text-white/60 mb-1">
                  Phone
                </p>
                <p className="text-lg">+91 9625379613</p>
              </div>

              <div data-testid="contact-location">
                <p className="text-sm uppercase tracking-widest text-white/60 mb-1">
                  Location
                </p>
                <p className="text-lg">Delhi NCR, India</p>
              </div>
            </div>

            <div>
              <p className="text-sm uppercase tracking-widest text-white/60 mb-4">
                Follow Us
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors"
                  data-testid="social-instagram"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors"
                  data-testid="social-twitter"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors"
                  data-testid="social-facebook"
                >
                  Facebook
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                  className="w-full bg-transparent border-b border-white/20 focus:border-white px-0 py-4 rounded-none placeholder:text-white/30 text-white focus:ring-0 focus:outline-none transition-all duration-300"
                  data-testid="contact-form-name"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="w-full bg-transparent border-b border-white/20 focus:border-white px-0 py-4 rounded-none placeholder:text-white/30 text-white focus:ring-0 focus:outline-none transition-all duration-300"
                  data-testid="contact-form-email"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  required
                  rows={6}
                  className="w-full bg-transparent border-b border-white/20 focus:border-white px-0 py-4 rounded-none placeholder:text-white/30 text-white focus:ring-0 focus:outline-none transition-all duration-300 resize-none"
                  data-testid="contact-form-message"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-white text-black hover:bg-gray-200 rounded-none px-8 py-4 text-sm uppercase tracking-widest font-bold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                data-testid="contact-form-submit"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;