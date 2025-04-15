
document.addEventListener('DOMContentLoaded', function() {
  // Additional functionality specific to the home page can be added here
  
  // Example: Show welcome toast on first visit
  const hasVisited = localStorage.getItem('hasVisited');
  
  if (!hasVisited) {
    setTimeout(() => {
      window.showToast(
        'Welcome to HealthCare', 
        'Explore our services and book appointments online for quality healthcare.'
      );
      localStorage.setItem('hasVisited', 'true');
    }, 1000);
  }

  // Add home page specific styles
  const style = document.createElement('style');
  style.textContent = `
    /* Home Hero Section */
    .home-hero {
      padding: 4rem 0;
      background-color: rgba(0, 175, 175, 0.05);
      position: relative;
      overflow: hidden;
    }

    @media (min-width: 768px) {
      .home-hero {
        padding: 6rem 0;
      }
    }

    .home-hero .container {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    @media (min-width: 1024px) {
      .home-hero .container {
        flex-direction: row;
        align-items: center;
      }
    }

    .hero-content {
      flex: 1;
    }

    .hero-title {
      font-size: 2.5rem;
      font-weight: 700;
      line-height: 1.2;
      margin-bottom: 1rem;
      background: linear-gradient(45deg, var(--primary) 0%, var(--secondary) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    @media (min-width: 768px) {
      .hero-title {
        font-size: 3.5rem;
      }
    }

    .hero-description {
      font-size: 1.125rem;
      color: var(--muted);
      margin-bottom: 2rem;
      max-width: 36rem;
    }

    .hero-buttons {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .hero-image {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .hero-image img {
      max-width: 100%;
      height: auto;
      border-radius: 1rem;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }

    /* Services Section */
    .services-section {
      padding: 5rem 0;
      background-color: white;
    }

    .section-header {
      text-align: center;
      max-width: 48rem;
      margin: 0 auto 3rem;
    }

    .section-title {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: var(--foreground);
    }

    .section-description {
      font-size: 1.125rem;
      color: var(--muted);
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 2rem;
    }

    @media (min-width: 640px) {
      .services-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (min-width: 1024px) {
      .services-grid {
        grid-template-columns: repeat(4, 1fr);
      }
    }

    .service-card {
      background-color: white;
      border-radius: var(--radius);
      padding: 2rem;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      text-align: center;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .service-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    }

    .service-icon {
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

    .doctor-icon {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2300afaf'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'/%3E%3C/svg%3E");
    }

    .appointment-icon {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2300afaf'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'/%3E%3C/svg%3E");
    }

    .video-chat-icon {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2300afaf'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z'/%3E%3C/svg%3E");
    }

    .package-box-icon {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2300afaf'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4'/%3E%3C/svg%3E");
    }

    .service-title {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: var(--foreground);
    }

    .service-description {
      font-size: 0.875rem;
      color: var(--muted);
      margin-bottom: 1.5rem;
    }

    .service-link {
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--primary);
      display: inline-flex;
      align-items: center;
      transition: color 0.2s ease;
    }

    .service-link:hover {
      color: var(--primary-dark);
    }

    .service-link:after {
      content: '';
      width: 1rem;
      height: 1rem;
      margin-left: 0.25rem;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2300afaf'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M14 5l7 7m0 0l-7 7m7-7H3'/%3E%3C/svg%3E");
      background-size: contain;
      background-repeat: no-repeat;
      transition: transform 0.2s ease;
    }

    .service-link:hover:after {
      transform: translateX(4px);
    }

    /* Features Section */
    .features-section {
      padding: 5rem 0;
      background-color: var(--background);
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 2rem;
    }

    @media (min-width: 640px) {
      .features-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (min-width: 1024px) {
      .features-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .feature {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .feature-icon {
      width: 3rem;
      height: 3rem;
      background-color: rgba(0, 175, 175, 0.1);
      border-radius: 0.5rem;
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background-repeat: no-repeat;
      background-position: center;
      background-size: 1.5rem;
    }

    .qualified-icon {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2300afaf'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'/%3E%3C/svg%3E");
    }

    .emergency-icon {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2300afaf'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M13 10V3L4 14h7v7l9-11h-7z'/%3E%3C/svg%3E");
    }

    .tech-icon {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2300afaf'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'/%3E%3C/svg%3E");
    }

    .patient-icon {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2300afaf'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'/%3E%3C/svg%3E");
    }

    .affordable-icon {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2300afaf'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'/%3E%3C/svg%3E");
    }

    .friendly-icon {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2300afaf'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'/%3E%3C/svg%3E");
    }

    .feature-title {
      font-size: 1.125rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: var(--foreground);
    }

    .feature-description {
      font-size: 0.875rem;
      color: var(--muted);
    }

    /* Testimonials Section */
    .testimonials-section {
      padding: 5rem 0;
      background-color: white;
    }

    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 2rem;
    }

    @media (min-width: 768px) {
      .testimonials-grid {
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
    .cta-section {
      padding: 5rem 0;
      background: linear-gradient(45deg, var(--primary) 0%, var(--secondary) 100%);
      color: white;
      text-align: center;
    }

    .cta-content {
      max-width: 48rem;
      margin: 0 auto;
    }

    .cta-title {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    .cta-description {
      font-size: 1.125rem;
      margin-bottom: 2rem;
      opacity: 0.9;
    }

    .cta-buttons {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;
    }

    .cta-section .btn-primary {
      background-color: white;
      color: var(--primary);
    }

    .cta-section .btn-primary:hover {
      background-color: rgba(255, 255, 255, 0.9);
    }

    .cta-section .btn-outline {
      border-color: white;
      color: white;
    }

    .cta-section .btn-outline:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  `;
  document.head.appendChild(style);
});
