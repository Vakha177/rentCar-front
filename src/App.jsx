
import FullCars from './components/fullCars/fullCars'
import { Routes, Route } from 'react-router-dom'
import Header from './Header'
import Home from './pages/Home'
import About from './pages/About'
import RentalConditions from './pages/RentalConditions'



function App() {

  return (
  <div> 
    <Header/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/rentalconditions' element={<RentalConditions/>}/>
    </Routes>
 <FullCars/>
  </div>
     
    
  )
}

export default App 