import React from 'react'
import { Link } from 'gatsby'

import styles from './header.module.scss'

export default () => {
    return (
        <header className={styles.header}>
            <h1>Coco Coleman</h1>
            <ul>
                <li>
                    <Link activeClassName={styles.navItemActive} to="/">Home</Link>
                </li>
                <li>
                    <Link activeClassName={styles.navItemActive} to="/contact">Contact</Link>
                </li>
                <li>
                    <Link activeClassName={styles.navItemActive} to="/blog">Blog</Link>
                </li>
            </ul>
        </header>
    )
}