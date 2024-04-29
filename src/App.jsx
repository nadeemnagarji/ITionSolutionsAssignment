import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Headers/Navbar'
import Home from './pages/Home'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MoviePage from './pages/MoviePage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MoviePage/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
