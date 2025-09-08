const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

let services = [
  { id: 1, name: 'Food Bank', description: 'Providing nutritious meals to those in need every week.' },
  { id: 2, name: 'Job Training', description: 'Free workshops to build skills and boost employability.' },
  { id: 3, name: 'Health Clinic', description: 'Accessible healthcare services for all community members.' },
  { id: 4, name: 'Youth Programs', description: 'Engaging activities and mentorship for young people.' }
];

app.use(cors());
app.use(express.json());

app.get('/api/services', (req, res) => {
  res.json(services);
});

app.post('/api/services', (req, res) => {
  const { name, description } = req.body;

  if (!name || !description) {
    return res.status(400).json({ error: 'Name and description are required' });
  }
  if (name.length > 50 || description.length > 200) {
    return res.status(400).json({ error: 'Name or description too long' });
  }

  const newService = {
    id: services.length + 1,
    name,
    description
  };

  services.push(newService);
  res.status(201).json(newService);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});