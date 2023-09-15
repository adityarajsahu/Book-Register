import React, { useState } from "react";
import { Button, CircularProgress, Container, Typography, Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const DeleteBook = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    const handleDelete = (event) => {
        event.preventDefault();
        setLoading(true);
        axios
            .delete(`http://localhost:5500/books/${id}`)
            .then(() => {
                setLoading(false);
                navigate("/");
            })
            .catch((err) => {
                setLoading(false);
                alert("Unable to delete book");
                console.log(err);
            });
    };

    return (
        <Container maxWidth="md">
            <Button variant="contained" href="/">
                <ArrowBackIcon />
            </Button>
            <Typography variant="h3" component="h3">
                Delete Book
            </Typography>

            {loading ? <CircularProgress /> : ""}
            <Box sx={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
                <Typography variant="h5" component="h5">
                    Are you sure you want to delete this book?
                </Typography>
                <Button variant="contained" color="primary" onClick={handleDelete}>
                    Yes, Delete It
                </Button>
            </Box>
        </Container>
    );
};

export default DeleteBook;
