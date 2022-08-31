import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";

import styles from '../styles/NavBar.module.css';

function NavBar() {
    const { logout } = useContext(AuthContext);

    return (
        <header>
            <nav>
                <ul className={styles.menu}>
                    <div className={styles.title}>
                        РЕЕСТР ИБИДО
                    </div>
                    <li>
                        <div className={styles.menuItem}>Информационная безопасность</div>
                        <ul className={styles.submenu}>
                            <li>
                                <NavLink
                                    to='Employees'>
                                    Сотрудники
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='Signatures'>
                                    Электронные подписи
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div className={styles.menuItem}>СЭД "ДЕЛО"</div>
                        <ul className={styles.submenu}>
                            <li>sas</li>
                        </ul>
                    </li>
                </ul>
                <div className={styles.logout}>
                    <NavLink to='/' onClick={logout}>
                        <button className={styles.logoutButton}>Выход</button>
                    </NavLink>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;