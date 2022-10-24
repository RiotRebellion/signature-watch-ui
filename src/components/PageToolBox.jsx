import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import styles from "../styles/PageToolBox.module.css";

export default function PageToolBox({ createHandler }) {
	return (
		<div className={styles.toolBox}>
			<IconButton onClick={createHandler}>
				<AddIcon />
			</IconButton>
		</div>
	);
}
