import React from 'react';
import '../styles/default-button.css';
import { Table, Dropdown, ButtonGroup, Button } from 'react-bootstrap';

const DefaultTable = ({ theads, tbody, renderActions = [], onActionClick, hover = false, onRowClick }) => {
    return (
        <Table bordered className='default-table' hover={hover}>
            <thead>
                <tr>
                    {
                        theads.map((value, index) => (
                            <th key={index}>{value.label}</th>
                        ))
                    }
                    {
                        renderActions.length ? <th /> : null
                    }
                </tr>
            </thead>
            <tbody>
                {
                    tbody.map((row, index) => (
                        <tr key={index} onClick={() => onRowClick && onRowClick(row)}>
                            {
                                theads.map((column, cellIndex) => (
                                    <td key={cellIndex}>{row[column.key]}</td>
                                ))
                            }
                            {
                                renderActions.length ? (
                                    <td className='action-cell text-center'>
                                        <Dropdown as={ButtonGroup}>
                                            <Button variant="danger">Action</Button>
                                            <Dropdown.Toggle split variant="danger" id="dropdown-split-basic" />
                                            <Dropdown.Menu>
                                                {
                                                    renderActions.map((action) => (
                                                        <Dropdown.Item onClick={() => onActionClick(row, action.type)}>{action.title}</Dropdown.Item>
                                                    ))
                                                }
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </td>
                                ) : null
                            }
                        </tr>
                    ))
                }
            </tbody>
        </Table>);
};

export default DefaultTable;