import React from 'react'
import styles from './Header.module.css'
const Header: React.FC = () => {
    const toggleTheme = () => {
        document.body.classList.toggle('dark-theme')
        document.body.classList.toggle('light-theme')
    }
    return (
        <div>
            <p className={styles.header}>Header</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    )
}

export default Header
