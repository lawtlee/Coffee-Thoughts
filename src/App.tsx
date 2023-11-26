import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './screens/Home'
import HTML404 from './screens/404html'

function App() {
  return (
    <BrowserRouter basename='/Coffee-Thoughts/'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="*" element={<HTML404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
