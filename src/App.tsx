import { BrowserRouter, Routes, Route, Navigation,  } from 'react-router-dom'
import './App.css'
import Home from './screens/Home'
import HTML404 from './screens/404html'
import Routing from './screens/admin/Routing'

function App() {
  return (
    <BrowserRouter basename='/Coffee-Thoughts/'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/admin/*" element={<Routing/>}/>
        <Route path="*" element={<HTML404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
