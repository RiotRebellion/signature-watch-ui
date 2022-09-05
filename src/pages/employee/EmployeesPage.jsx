import { useState, useEffect } from "react";
import { axiosContext } from "../../contexts/axiosContext";

import PageToolBox from "../../components/PageToolBox";
import ItemToolBar from "../../components/ItemToolBar";

import styles from "../../styles/Employees.module.css";

export default function Employees() {
	const [employees, setEmployees] = useState([]);
	const [loading, setLoading] = useState(true);

	const fetchData = async () => {
		await axiosContext.get("/employees").then((response) => {
			setLoading(false);
			setEmployees(response.data);
			console.log(employees);
		});
	};

	useEffect(() => {
		fetchData();
	}, [loading]);

	if (loading == true)
		return (
			<main>
				<h1>Данные загружаются...</h1>
			</main>
		);
	else
		return (
			<main className={styles.employees}>
				<h2>Сотрудники</h2>
				<div className={styles.toolbox}>
					<PageToolBox />
				</div>
				<div className={styles.data_container}>
					<div className={styles.data_header}>
						<div>ФИО</div>
						<div>Должность</div>
						<div>Отдел</div>
						<div>Статус</div>
						<div></div>
					</div>
					{employees.map((employee) => {
						return (
							<div
								className={styles.data_row}
								key={employee.guid}
							>
								<div>{employee.name}</div>
								<div>{employee.post}</div>
								<div>{employee.department}</div>
								<div>{employee.employeeStatus}</div>
								<div>
									<ItemToolBar />
								</div>
							</div>
						);
					})}
				</div>
			</main>
		);
}
