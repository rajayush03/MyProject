
document.addEventListener('DOMContentLoaded', function() {
  const appointmentForm = document.getElementById('appointmentForm');
  const appointmentSuccess = document.getElementById('appointmentSuccess');
  const fullNameInput = document.getElementById('fullName');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const doctorInput = document.getElementById('doctor');
  const dateInput = document.getElementById('appointmentDate');
  const timeInput = document.getElementById('appointmentTime');
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
        dateError.textContent = 'Appointments are not available on weekends. Please select a weekday.';
        this.value = '';
        timeInput.disabled = true;
      } else {
        dateError.textContent = '';
        timeInput.disabled = false;
      }
    });
  }

  // Form validation and submission
  if (appointmentForm) {
    appointmentForm.addEventListener('submit', function(e) {
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
        showError(reasonError, 'Please provide a reason for your appointment');
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
          const appointmentDate = new Date(dateInput.value).toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          });
          
          // Show success message
          appointmentForm.style.display = 'none';
          appointmentSuccess.classList.remove('hidden');
          
          // Show toast notification
          window.showToast(
            'Appointment Scheduled', 
            `Your appointment with ${doctorName} on ${appointmentDate} at ${timeInput.value} has been confirmed.`
          );
          
          // Reset form state
          submitBtn.textContent = 'Schedule Appointment';
          submitBtn.disabled = false;
          
          // Store appointment in local storage (for demo purposes)
          storeAppointment({
            fullName: fullNameInput.value,
            email: emailInput.value,
            phone: phoneInput.value,
            doctor: doctorName,
            date: appointmentDate,
            time: timeInput.value,
            reason: reasonInput.value
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
  
  // Book another appointment
  if (bookAnotherBtn) {
    bookAnotherBtn.addEventListener('click', function() {
      appointmentSuccess.classList.add('hidden');
      appointmentForm.style.display = 'flex';
      appointmentForm.reset();
      timeInput.disabled = true;
    });
  }
  
  // Return home
  if (returnHomeBtn) {
    returnHomeBtn.addEventListener('click', function() {
      window.location.href = 'index.html';
    });
  }
  
  // Store appointment in local storage
  function storeAppointment(appointment) {
    let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    appointments.push(appointment);
    localStorage.setItem('appointments', JSON.stringify(appointments));
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
});
