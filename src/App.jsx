import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ManualDaMarca from './pages/ManualDaMarca'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/manual-da-marca" element={<ManualDaMarca />} />
    </Routes>
  )
}

export default App
