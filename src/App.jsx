
import FullCars from './components/fullCars/fullCars'
import { Routes, Route } from 'react-router-dom'
import Header from './Header'
import Login from './pages/Login'
import Home from './pages/Home'
import About from './pages/About'
import RentalConditions from './pages/RentalConditions'
import styles from './App.module.css'
import Chat from './components/chat/chat'


function App() {

  return (
  <div> 
    <Header/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/rentalconditions' element={<RentalConditions/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
 <FullCars/>
 <Chat/>
  </div>
     
    
  )
}

export default App 