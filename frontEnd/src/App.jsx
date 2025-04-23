import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import MovieCard from './Components/MovieCard'
import Home from "./Pages/Home"
import { Routes, Route } from 'react-router-dom'
import Favorites from './Pages/Favorites'
import NavBar from './Components/NavBar'
import { MovieProvider } from './contexts/MovieContext'

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
