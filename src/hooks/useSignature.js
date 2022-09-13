export default function useEmployee() {
	const [serialNumber, setSerialNumber] = useState("");
	const [publicKeyStartDate, setPublicKeyStartDate] = useState("");
	const [publicKeyEndDate, setPublicKeyEndDate] = useState("");
	const [privateKeyStartDate, setPrivateKeyStartDate] = useState("");
    const [ownerId, setOwnerId] = useState("");
	

	const parseResponse = (response) => {
		setName(response.name);
		setDepartment(response.department);
		setPost(response.post);
		setEmployeeStatus(response.employeeStatus);
	};

	const createRequestBody = () => {
		return {
			
		};
	};
	return {
		
	};
}