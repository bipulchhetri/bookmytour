require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// ✅ Connect DB
connectDB();



// ✅ 👉 ADD CORS HERE (middleware area)
// ✅ CORS first
app.use(
  cors({
    origin: "https://bookmytour-fciv.vercel.app",
    credentials: true
  })
);

// then JSON
app.use(express.json());


// ✅ Test route
app.get("/", (req, res) => {
  res.send("API Running 🚀");
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});