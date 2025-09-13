import { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/services')
      .then(res => setServices(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">VillageConnect Dashboard</h1>
      <ul className="list-disc pl-5">
        {services.map(service => (
          <li key={service._id} className="mb-2">
            <strong>{service.name}</strong>: {service.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;