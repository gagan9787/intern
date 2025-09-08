// Fetch and display services
async function fetchServices() {
  try {
    const response = await fetch('http://localhost:3000/api/services');
    const services = await response.json();
    const servicesGrid = document.querySelector('.services-grid');
    servicesGrid.innerHTML = ''; // Clear existing cards
    services.forEach(service => {
      const card = document.createElement('article');
      card.classList.add('service-card');
      card.innerHTML = `
        <h2>${service.name}</h2>
        <p>${service.description}</p>
        <a href="#" class="btn">Learn More</a>
      `;
      servicesGrid.appendChild(card);
    });
  } catch (error) {
    console.error('Error fetching services:', error);
  }
}

// Toggle services visibility
document.getElementById('toggle-services').addEventListener('click', () => {
  const servicesGrid = document.querySelector('.services-grid');
  servicesGrid.style.display = servicesGrid.style.display === 'none' ? 'grid' : 'none';
});

// Handle form submission
document.getElementById('add-service-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('service-name').value;
  const description = document.getElementById('service-description').value;

  try {
    const response = await fetch('http://localhost:3000/api/services', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, description })
    });

    if (response.ok) {
      document.getElementById('add-service-form').reset();
      fetchServices(); // Refresh services
    } else {
      const error = await response.json();
      alert(error.error || 'Failed to add service');
    }
  } catch (error) {
    console.error('Error adding service:', error);
    alert('Failed to add service');
  }
});

// Initial fetch
fetchServices();