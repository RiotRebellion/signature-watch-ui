import { Modal } from "@mui/material";
import React, { useEffect } from "react";
import Select from "react-select";
import { ACCORDANCE_SERTIFICATES, EMPLOYEES } from "../../constants/api";
import { CREATE, EDIT } from "../../constants/detailedModalMode";
import useAccordanceSertificate from "../../hooks/useAccordanceSertificate";

import styles from "../../styles/Modal.module.css";

export default function DetailedAccordanseSertificateModal({
	modalProperty,
	createHandler,
	updateHandler,
	dataItem,
	cleanDataItem,
}) 
{
	const {
		regNumber,
		setRegNumber,
		acquisitionDate,
		setAcquisitionDate,
		expirationDate,
		setExpirationDate,
		prolongDate,
		setProlongDate,
		formularName,
		setFormularName,
		formularSerialKey,
		setFormularSerialKey,
		parseResponse,
		createRequestBody,
		} = useAccordanceSertificate();

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
					createHandler(
					    ACCORDANCE_SERTIFICATES, 
					    body);
					break;
				case EDIT:
					updateHandler(
						ACCORDANCE_SERTIFICATES,
						dataItem.guid,
						body
					);
					break;
				default:
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
				aria-describedby="body"
			>
				<div id="body" className={styles.modal_box}>
					<form onSubmit={(e) => e.preventDefault()}>
						<div className={styles.input_container}>
							<label>Регистрационный номер</label>
							<input
								placeholder="Регистрационный номер"
								type="text"
								value={regNumber}
								onChange={(e) => setRegNumber(e.target.value)}
							/>
							<p className={styles.exception}>ошибка</p>
						</div>
						<div className={styles.input_container}>
							<label>Дата начала</label>
							<input
								placeholder="Дата начала"
								type="text"
								value={acquisitionDate}
								onChange={(e) => setAcquisitionDate(e.target.value)
								}
							/>
							<p className={styles.exception}>ошибка</p>
						</div>
						<div className={styles.input_container}>
							<label>Дата окончания</label>
							<input
								placeholder="Дата окончания"
								type="text"
								value={expirationDate}
								onChange={(e) => setExpirationDate(e.target.value)}
							/>
							<p className={styles.exception}>ошибка</p>
						</div>
						<div className={styles.input_container}>
							<label>Дата пролонгации</label>
							<input
								placeholder="Дата пролонгации"
								type="text"
								value={prolongDate}
								onChange={(e) => setProlongDate(e.target.value)}
							/>
							<p className={styles.exception}>ошибка</p>
						</div>
						<div className={styles.input_container}>
							<label>Имя формуляра</label>
							<input
								placeholder="Дата пролонгации"
								type="text"
								value={formularName}
								onChange={(e) => setFormularName(e.target.value)}
							/>
							<p className={styles.exception}>ошибка</p>
						</div>
						<div className={styles.input_container}>
							<label>Серийный номер формуляра</label>
							<input
								placeholder="Серийный номер формуляра"
								type="text"
								value={formularSerialKey}
								onChange={(e) => setFormularSerialKey(e.target.value)}
							/>
							<p className={styles.exception}>ошибка</p>
						</div>
						<div className={styles.button_panel}>
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
