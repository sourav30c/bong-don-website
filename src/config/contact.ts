/**
 * Global Contact & Communication Details
 * 
 * Edit this single file anytime you want to change the mobile number,
 * WhatsApp number, or email address across the entire website!
 */

export const SITE_CONTACT = {
  // Primary Mobile / Phone Number
  phone: {
    display: '+91 89100 11550',
    telUrl: 'tel:+918910011550',
  },

  // WhatsApp Desk
  whatsapp: {
    number: '918910011550',
    defaultMessage: 'Hello Dr. Sourav Sarkar, I would like to book a consultation.',
    getUrl: (customText?: string) => {
      const text = customText || 'Hello Dr. Sourav Sarkar, I would like to book a consultation.';
      return `https://wa.me/918910011550?text=${encodeURIComponent(text)}`;
    },
  },

  // Official Email Address
  email: {
    address: 'contact@drsouravsarkar.com',
    mailtoUrl: 'mailto:contact@drsouravsarkar.com',
  },

  // Clinic Assistance Hours
  hours: {
    display: 'Mon – Sat, 10:00 AM – 7:00 PM',
  },
} as const;

export default SITE_CONTACT;
