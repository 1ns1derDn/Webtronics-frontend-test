import Link from 'next/link';
import Logo from '@assets/logo.svg?component';
import styles from './Header.module.scss';

type NavbarLink = {
  title: string;
  to: string;
};

const links: NavbarLink[] = [
  {
    title: 'About',
    to: '#about',
  },
  {
    title: 'Programs',
    to: '#technologies',
  },
  {
    title: 'Steps',
    to: '#steps',
  },
  {
    title: 'Questions',
    to: '#faq',
  },
  {
    title: 'Get in touch',
    to: '#contact',
  },
];

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li className={styles.brand}>
            <Link href="/" aria-label="Home">
              <Logo />
            </Link>
          </li>
          {links.map((link) => (
            <li key={link.to}>
              <Link className={styles.link} href={link.to} scroll={false}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
