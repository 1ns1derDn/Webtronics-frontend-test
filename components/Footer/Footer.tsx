import Link from 'next/link';
import { ReactNode } from 'react';
import FacebookLogo from '@assets/icons/facebook.svg?component';
import GitlabLogo from '@assets/icons/gitlab.svg?component';
import LinkedInLogo from '@assets/icons/linkedin.svg?component';
import TwitterLogo from '@assets/icons/twitter.svg?component';
import Logo from '@assets/logo.svg?component';
import styles from './Footer.module.scss';

type NavbarLink = {
  title: ReactNode;
  to: string;
};

const companyLinks: NavbarLink[] = [
  {
    title: 'About Us',
    to: '/about',
  },
  {
    title: 'Steps',
    to: '/steps',
  },
  {
    title: 'FAQs',
    to: '/faq',
  },
  {
    title: 'Review',
    to: '/review',
  },
  {
    title: 'Gallery',
    to: '/gallery',
  },
];

const socialLinks: NavbarLink[] = [
  {
    title: <FacebookLogo />,
    to: '/facebook',
  },
  {
    title: <GitlabLogo />,
    to: '/gitlab',
  },
  {
    title: <TwitterLogo />,
    to: '/twitter',
  },
  {
    title: <LinkedInLogo />,
    to: '/linkedin',
  },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.address}>
          <h4>
            <Logo />
          </h4>
          <address>
            Wisconsin Ave, Suite 700 Chevy Chase, Maryland 20815
          </address>
        </div>
        <div className={styles.company}>
          <h4>Company</h4>
          <ul>
            {companyLinks.map((link) => (
              <li key={link.to}>
                <Link className={styles.link} href={link.to}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.socialMedia}>
          <h4>Social media</h4>
          <ul>
            {socialLinks.map((link) => (
              <li key={link.to}>
                <Link className={styles.link} href={link.to}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
