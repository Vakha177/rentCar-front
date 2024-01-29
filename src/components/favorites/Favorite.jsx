import React from 'react'
import styles from './this.module.css'


function Favorite({title, image, price}) {
  return (
        <div className={styles.fav_content} onClick={e => e.stopPropagation()}>
          <div className={styles.image}>
            <img src={`http://localhost:4100/image/${image}`} alt="" />
          </div>
          <div className={styles.title}>
            <p>{title}</p>
          </div>
          <div className={styles.plusMinus}>
            <button className={styles.btn1}>-</button>
            0
            <button className={styles.btn2}>+</button>
          </div>
          <div className={styles.price}>
            ${price}
          </div>
          <div className={styles.delete}>
            <button>X</button>
          </div>
        </div>
  )
}

export default Favorite