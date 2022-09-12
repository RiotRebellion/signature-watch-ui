import { useState } from "react";

export default function useEmployee() {
	const [name, setName] = useState("");
	const [department, setDepartment] = useState("");
	const [post, setPost] = useState("");
	const [status, setStatus] = useState("");

	const parseResponse = (response) => {
		setName(response.name);
		setDepartment(response.department);
		setPost(response.post);
		setStatus(response.status);
		console.log("sas");
	};

	const createRequestBody = () => {
		return {
			name: name,
			department: department,
			post: post,
			status: status,
		};
	};
	return {
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
	};
}
