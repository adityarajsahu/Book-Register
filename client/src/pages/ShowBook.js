import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Box, CircularProgress, Container, Stack, Typography, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ShowBook = () => {
    const [book, setBook] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:5500/books/${id}`)
            .then((res) => {
                setBook(res.data);
                setLoading(false);
                // console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, [id]);

    return (
        <Container maxWidth="md">
            <Button variant="contained" href="/">
                <ArrowBackIcon />
            </Button>
            <Typography variant="h3" component="h3">
                Show Book
            </Typography>
            {loading ? (
                <CircularProgress />
            ) : (
                <Stack spacing={2}>
                    <Box>
                        <Stack direction="row" spacing={2}>
                            <Box>Title</Box>
                            <Box>{book.title}</Box>
                        </Stack>
                    </Box>
                    <Box>
                        <Stack direction="row" spacing={2}>
                            <Box>Author</Box>
                            <Box>{book.author}</Box>
                        </Stack>
                    </Box>
                    <Box>
                        <Stack direction="row" spacing={2}>
                            <Box>Publish Year</Box>
                            <Box>{book.publishYear}</Box>
                        </Stack>
                    </Box>
                    <Box>
                        <Stack direction="row" spacing={2}>
                            <Box>Description</Box>
                            <Box>{book.description}</Box>
                        </Stack>
                    </Box>
                </Stack>
            )}
        </Container>
    );
};

export default ShowBook;
