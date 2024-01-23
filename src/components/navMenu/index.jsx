import Logo from "../../assets/carkey.png";
import chevrolet from '../../assets/chevrolet.png'
import audi from '../../assets/audi.png'
import bmw from '../../assets/bmw.png'
import porsche from '../../assets/porsche-logo.png'
import mercedes from '../../assets/mercedes.png'
import mclaren from '../../assets/mclaren.png'
import { CgProfile } from "react-icons/cg";
import styles from "./index.module.css";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Auth from "../Authorizaz/Auth";

function NavMenu() {
  
  const [showAuth, setShowAuth] = useState(false) 

  return (
    <nav className={styles.nav}>
      <Link to="/">
        <div className={styles.logo}>
          <img src={Logo} alt="" />
          <p>Car rental</p>
        </div>
      </Link>
      <ul>
        <li>
          <NavLink> Автомобили </NavLink>
          <ul>
            <li><Link>Седан</Link></li>
            <li><Link>Универсал</Link></li>
            <li><Link>Купе</Link></li>
            <li><Link>Внедорожник</Link></li>
            <li><Link>Кабриолет</Link></li>
            <li><Link>Маскл кар</Link></li>
          </ul>
        </li>
        <li>
          <NavLink> Бренды </NavLink>
          <ul>
            <li><Link><img src={chevrolet} alt="Chevrolet" /><p>Chevrolet</p></Link></li>    
            <li><Link><img src={bmw} alt="bmw" /><p>BMW</p></Link></li>            
            <li><Link><img src={audi} alt="audi" /><p>Audi</p></Link></li>            
            <li><Link><img src={porsche} alt="porsche" /><p>Porsche</p></Link></li>    
            <li><Link><img src={mercedes} alt="mercedes" /><p>Mercedes</p></Link></li>  
            <li><Link><img src={mclaren} alt="mclaren" /><p>McLaren</p></Link></li>                       
          </ul>
        </li>
        <li>
          <NavLink> Дополнительные услуги </NavLink>
          <ul className={styles.extrasUslugas}>
            <li><Link>Аренда яхт</Link></li>
            <li><Link>Партнерская программа</Link></li>
            <li><Link>Подарочные сертификаты</Link></li>
            <li><Link>Открытие бизнеса в АОЭ</Link></li>
            <li><Link>Долгострочная аренда</Link></li>
          </ul>
        </li>
        <li style={{ borderRight: "1px solid gray" }}>
          <NavLink> Блог </NavLink>
        </li>
        <li>
          <NavLink to='/rentalconditions'> Условия аренды </NavLink>
        </li>
        <li>
          <NavLink to="/about"> О компании </NavLink>
        </li>
        <li>
          <NavLink> FAQ </NavLink>
        </li>
      </ul>
      <div className={styles.auth}>
          <CgProfile onClick={ () => setShowAuth(true)} className={styles.logIcon} size={40} />
      </div>
      { showAuth === true ? <Auth setOpen={setShowAuth}/> : null}
    </nav>
  );
}

export default NavMenu;
