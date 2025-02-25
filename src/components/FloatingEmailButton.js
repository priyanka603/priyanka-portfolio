import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function FloatingEmailButton() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      await emailjs.send(
        'service_i7x49gi', // Replace with your EmailJS service ID
        'template_35najfo', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          message: formData.message,
          to_email: 'mehtapriyanka2127@gmail.com',
        },
        'dC-gRbpGFzomp7fh0' // Replace with your EmailJS public key
      );
      
      alert('Message sent successfully!');
      setIsExpanded(false);
      setFormData({ name: '', message: '' });
    } catch (error) {
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className={`fixed bottom-8 right-8 flex items-end transition-all duration-300 z-50
      ${isExpanded ? 'w-80' : 'w-14'}`}
    >
      <div className={`bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300
        ${isExpanded ? 'w-full p-4' : 'w-14 h-14'}`}
      >
        {!isExpanded ? (
          <button
            onClick={() => setIsExpanded(true)}
            className="w-14 h-14 rounded-full bg-purple-500 flex items-center justify-center 
              hover:bg-purple-600 transition-all duration-300 hover:scale-110"
          >
            <svg 
              className="w-6 h-6 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </button>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-white font-medium">Send Message</h3>
              <button
                type="button"
                onClick={() => setIsExpanded(false)}
                className="text-gray-400 hover:text-white"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white 
                placeholder-gray-400 focus:outline-none focus:border-purple-500"
              required
              disabled={isSending}
            />

            <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white 
                placeholder-gray-400 focus:outline-none focus:border-purple-500 resize-none"
              rows="3"
              required
              disabled={isSending}
            />

            <button
              type="submit"
              disabled={isSending}
              className={`w-full py-2 px-4 bg-purple-500 text-white rounded-lg hover:bg-purple-600 
                transition-colors duration-300 focus:outline-none focus:ring-2 
                focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800
                ${isSending ? 'opacity-75 cursor-not-allowed' : ''}`}
            >
              {isSending ? 'Sending...' : 'Send'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default FloatingEmailButton; 