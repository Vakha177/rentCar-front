import NavMenu from './components/navMenu'
import styles from './App.module.css'
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';

function Header() {

  return (
    <div className={styles.header}>
        <NavMenu/>
        <div className={styles.infoBlock}>
            <h1>АВТОМОБИЛИ В АРЕНДУ ТОЛЬКО У НАС В ГРОЗНОМ!</h1>
          </div>
        </div>
  )
}

export default Header