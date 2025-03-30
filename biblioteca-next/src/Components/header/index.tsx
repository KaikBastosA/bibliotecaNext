import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.css';
import logo from '@/assets/Logo.svg';
import user from '@/assets/user.svg';
import cart from '@/assets/shopping-cart.svg';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/home">
          <Image src={logo} className={styles.logo} alt='Site-logo' />
        </Link>
      </div>
      <nav className={styles.navMenu}>
        <Link href="/">
          <Image className={styles.userIcon} src={user} alt="user-icon" />
        </Link>
        <Image className={styles.cartIcon} src={cart} alt="cart-icon" />
      </nav>
    </header>
  );
}