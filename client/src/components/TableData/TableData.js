import { TableBody, TableRow, TableCell } from "@mui/material";

const TableData = ({ data }) => {
    // console.log(data);
    return (
        <TableBody>
            {data.map((item) => (
                <TableRow key={item.id}>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>{item.author}</TableCell>
                    <TableCell>{item.publishYear}</TableCell>
                    <TableCell>{item.description}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    );
};

export default TableData;
