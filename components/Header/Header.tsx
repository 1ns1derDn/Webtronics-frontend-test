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
    to: '/about',
  },
  {
    title: 'Programs',
    to: '/programs',
  },
  {
    title: 'Steps',
    to: '/steps',
  },
  {
    title: 'Questions',
    to: '/questions',
  },
  {
    title: 'Get in touch',
    to: '/contact',
  },
];

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.to}>
              <Link className={styles.link} href={link.to}>
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
