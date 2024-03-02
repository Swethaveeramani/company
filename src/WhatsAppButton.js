import React from 'react';
import whatsappLogo from '../src/img/whatsapp.png'; // Import your WhatsApp logo image

const WhatsAppButton = () => {
  return (
    <div className="fixed-bottom-right-100 p-3" style={{ zIndex: "6", left: "initial" }}>
      <a href='https://wa.me/918778548240?text=Hello How can I help you ?' target='_blank'>
        <img src={whatsappLogo} width="60" alt="WhatsApp" />
      </a>
    </div>
  );
}

export default WhatsAppButton;
