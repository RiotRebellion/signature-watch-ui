import { useEffect } from "react";
import { SIGNATURES } from "../../constants/api";
import { SignatureTypeIntToStringConverter } from "../../common/Converters/SignatureTypeConverter";
import { CREATE, EDIT } from "../../constants/detailedModalMode";
import useData from "../../hooks/useData";
import useModalProperty from "../../hooks/useModalProperty";

import PageToolBox from "../../components/PageToolBox";
import ItemToolBar from "../../components/ItemToolBar";
import DetailedSignatureModal from "./DetailedSignatureModal";

import styles from "../../styles/dataContent.module.css";
import { ConvertDateTimeToShortDate } from "../../common/Converters/DateConverter";

export default function SignaturesPage() {
	const {
		data,
		dataItem,
		cleanDataItem,
		getAll,
		getById,
		createItem,
		updateItem,
		deleteItem,
	} = useData();

	const modalProperty = useModalProperty();

	useEffect(() => {
		getAll(SIGNATURES);
	}, [dataItem]);

	const openCreateForm = () => {
		modalProperty.setModalMode(CREATE);
		modalProperty.setModalVisibility(true);
	};

	const openEditForm = (id) => {
		getById(SIGNATURES, id);
		modalProperty.setModalMode(EDIT);
		modalProperty.setModalVisibility(true);
	};

	return (
		<main className={styles.content}>
			<h2>Электронные подписи</h2>
			<div className={styles.toolbox}>
				<PageToolBox createHandler={openCreateForm} />
			</div>
			<div className={styles.data_container}>
				<div className={styles.data_header}>
					<div>Серийный номер</div>
					<div>Дата начала публичного ключа</div>
					<div>Дата окончания публичного ключа</div>
					<div>Дата начала приватного ключа</div>
					<div>Дата окончания приватного ключа</div>
					<div>Тип подписи</div>
					<div>Владелец</div>
					<div></div>
				</div>
				{data.map((signature) => {
					return (
						<div className={styles.data_row} key={signature.guid}>
							<div>{signature.serialNumber}</div>
							<div>
								{ConvertDateTimeToShortDate(
									signature.publicKeyStartDate
								)}
							</div>
							<div>
								{ConvertDateTimeToShortDate(
									signature.publicKeyEndDate
								)}
							</div>
							<div>
								{ConvertDateTimeToShortDate(
									signature.privateKeyStartDate
								)}
							</div>
							<div>
								{ConvertDateTimeToShortDate(
									signature.privateKeyEndDate
								)}
							</div>
							<div>{signature.signatureType}</div>
							<div>{signature.employeeName}</div>
							<div>
								<ItemToolBar
									editHandler={(e) => {
										openEditForm(signature.guid);
									}}
									deleteHandler={(e) =>
										deleteItem(SIGNATURES, signature.guid)
									}
								/>
							</div>
						</div>
					);
				})}
			</div>
			{modalProperty.modalVisibility ? (
				<DetailedSignatureModal
					modalProperty={modalProperty}
					dataItem={dataItem}
					createEmployeeHandler={createItem}
					updateEmployeeHandler={updateItem}
					cleanDataItem={cleanDataItem}
				/>
			) : null}
		</main>
	);
}
