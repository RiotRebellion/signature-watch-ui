import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function NavBar() {
    const { logout } = useContext(AuthContext);

    return (
        <header>
            <nav>
              <div>ИБИДО</div>  
              <ul>
                <li>
                    <NavLink
                    to='employee'
                    >
                        Сотрудники
                    </NavLink>              
                </li>
                <li>
                    <NavLink
                    to='signature'>
                        Электронные подписи
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='admin'>
                        Администрирование
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