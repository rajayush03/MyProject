
document.addEventListener('DOMContentLoaded', function() {
  // Add consultations page specific styles
  const style = document.createElement('style');
  style.textContent = `
    /* How It Works Section */
    .how-it-works-section {
      padding: 3rem 0;
      background-color: white;
    }

    .steps-container {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      margin-top: 2rem;
    }

    @media (min-width: 768px) {
      .steps-container {
        flex-direction: row;
      }
    }

    .step {
      flex: 1;
      text-align: center;
      position: relative;
      padding: 2rem;
      background-color: var(--background);
      border-radius: var(--radius);
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }

    .step-number {
      position: absolute;
      top: -1.25rem;
      left: 50%;
      transform: translateX(-50%);
      width: 2.5rem;
      height: 2.5rem;
      background-color: var(--primary);
      color: white;
      border-radius: 9999px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 1.25rem;
      z-index: 10;
    }

    .step-icon {
      width: 4rem;
      height: 4rem;
      background-color: rgba(0, 175, 175, 0.1);
      border-radius: 9999px;
      margin: 0 auto 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background-repeat: no-repeat;
      background-position: center;
      background-size: 2rem;
    }

    .book-icon {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2300afaf'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'/%3E%3C/svg%3E");
    }

    .payment-icon {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2300afaf'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z'/%3E%3C/svg%3E");
    }

    .meet-icon {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2300afaf'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z'/%3E%3C/svg%3E");
    }

    .step-title {
      font-size: 1.125rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: var(--foreground);
    }

    .step-description {
      font-size: 0.875rem;
      color: var(--muted);
    }

    /* Booking Section */
    .booking-section {
      padding: 3rem 0;
      background-color: var(--background);
    }

    .consultation-form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .consultation-success {
      text-align: center;
      padding: 2rem;
    }

    /* Benefits Section */
    .benefits-section {
      padding: 4rem 0;
      background-color: white;
    }

    .benefits-grid {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 2rem;
      margin-top: 2rem;
    }

    @media (min-width: 640px) {
      .benefits-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (min-width: 1024px) {
      .benefits-grid {
        grid-template-columns: repeat(4, 1fr);
      }
    }

    .benefit {
      text-align: center;
    }

    .benefit-icon {
      width: 4rem;
      height: 4rem;
      background-color: rgba(0, 175, 175, 0.1);
      border-radius: 9999px;
      margin: 0 auto 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background-repeat: no-repeat;
      background-position: center;
      background-size: 2rem;
    }

    .convenience-icon {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2300afaf'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'/%3E%3C/svg%3E");
    }

    .time-icon {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2300afaf'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'/%3E%3C/svg%3E");
    }

    .safety-icon {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2300afaf'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'/%3E%3C/svg%3E");
    }

    .same-icon {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2300afaf'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'/%3E%3C/svg%3E");
    }

    .benefit-title {
      font-size: 1.125rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: var(--foreground);
    }

    .benefit-description {
      font-size: 0.875rem;
      color: var(--muted);
    }

    /* FAQ Section */
    .faq-section {
      padding: 4rem 0 6rem;
      background-color: var(--background);
    }

    .faq-container {
      max-width: 48rem;
      margin: 2rem auto 0;
    }

    .faq-item {
      margin-bottom: 1rem;
      background-color: white;
      border-radius: var(--radius);
      overflow: hidden;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }

    .faq-question {
      padding: 1.25rem;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: background-color 0.2s ease;
    }

    .faq-question:hover {
      background-color: rgba(0, 175, 175, 0.05);
    }

    .faq-question h3 {
      font-size: 1rem;
      font-weight: 600;
      margin: 0;
    }

    .faq-icon {
      width: 1.25rem;
      height: 1.25rem;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2300afaf'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      transition: transform 0.2s ease;
    }

    .faq-question.active .faq-icon {
      transform: rotate(180deg);
    }

    .faq-answer {
      padding: 0 1.25rem;
      height: 0;
      overflow: hidden;
      transition: height 0.3s ease, padding 0.3s ease;
    }

    .faq-answer.active {
      padding: 0 1.25rem 1.25rem;
      height: auto;
    }

    .faq-answer p {
      font-size: 0.875rem;
      color: var(--muted);
      margin: 0;
    }
  `;
  document.head.appendChild(style);

  // Initialize form functionality
  const consultationForm = document.getElementById('consultationForm');
  const consultationSuccess = document.getElementById('consultationSuccess');
  const fullNameInput = document.getElementById('fullName');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const doctorInput = document.getElementById('doctor');
  const dateInput = document.getElementById('consultationDate');
  const timeInput = document.getElementById('consultationTime');
  const reasonInput = document.getElementById('reason');
  const submitBtn = document.getElementById('submitBtn');
  const bookAnotherBtn = document.getElementById('bookAnotherBtn');
  const returnHomeBtn = document.getElementById('returnHomeBtn');

  // Error message elements
  const fullNameError = document.getElementById('fullNameError');
  const emailError = document.getElementById('emailError');
  const phoneError = document.getElementById('phoneError');
  const doctorError = document.getElementById('doctorError');
  const dateError = document.getElementById('dateError');
  const timeError = document.getElementById('timeError');
  const reasonError = document.getElementById('reasonError');

  // Set min date to today
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
    
    // Enable time selection once date is selected
    dateInput.addEventListener('change', function() {
      const selectedDate = new Date(this.value);
      const day = selectedDate.getDay();
      
      if (day === 0 || day === 6) {
        // Weekend - show error and reset
        dateError.textContent = 'Consultations are not available on weekends. Please select a weekday.';
        this.value = '';
        timeInput.disabled = true;
      } else {
        dateError.textContent = '';
        timeInput.disabled = false;
      }
    });
  }

  // Form validation and submission
  if (consultationForm) {
    consultationForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Reset error messages
      clearErrors();
      
      // Validate inputs
      let isValid = true;
      
      if (!fullNameInput.value.trim()) {
        showError(fullNameError, 'Please enter your full name');
        isValid = false;
      } else if (fullNameInput.value.trim().length < 2) {
        showError(fullNameError, 'Name must be at least 2 characters');
        isValid = false;
      }
      
      if (!emailInput.value.trim()) {
        showError(emailError, 'Please enter your email address');
        isValid = false;
      } else if (!isValidEmail(emailInput.value)) {
        showError(emailError, 'Please enter a valid email address');
        isValid = false;
      }
      
      if (!phoneInput.value.trim()) {
        showError(phoneError, 'Please enter your phone number');
        isValid = false;
      } else if (phoneInput.value.trim().length < 10) {
        showError(phoneError, 'Please enter a valid phone number');
        isValid = false;
      }
      
      if (!doctorInput.value) {
        showError(doctorError, 'Please select a doctor');
        isValid = false;
      }
      
      if (!dateInput.value) {
        showError(dateError, 'Please select a date');
        isValid = false;
      }
      
      if (!timeInput.value) {
        showError(timeError, 'Please select a time slot');
        isValid = false;
      }
      
      if (!reasonInput.value.trim()) {
        showError(reasonError, 'Please provide a reason for your consultation');
        isValid = false;
      } else if (reasonInput.value.trim().length < 5) {
        showError(reasonError, 'Reason must be at least 5 characters');
        isValid = false;
      }
      
      if (isValid) {
        // Simulate form submission
        submitBtn.textContent = 'Processing...';
        submitBtn.disabled = true;
        
        setTimeout(function() {
          // Get doctor name for confirmation message
          const doctorSelect = document.getElementById('doctor');
          const doctorName = doctorSelect.options[doctorSelect.selectedIndex].text;
          const consultationDate = new Date(dateInput.value).toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          });
          
          // Show success message
          consultationForm.style.display = 'none';
          consultationSuccess.classList.remove('hidden');
          
          // Show toast notification
          window.showToast(
            'Video Consultation Booked', 
            `Your consultation with ${doctorName} on ${consultationDate} at ${timeInput.value} has been confirmed. Check your email for the Google Meet link.`
          );
          
          // Reset form state
          submitBtn.textContent = 'Book Video Consultation';
          submitBtn.disabled = false;
          
          // Store consultation in local storage (for demo purposes)
          storeConsultation({
            fullName: fullNameInput.value,
            email: emailInput.value,
            phone: phoneInput.value,
            doctor: doctorName,
            date: consultationDate,
            time: timeInput.value,
            reason: reasonInput.value,
            meetLink: `https://meet.google.com/abc-${Math.random().toString(36).substring(2, 7)}-xyz`
          });
        }, 1500);
      }
    });
  }
  
  // Helper functions for validation
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function showError(element, message) {
    if (element) {
      element.textContent = message;
    }
  }
  
  function clearErrors() {
    const errorElements = document.querySelectorAll('.form-error');
    errorElements.forEach(element => {
      element.textContent = '';
    });
  }
  
  // Book another consultation
  if (bookAnotherBtn) {
    bookAnotherBtn.addEventListener('click', function() {
      consultationSuccess.classList.add('hidden');
      consultationForm.style.display = 'flex';
      consultationForm.reset();
      timeInput.disabled = true;
    });
  }
  
  // Return home
  if (returnHomeBtn) {
    returnHomeBtn.addEventListener('click', function() {
      window.location.href = 'index.html';
    });
  }
  
  // Store consultation in local storage
  function storeConsultation(consultation) {
    let consultations = JSON.parse(localStorage.getItem('consultations')) || [];
    consultations.push(consultation);
    localStorage.setItem('consultations', JSON.stringify(consultations));
  }

  // Check for doctor ID in URL parameters
  function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  }
  
  const doctorId = getUrlParameter('doctorId');
  if (doctorId && doctorInput) {
    doctorInput.value = doctorId;
  }

  // FAQ Accordions
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
      const faqId = this.getAttribute('data-faq');
      const answer = document.getElementById(`faq-${faqId}`);
      
      // Toggle current FAQ
      this.classList.toggle('active');
      answer.classList.toggle('active');
      
      // Close other FAQs
      faqQuestions.forEach(q => {
        if (q !== this) {
          const qId = q.getAttribute('data-faq');
          const qAnswer = document.getElementById(`faq-${qId}`);
          
          q.classList.remove('active');
          qAnswer.classList.remove('active');
        }
      });
    });
  });
});
