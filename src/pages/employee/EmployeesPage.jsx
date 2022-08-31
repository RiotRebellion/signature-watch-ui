import { useState, useEffect } from "react";
import { AxiosContext } from "../../contexts/AxiosContext";

import RegistryToolBox from "../../components/RegistyToolBox";
import TableView from "../../components/TableView";

import styles from '../../styles/Employees.module.css';


export default function Employees() {
    const [headers, setHeaders] = useState(null);
    const [dataset, setDataset] = useState(null);

    const fetchData = async () => {
        await AxiosContext.get('/employees')
            .then(response => {
                if (response.status == 200) {
                    console.log(response.data);
                    setDataset(response.data);
                    console.log(dataset)
                    setHeaders(Object.keys(dataset[0]));
                    console.log(headers);
                }
            })
    }

    useEffect(() => {
        fetchData();
    }, []);

    if (!dataset)
        return (
            <main>
                <h1>Данные загружаются...</h1>
            </main>
        )
    else
        return (
            <main className={styles.Employees}>
                <h1 className={styles.title}>Сотрудники</h1>
                <TableView headers={headers} dataset={dataset} />
            </main>
        );
}