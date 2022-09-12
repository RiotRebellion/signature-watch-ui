import { Modal } from "@mui/material";
import React, { useEffect } from "react";
import { EMPLOYEES } from "../../constants/api";
import { CREATE, EDIT } from "../../constants/detailedModalMode";
import useData from "../../hooks/useData";
import useEmployee from "../../hooks/useEmployee";

import styles from "../../styles/Modal.module.css";

export default function DetailedEmployeeModal({
	modalVisibility,
	setModalVisibility,
	modalMode,
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
			status,
			setStatus,
			parseResponse,
			createRequestBody,
		} = useEmployee();

		const { createItem, updateItem } = useData();

		useEffect(() => {
			parseResponse(dataItem);
		});

		useEffect(() => {
			return cleanDataItem();
		});

		const handleClose = () => setModalVisibility(false);
		const submitHandler = () => {
			let body = createRequestBody;
			switch (modalMode) {
				case CREATE:
					createItem(EMPLOYEES, body);
				case EDIT:
					updateItem(EMPLOYEES, dataItem.guid, body);
			}
		};

		return (
			<>
				<Modal open={modalVisibility} onClose={handleClose}>
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
									value={status}
									onChange={(e) => setStatus(e.target.value)}
								/>
								<p className={styles.exception}></p>
							</div>
							<div>
								<button>Отмена</button>
								<button type="submit">{modalMode}</button>
							</div>
						</form>
					</div>
				</Modal>
			</>
		);
	}
}
