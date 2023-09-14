import React, { useState, useEffect } from "react";
import { CircularProgress, Button, Container, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const EditBook = () => {
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [publishYear, setPublishYear] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:5500/books/${id}`)
            .then((res) => {
                setTitle(res.data.title);
                setAuthor(res.data.author);
                setPublishYear(res.data.publishYear);
                setDescription(res.data.description);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
                alert("An error occurred, please try again later");
                console.log(err);
            });
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = { title, author, publishYear, description };
        setLoading(true);
        axios
            .put(`http://localhost:5500/books/${id}`, data)
            .then(() => {
                setLoading(false);
                console.log("Book updated successfully");
                navigate("/");
            })
            .catch((err) => {
                setLoading(false);
                alert("Unable to save data");
                console.log(err);
            });
    };

    return (
        <Container maxWidth="md">
            <Button variant="contained" href="/">
                <ArrowBackIcon />
            </Button>
            <Typography variant="h3" component="h3">
                Edit Book
            </Typography>
            {loading ? <CircularProgress /> : ""}
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Title"
                    variant="outlined"
                    fullWidth
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <TextField
                    label="Author"
                    variant="outlined"
                    fullWidth
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                />
                <TextField
                    label="Publish Year"
                    variant="outlined"
                    fullWidth
                    value={publishYear}
                    onChange={(e) => setPublishYear(e.target.value)}
                    required
                />
                <TextField
                    label="Description"
                    variant="outlined"
                    fullWidth
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </form>
        </Container>
    );
};

export default EditBook;
