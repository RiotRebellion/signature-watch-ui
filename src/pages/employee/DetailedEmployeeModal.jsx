import { Modal } from "@mui/material";
import React, { useEffect } from "react";
import { EMPLOYEES } from "../../constants/api";
import { CREATE, EDIT } from "../../constants/detailedModalMode";
import useEmployee from "../../hooks/useEmployee";

import styles from "../../styles/Modal.module.css";

export default function DetailedEmployeeModal({
	modalProperty,
	createEmployeeHandler,
	updateEmployeeHandler,
	dataItem,
	cleanDataItem,
}) {
	{
		const {
			name,
			setName,
			department,
			setDepartment,
			post,
			setPost,
			employeeStatus,
			setEmployeeStatus,
			parseResponse,
			createRequestBody,
		} = useEmployee();

		useEffect(() => {
			parseResponse(dataItem);
		}, [dataItem]);

		const handleClose = () => {
			modalProperty.setModalVisibility(false);
			cleanDataItem();
		};
		const submitHandler = () => {
			try {
				let body = createRequestBody();
				switch (modalProperty.modalMode) {
					case CREATE:
						createEmployeeHandler(EMPLOYEES, body);
						break;
					case EDIT:
						updateEmployeeHandler(EMPLOYEES, dataItem.guid, body);
						break;
				}
				cleanDataItem();
				handleClose();
			} catch (e) {
				console.log(e);
			}
		};

		return (
			<>
				<Modal
					open={modalProperty.modalVisibility}
					onClose={handleClose}
				>
					<div className={styles.modal_box}>
						<form onSubmit={(e) => e.preventDefault()}>
							<div>
								<label>Фио</label>
								<input
									placeholder="ФИО"
									type="text"
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
								<p className={styles.exception}></p>
							</div>
							<div>
								<label>Подразделение</label>
								<input
									placeholder="Подразделение"
									type="text"
									value={department}
									onChange={(e) =>
										setDepartment(e.target.value)
									}
								/>
								<p className={styles.exception}></p>
							</div>
							<div>
								<label>Должность</label>
								<input
									placeholder="Должность"
									type="text"
									value={post}
									onChange={(e) => setPost(e.target.value)}
								/>
								<p className={styles.exception}></p>
							</div>
							<div>
								<label>Статус</label>
								<input
									placeholder="Статус"
									type="text"
									value={employeeStatus}
									onChange={(e) =>
										setEmployeeStatus(e.target.value)
									}
								/>
								<p className={styles.exception}></p>
							</div>
							<div>
								<button onClick={(e) => handleClose()}>
									Отмена
								</button>
								<button
									type="submit"
									onClick={(e) => submitHandler()}
								>
									{modalProperty.modalMode}
								</button>
							</div>
						</form>
					</div>
				</Modal>
			</>
		);
	}
}
