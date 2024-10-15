import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ChartHomePages from './pages/ChartHomePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/chart/:id' element={<ChartHomePages />}></Route>
      </Routes>
    </BrowserRouter>
  )

}

export default App
