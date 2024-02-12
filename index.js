import express from 'express'
import * as dotenv from 'dotenv'

dotenv.config()
const port = process.env.PORT

const app = express();

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/', (req, res) => {
    res.json({msg: 'Backend server running'})
});