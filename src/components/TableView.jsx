import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function TableView(props) {
    const [headers, setHeaders] = useState([]);
    const [data, setData] = useState([]);

    const dataAdd = () => {
        setData(props.dataset);
        setHeaders(data.headers)
        console.log(data);
        console.log(data.headers)
    }
    
    return (
        <table>
            <button onClick={dataAdd}>Получить</button>
            {/* <thead>
                <tr>
                    {
                        headers.map(item => 
                        {
                            return<th> {item} </th>
                        })
                    };
                </tr>
            </thead>
            <tbody>
                <tr>
                    {
                        data.map(item =>{
                            item.map(element => 
                            {
                                return <td> {element} </td>
                            })
                        })
                    };
                </tr>
            </tbody> */}
        </table>
  )
}