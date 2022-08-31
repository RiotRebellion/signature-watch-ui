import { render } from '@testing-library/react';
import { useTable } from 'react-table'; 
import React from 'react'

export default function TableView({ headers, dataset }) {

    const renderHeaders = () => {
        <tr>
            {
                headers.map(item => {
                    return
                    <th>{item}</th>
                })
            }
        </tr>
    }

    const renderBody = () => {
        {
            dataset.forEach(item => {
                return (
                    <tr>
                        {
                            item.forEach(value => {
                                return (
                                    <tr>{value}</tr>
                                )
                            })
                        }
                    </tr>
                )
            })
        }
    }

    return (
        <table>
            <thead>
                {renderHeaders}
            </thead>
            <tbody>

            </tbody>
        </table>
    )
}