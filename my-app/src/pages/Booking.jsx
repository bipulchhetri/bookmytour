import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import packages from "../data/package";

function Booking() {
  const { slug } = useParams();
  const pkg = packages.find(p => p.slug === slug);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: 1
  });

  // ✅ DATE LOGIC — ADD HERE
  const today = new Date();

  // Check-in allowed only after 24 hours
  const minCheckInDate = new Date(today.getTime() + 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0];

  // Check-out allowed only after check-in date
  const minCheckOutDate = form.checkIn
    ? new Date(new Date(form.checkIn).getTime() + 24 * 60 * 60 * 1000)
        .toISOString()
        .split("T")[0]
    : "";

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Extra validation
    const checkInDate = new Date(form.checkIn);
    const checkOutDate = new Date(form.checkOut);

    if (checkOutDate <= checkInDate) {
      alert("Check-out must be after Check-in ❌");
      return;
    }

    const bookingData = {
      ...form,
      packageId: pkg.id,
      packageTitle: pkg.title,
      price: pkg.price
    };

    try {
      await axios.post("http://localhost:4000/bookings", bookingData);
      alert("Booking Successful ✅");
    } catch (error) {
      alert("Booking Failed ❌");
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  if (!pkg) return <h2>Package not found</h2>;

  return (
    <main className="container">
      <h1>Book: {pkg.title}</h1>

      <form className="form" onSubmit={handleSubmit}>
        <input
          name="fullName"
          placeholder="Full Name"
          onChange={handleChange}
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />

        <input
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
          required
        />

        <label>Check-In</label>
        <input
          type="date"
          name="checkIn"
          min={minCheckInDate}
          onChange={handleChange}
          required
        />

        <label>Check-Out</label>
        <input
          type="date"
          name="checkOut"
          min={minCheckOutDate}
          onChange={handleChange}
          required
        />

        <label>Guests</label>
        <input
          type="number"
          name="guests"
          min="1"
          onChange={handleChange}
        />

        <button type="submit">Confirm Booking</button>
      </form>
    </main>
  );
}

export default Booking;