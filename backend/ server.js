require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// ✅ Connect DB
connectDB();

// ✅ Body parser
app.use(express.json());

// ✅ 👉 ADD CORS HERE (middleware area)
app.use(
  cors({
    origin: "https://bookmytour-fciv.vercel.app/",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
);

// ✅ Routes (must come AFTER middleware)
app.use("/", require("./routes/bookingRoutes"));

// ✅ Test route
app.get("/", (req, res) => {
  res.send("API Running 🚀");
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});