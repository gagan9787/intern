document.getElementById('toggle-services').addEventListener('click', () => {
  const servicesGrid = document.querySelector('.services-grid');
  servicesGrid.style.display = servicesGrid.style.display === 'none' ? 'grid' : 'none';
});