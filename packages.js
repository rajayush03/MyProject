
document.addEventListener('DOMContentLoaded', function() {
  // Add packages page specific styles
  const style = document.createElement('style');
  style.textContent = `
    /* Packages Section */
    .packages-section {
      padding: 3rem 0;
      background-color: white;
    }

    .packages-container {
      margin-top: 2rem;
    }

    .packages-tabs {
      display: flex;
      background-color: var(--background);
      border-radius: var(--radius);
      margin-bottom: 2rem;
      overflow: hidden;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }

    .package-tab {
      flex: 1;
      padding: 1rem;
      text-align: center;
      border: none;
      background-color: transparent;
      cursor: pointer;
      font-size: 0.875rem;
      font-weight: 500;
      transition: background-color 0.2s ease;
    }

    .package-tab.active {
      background-color: var(--primary);
      color: white;
    }

    .packages-grid {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 2rem;
    }

    @media (min-width: 640px) {
      .packages-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (min-width: 1024px) {
      .packages-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .hidden {
      display: none;
    }

    .package-card {
      background-color: white;
      border-radius: var(--radius);
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      border: 1px solid var(--border);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      position: relative;
    }

    .package-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    }

    .package-card.popular {
      border-color: var(--primary);
      transform: scale(1.05);
    }

    .package-card.popular:hover {
      transform: scale(1.05) translateY(-5px);
    }

    .package-badge {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background-color: var(--primary);
      color: white;
      font-size: 0.75rem;
      font-weight: 500;
      padding: 0.25rem 0.5rem;
      border-radius: 9999px;
    }

    .package-header {
      padding: 2rem;
      text-align: center;
      border-bottom: 1px solid var(--border);
    }

    .package-name {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: var(--foreground);
    }

    .package-price {
      font-size: 2rem;
      font-weight: 700;
      color: var(--primary);
    }

    .package-price span {
      font-size: 0.875rem;
      font-weight: 400;
      color: var(--muted);
    }

    .package-body {
      padding: 2rem;
    }

    .package-features {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .package-features li {
      padding-left: 1.5rem;
      margin-bottom: 0.75rem;
      position: relative;
      font-size: 0.875rem;
    }

    .feature-included {
      color: var(--foreground);
    }

    .feature-included::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0.25rem;
      width: 1rem;
      height: 1rem;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2300afaf'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 13l4 4L19 7'/%3E%3C/svg%3E");
      background-size: contain;
      background-repeat: no-repeat;
    }

    .feature-excluded {
      color: var(--muted);
    }

    .feature-excluded::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0.25rem;
      width: 1rem;
      height: 1rem;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236c757d'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 18L18 6M6 6l12 12'/%3E%3C/svg%3E");
      background-size: contain;
      background-repeat: no-repeat;
    }

    .package-footer {
      padding: 2rem;
      border-top: 1px solid var(--border);
    }

    /* Benefits Section */
    .benefits-section {
      padding: 4rem 0;
      background-color: var(--background);
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

    .benefit-card {
      background-color: white;
      padding: 2rem;
      border-radius: var(--radius);
      text-align: center;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }

    .benefit-card:hover {
      transform: translateY(-5px);
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

    .savings-icon {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2300afaf'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'/%3E%3C/svg%3E");
    }

    .priority-icon {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2300afaf'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z'/%3E%3C/svg%3E");
    }

    .prevention-icon {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2300afaf'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'/%3E%3C/svg%3E");
    }

    .digital-icon {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2300afaf'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'/%3E%3C/svg%3E");
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

    /* Testimonials Section */
    .testimonials-section {
      padding: 4rem 0;
      background-color: white;
    }

    .testimonials-container {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 2rem;
      margin-top: 2rem;
    }

    @media (min-width: 768px) {
      .testimonials-container {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .testimonial {
      background-color: var(--background);
      border-radius: var(--radius);
      padding: 2rem;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }

    .testimonial-content {
      margin-bottom: 1.5rem;
    }

    .testimonial-text {
      font-size: 0.875rem;
      line-height: 1.6;
      color: var(--foreground);
      font-style: italic;
    }

    .testimonial-author {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .testimonial-avatar {
      width: 3rem;
      height: 3rem;
      border-radius: 9999px;
      overflow: hidden;
    }

    .testimonial-avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .testimonial-info {
      display: flex;
      flex-direction: column;
    }

    .testimonial-name {
      font-size: 1rem;
      font-weight: 600;
      color: var(--foreground);
    }

    .testimonial-role {
      font-size: 0.75rem;
      color: var(--muted);
    }

    /* CTA Section */
    .packages-cta-section {
      padding: 5rem 0;
      background: linear-gradient(45deg, var(--primary) 0%, var(--secondary) 100%);
      color: white;
      text-align: center;
    }

    .packages-cta-content {
      max-width: 48rem;
      margin: 0 auto;
    }

    .packages-cta-title {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    .packages-cta-description {
      font-size: 1.125rem;
      margin-bottom: 2rem;
      opacity: 0.9;
    }

    .packages-cta-buttons {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;
    }

    .packages-cta-section .btn-primary {
      background-color: white;
      color: var(--primary);
    }

    .packages-cta-section .btn-primary:hover {
      background-color: rgba(255, 255, 255, 0.9);
    }

    .packages-cta-section .btn-outline {
      border-color: white;
      color: white;
    }

    .packages-cta-section .btn-outline:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  `;
  document.head.appendChild(style);

  // Tab switching
  const packageTabs = document.querySelectorAll('.package-tab');
  const packageGrids = [
    document.getElementById('individualPackages'),
    document.getElementById('familyPackages'),
    document.getElementById('corporatePackages')
  ];
  
  function showPackageTab(tabName) {
    // Hide all package grids
    packageGrids.forEach(grid => {
      if (grid) {
        grid.classList.add('hidden');
      }
    });
    
    // Show the selected tab
    const selectedGrid = document.getElementById(`${tabName}Packages`);
    if (selectedGrid) {
      selectedGrid.classList.remove('hidden');
    }
    
    // Update tab active state
    packageTabs.forEach(tab => {
      if (tab.getAttribute('data-tab') === tabName) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });
  }
  
  // Add click event listeners to package tabs
  packageTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const tabName = this.getAttribute('data-tab');
      showPackageTab(tabName);
    });
  });
  
  // Package selection
  const packageButtons = document.querySelectorAll('.package-card .btn');
  packageButtons.forEach(button => {
    button.addEventListener('click', function() {
      const packageCard = this.closest('.package-card');
      const packageName = packageCard.querySelector('.package-name').textContent;
      
      // Show toast notification
      window.showToast(
        'Package Selected', 
        `You've selected the ${packageName} package. A representative will contact you shortly.`
      );
      
      // Simulate form submission
      if (this.classList.contains('btn-primary')) {
        this.textContent = 'Processing...';
        setTimeout(() => {
          this.textContent = 'Selected ✓';
          this.disabled = true;
        }, 1500);
      }
    });
  });
  
  // Open chatbot from CTA
  const openChatbotBtn = document.getElementById('openChatbotBtn');
  const chatbotDialog = document.getElementById('chatbotDialog');
  const chatbotInput = document.getElementById('chatbotInput');
  const chatbotMessages = document.getElementById('chatbotMessages');
  
  if (openChatbotBtn && chatbotDialog) {
    openChatbotBtn.addEventListener('click', function() {
      chatbotDialog.classList.add('active');
      
      // Add a special message about packages
      setTimeout(() => {
        const messageTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message bot-message';
        messageDiv.innerHTML = `
          <div class="message-bubble">
            I can help you choose the right health package for your needs. What specific benefits are you looking for?
            <div class="message-time">${messageTime}</div>
          </div>
        `;
        
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        
        // Focus on input
        if (chatbotInput) {
          chatbotInput.focus();
        }
      }, 500);
    });
  }
});
