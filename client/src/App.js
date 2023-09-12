import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import CreateBook from "./pages/CreateBook";
import DeleteBook from "./pages/DeleteBook";
import EditBook from "./pages/EditBook";
import Home from "./pages/Home";
import ShowBook from "./pages/ShowBook";

import "./App.css";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/books/create" element={<CreateBook />} />
                <Route path="/books/show/:id" element={<ShowBook />} />
                <Route path="/books/edit/:id" element={<EditBook />} />
                <Route path="/books/delete/:id" element={<DeleteBook />} />
            </Routes>
        </ThemeProvider>
    );
}

export default App;
