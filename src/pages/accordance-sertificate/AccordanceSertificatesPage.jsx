import { useEffect } from "react";
import { ACCORDANCE_SERTIFICATES } from "../../constants/api";
import { CREATE, EDIT } from "../../constants/detailedModalMode";
import useData from "../../hooks/useData";
import useModalProperty from "../../hooks/useModalProperty";

import PageToolBox from "../../components/PageToolBox";
import ItemToolBar from "../../components/ItemToolBar";
import DetailedAccordanseSertificateModal from "./DetailedAccordanceSertificateModal";
import { CircularProgress } from "@mui/material";

import styles from "../../styles/dataContent.module.css";
import { ConvertDateTimeToShortDate } from "../../common/Converters/DateConverter";

export default function AccordanceSertificatesPage() {
	const {
		data,
		dataItem,
		isLoading,
		cleanDataItem,
		getAll,
		getById,
		createItem,
		updateItem,
		deleteItem,
	} = useData();

	const modalProperty = useModalProperty();

	useEffect(() => {
		getAll(ACCORDANCE_SERTIFICATES);
	}, [dataItem]);

	const openCreateForm = () => {
		modalProperty.setModalMode(CREATE);
		modalProperty.setModalVisibility(true);
	};

	const openEditForm = (id) => {
		getById(ACCORDANCE_SERTIFICATES, id);
		modalProperty.setModalMode(EDIT);
		modalProperty.setModalVisibility(true);
	};

	return (
		<main className={styles.content}>
			<h2>Сертификаты соответствия</h2>
			{isLoading ? (
				<div className={styles.loading_box}>
					<CircularProgress />
				</div>
			) : (
				<div className={styles.data_container}>
					<div className={styles.toolbox}>
						<PageToolBox createHandler={openCreateForm} />
					</div>
					<div className={styles.data_header}>
						<div>Регистрационный номер</div>
						<div>Дата начала</div>
						<div>Дата окончания</div>
						<div>Дата пролонгации</div>
						<div>Имя формуляра</div>
						<div>Серийный номер формуляра</div>
						<div></div>
					</div>
					{data.map((accordanseSertificate) => {
						return (
							<div
								className={styles.data_row}
								key={accordanseSertificate.guid}
							>
								<div>{accordanseSertificate.regNumber}</div>
								<div>
									{ConvertDateTimeToShortDate(
										accordanseSertificate.acquisitionDate
									)}
								</div>
								<div>
									{ConvertDateTimeToShortDate(
										accordanseSertificate.expirationDate
									)}
								</div>
								<div>
									{ConvertDateTimeToShortDate(
										accordanseSertificate.prolongDate
									)}
								</div>
								<div>{accordanseSertificate.formularName}</div>
								<div>
									{accordanseSertificate.formularSerialKey}
								</div>
								<div>
									<ItemToolBar
										editHandler={(e) => {
											openEditForm(
												accordanseSertificate.guid
											);
										}}
										deleteHandler={(e) =>
											deleteItem(
												ACCORDANCE_SERTIFICATES,
												accordanseSertificate.guid
											)
										}
									/>
								</div>
							</div>
						);
					})}
				</div>
			)}
			{modalProperty.modalVisibility ? (
				<DetailedAccordanseSertificateModal
					modalProperty={modalProperty}
					dataItem={dataItem}
					createHandler={createItem}
					updateHandler={updateItem}
					cleanDataItem={cleanDataItem}
				/>
			) : null}
		</main>
	);
}
