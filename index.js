import express from 'express'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
import { router } from './routes/userRoutes/UserRouter.js'

dotenv.config()
const port = process.env.PORT

const mongoURL = String(process.env.DB_URL || 'mongodb://127.0.0.1:27017/diarydb');
mongoose.Promise = global.Promise;

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error: "));
db.once("open", async () => {
    console.log("Connected to MongoDB");
});

const app = express();

app.use('/api/v1/diaryapp', router)


app.listen(port, () => console.log(`Listening on port ${port}`));