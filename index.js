import express from 'express'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'

dotenv.config()
const port = process.env.PORT

const mongoURL = process.env.DB_URL

const app = express();

mongoose.Promise = global.Promise;

mongoose.connect(mongoURL, {
    useNewUrlParser: true
})




app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/', (req, res) => {
    res.json({msg: 'Backend server running'})
});