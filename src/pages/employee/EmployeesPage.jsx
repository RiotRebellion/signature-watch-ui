import { useState, useEffect } from "react";
import { AxiosContext } from "../../contexts/AxiosContext";

import RegistryToolBox from "../../components/RegistyToolBox";
import DataItem from '../../components/DataItem';

import styles from '../../styles/Employees.module.css';


export default function Employees(){
    const [dataset, setDataset] = useState([]);

    useEffect(() => {
        AxiosContext('/employees')
        .then(response => {
            console.log(response.data);
        });
    });

    return(
        <main className={styles.Employees}>
            <h1 className={styles.title}>Сотрудники</h1>
            <RegistryToolBox></RegistryToolBox>
            <DataItem></DataItem>
        </main>
    );
}