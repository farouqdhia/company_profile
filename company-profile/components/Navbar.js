import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        Studio Kita
      </Link>
      <div className={styles.navLinks}>
        <Link href="/about">About</Link>
        <Link href="/team">Team</Link>
      </div>
    </nav>
  );
};

export default Navbar;