import { useState } from "react";
import {
	ConvertDateTimeToShortDate,
	ConvertDateTimeToISO,
} from "../common/Converters/DateConverter";

export default function useEmployee() {
	const [serialNumber, setSerialNumber] = useState("");
	const [publicKeyStartDate, setPublicKeyStartDate] = useState();
	const [publicKeyEndDate, setPublicKeyEndDate] = useState("");
	const [privateKeyStartDate, setPrivateKeyStartDate] = useState("");
	const [privateKeyEndDate, setPrivateKeyEndDate] = useState("");
	const [signatureType, setSignatureType] = useState();
	const [ownerGuid, setOwnerGuid] = useState("");

	const parseResponse = (response) => {
		if (response != null) {
			setSerialNumber(response.serialNumber);
			setPublicKeyStartDate(
				ConvertDateTimeToShortDate(response.publicKeyStartDate)
			);
			setPublicKeyEndDate(
				ConvertDateTimeToShortDate(response.publicKeyEndDate)
			);
			setPrivateKeyStartDate(
				ConvertDateTimeToShortDate(response.privateKeyStartDate)
			);
			setPrivateKeyEndDate(
				ConvertDateTimeToShortDate(response.privateKeyEndDate)
			);
			setSignatureType(response.signatureType);
			setOwnerGuid(response.ownerGuid);
		}
	};

	const createRequestBody = () => {
		return {
			serialNumber: serialNumber,
			publicKeyStartDate: ConvertDateTimeToISO(publicKeyStartDate),
			publicKeyEndDate: ConvertDateTimeToISO(publicKeyEndDate),
			privateKeyStartDate: ConvertDateTimeToISO(privateKeyStartDate),
			privateKeyEndDate: ConvertDateTimeToISO(privateKeyEndDate),
			signatureType: signatureType,
			ownerGuid: ownerGuid,
		};
	};
	return {
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
	};
}
