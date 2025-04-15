document.addEventListener('DOMContentLoaded', function() {
    // Add doctors page specific styles
    const style = document.createElement('style');
    style.textContent = `
    /* Search Section */
    .search-section {
      padding: 2rem 0;
    }

    .search-container {
      background-color: white;
      border-radius: var(--radius);
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      padding: 1.5rem;
    }

    .search-form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    @media (min-width: 768px) {
      .search-form {
        flex-direction: row;
        align-items: center;
      }
    }

    .search-input-group {
      display: flex;
      flex: 1;
    }

    .search-input {
      flex: 1;
      padding: 0.75rem 1rem;
      border: 1px solid var(--border);
      border-radius: var(--radius) 0 0 var(--radius);
      font-size: 0.875rem;
    }

    .search-input:focus {
      outline: none;
      border-color: var(--primary);
    }

    .search-input-group .btn {
      border-radius: 0 var(--radius) var(--radius) 0;
    }

    .search-filters {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
    }

    @media (min-width: 768px) {
      .search-filters {
        flex-wrap: nowrap;
      }
    }

    .filter-select {
      flex: 1;
      padding: 0.75rem 1rem;
      border: 1px solid var(--border);
      border-radius: var(--radius);
      font-size: 0.875rem;
      background-color: var(--background);
      min-width: 150px;
    }

    .filter-select:focus {
      outline: none;
      border-color: var(--primary);
    }

    /* Doctors Section */
    .doctors-section {
      padding: 2rem 0 5rem;
    }

    .doctors-count {
      font-size: 0.875rem;
      color: var(--muted);
    }

    .doctors-grid {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 2rem;
    }

    @media (min-width: 640px) {
      .doctors-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (min-width: 1024px) {
      .doctors-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .doctor-card {
      background-color: white;
      border-radius: var(--radius);
      overflow: hidden;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .doctor-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    }

    .doctor-image {
      height: 200px;
      background-color: var(--muted-light);
      position: relative;
    }

    .doctor-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .doctor-availability {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background-color: var(--success);
      color: white;
      font-size: 0.75rem;
      font-weight: 500;
      padding: 0.25rem 0.5rem;
      border-radius: 9999px;
    }

    .doctor-details {
      padding: 1.5rem;
    }

    .doctor-name {
      font-size: 1.125rem;
      font-weight: 600;
      margin-bottom: 0.25rem;
      color: var(--foreground);
    }

    .doctor-specialty {
      font-size: 0.875rem;
      color: var(--primary);
      margin-bottom: 1rem;
    }

    .doctor-info {
      font-size: 0.875rem;
      color: var(--muted);
      margin-bottom: 1.5rem;
    }

    .doctor-info p {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 0.5rem;
    }

    .location-icon, .experience-icon, .rating-icon {
      width: 1rem;
      height: 1rem;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }

    .location-icon {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236c757d'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'/%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'/%3E%3C/svg%3E");
    }

    .experience-icon {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236c757d'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'/%3E%3C/svg%3E");
    }

    .rating-icon {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23ffc107' viewBox='0 0 24 24' stroke='%23ffc107'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1' d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z'/%3E%3C/svg%3E");
    }

    .doctor-actions {
      display: flex;
      gap: 0.5rem;
    }

    .doctor-actions .btn {
      flex: 1;
    }
  `;
    document.head.appendChild(style);

    // Doctor data
    const doctors = [{
            id: 1,
            name: "Dr. Sarah Johnson",
            specialty: "Cardiology",
            image: "https://randomuser.me/api/portraits/women/32.jpg",
            location: "patna",
            experience: "15 years",
            rating: 4.9,
            availability: "Available Today"
        },
        {
            id: 2,
            name: "Dr. Michael Chen",
            specialty: "Neurology",
            image: "https://randomuser.me/api/portraits/men/41.jpg",
            location: "Boston, MA",
            experience: "12 years",
            rating: 4.7,
            availability: "Available Tomorrow"
        },
        {
            id: 3,
            name: "Dr. Emily Rodriguez",
            specialty: "Pediatrics",
            image: "https://randomuser.me/api/portraits/women/63.jpg",
            location: "Los Angeles, CA",
            experience: "8 years",
            rating: 4.8,
            availability: "Available Today"
        },
        {
            id: 4,
            name: "Dr. James Wilson",
            specialty: "Orthopedics",
            image: "https://randomuser.me/api/portraits/men/79.jpg",
            location: "Chicago, IL",
            experience: "20 years",
            rating: 4.9,
            availability: "Available This Week"
        },
        {
            id: 5,
            name: "Dr. Lisa Patel",
            specialty: "Dermatology",
            image: "https://randomuser.me/api/portraits/women/11.jpg",
            location: "San Francisco, CA",
            experience: "10 years",
            rating: 4.6,
            availability: "Available Today"
        },
        {
            id: 6,
            name: "Dr. Robert Kim",
            specialty: "Psychiatry",
            image: "https://randomuser.me/api/portraits/men/16.jpg",
            location: "Seattle, WA",
            experience: "14 years",
            rating: 4.8,
            availability: "Available This Week"
        }
    ];

    // Elements
    const doctorsGrid = document.getElementById('doctorsGrid');
    const doctorsCount = document.getElementById('doctorsCount');
    const searchInput = document.getElementById('doctorSearch');
    const searchBtn = document.getElementById('searchBtn');
    const specialtyFilter = document.getElementById('specialtyFilter');
    const availabilityFilter = document.getElementById('availabilityFilter');

    // Render doctors
    function renderDoctors(doctorsList) {
        doctorsGrid.innerHTML = '';

        if (doctorsList.length === 0) {
            doctorsGrid.innerHTML = '<div class="no-results">No doctors found matching your criteria. Please try a different search.</div>';
            doctorsCount.textContent = 'Found 0 doctors';
            return;
        }

        doctorsCount.textContent = `Found ${doctorsList.length} doctor${doctorsList.length === 1 ? '' : 's'}`;

        doctorsList.forEach(doctor => {
            const doctorCard = document.createElement('div');
            doctorCard.className = 'doctor-card';
            doctorCard.innerHTML = `
        <div class="doctor-image">
          <img src="${doctor.image}" alt="${doctor.name}">
          <span class="doctor-availability">${doctor.availability}</span>
        </div>
        <div class="doctor-details">
          <h3 class="doctor-name">${doctor.name}</h3>
          <div class="doctor-specialty">${doctor.specialty}</div>
          <div class="doctor-info">
            <p><span class="location-icon"></span> ${doctor.location}</p>
            <p><span class="experience-icon"></span> ${doctor.experience} experience</p>
            <p><span class="rating-icon"></span> ${doctor.rating}/5 rating</p>
          </div>
          <div class="doctor-actions">
            <a href="appointments.html?doctorId=${doctor.id}" class="btn btn-primary">Book Appointment</a>
            <a href="consultations.html?doctorId=${doctor.id}" class="btn btn-outline">Video Consult</a>
          </div>
        </div>
      `;

            doctorsGrid.appendChild(doctorCard);
        });
    }

    // Filter doctors
    function filterDoctors() {
        const searchTerm = searchInput.value.toLowerCase();
        const specialty = specialtyFilter.value;
        const availability = availabilityFilter.value;

        const filtered = doctors.filter(doctor => {
            // Search term filter
            const matchesSearch =
                doctor.name.toLowerCase().includes(searchTerm) ||
                doctor.specialty.toLowerCase().includes(searchTerm) ||
                doctor.location.toLowerCase().includes(searchTerm);

            // Specialty filter
            const matchesSpecialty = !specialty || doctor.specialty === specialty;

            // Availability filter
            let matchesAvailability = true;
            if (availability === 'today') {
                matchesAvailability = doctor.availability === 'Available Today';
            } else if (availability === 'week') {
                matchesAvailability = doctor.availability.includes('Available');
            }

            return matchesSearch && matchesSpecialty && matchesAvailability;
        });

        renderDoctors(filtered);
    }

    // Event listeners
    if (searchBtn) {
        searchBtn.addEventListener('click', filterDoctors);
    }

    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                filterDoctors();
            }
        });
    }

    if (specialtyFilter) {
        specialtyFilter.addEventListener('change', filterDoctors);
    }

    if (availabilityFilter) {
        availabilityFilter.addEventListener('change', filterDoctors);
    }

    // Initialize
    renderDoctors(doctors);
});