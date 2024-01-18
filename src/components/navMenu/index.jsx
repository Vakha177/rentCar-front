import React from 'react'
import Logo from '../../assets/carkey.png'
import { CgProfile } from "react-icons/cg";
import styles from './index.module.css'
import { Link, NavLink } from 'react-router-dom';

function NavMenu() {
  return (
   <nav className={styles.nav}>
      <Link to="/">
        <div className={styles.logo}>
            <img src={Logo} alt="" />
            <p>Car rental</p>
         </div>
      </Link>
         <ul>
            <li><NavLink> Автомобили </NavLink></li>
            <li><NavLink> Бренды </NavLink></li>
            <li><NavLink> Дополнительные услуги </NavLink></li>
            <li style={{borderRight: '1px solid gray'}}><NavLink> Блог </NavLink></li>
            <li><NavLink> Условия аренды </NavLink></li>
            <li><NavLink to="/about"> О компании </NavLink></li>
            <li><NavLink> FAQ </NavLink></li>
         </ul>
         <div className={styles.auth}> 
           <Link to="/login"><CgProfile className={styles.logIcon} size={40}/></Link> 

         </div>
    </nav>
  )
}

export default NavMenu