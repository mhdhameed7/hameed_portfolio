import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaTelegram,
  FaPaperPlane,
  FaEnvelope,
  FaWhatsapp,
  FaCog,
} from 'react-icons/fa';
import BlinkingSquares from './BlinkingSquares';



const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    message: ''
  });
  const [isSubmittingContact, setIsSubmittingContact] = useState(false);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmittingContact(true);

    const text = `Hello! I am ${contactForm.name}.\n\nMessage:\n${contactForm.message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/94773727815?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
    
    alert('Redirecting to WhatsApp to send your message! 📧');
    setContactForm({ name: '', message: '' });
    setIsSubmittingContact(false);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 relative overflow-hidden min-h-screen flex items-center justify-center dark:bg-[#020b1e] bg-slate-50 transition-colors duration-500">
      <BlinkingSquares rows={25} cols={40} className="z-0" />
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] hidden dark:block pointer-events-none"></div>
      
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        {/* Top small label */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-8 h-[1px] dark:bg-slate-700 bg-slate-300"></div>
          <span className="dark:text-slate-400 text-slate-500 font-bold text-xs tracking-[0.2em] uppercase">CONTACT</span>
          <div className="w-8 h-[1px] dark:bg-slate-700 bg-slate-300"></div>
        </div>

        {/* Main Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-black font-sans uppercase tracking-tight text-center mb-12 md:mb-24 dark:text-white text-slate-900 leading-[0.9]"
          style={{ textShadow: "0 10px 40px rgba(0,0,0,0.4)" }}
        >
          Let's Build<br />Together
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg md:text-xl dark:text-slate-300 text-slate-700 font-serif leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
              Have an idea, project, or collaboration in mind? <br className="hidden lg:block"/>
              Send me a message and let's create something clean, <br className="hidden lg:block"/>
              modern, and impactful together.
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-4">
              <a href="mailto:mhdhameedofficial@gmail.com" className="w-12 h-12 flex items-center justify-center rounded-[14px] dark:bg-[#071124] bg-white border dark:border-slate-700/50 border-slate-300 hover:scale-105 hover:bg-slate-800 transition-all duration-300 group shadow-sm">
                <FaEnvelope className="text-lg dark:text-slate-400 text-slate-600 group-hover:text-white transition-colors" />
              </a>
              <a href="https://wa.me/94773727815" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-[14px] dark:bg-[#071124] bg-white border dark:border-slate-700/50 border-slate-300 hover:scale-105 dark:hover:bg-emerald-900/30 hover:border-emerald-500/50 transition-all duration-300 group shadow-sm">
                <FaWhatsapp className="text-lg dark:text-slate-400 text-slate-600 group-hover:text-emerald-500 transition-colors" />
              </a>
            </div>
          </motion.div>

          {/* Right Card Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="dark:bg-[#080d1a] bg-white rounded-[2rem] p-8 md:p-10 border dark:border-slate-800/50 border-slate-200 shadow-2xl relative overflow-hidden">
              <div className="mb-8 relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold dark:text-white text-slate-900 flex items-center gap-3">
                  Send Message <span className="text-[10px] md:text-xs font-bold tracking-widest dark:text-slate-500 text-slate-400 mt-1 uppercase">DIRECT</span>
                </h3>
                <p className="text-sm dark:text-slate-400 text-slate-500 mt-2">
                  Your message opens directly in WhatsApp—no spam, just real connection.
                </p>
              </div>

              <form onSubmit={handleContactSubmit} className="space-y-6 relative z-10">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-5 py-4 dark:bg-[#0c1426] bg-slate-50 border dark:border-slate-800/80 border-slate-200 rounded-xl dark:text-white text-slate-900 placeholder-slate-500 focus:outline-none dark:focus:border-slate-600 focus:border-slate-400 focus:ring-1 dark:focus:ring-slate-600 focus:ring-slate-400 transition-all"
                    required
                  />
                </div>

                <div>
                  <textarea
                    placeholder="Write your message..."
                    rows="4"
                    value={contactForm.message}
                    onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full px-5 py-4 dark:bg-[#0c1426] bg-slate-50 border dark:border-slate-800/80 border-slate-200 rounded-xl dark:text-white text-slate-900 placeholder-slate-500 focus:outline-none dark:focus:border-slate-600 focus:border-slate-400 focus:ring-1 dark:focus:ring-slate-600 focus:ring-slate-400 transition-all resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmittingContact}
                  className="w-full py-4 dark:bg-[#e2e2e2] bg-slate-900 dark:hover:bg-white hover:bg-slate-800 dark:text-slate-900 text-white font-bold rounded-xl transition-colors duration-300 flex items-center justify-center gap-3 mt-4 shadow-lg disabled:opacity-70 group"
                >
                  {isSubmittingContact ? (
                    <div className="w-5 h-5 border-2 dark:border-slate-900 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <FaPaperPlane className="text-sm dark:text-slate-900 text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                      <span className="tracking-wide">SEND MESSAGE</span>
                    </>
                  )}
                </button>

                <div className="flex items-center gap-2 mt-6 pt-6 border-t dark:border-slate-800/50 border-slate-200">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-xs dark:text-slate-500 text-slate-500 font-semibold">Usually replies within a few hours</span>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;