import path from 'path';
import express from "express";
import http from "http";
import WebSocket, { WebSocketServer } from "ws";
const __dirname = path.resolve();
const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/src/views");
app.use("/public", express.static(__dirname + "/src/public"));

app.get("/", (req, res) =>  res.render("home"));
app.get("/*", (req, res) => res.redirect("/")); // redirect to main page if requested url is unmatched to any routes;

const handleListen = () => console.log(`Listening on http://localhost:3000`);

const server = http.createServer(app);
const wss = new WebSocketServer({ server });


server.listen(3000, handleListen);