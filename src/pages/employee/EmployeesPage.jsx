import { useEffect } from "react";
import { EMPLOYEES } from "../../constants/api";
import { EmployeeStatusIntToStringConverter } from "../../common/Converters/EmployeeStatusConverter";
import { CREATE, EDIT } from "../../constants/detailedModalMode";
import useData from "../../hooks/useData";
import useModalProperty from "../../hooks/useModalProperty";

import PageToolBox from "../../components/PageToolBox";
import ItemToolBar from "../../components/ItemToolBar";
import DetailedEmployeeModal from "./DetailedEmployeeModal";

import styles from "../../styles/dataContent.module.css";

export default function EmployeesPage() {
	const {
		data,
		dataItem,
		cleanDataItem,
		getAll,
		getById,
		createItem,
		updateItem,
		deleteItem,
	} = useData();

	const modalProperty = useModalProperty();

	useEffect(() => {
		getAll(EMPLOYEES);
	}, [dataItem]);

	const openCreateForm = () => {
		modalProperty.setModalMode(CREATE);
		modalProperty.setModalVisibility(true);
	};

	const openEditForm = (id) => {
		getById(EMPLOYEES, id);
		modalProperty.setModalMode(EDIT);
		modalProperty.setModalVisibility(true);
	};

	return (
		<main className={styles.content}>
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
			{modalProperty.modalVisibility ? (
				<DetailedEmployeeModal
					modalProperty={modalProperty}
					dataItem={dataItem}
					createEmployeeHandler={createItem}
					updateEmployeeHandler={updateItem}
					cleanDataItem={cleanDataItem}
				/>
			) : null}
		</main>
	);
}
