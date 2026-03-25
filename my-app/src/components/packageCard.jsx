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
        <div className="pkg-card__media">
          <ImageGallery images={pkg.images} title={pkg.title} />
          <div className="pkg-card__price-badge">₹{pkg.price}</div>
        </div>

        <div className="pkg-card__content">
          <h2 className="pkg-card__title">{pkg.title}</h2>
          <p className="pkg-card__desc">
            Premium curated experience with luxury stays and guided tours.
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
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          transition: all 0.35s ease;
          cursor: pointer;
        }

        .pkg-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.15);
        }

        .pkg-card__media {
          position: relative;
        }

        .pkg-card__price-badge {
          position: absolute;
          top: 16px;
          right: 16px;
          background: rgba(255,255,255,0.9);
          backdrop-filter: blur(8px);
          padding: 6px 14px;
          border-radius: 999px;
          font-weight: 600;
          font-size: 14px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.12);
        }

        .pkg-card__content {
          padding: 20px;
        }

        .pkg-card__title {
          font-size: 20px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 6px;
        }

        .pkg-card__desc {
          font-size: 14px;
          color: #6b7280;
          margin-bottom: 18px;
        }

        .pkg-card__footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .pkg-card__price {
          font-size: 18px;
          font-weight: 700;
          color: #111827;
        }

        .pkg-card__price span {
          font-size: 13px;
          font-weight: 400;
          color: #6b7280;
          margin-left: 4px;
        }

        .pkg-card__btn {
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          color: white;
          border: none;
          padding: 10px 18px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0 6px 18px rgba(79,70,229,0.35);
        }

        .pkg-card__btn:hover {
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 10px 24px rgba(79,70,229,0.45);
        }

        .pkg-card__btn:active {
          transform: scale(0.97);
        }
      `}</style>
    </>
  );
}

export default PackageCard;