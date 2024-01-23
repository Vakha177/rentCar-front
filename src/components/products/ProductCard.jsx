import React from 'react'
import styles from './card.module.css'

const ProductCard = ({id, title, image, price, power, engineCapacity, accelerationTo100Km}) => {
    console.log(image)
    return (
        <div className={styles.card}>
            <div className={styles.image}>
                <img src={`http://localhost:4100/image/${image[0]}`} alt="" />
            </div>
            <div>
                {title}
            </div>
            <div className={styles.info}>
                <p>Мощность:{power}</p>
                <p>Разгон до 100 км/ч:{accelerationTo100Km}</p>
                <p>Максимальная скорость:{engineCapacity}</p>
            </div>
            <div className={styles.price}>
                <p>День:{price}$</p>
            </div>
            <div>
                <button>Забронировать</button>
            </div>
        </div>
    )
}

export default ProductCard