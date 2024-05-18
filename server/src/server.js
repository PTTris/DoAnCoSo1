import express from "express";
import "dotenv/config";
const app = express();
import initAPIRoute from "./routes/api.js";
import cors from "cors";

// config req.body
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form data
app.use(cors());
// Routers
initAPIRoute(app);

app.listen(process.env.port, () => {
    console.log(`Sever running in port ${process.env.port}`);
});
