import React from "react";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { axiosContext } from "../contexts/axiosContext";

export default function ItemToolBar({ api, id }) {
	const editData = async () => {
		axiosContext
			.delete(`${api}/${id}`)
			.then(console.log(`${id} был удален`));
	};

	return (
		<div>
			<IconButton aria-label="Изменить" size="small">
				<EditIcon />
			</IconButton>
			<IconButton aria-label="Удалить" size="small" onClick={editData}>
				<DeleteIcon />
			</IconButton>
			<modal></modal>
		</div>
	);
}
