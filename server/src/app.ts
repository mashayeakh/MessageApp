import express, { type Application } from "express";
import path from "path";
import { createServer } from 'node:http';

import { Server } from 'socket.io';


export const app: Application = express()

export const server = createServer(app);
export const io = new Server(server);

//socket .io 

//enable the connection
io.on("connection", (socket: any) => {
    console.log("A user connected ", socket.id)
})

app.use(express.static(path.resolve("./public")));

app.get("/", (req, res) => {
    res.sendFile("index.html", { root: "./public" })
})



