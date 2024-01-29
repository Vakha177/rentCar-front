import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Favorite from './Favorite'
import { fetchFavourites } from '../../features/favouritesSlice'
import styles from './this.module.css'
import { fetchCards } from '../../features/cardSlice'

function MainFavourites({active, setActive, favourites}) {
  const favourit = useSelector((state) => state.favorites.userFavs)
  const cars = useSelector((state) => state.cards.cards)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchCards())
    dispatch(fetchFavourites())
  },[dispatch])
  const favorCars = cars.filter((item) => favourit.favourites?.includes(item._id))

  return (
    <div className={` ${active ? styles.favorite : null} `} onClick={() => setActive(false)}>
      <div  className={styles.fav_contentBox}>
        {favorCars.map((item, index) => {
          return<Favorite
          key={index}
          title={item.title}
          image={item.image[0]}
          price={item.price}
          />
        })}
    </div>
    </div>
  )
}


export default MainFavourites