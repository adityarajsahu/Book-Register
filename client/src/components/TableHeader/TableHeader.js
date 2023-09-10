import { TableHead, TableRow, TableCell } from "@mui/material";

const TableHeader = () => {
    return (
        <TableHead>
            <TableRow>
                <TableCell>Book Name</TableCell>
                <TableCell>Author</TableCell>
                <TableCell>Publish Year</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Actions</TableCell>
            </TableRow>
        </TableHead>
    );
};

export default TableHeader;
