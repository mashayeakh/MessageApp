import { app, server } from "./app";
import express from "express";

const port = 5000;


server.listen(port, () => {

    console.log(`Server is running on http://localhost:${port}`);
});