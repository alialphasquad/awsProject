"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const user_1 = __importDefault(require("./route/user"));
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
let port = 5000;
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use("/user", user_1.default);
app.get('/', (req, res) => {
    res.send('Server running!');
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    console.log("yo");
});
