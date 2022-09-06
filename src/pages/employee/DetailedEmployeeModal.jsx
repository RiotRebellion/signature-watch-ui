import React, { useState } from "react";
import Modal from "@mui/material/Modal";

export default function DetailedEmployeeModal(props) {
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<React.Fragment>
			<Modal hideBackdrop open={open} close={handleClose}>
				<div></div>
			</Modal>
		</React.Fragment>
	);
}
