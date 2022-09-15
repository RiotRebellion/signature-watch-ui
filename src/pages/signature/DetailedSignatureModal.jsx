import { Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import { SIGNATURES, EMPLOYEES } from "../../constants/api";
import { CREATE, EDIT } from "../../constants/detailedModalMode";
import useSignature from "../../hooks/useSignature";
import useData from "../../hooks/useData";

import styles from "../../styles/Modal.module.css";
import "react-datepicker/dist/react-datepicker.css";

export default function DetailedSignatureModal({
	modalProperty,
	createEmployeeHandler,
	updateEmployeeHandler,
	dataItem,
	cleanDataItem,
}) {
	{
		const { data, getAll } = useData();
		const [employeeOptions, setEmployeeOptions] = useState([]);

		const loadEmployeeOptions = () => {
			const arr = [];
			getAll(EMPLOYEES).then(() => {
				data.map((item) =>
					arr.push({ value: item.guid, label: item.name })
				);
				setEmployeeOptions(arr);
				console.log(employeeOptions);
			});
		};

		const signatureTypeOptions = [
			{ value: 0, label: "Физическая" },
			{ value: 1, label: "Юридическая" },
		];

		const {
			serialNumber,
			setSerialNumber,
			publicKeyStartDate,
			setPublicKeyStartDate,
			publicKeyEndDate,
			setPublicKeyEndDate,
			privateKeyStartDate,
			setPrivateKeyStartDate,
			privateKeyEndDate,
			setPrivateKeyEndDate,
			signatureType,
			setSignatureType,
			ownerGuid,
			setOwnerGuid,
			parseResponse,
			createRequestBody,
		} = useSignature();

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
						createEmployeeHandler(SIGNATURES, body);
						break;
					case EDIT:
						updateEmployeeHandler(SIGNATURES, dataItem.guid, body);
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
							<div>
								<label>Серийный номер</label>
								<input
									type="text"
									value={serialNumber}
									onChange={(e) =>
										setSerialNumber(e.target.value)
									}
								/>
								<p className={styles.exception}></p>
							</div>
							<div>
								<label>Дата начала открытого ключа</label>
								<DatePicker
									dateFormat={"dd/MM/yyyy"}
									selected={new Date(publicKeyStartDate)}
									onChange={(date) =>
										setPublicKeyStartDate(date)
									}
								/>
								<p className={styles.exception}></p>
							</div>
							<div>
								<label>Дата окончания открытого ключа</label>
								<DatePicker
									dateFormat={"dd/MM/yyyy"}
									selected={new Date(publicKeyEndDate)}
									onChange={(date) =>
										setPublicKeyEndDate(date)
									}
								/>
								<p className={styles.exception}></p>
							</div>
							<div>
								<label>Дата начала закрытого ключа</label>
								<DatePicker
									dateFormat={"dd/MM/yyyy"}
									selected={new Date(privateKeyStartDate)}
									onChange={(date) =>
										setPrivateKeyStartDate(date)
									}
								/>
								<p className={styles.exception}></p>
							</div>
							<div>
								<label>Дата окончания закрытого ключа</label>
								<DatePicker
									dateFormat={"dd/MM/yyyy"}
									selected={new Date(privateKeyEndDate)}
									onChange={(date) =>
										setPrivateKeyEndDate(date)
									}
								/>
								<p className={styles.exception}></p>
							</div>
							<div>
								<label>Тип подписи</label>
								<Select
									options={signatureTypeOptions}
									value={signatureTypeOptions.find(
										(c) => c.value === signatureType
									)}
									onChange={(val) =>
										setSignatureType(val.value)
									}
								/>
								<p className={styles.exception}></p>
							</div>
							<div>
								<label>Сотрудник</label>
								<Select
									options={employeeOptions}
									value={employeeOptions.find(
										(c) => c.value === ownerGuid
									)}
									onChange={(val) => setOwnerGuid(val.value)}
								/>
								<p className={styles.exception}></p>
							</div>
							<div className={styles.buttons}>
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
