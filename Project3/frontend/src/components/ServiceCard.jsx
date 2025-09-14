export default function ServiceCard({ service }) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-[5px_5px_15px_rgba(0,0,0,0.1),-5px_-5px_15px_rgba(255,255,255,0.8)] hover:scale-105 transition-all duration-300 border-t-4 border-indigo-500">
      <h2 className="text-xl font-bold text-gray-800 mb-2">{service.name}</h2>
      <p className="text-gray-600">{service.description}</p>
    </div>
  );
}