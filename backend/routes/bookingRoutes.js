const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

router.post("/bookings", async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();

    console.log("Saved:", booking);
    res.status(201).json({ message: "Booking saved", booking });

  } catch (error) {
    console.error("DB Error:", error.message);
    res.status(500).json({ message: "Failed to save booking" });
  }
});

module.exports = router;