import styles from './header.module.css';
import Link from 'next/link';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <header className="header">
    <a href="#" target="_blank" className="logo">DrPlus<sup>+</sup></a>
    <nav className="navbar">
      <ul className="navbar-list">
        {/* <li><a href="#" className="navbar-link"> Home </a></li> */}
        {/* <li><a href="#" className="navbar-link"> About </a></li> */}
        {/* <Link href='/page1'> <a className="navbar-link"> Home </a></Link> */}
        {/* <li><a href="#" className="navbar-link"> Contact </a></li> */}
      </ul>
    </nav>
    <div className="mobile-navbar-btn">
      <ion-icon name="menu" className="mobile-nav-icon"></ion-icon>
      <ion-icon name="close" className="mobile-nav-icon"></ion-icon>
    </div>
  </header>
  );
}

export default Header;
