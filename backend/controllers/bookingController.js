const Booking = require("../models/Booking");

exports.createBooking = async (req, res) => {
  try {
    const booking = await Booking.create(req.body);
    res.status(201).json({
      success: true,
      data: booking
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};