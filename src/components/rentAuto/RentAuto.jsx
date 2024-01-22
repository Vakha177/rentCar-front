import React from 'react'
import style from '../rentAuto/rentAuto.module.css'
export default function RentAuto({handleOpenRent}) {
  return (
    <div className={style.wrapper}>
      <div className={style.bron}>Бронирование автомобиля</div>
      <input type="text" placeholder='Ваше имя' className={style.inputName}/>
      <input type="text" placeholder='Ваш номер WhatsApp' className={style.inputNumber} />
      <input type="text" placeholder='Ваш Telegramm' className={style.inputTg} />
      <button className={style.bronButton}>ЗАБРОНИРОВАТЬ</button>
    </div>
  )
}
