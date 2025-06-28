'use client'; // This needs to be a client component to use the usePathname hook

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './styles.module.css';
import HummingbirdLogo from '../HummingbirdLogo';

const navItems = [
  { href: '/', label: 'notes' },
  { href: '/about', label: 'about' },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/" aria-label="Home">
          <HummingbirdLogo />
        </Link>
      </div>
      <nav className={styles.navigation}>
        <ul>
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className={pathname === href ? styles.activeLink : ''}>
                {label}
              </Link>
              {pathname === href && (
                <motion.div
                  className={styles.underline}
                  layoutId="underline"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header; 