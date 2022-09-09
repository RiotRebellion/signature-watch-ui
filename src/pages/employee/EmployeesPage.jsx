import { useState, useEffect } from "react";
import { axiosContext } from "../../contexts/axiosContext";

import PageToolBox from "../../components/PageToolBox";
import ItemToolBar from "../../components/ItemToolBar";

import { EMPLOYEES } from "../../constants/api";
import { EmployeeStatusIntToStringConverter } from "../../common/Converters/EmployeeStatusConverter";
import DetailedEmployeeModal from "./DetailedEmployeeModal";
import { CREATE, EDIT } from "../../constants/detailedModalMode";

import styles from "../../styles/Employees.module.css";
import useData from "../../hooks/useData";

export default function Employees() {
	const { data, getAll, deleteItem } = useData();

	const [modalVisibility, setModalVisibility] = useState();

	useEffect(() => getAll(EMPLOYEES), []);

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
				{data.map((employee) => {
					return (
						<div className={styles.data_row} key={employee.guid}>
							<div>{employee.name}</div>
							<div>{employee.post}</div>
							<div>{employee.department}</div>
							<div>
								{EmployeeStatusIntToStringConverter(
									employee.employeeStatus
								)}
							</div>
							<div>
								<ItemToolBar
									editHandler={(e) => {}}
									deleteHandler={(e) =>
										deleteItem(employee.guid)
									}
								/>
							</div>
						</div>
					);
				})}
			</div>
			{/* <DetailedEmployeeModal /> */}
		</main>
	);
}
