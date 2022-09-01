import { useState, useEffect } from "react";
import { axiosContext } from "../../contexts/axiosContext";

import RegistryToolBox from "../../components/RegistyToolBox";

import styles from '../../styles/Employees.module.css';


export default function Employees() {
    const [headers, setHeaders] = useState([]);
    const [dataset, setDataset] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        await axiosContext.get('/employees')
            .then(response => {
                setLoading(false);
                setDataset(response.data);
                setHeaders(Object.keys(dataset[0]));
            })
    }

    useEffect(() => {
        fetchData();
    }, [loading]);

    if (loading == true)
        return (
            <main>
                <h1>Данные загружаются...</h1>
            </main>
        )
    else
        return (
            <main className={styles.Employees}>
                <table>
                    <thead>
                        <tr>
                            {headers.map(item => <th>{item}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {dataset.map(item => {
                            <tr>
                                {item.map(value => <td>{value}</td>)}
                            </tr>
                        })}
                    </tbody>
                </table>
            </main>
        );
}