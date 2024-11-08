'use client';
import Link from 'next/link';
import logoImg from '@/assets/logo.png';
import Image from 'next/image';
import styles from './main-header.module.css';
import MainHeaderBackground from './main-header-background';
import NavLink from '../nav/nav-link';

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link href='/' className={styles.logo}>
          <Image src={logoImg} alt='logo' priority></Image>
          NextLevel Food
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href='/meals'>Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href='/community'>Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
