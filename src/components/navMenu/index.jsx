import Logo from "../../assets/carkey.png";
import { CgProfile } from "react-icons/cg";
import styles from "./index.module.css";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Auth from "../Authorizaz/Auth";
import { useDispatch, useSelector } from "react-redux";
import { fetchBrand } from "../../features/brandSlice";
import { fetchCategory } from "../../features/categorySlice";

function NavMenu() {
  
  const dispatch = useDispatch()

  const logo = useSelector((state) => state.brands.brands)
  const typeCars = useSelector((state) => state.categories.categories)


  useEffect(() => {
    dispatch(fetchBrand())
    dispatch(fetchCategory())
  }, [dispatch])

  console.log(typeCars);

  const [showAuth, setShowAuth] = useState(false) 

  return (
    <nav className={styles.nav}>
      <Link to="/">
        <div className={styles.logo}>
          <img src={Logo} alt="logo" />
          <p>Car rental</p>
        </div>
      </Link>
      <ul>
        <li>
          <NavLink> Автомобили </NavLink>
          <ul className={styles.ulForBrand}>
            {typeCars.map((item, index) => 
              <Link><li key={index}>{item.name}</li></Link>
            )}
          </ul>
        </li>
        <li>
          <NavLink> Бренды </NavLink>
          <ul className={styles.ulForBrand}>
            {logo.map((item, index) => 
              <li><Link className={styles.brand_link}><img className={styles.brand_card} key={index} src={`http://localhost:4100/image/${item.image}`} alt="logo"/><p>{item.name.toLowerCase()}</p></Link></li>
            )}                     
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
