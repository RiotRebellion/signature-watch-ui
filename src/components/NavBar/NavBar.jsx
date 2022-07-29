import React, {useContext} from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";

import styles from './NavBar.module.css';

function NavBar() {
    const { logout } = useContext(AuthContext);

    return (
        <header>
            <nav>
                <div className={styles.title}>
                    ИБИДО
                </div>  
                <ul className={styles.menu}>
                    <li>
                        <NavLink
                            to='security'>
                            Информационная безопасность
                        </NavLink>
                        <ul>
                            <li>
                                <NavLink
                                to='security'>
                                    Сотрудники
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to='security'>
                                    Электронные подписи
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <NavLink
                        to='signature'>
                            СЭД "ДЕЛО"
                        </NavLink>
                    </li>
                </ul>

                <NavLink to='/' onClick={logout}>
                    <button>Выход</button>
                </NavLink>
            </nav>
        </header>
    );
}

export default NavBar;