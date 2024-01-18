
import FullCars from './components/fullCars/fullCars'
import { Routes, Route } from 'react-router-dom'
import Header from './Header'
import Login from './pages/Login'
import Home from './pages/Home'
import About from './pages/About'


function App() {

  return (
  <div> 
    <Header/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
 <FullCars/>
  </div>
     
    
  )
}

export default App 