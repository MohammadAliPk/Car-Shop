import React from 'react';
import Link from 'next/link';


// styles

import styles from "./Layout.module.css";
const Layout = ({ children }) => {
    return (
        <>
            <header className={styles.header}>
                <Link href="/">
                    <h2>Car Shop</h2>
                    <p>Choose and Buy your car</p>
                </Link>
            </header>
            <div className={styles.container}>{children}</div>
            <footer className={styles.footer}>
                Mohammad Ali Next.js project | car shop project &copy;
            </footer>
        </>
    );
};

export default Layout;