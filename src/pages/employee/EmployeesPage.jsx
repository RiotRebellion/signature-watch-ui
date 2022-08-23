import { useState, useEffect } from "react";
import { AxiosContext } from "../../contexts/AxiosContext";

import RegistryToolBox from "../../components/RegistyToolBox";
import TableView from "../../components/TableView";

import styles from '../../styles/Employees.module.css';


export default function Employees(){
    const [dataset, setDataset] = useState([]);

    const getData = async () =>{
        try {
          const data = await AxiosContext('/employees');
          setDataset(data);
          console.log(dataset);
        } catch (error) {
          console.error(error.message);
        }
      }

    useEffect(() => {
        getData();
        console.log(dataset);
      }, []);

    return(
        <main className={styles.Employees}>
            <h1 className={styles.title}>Сотрудники</h1>
            <button onClick={getData}>Получить данные</button>
            <TableView dataset={dataset}/>
        </main>
    );
}