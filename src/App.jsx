
import FullCars from './components/fullCars/fullCars'
import { Routes, Route } from 'react-router-dom'
import Header from './Header'
import Home from './pages/Home'
import About from './pages/About'
import RentalConditions from './pages/RentalConditions'
import styles from './App.module.css'
import Chat from './components/chat/chat'
import Login from './pages/Login'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
function App() {

  const logo = useSelector((state) => state.brands.brands)

  const [filteredBrand, setFilteredBrand] = useState(logo);

  // console.log(filteredBrand);

  useEffect(() => {
    setFilteredBrand(logo)
  }, [logo])

  const handleSearch = (value) => {
    const filteredResult = phone.filter((item) => item.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredBrand(filteredResult);
  };


  return (
  <div> 
    <Header handleSearch={handleSearch}/>
    <Routes>
      <Route path='/:id' element={<Home/>}/>
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