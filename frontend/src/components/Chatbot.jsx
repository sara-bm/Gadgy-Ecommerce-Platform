import React, { useEffect } from 'react';
import icon from "../assets/chatbot.png"
function Chatbot() {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.src = 'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=';
    
  
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* Add the df-messenger element */}
      <df-messenger
  intent="WELCOME"
  chat-title="EcommerceAdvisor"
  chat-icon="https://cdn-icons-png.flaticon.com/256/2040/2040653.png"
  agent-id="4d2705c3-bc8c-4160-8065-1911aea06572"
  language-code="en"
></df-messenger>
    </div>
  );
}

export default Chatbot;
