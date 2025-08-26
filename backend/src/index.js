require("dotenv").config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const productRoutes = require("./routes/productRoutes");

const authRoutes = require("./routes/authRoutes");


const app = express();



app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET","PATCH", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 let DB = process.env.MONGO_URL;
 console.log("DB=======>",DB);
 mongoose.connect(process.env.MONGO_URL)
 .then(() => console.log("✅ Database Connected"))
 .catch((err) => console.error("Database Error:", err));


app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Hello from the server' }); 
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
