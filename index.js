import express from 'express'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
import { router } from './routes/userRoutes/UserRouter'

dotenv.config()
const port = process.env.PORT

const mongoURL = process.env.DB_URL
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

app.get('/', (req, res) => {
    res.json({msg: 'Backend server running'})
});