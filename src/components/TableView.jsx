import { render } from '@testing-library/react';
import { useTable } from 'react-table'; 
import React from 'react'

export default function TableView({headers, dataset, isDataLoaded}) {

    const {
        getTableProps,
        getTableBodyProps,
        rows,
        prepareRow
    } = useTable{
        headers,
        dataset
    }


    const renderTableHeader = headers.map(item => 
            <th>
                {item}
            </th>   
        )

    const renderTableBody = dataset.map(item => 
        <tr>
            <td></td>
        </tr>
    )      

    if(isDataLoaded)
    return (
        <table {...getTableProps()}>
            <thead>
                <tr>
                    {renderTableHeader}
                </tr>
            </thead>
            <tbody>
                {renderTableBody}
            </tbody>
        </table>
    )
    else
    return (
        <h3>
            Данные загружаются...
        </h3>
    )
}