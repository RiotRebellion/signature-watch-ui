import { useState, useEffect } from "react";

import PageToolBox from "../../components/PageToolBox";
import ItemToolBar from "../../components/ItemToolBar";

import { EMPLOYEES } from "../../constants/api";
import { EmployeeStatusIntToStringConverter } from "../../common/Converters/EmployeeStatusConverter";
import DetailedEmployeeModal from "./DetailedEmployeeModal";
import { CREATE, EDIT } from "../../constants/detailedModalMode";

import styles from "../../styles/Employees.module.css";
import useData from "../../hooks/useData";

export default function Employees() {
	const { data, dataItem, cleanDataItem, getAll, getById, deleteItem } =
		useData();

	const [modalVisibility, setModalVisibility] = useState();
	const [modalMode, setModalMode] = useState();

	useEffect(() => getAll(EMPLOYEES), []);

	const openCreateForm = () => {
		setModalMode(CREATE);
		setModalVisibility(true);
	};

	const openEditForm = (id) => {
		getById(EMPLOYEES, id);
		setModalMode(EDIT);
		setModalVisibility(true);
	};

	return (
		<main className={styles.employees}>
			<h2>Сотрудники</h2>
			<div className={styles.toolbox}>
				<PageToolBox createHandler={openCreateForm} />
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
									editHandler={(e) => {
										openEditForm(employee.guid);
									}}
									deleteHandler={(e) =>
										deleteItem(EMPLOYEES, employee.guid)
									}
								/>
							</div>
						</div>
					);
				})}
			</div>
			{modalVisibility ? (
				<DetailedEmployeeModal
					modalMode={modalMode}
					modalVisibility={modalVisibility}
					setModalVisibility={setModalVisibility}
					dataItem={dataItem}
					cleanDataItem={cleanDataItem}
				/>
			) : null}
		</main>
	);
}
