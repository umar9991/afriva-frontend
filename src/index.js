const express = require('express');
const helmet = require('helmet'); // 12.2k (gzipped: 3.2k)
const cors = require('cors'); // 4.5k (gzipped: 1.9k)
const cookieParser = require('cookie-parser'); // 4.1k (gzipped: 1.6k)
const mongoose = require('mongoose');
const app = express();

// Middleware setup
app.use(cors());
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mangoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Database Connected")
})
.catch((err)=>{
    console.log(err);
});

app.get('/', (req, res) => {
    res.json({ message: 'Hello from the server' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});