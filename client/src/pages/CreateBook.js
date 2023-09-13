import React, { useState } from "react";
import { CircularProgress, Button, Container, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const CreateBook = () => {
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [publishYear, setPublishYear] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    const handleSubmit = () => {
        const data = { title, author, publishYear, description };
        setLoading(true);
        axios
            .post("http://localhost:5500/books", data)
            .then(() => {
                setLoading(false);
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
                Add Book
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

export default CreateBook;
