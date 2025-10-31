import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import Dashboard from "./pages/Dashboard"
import HRModule from "./pages/HRModule"
import Reports from "./pages/Reports"
import UserManagement from "./pages/UserManagement"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/hr-module" element={<HRModule />} />
          <Route path="/users" element={<UserManagement />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
