import React from "react"
import { NavLink } from "react-router-dom"
import { Home, BarChart2, Users, Briefcase } from "lucide-react"

const Sidebar: React.FC = () => {
  const navItems = [
    { to: "/", label: "Home", icon: <Home size={18} /> },
    {
      to: "/reports",
      label: "Reports & Analytics",
      icon: <BarChart2 size={18} />,
    },
    { to: "/hr-module", label: "HR Module", icon: <Briefcase size={18} /> },
    { to: "/users", label: "User Management", icon: <Users size={18} /> },
  ]

  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-4 space-y-2">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium ${
              isActive
                ? "bg-blue-100 text-blue-700"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }>
          {item.icon}
          {item.label}
        </NavLink>
      ))}
    </aside>
  )
}

export default Sidebar
