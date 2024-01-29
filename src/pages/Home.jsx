import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchCards } from '../features/cardSlice'
import ProductCard from '../components/products/ProductCard'
import styles from './allPages.module.css'
import Footer from '../components/footer/Footer'

function Home() {
  const cards = useSelector((state) => state.cards.cards)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchCards())
  },[dispatch])

  return (
    <div className={styles.cards}>
      {cards.map((item)=> {
        return(<ProductCard
        key={item._id}
        id={item._id}
        image={item.image}
        price={item.price}
        accelerationTo100Km={item.accelerationTo100Km}
        power={item.power}
        title={item.title}
        engineCapacity={item.engineCapacity}
        />)
      })}
      <Footer/>
    </div>
  )
}

export default Home