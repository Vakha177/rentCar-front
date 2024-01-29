
import FullCars from './components/fullCars/fullCars'
import { Routes, Route } from 'react-router-dom'
import Header from './Header'
import Home from './pages/Home'
import About from './pages/About'
import RentalConditions from './pages/RentalConditions'
import styles from './App.module.css'
import Chat from './components/chat/chat'
import Login from './pages/Login'
function App() {

  return (
  <div> 
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/rentalconditions' element={<RentalConditions/>}/>
      <Route path="/login" element={<Login/>}/>
       <Route path='/fullpages/:id' element={<FullCars/>}/>
    </Routes>
 <Chat/>
  </div>
     
    
  )
}

export default App 