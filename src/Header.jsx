import NavMenu from './components/navMenu'
import styles from './App.module.css'

function Header() {
  return (
    <div className={styles.header}>
        <NavMenu/>
    </div>
  )
}

export default Header