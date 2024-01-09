const express = require('express');
const cors  = require('cors');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello, world!');
});


app.use((req,res) => {
    res.status(404).send('404 Not Found');
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
