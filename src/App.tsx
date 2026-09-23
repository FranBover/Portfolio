import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import { GrainOverlay } from './components/ui/GrainOverlay'
import Home from './pages/Home'
import ProjectPage from './pages/ProjectPage'

function App() {
  return (
    <BrowserRouter>
      <GrainOverlay />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos/:slug" element={<ProjectPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
