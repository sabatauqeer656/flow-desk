// Initializes express server and connects to the database
import "dotenv/config";
import express from "express";
import db from "./db/config.js";
import router from "./routes/routes.js";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
const PORT = 3000;
let corsOptions = {
  origin: " http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());
app.use("/api/flowdesk", router);
// Starts the server and establishes databases connection
const startServer = async () => {
  app.listen(PORT, async () => {
    await db();

    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
