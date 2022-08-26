import { useState, useEffect } from "react";
import React from 'react';

import { AxiosContext } from "../../contexts/AxiosContext";

import RegistryToolBox from "../../components/RegistyToolBox";
import TableView from "../../components/TableView";

import styles from '../../styles/Employees.module.css';

export default function Employees(){
    const [headers, setHeaders] = useState();
    const [dataset, setDataset] = useState();
    const [isDataLoaded, setIsDataLoaded] = useState(true);

     function FetchData() {
      AxiosContext.get('/employees')
      .then(response => {
        setDataset(response.data);
        setIsDataLoaded(true);    
        console.log(dataset);
        setHeaders(Object.keys(dataset[0]));    
      });
    }

    useEffect(() => {
      FetchData();
    }, []);

    if (isDataLoaded == false) return null

    return(
        <main className={styles.Employees}>
            <h2 className={styles.title}>Сотрудники</h2>
            <TableView headers={headers} dataset={dataset} isDataLoaded={isDataLoaded}/>
        </main>
    );
}