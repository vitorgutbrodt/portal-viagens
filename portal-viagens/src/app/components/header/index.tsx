import Link from 'next/link';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.header__title} href="/">
      <h1 className={styles.header__title}>Portal Viagens</h1>
      </Link>
    </header>
  )
}       

export default Header;  