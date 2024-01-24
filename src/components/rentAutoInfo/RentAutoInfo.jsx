import React, { useState } from 'react'
import style from './rent.module.css'
import { useSelector } from 'react-redux';
export default function RentAutoInfo() {
  
  const product = useSelector((state) =>
  state.product.product
);
  return (
    <div className={style.wrapper}>
    <div className={style.wrapperInfo}>
       <div className={style.nameRent}>Аренда {product.title} в Дубае</div> 
        <div className={style.infoCars}>
        Ощутите магию скорости и элегантности с {product.title} — воплощением роскоши и инженерного мастерства. Этот кабриолет с выдающимися характеристиками предоставляет неповторимый опыт вождения, смешивая в себе мощь и эстетику. Сердце {product.title} — гибридная силовая установка, обеспечивающая впечатляющую динамику и эффективность. От подчеркнутой линии кузова до утонченного интерьера, каждая деталь этого автомобиля выражает страсть к автомобильному искусству. Арендуйте {product.title} для неповторимого опыта в вождении и невероятного стиля.
        </div>
    </div>
        <div className={style.kharakter}>
            Характеристики автомобиля:
            <h3 style={{margin: '5px 0'}}>Кузов:{product.engineType}</h3>
            <h3 style={{margin: '5px 0'}}>Тип двигателя:{product.engineType}</h3>
            <h3 style={{margin: '5px 0'}}>Объём двигателя:{product.engineCapacity}</h3>
            <h3 style={{margin: '5px 0'}}>Мощность:{product.power}</h3>
            <h3 style={{margin:'5px 0 '}}>Максимальная скорость: {product.maxSpeed}</h3>
            <h3 style={{margin:'5px 0 '}}>Разгон до 100/км: {product.accelerationTo100Km}</h3>


        </div>
        <div className={style.kharakter2} >
        <h3 style={{margin: '5px 0'}}>Привод: {product.drive}</h3>
            <h3 style={{margin: '5px 0'}}>Мест:{product.places}</h3>

        </div>
    </div>
  )
}
