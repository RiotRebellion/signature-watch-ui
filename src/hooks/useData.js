import { useState } from "react";
import { axiosContext } from "../contexts/axiosContext";

export default function useData() {
	const [data, setData] = useState([]);
	const [dataItem, setDataItem] = useState({})
	
	const cleanDataItem = () => setDataItem({});	
	const getAll = (api) => {
		axiosContext
			.get(api)
			.then((response) => setData(response.data))
			.then(() => console.log(data))
			.catch((error) => console.log(error.toJSON()));
	};

	const getById = (api, id) => {
		 axiosContext
			.get(`${api}/${id}`)
			.then((response) => setDataItem(response.data))
			.catch((error) => console.log(error.toJSON()));
	};

	const createItem = async (api, item) => {
		await axiosContext
			.post(`${api}`, item)
			.then(() => console.log("success"))
			.catch((error) => console.log(error));
	};

	const updateItem = async (api, id, item) => {
		await axiosContext
			.put(`${api}/${id}`, item)
			.then(() => console.log("success"))
			.catch((error) => console.log(error));
	};

	const deleteItem = async (api, id) => {
		await axiosContext
			.delete(`${api}/${id}`)
			.then(() => getAll(api))
			.then(() => console.log("success"))
			.catch((error) => console.log(error));
	};

	return {
		data,
		dataItem,
		cleanDataItem,
		getAll,
		getById,
		createItem,
		updateItem,
		deleteItem,
	};
}
