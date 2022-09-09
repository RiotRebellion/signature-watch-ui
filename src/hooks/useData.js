import { useState } from "react";
import { axiosContext } from "../contexts/axiosContext";

export default function useData() {
	const [data, setData] = useState([]);

	const getAll = (api) => {
		axiosContext
			.get(api)
			.then((response) => setData(response.data))
			.then(() => console.log(data))
			.catch((error) => console.log(error.toJSON()));
	};

	const getById = (api, id) => {
		axiosContext.get(`${api}/${id}`);
	};

	const createItem = async (api, id, item) => {
		axiosContext
			.post(`${api}/${id}`, item)
			.then(() => getAll(api))
			.then(() => console.log("success"))
			.catch((error) => console.log(error));
	};

	const updateItem = async (api, id, item) => {
		axiosContext
			.put(`${api}/${id}`, item)
			.then(() => getAll(api))
			.then(() => console.log("success"))
			.catch((error) => console.log(error));
	};

	const deleteItem = async (api, id) => {
		axiosContext
			.delete(`${api}/${id}`)
			.then(() => getAll(api))
			.then(() => console.log("success"))
			.catch((error) => console.log(error));
	};

	return { data, getAll, getById, createItem, updateItem, deleteItem };
}
