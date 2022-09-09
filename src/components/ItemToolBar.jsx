import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function ItemToolBar({ editHandler, deleteHandler }) {
	return (
		<div>
			<IconButton
				aria-label="Изменить"
				size="small"
				onClick={editHandler}
			>
				<EditIcon />
			</IconButton>
			<IconButton
				aria-label="Удалить"
				size="small"
				onClick={deleteHandler}
			>
				<DeleteIcon />
			</IconButton>
		</div>
	);
}
