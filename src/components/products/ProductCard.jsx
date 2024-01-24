import React, { useEffect } from 'react'
import styles from './card.module.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../features/ProductSlice';

const ProductCard = ({id, title, image, price, power, engineCapacity, accelerationTo100Km}) => {
    return (
        <div className={styles.card }>
            <div className={styles.image}>
                <Link to={`/fullpages/${id}`} >
                <img src={`http://localhost:4100/image/${image[0]}`} alt=""  />
                </Link>
                
            </div>
            <div>
                <h2>
                {title}

                </h2>
            </div>
          <br />

            <div className={styles.info}>
                <p>Мощность:{power}</p>
                <p>Разгон до 100 км/ч:{accelerationTo100Km}</p>
                <p>Максимальная скорость:{engineCapacity}</p>
            </div>
          <br />
<hr />
            <div className={styles.price}>
                <h2>{price}$</h2>
            </div>
            <br />
            <div>
                <button className={styles.btnBron}>Забронировать</button>
            </div>
        </div>
    )
}

export default ProductCard