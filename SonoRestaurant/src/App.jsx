import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './assets/Pages/Home'
import About from './assets/Pages/About'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
