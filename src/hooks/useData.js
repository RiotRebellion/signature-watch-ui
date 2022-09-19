import { useState } from "react";
import { axiosContext } from "../contexts/axiosContext";

export default function useData() {
	const [data, setData] = useState([]);
	const [dataItem, setDataItem] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	const cleanDataItem = () => setDataItem({});
	const getAll = async (api) => {
		setIsLoading(true);
		await axiosContext
			.get(api)
			.then((response) => setData(response.data))
			.catch((error) => console.log(error.toJSON()))
			.finally(() => setIsLoading(false));
	};

	const getById = async (api, id) => {
		setIsLoading(true);
		await axiosContext
			.get(`${api}/${id}`)
			.then((response) => setDataItem(response.data))
			.catch((error) => console.log(error.toJSON()))
			.finally(() => setIsLoading(false));
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
