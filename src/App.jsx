import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ChartHomePages from './pages/ChartHomePage'
import supabase from "./config/supabase"
supabase

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/analytics-dashboard/' element={<Home />}></Route>
        <Route path='/analytics-dashboard/chart/:id' element={<ChartHomePages />}></Route>
      </Routes>
    </BrowserRouter>
  )

}

export default App
