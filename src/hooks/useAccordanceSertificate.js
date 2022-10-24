import { useState } from "react";
import { ConvertDateTimeToISO } from "../common/Converters/DateConverter";

export default function useAccordanceSertificate() {
	const [regNumber, setRegNumber] = useState("");
	const [acquisitionDate, setAcquisitionDate] = useState();
	const [expirationDate, setExpirationDate] = useState("");
	const [prolongDate, setProlongDate] = useState("");
    const [formularName, setFormularName] = useState("");
    const [formularSerialKey, setFormularSerialKey] = useState("");

	const parseResponse = (response) => {
		setRegNumber(response.regNumber);
		setAcquisitionDate(response.acquisitionDate);
		setExpirationDate(response.expirationDate);
		setProlongDate(response.prolongDate);
        setFormularName(response.formularName);
        setFormularSerialKey(response.formularSerialKey);
	};

	const createRequestBody = () => {
		return {
			serialNumber: regNumber,
			publicKeyStartDate: ConvertDateTimeToISO(acquisitionDate),
			publicKeyEndDate: ConvertDateTimeToISO(expirationDate),
			privateKeyStartDate: ConvertDateTimeToISO(prolongDate),
			formularName: formularName,
			formularSerialKey: formularSerialKey
		};
	};
	
	return {
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
	};
}