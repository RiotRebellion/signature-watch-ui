import React, { useState } from "react";

import styles from "../../styles/Modal.module.css";

export default function DetailedEmployeeModal({ id }) {
	return <div className={styles.modal_box}>{id}</div>;
}
