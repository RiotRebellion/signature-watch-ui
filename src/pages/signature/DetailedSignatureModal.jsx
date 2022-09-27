import { Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import AsyncSelect from "react-select/async";
import DatePicker from "react-datepicker";
import { SIGNATURES, EMPLOYEES } from "../../constants/api";
import { CREATE, EDIT } from "../../constants/detailedModalMode";
import useSignature from "../../hooks/useSignature";

import styles from "../../styles/Modal.module.css";
import "react-datepicker/dist/react-datepicker.css";
import { axiosContext } from "../../contexts/axiosContext";

export default function DetailedSignatureModal({
	modalProperty,
	createEmployeeHandler,
	updateEmployeeHandler,
	dataItem,
	cleanDataItem,
}) {
	{
		const [employeeOptions, setEmployeeOptions] = useState([]);

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

		const mapEmployees = (array) => {
			let result = [];
			console.log(array[0]);
			array.map((item) => {
				result.push({ label: item.name, value: item.guid });
				console.log(item);
			});
			setEmployeeOptions(result);
			return result;
		};

		const loadEmployeeOptions = () =>
			new Promise((resolve) => {
				axiosContext.get(EMPLOYEES).then((response) => {
					let data = response.data;
					resolve(mapEmployees(data));
				});
			});

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
							<div className={styles.input_container}>
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
							<div className={styles.input_container}>
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
							<div className={styles.input_container}>
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
							<div className={styles.input_container}>
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
							<div className={styles.input_container}>
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
							<div className={styles.input_container}>
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
							<div className={styles.input_container}>
								<label>Сотрудник</label>
								<AsyncSelect
									defaultOptions
									value={employeeOptions.find(
										(c) => c.value === ownerGuid
									)}
									loadOptions={loadEmployeeOptions}
									onChange={(val) => setOwnerGuid(val.value)}
								/>
								<p className={styles.exception}></p>
							</div>
							<div className={styles.buttons_panel}>
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
