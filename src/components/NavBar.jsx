import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { IconButton } from "@mui/material";

import { authContext } from "../contexts/authContext";

import styles from "../styles/NavBar.module.css";

function NavBar() {
	const { username, logout } = useContext(authContext);

	return (
		<header>
			<nav>
				<ul className={styles.menu}>
					<div className={styles.title}>РЕЕСТР ИБИДО</div>
					<li>
						<div className={styles.menuItem}>
							Информационная безопасность
						</div>
						<ul className={styles.submenu}>
							<li>
								<NavLink to="Distributions">
									Дистрибутивы
								</NavLink>
							</li>
							<li>
								<NavLink to="Contracts">Контракты</NavLink>
							</li>
							<li>
								<NavLink to="SoftwareLicenses">
									Лицензии программного обеспечения
								</NavLink>
							</li>
							<li>
								<NavLink to="Softwares">
									Программное обеспечение
								</NavLink>
							</li>
							<li>
								<NavLink to="AccordanceSertificates">
									Сертификаты соответствия
								</NavLink>
							</li>
							<li>
								<NavLink to="Employees">Сотрудники</NavLink>
							</li>
							<li>
								<NavLink to="SoftwareTypes">
									Типы программного обеспечения
								</NavLink>
							</li>
							<li>
								<NavLink to="Supports">Техподдержки</NavLink>
							</li>
							<li>
								<NavLink to="Formulars">Формуляры</NavLink>
							</li>
							<li>
								<NavLink to="Signatures">
									Электронные подписи
								</NavLink>
							</li>
						</ul>
					</li>
					{/* <li>
						<div className={styles.menuItem}>СЭД "ДЕЛО"</div>
						<ul className={styles.submenu}>
							<li>sas</li>
						</ul>
					</li> */}
					<li>
						<NavLink to="/admin">
							<div className={styles.menuItem}>
								Администрирование
							</div>
						</NavLink>
					</li>
				</ul>
				<div className={styles.user_profile}>
					<p>{username}</p>
				</div>
				<div className={styles.logout}>
					<button className={styles.logoutButton} onClick={logout}>
						Выход
					</button>
				</div>
			</nav>
		</header>
	);
}

export default NavBar;
