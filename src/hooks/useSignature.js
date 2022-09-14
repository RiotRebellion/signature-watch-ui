import { useState } from "react";

export default function useEmployee() {
	const [serialNumber, setSerialNumber] = useState("");
	const [publicKeyStartDate, setPublicKeyStartDate] = useState("");
	const [publicKeyEndDate, setPublicKeyEndDate] = useState("");
	const [privateKeyStartDate, setPrivateKeyStartDate] = useState("");
	const [privateKeyEndDate, setPrivateKeyEndDate] = useState("");
	const [signatureType, setSignatureType] = useState(2);
    const [ownerGuid, setOwnerGuid] = useState("");
	

	const parseResponse = (response) => {
		setSerialNumber(response.serialNumber);
		setPublicKeyStartDate(response.publicKeyStartDate);
		setPublicKeyEndDate(response.publicKeyEndDate);
		setPrivateKeyStartDate(response.privateKeyStartDate);
		setSignatureType(response.signatureType);
		setOwnerGuid(response.ownerGuid);
	};

	const createRequestBody = () => {
		return {
			serialNumber: serialNumber,
			publicKeyStartDate: publicKeyStartDate,
			publicKeyEndDate: publicKeyEndDate,
			privateKeyStartDate: privateKeyStartDate,
			privateKeyEndDate: privateKeyEndDate,
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
		createRequestBody
	};
}