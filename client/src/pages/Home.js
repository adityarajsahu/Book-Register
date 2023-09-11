import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { Box, Typography, Toolbar, AppBar, Button } from "@mui/material";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";

import BookTable from "../components/BookTable/BookTable";

const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get("http://localhost:5500/books")
            .then((res) => {
                setBooks(res.data.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, []);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        Book Register
                    </Typography>
                    <Button color="inherit" component={Link} to="/books/create">
                        <AddBoxOutlinedIcon />
                    </Button>
                </Toolbar>
            </AppBar>
            {loading ? (
                <Box sx={{ display: "flex" }}>
                    <CircularProgress />
                </Box>
            ) : (
                <BookTable data={books} />
            )}
        </Box>
    );
};

export default Home;
