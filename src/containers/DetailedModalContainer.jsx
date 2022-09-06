import React, { useEffect, useState } from "react";
import { Modal } from "@mui/material";
import DetailedEmployeeModal from "../pages/employee/DetailedEmployeeModal";
import { NotFound } from "../pages/NotFound.jsx";

export default function DetailedModalContainer({
	api,
	id,
	modalVisibility,
	setModalVisibility = () => {},
}) {
	const [open, setOpen] = useState(modalVisibility);

	const handleClose = () => {
		setOpen(false);
		setModalVisibility(false);
	};

	const renderSwitch = () => {
		switch (api) {
			case "/employees":
				<DetailedEmployeeModal id={id} />;
			default:
				<NotFound />;
		}
	};

	useEffect(() => {}, [modalVisibility]);

	return (
		<>
			<Modal open={open} close={handleClose}>
				<DetailedEmployeeModal id={id} />
			</Modal>
		</>
	);
}
