import { TableBody, TableRow, TableCell, Button } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";

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
                    <TableCell>
                        <Button color="inherit" component={Link} to={`/books/edit/${item._id}`}>
                            <EditOutlinedIcon />
                        </Button>
                        <Button color="inherit" component={Link} to={`/books/delete/${item._id}`}>
                            <DeleteOutlinedIcon />
                        </Button>
                        <Button color="inherit" component={Link} to={`/books/show/${item._id}`}>
                            <InfoIcon />
                        </Button>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    );
};

export default TableData;
