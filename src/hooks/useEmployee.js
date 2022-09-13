import { useState } from "react";

export default function useEmployee() {
	const [name, setName] = useState("");
	const [department, setDepartment] = useState("");
	const [post, setPost] = useState("");
	const [employeeStatus, setEmployeeStatus] = useState(2);

	const parseResponse = (response) => {
		setName(response.name);
		setDepartment(response.department);
		setPost(response.post);
		setEmployeeStatus(response.employeeStatus);
	};

	const createRequestBody = () => {
		return {
			name: name,
			department: department,
			post: post,
			employeeStatus: Number(employeeStatus),
		};
	};
	return {
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
	};
}
