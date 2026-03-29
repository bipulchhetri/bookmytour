import { useNavigate } from "react-router-dom";
import ImageGallery from "../components/ImageGallery";

function PackageCard({ pkg }) {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate(`/booking/${pkg.slug}`);
  };

  return (
    <>
      <article className="pkg-card">
        {/* IMAGE */}
        <div className="pkg-card__media">
          <ImageGallery images={pkg.images} title={pkg.title} />

          <div className="pkg-card__badge">₹{pkg.price}</div>

          <div className="pkg-card__overlay">
            <span>⭐ 4.8</span>
            <span>• {pkg.location || "India"}</span>
          </div>
        </div>

        {/* CONTENT */}
        <div className="pkg-card__content">
          <h2 className="pkg-card__title">{pkg.title}</h2>

          <p className="pkg-card__desc">
            Luxury stays, guided tours & unforgettable experiences.
          </p>

          <div className="pkg-card__footer">
            <div className="pkg-card__price">
              ₹{pkg.price}
              <span>/ person</span>
            </div>

            <button className="pkg-card__btn" onClick={handleBooking}>
              Book Now
            </button>
          </div>
        </div>
      </article>

      <style>{`
        .pkg-card {
          background: #ffffff;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
          transition: all 0.35s ease;
          cursor: pointer;
          display: flex;
          flex-direction: column;
       
        }

        .pkg-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.15);
        }

        /* IMAGE */
        .pkg-card__media {
          position: relative;
        }

        /* PRICE BADGE */
        .pkg-card__badge {
          position: absolute;
          top: 14px;
          right: 14px;
          background: rgba(255,255,255,0.85);
          backdrop-filter: blur(10px);
          padding: 6px 14px;
          border-radius: 999px;
          font-weight: 700;
          font-size: 13px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }

        /* OVERLAY INFO */
        .pkg-card__overlay {
          position: absolute;
          bottom: 12px;
          left: 12px;
          background: rgba(0,0,0,0.55);
          color: white;
          font-size: 12px;
          padding: 6px 10px;
          border-radius: 8px;
          display: flex;
          gap: 6px;
          backdrop-filter: blur(6px);
        }

        /* CONTENT */
        .pkg-card__content {
          padding: 18px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .pkg-card__title {
          font-size: 18px;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.3;
        }

        .pkg-card__desc {
          font-size: 13px;
          color: #64748b;
        }

        /* FOOTER */
        .pkg-card__footer {
          margin-top: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
        }

        .pkg-card__price {
          font-size: 18px;
          font-weight: 800;
          color: #111827;
        }

        .pkg-card__price span {
          font-size: 12px;
          font-weight: 400;
          color: #64748b;
          margin-left: 4px;
        }

        /* BUTTON */
        .pkg-card__btn {
          background: linear-gradient(135deg, #1e88e5, #2563eb);
          color: white;
          border: none;
          padding: 10px 16px;
          border-radius: 10px;
          font-weight: 600;
          font-size: 13px;
          cursor: pointer;
          transition: all 0.25s ease;
          white-space: nowrap;
        }

        .pkg-card__btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(37,99,235,0.4);
        }

        .pkg-card__btn:active {
          transform: scale(0.96);
        }

        /* MOBILE */
        @media (max-width: 600px) {
          .pkg-card__title {
            font-size: 16px;
          }

          .pkg-card__price {
            font-size: 16px;
          }

          .pkg-card__btn {
            padding: 8px 14px;
            font-size: 12px;
          }
        }
      `}</style>
    </>
  );
}

export default PackageCard;