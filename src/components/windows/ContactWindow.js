import React from 'react';
import { motion } from 'framer-motion';

const ContactWindow = () => {
  const contactInfo = [
    {
      label: "Email",
      value: "mbshaikh@cougarnet.uh.edu",
      link: "mailto:mbshaikh@cougarnet.uh.edu"
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/muhammad-shaikh",
      link: "https://linkedin.com/in/muhammad-shaikh"
    },
    {
      label: "GitHub",
      value: "github.com/Moh109",
      link: "https://github.com/Moh109"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-5 text-left flex flex-col"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-2xl text-gray-800 font-semibold mb-4"
      >
        Contact
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-sm text-gray-600 mb-4 leading-relaxed"
      >
        I'm always excited to connect and meet new people in tech, whether it's for advice, 
        building something together, or just sharing ideas. I'm always up for a chat.
      </motion.p>
      
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="list-none p-0 m-0 text-sm space-y-2"
      >
        {contactInfo.map((contact, index) => (
          <motion.li
            key={contact.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
            className="mb-2"
          >
            <span className="font-semibold text-gray-800">{contact.label}:</span>{' '}
            <a
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 underline transition-colors"
            >
              {contact.value}
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default ContactWindow;
