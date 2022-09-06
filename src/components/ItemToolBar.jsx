import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { axiosContext } from "../contexts/axiosContext";
import DetailedModalContainer from "../containers/DetailedModalContainer";

export default function ItemToolBar({ api, id }) {
	const [modalVisibility, setModalVisibility] = useState(false);

	const callModal = () => {
		if (modalVisibility == false) {
			setModalVisibility(true);
		} else {
			setModalVisibility(false);
		}
	};

	const editData = async () => {
		axiosContext
			.delete(`${api}/${id}`)
			.then(console.log(`${id} был удален`));
	};

	return (
		<div>
			<IconButton aria-label="Изменить" size="small" onClick={callModal}>
				<EditIcon />
			</IconButton>
			<IconButton aria-label="Удалить" size="small" onClick={editData}>
				<DeleteIcon />
			</IconButton>
			{modalVisibility ? (
				<DetailedModalContainer
					api={api}
					id={id}
					modalVisibility={modalVisibility}
					setModalVisibility={setModalVisibility}
				/>
			) : null}
		</div>
	);
}
