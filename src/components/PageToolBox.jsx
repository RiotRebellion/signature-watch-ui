import { useState } from "react";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import styles from "../styles/PageToolBox.module.css";

export default function PageToolBox(props) {
	return (
		<div className={styles.toolBox}>
			<IconButton>
				<AddIcon />
			</IconButton>
		</div>
	);
}
