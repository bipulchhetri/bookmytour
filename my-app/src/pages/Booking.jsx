import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import packages from "../data/package";

function Booking() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const pkg = packages.find((p) => p.slug === slug);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  // Min dates
  const today = new Date();
  const minCheckInDate = new Date(today.getTime() + 86400000)
    .toISOString()
    .split("T")[0];

  const minCheckOutDate = form.checkIn
    ? new Date(new Date(form.checkIn).getTime() + 86400000)
        .toISOString()
        .split("T")[0]
    : "";

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

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
      price: pkg.price,
    };

    try {
      const res = await axios.post(
        "https://bookmytour-3.onrender.com/api/bookings",
        bookingData
      );

      if (res.status === 201) {
        alert("Booking Successful ✅");
        navigate("/success");
      }
    } catch (error) {
      console.error("Booking Error:", error);
      alert("Booking Failed ❌");
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  if (!pkg) return <h2>Package not found</h2>;

  return (
    <>
      <main className="booking">
        {/* LEFT - PACKAGE INFO */}
        <div className="summary">
          <img src={pkg.images[0]} alt={pkg.title} />
          <div className="summary-content">
            <h2>{pkg.title}</h2>
            <p>Luxury stay with guided tours & premium experience.</p>

            <div className="price">
              ₹{pkg.price} <span>/ person</span>
            </div>

            <div className="cta-box">
              <p>🔥 Limited slots available!</p>
              <button type="button">Reserve your spot now</button>
            </div>
          </div>
        </div>

        {/* RIGHT - FORM */}
        <form className="form" onSubmit={handleSubmit}>
          <h3>Complete Your Booking</h3>

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

          <div className="row">
            <div>
              <label>Check-In</label>
              <input
                type="date"
                name="checkIn"
                min={minCheckInDate}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>Check-Out</label>
              <input
                type="date"
                name="checkOut"
                min={minCheckOutDate}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <label>Guests</label>
          <input
            type="number"
            name="guests"
            min="1"
            value={form.guests}
            onChange={handleChange}
          />

          <button type="submit" className="submit">
            Confirm Booking →
          </button>
        </form>
      </main>

      {/* CSS */}
      <style>{`
        * { box-sizing: border-box; }

        .booking {
          width: 100vw;
          margin-left: calc(50% - 50vw);
          padding: 40px clamp(16px, 5vw, 80px);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          background: linear-gradient(to bottom, #f8fafc, #ffffff);
        }

        .summary {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .summary img {
          width: 100%;
          height: 250px;
          object-fit: cover;
        }

        .summary-content {
          padding: 20px;
        }

        .summary h2 {
          margin: 0 0 10px;
          font-size: 22px;
        }

        .summary p {
          color: #64748b;
          font-size: 14px;
        }

        .price {
          font-size: 22px;
          font-weight: 800;
          margin: 16px 0;
        }

        .price span {
          font-size: 14px;
          color: #64748b;
        }

        .cta-box {
          background: linear-gradient(135deg, #1e88e5, #2563eb);
          color: white;
          padding: 16px;
          border-radius: 12px;
          margin-top: 16px;
        }

        .cta-box button {
          margin-top: 10px;
          background: white;
          color: #1e88e5;
          border: none;
          padding: 8px 14px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
        }

        .form {
          background: white;
          padding: 24px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .form h3 {
          margin-bottom: 10px;
        }

        .form input {
          padding: 12px;
          border-radius: 10px;
          border: 1px solid #e5e7eb;
          font-size: 14px;
        }

        .row {
          display: flex;
          gap: 10px;
        }

        .row div {
          flex: 1;
        }

        .submit {
          background: linear-gradient(135deg, #1e88e5, #2563eb);
          color: white;
          border: none;
          padding: 14px;
          border-radius: 10px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
        }

        .submit:hover {
          opacity: 0.9;
        }

        @media (max-width: 900px) {
          .booking {
            grid-template-columns: 1fr;
          }

          .summary img {
            height: 200px;
          }
        }
      `}</style>
    </>
  );
}

export default Booking;