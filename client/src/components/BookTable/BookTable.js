import React from "react";
import { Table, TableContainer, Paper } from "@mui/material";

import TableHeader from "../TableHeader/TableHeader";
import TableData from "../TableData/TableData";

import styles from "./BookTable.module.css";

const BookTable = ({ data }) => {
    return (
        <div className={styles.root}>
            <TableContainer component={Paper} className={styles.tableContainer}>
                <Table>
                    <TableHeader />
                    <TableData data={data} />
                </Table>
            </TableContainer>
        </div>
    );
};

export default BookTable;
