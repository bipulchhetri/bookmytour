import { useLocation, useNavigate } from "react-router-dom";

function Success() {
  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state;

  // If user refreshes page → no state
  if (!data) {
    return (
      <div style={{ textAlign: "center", padding: "100px" }}>
        <h2>No Booking Found ❌</h2>
        <button onClick={() => navigate("/")}>Go Home</button>
      </div>
    );
  }

  return (
    <>
      <div className="success">
        <div className="card">
          <h1>🎉 Booking Confirmed!</h1>
          <p>Thank you, <strong>{data.fullName}</strong></p>

          <div className="details">
            <p><b>Package:</b> {data.packageTitle}</p>
            <p><b>Check-In:</b> {data.checkIn}</p>
            <p><b>Check-Out:</b> {data.checkOut}</p>
            <p><b>Guests:</b> {data.guests}</p>
            <p><b>Total Price:</b> ₹{data.price * data.guests}</p>
          </div>

          <button onClick={() => navigate("/")}>
            Back to Home
          </button>
        </div>
      </div>

      {/* CSS */}
      <style>{`
        .success {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #1e88e5, #2563eb);
        }

        .card {
          background: white;
          padding: 40px;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          width: 350px;
        }

        .card h1 {
          margin-bottom: 10px;
        }

        .details {
          margin: 20px 0;
          text-align: left;
        }

        .details p {
          margin: 6px 0;
        }

        button {
          margin-top: 10px;
          padding: 10px 20px;
          border: none;
          border-radius: 10px;
          background: #1e88e5;
          color: white;
          cursor: pointer;
          font-weight: 600;
        }

        button:hover {
          opacity: 0.9;
        }
      `}</style>
    </>
  );
}

export default Success;