export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center py-12">
      <div className="w-12 h-12 border-4 border-t-transparent border-gradient-to-r from-indigo-500 to-purple-600 rounded-full animate-spin"></div>
    </div>
  );
}