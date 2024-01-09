const express = require('express');
const cors  = require('cors');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
    console.log('Time:', Date.now());
    next();
})


app.get('/', (req, res) => {
    res.send('Hello, worlß!');
});


app.use((req,res) => {
    res.status(404).send('404 Not Found');
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
