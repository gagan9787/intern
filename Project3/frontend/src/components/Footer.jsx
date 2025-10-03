import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600/80 backdrop-blur-md sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-center items-center">
        <h1 className="text-2xl font-extrabold tracking-tight text-white">
         {/* 🙏 Thanks For Visit Us! 🙏 */}
         © 2025 Community Services. All rights reserved.
        </h1>
      </div>
    </nav>
  );
}