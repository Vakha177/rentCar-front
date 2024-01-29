import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchCards } from '../features/cardSlice'
import ProductCard from '../components/products/ProductCard'
import styles from './allPages.module.css'
import { useParams } from 'react-router-dom'

function Home() {
  const {id} = useParams()
  const cars = useSelector((state) => state.cards.cards)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchCards())
  },[dispatch])

  const cards = cars.filter((item) => {
    if (id) {
      return item.brand === id || item.category.find(el => el === id)
    }
    return item
  })
  
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
    </div>
  )
}

export default Home