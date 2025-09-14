import { useState, useEffect } from "react";
import axios from "axios";
import ServiceCard from "./components/ServiceCard";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import LoadingSpinner from "./components/LoadingSpinner";

function Dashboard() {
  const [services, setServices] = useState([]);
  const [form, setForm] = useState({ name: "", description: "" });
  const [loading, setLoading] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name) {
      alert("Service name is required");
      return;
    }
    try {
      const res = await axios.post("http://localhost:3000/api/services", form);
      setServices([...services, res.data]);
      setForm({ name: "", description: "" });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3000/api/services")
      .then((res) => {
        setServices(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
      <NavBar />
      <main className="p-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-indigo-700 mb-6 tracking-tight">
          {/* Community Services */}
        </h2>
        <form
          onSubmit={handleSubmit}
          className="mb-8 bg-white p-6 rounded-xl shadow-lg flex flex-col sm:flex-row gap-4"
        >
          <input
            type="text"
            placeholder="Service Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="flex-1 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-gray-50 transition-all duration-200"
          />
          <input
            type="text"
            placeholder="Description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="flex-1 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-gray-50 transition-all duration-200"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-3 rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 font-medium"
          >
            Add Service
          </button>
        </form>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service._id} service={service} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default Dashboard;