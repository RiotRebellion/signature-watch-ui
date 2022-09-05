import React from "react";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function ItemToolBar() {
	return (
		<div>
			<IconButton aria-label="Изменить" size="small">
				<EditIcon />
			</IconButton>
			<IconButton aria-label="Удалить" size="small">
				<DeleteIcon />
			</IconButton>
		</div>
	);
}
