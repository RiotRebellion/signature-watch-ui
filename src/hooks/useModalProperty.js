import { useState } from "react";

export default function useModalProperty() {
	const [modalVisibility, setModalVisibility] = useState("");
	const [modalMode, setModalMode] = useState(false);

	return { modalVisibility, setModalVisibility, modalMode, setModalMode };
}
