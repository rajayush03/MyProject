
// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobileMenu');

  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
      
      // Toggle menu icon
      const menuIcon = mobileMenuToggle.querySelector('.menu-icon');
      if (mobileMenu.classList.contains('active')) {
        menuIcon.style.background = 'transparent';
        menuIcon.querySelector('::before').style.transform = 'rotate(45deg) translate(5px, 5px)';
        menuIcon.querySelector('::after').style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        menuIcon.style.background = 'var(--foreground)';
        menuIcon.querySelector('::before').style.transform = 'none';
        menuIcon.querySelector('::after').style.transform = 'none';
      }
    });
  }

  // Chatbot functionality
  const chatbotToggle = document.getElementById('chatbotToggle');
  const chatbotDialog = document.getElementById('chatbotDialog');
  const chatbotClose = document.getElementById('chatbotClose');
  const chatbotForm = document.getElementById('chatbotForm');
  const chatbotInput = document.getElementById('chatbotInput');
  const chatbotMessages = document.getElementById('chatbotMessages');

  if (chatbotToggle && chatbotDialog) {
    // Toggle chatbot
    chatbotToggle.addEventListener('click', function() {
      chatbotDialog.classList.toggle('active');
    });

    // Close chatbot
    if (chatbotClose) {
      chatbotClose.addEventListener('click', function() {
        chatbotDialog.classList.remove('active');
      });
    }

    // Handle messages
    if (chatbotForm && chatbotInput) {
      chatbotForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const message = chatbotInput.value.trim();
        if (!message) return;
        
        // Add user message
        addMessage(message, false);
        
        // Clear input
        chatbotInput.value = '';
        
        // Process the message and generate a response
        setTimeout(() => {
          processMessage(message);
        }, 600);
      });
    }
  }

  // Add a message to the chat
  function addMessage(text, isBot) {
    if (!chatbotMessages) return;
    
    const messageTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    
    if (text === 'APPOINTMENT_BUTTON') {
      const buttonHTML = `
        <div class="appointment-button">
          <button class="btn btn-primary btn-full" id="chatAppointmentBtn">
            Book an Appointment
          </button>
        </div>
      `;
      
      const messageDiv = document.createElement('div');
      messageDiv.className = 'message bot-message';
      messageDiv.innerHTML = `<div class="message-bubble">${buttonHTML}</div>`;
      
      chatbotMessages.appendChild(messageDiv);
      
      // Add event listener to the new button
      const appointmentBtn = document.getElementById('chatAppointmentBtn');
      if (appointmentBtn) {
        appointmentBtn.addEventListener('click', function() {
          window.location.href = 'appointments.html';
        });
      }
    } else {
      const messageDiv = document.createElement('div');
      messageDiv.className = `message ${isBot ? 'bot-message' : 'user-message'}`;
      messageDiv.innerHTML = `
        <div class="message-bubble">
          ${text}
          <div class="message-time">${messageTime}</div>
        </div>
      `;
      
      chatbotMessages.appendChild(messageDiv);
    }
    
    // Scroll to bottom
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }

  // Process a message and generate a response
  function processMessage(message) {
    let botResponse;
    
    const lowercaseInput = message.toLowerCase();
    
    if (lowercaseInput.includes('appointment') || lowercaseInput.includes('book') || lowercaseInput.includes('schedule')) {
      botResponse = "Sure, I can help you book an appointment. You can either click the button below to go to our appointment page or tell me what type of doctor you need.";
      addMessage(botResponse, true);
      
      // Add appointment button message
      setTimeout(() => {
        addMessage('APPOINTMENT_BUTTON', true);
      }, 500);
      
    } else if (lowercaseInput.includes('doctor') || lowercaseInput.includes('specialist')) {
      botResponse = "We have many specialists available. You can view all our doctors and their specialties on our Find Doctors page. Would you like to go there now?";
      addMessage(botResponse, true);
    } else if (lowercaseInput.includes('package') || lowercaseInput.includes('plan') || lowercaseInput.includes('subscription')) {
      botResponse = "We offer various health packages tailored to different needs and budgets. You can check out all our health packages on the dedicated page. Would you like me to direct you there?";
      addMessage(botResponse, true);
    } else if (lowercaseInput.includes('video') || lowercaseInput.includes('consultation') || lowercaseInput.includes('online')) {
      botResponse = "Our video consultation service allows you to speak with a doctor from the comfort of your home. After booking, we'll send you a Google Meet link via email. Want to book a video consultation?";
      addMessage(botResponse, true);
    } else if (lowercaseInput.includes('emergency')) {
      botResponse = "If you're experiencing a medical emergency, please call 911 or your local emergency number immediately. Don't wait for online assistance.";
      addMessage(botResponse, true);
    } else if (lowercaseInput.includes('thank')) {
      botResponse = "You're welcome! Is there anything else I can help you with?";
      addMessage(botResponse, true);
    } else if (lowercaseInput.includes('bye') || lowercaseInput.includes('goodbye')) {
      botResponse = "Goodbye! Feel free to chat again if you have more questions. Stay healthy!";
      addMessage(botResponse, true);
    } else {
      botResponse = "I'm here to help with appointments, finding doctors, video consultations, and health packages. Could you please specify what you're looking for?";
      addMessage(botResponse, true);
    }
  }

  // Display toast notifications
  window.showToast = function(title, message, duration = 5000) {
    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <div class="toast-header">
        ${title}
        <button class="toast-close">&times;</button>
      </div>
      <div class="toast-body">
        ${message}
      </div>
    `;
    
    // Add toast to the document
    document.body.appendChild(toast);
    
    // Show toast
    setTimeout(() => {
      toast.classList.add('show');
    }, 100);
    
    // Add close button event
    const closeBtn = toast.querySelector('.toast-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', function() {
        toast.classList.remove('show');
        setTimeout(() => {
          document.body.removeChild(toast);
        }, 300);
      });
    }
    
    // Auto-hide after duration
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        if (document.body.contains(toast)) {
          document.body.removeChild(toast);
        }
      }, 300);
    }, duration);
  };

  // Toast styles
  const style = document.createElement('style');
  style.textContent = `
    .toast {
      position: fixed;
      top: 1rem;
      right: 1rem;
      width: 350px;
      max-width: calc(100% - 2rem);
      background-color: white;
      border-radius: var(--radius);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      z-index: 9999;
      overflow: hidden;
      opacity: 0;
      transform: translateY(-20px);
      transition: all 0.3s ease;
    }
    
    .toast.show {
      opacity: 1;
      transform: translateY(0);
    }
    
    .toast-header {
      padding: 0.75rem 1rem;
      background-color: var(--primary);
      color: white;
      font-weight: 600;
      font-size: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    
    .toast-body {
      padding: 1rem;
      font-size: 0.875rem;
    }
    
    .toast-close {
      background: none;
      border: none;
      color: white;
      font-size: 1.25rem;
      cursor: pointer;
    }
  `;
  document.head.appendChild(style);
});
