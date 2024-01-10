import express, { json } from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
const port = process.env.PORT ?? 1234;

app.use(json());
app.use(cors());

app.use(async (req, res, next) => {
    if (req.method === 'GET') 
        await retrieveResponse(req);
    next();
})


app.get('/', (req, res) => {
    req.result = req.result.filter(job => job.company == 'NVIDIA');
    res.send(req.result);
});


app.use((req,res) => {
    res.status(404).send('404 Not Found');
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

async function retrieveResponse(req) {
    req.result = await fetch('https://devitjobs.com/api/jobsLight')
        .then(res => res.json());
}

