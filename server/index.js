import express from "express";
import Connection from "./Database/db.js";
import dotenv from "dotenv";
import Routes from "./Routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";

const PORT = process.env.PORT || 8600;
const app = express();
app.use(cors());
dotenv.config();

app.use(express.json());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Routes);
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
Connection(username, password);
app.listen(PORT, () => {
  console.log(`server is listening on port no ${PORT} successfully.`);
});
