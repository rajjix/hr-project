import React from "react"

const Navbar: React.FC = () => {
  return (
    <nav className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 shadow-sm">
      <div className="text-lg font-semibold">Job Description Program</div>
      <div className="flex items-center gap-4">
        <button className="text-sm text-gray-600 hover:text-gray-800">
          Logout
        </button>
      </div>
    </nav>
  )
}

export default Navbar
