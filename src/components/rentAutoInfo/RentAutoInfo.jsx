import React, { useState } from 'react'
import style from './rent.module.css'
export default function RentAutoInfo() {
  

  return (
    <div className={style.wrapper}>
    <div className={style.wrapperInfo}>
       <div className={style.nameRent}>Аренда Ferrari SF90 Spider 2023 в Дубае</div> 
        <div className={style.infoCars}>
        Ощутите магию скорости и элегантности с Ferrari SF90 Spider — воплощением роскоши и инженерного мастерства. Этот кабриолет с выдающимися характеристиками предоставляет неповторимый опыт вождения, смешивая в себе мощь и эстетику. Сердце SF90 — гибридная силовая установка, обеспечивающая впечатляющую динамику и эффективность. От подчеркнутой линии кузова до утонченного интерьера, каждая деталь этого автомобиля выражает страсть к автомобильному искусству. Арендуйте Ferrari SF90 Spider для неповторимого опыта в вождении и невероятного стиля.
        </div>
    </div>
        <div className={style.kharakter}>
            Характеристики автомобиля:
            <h3 style={{margin: '5px 0'}}>Кузов: Спорткар, Кабриолет</h3>
            <h3 style={{margin: '5px 0'}}>Тип двигателя: Бензин V8</h3>
            <h3 style={{margin: '5px 0'}}>Объём двигателя: 3990 куб. см.</h3>
            <h3 style={{margin: '5px 0'}}>Мощность: 780 л.с.</h3>
            <h3 style={{margin:'5px 0 '}}>Максимальная скорость: 340 км/ч</h3>
        </div>
        <div className={style.kharakter2} >
        <h3 style={{margin: '5px 0'}}>Привод: Полный (E4WD)</h3>
            <h3 style={{margin: '5px 0'}}>Мест: 2 места</h3>

        </div>
    </div>
  )
}
