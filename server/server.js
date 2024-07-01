import express from 'express'
import dotenv from "dotenv";
import bodyParser from 'body-parser'

import connectToMongoDb from "./db/config.js";
import authRoutes from './routes/auth.routes.js'

dotenv.config();
const PORT = process.env.PORT || 8000;

const app = express();

app.use(bodyParser.json());
// Parse URL-encoded bodies (for x-www-form-urlencoded content type)
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/api/auth", authRoutes)

// display hello world message
app.get('/', (req, res) => {
    res.send('Hello world')
})

app.listen(PORT, () => {
    connectToMongoDb()
    console.log(`Server running on http://localhost:${PORT}`);
})