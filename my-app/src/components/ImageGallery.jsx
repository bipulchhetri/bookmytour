import { useState } from "react";

function ImageGallery({ images, title }) {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="gallery-card">
        {/* {title && <h2 className="gallery-title">{title}</h2>} */}

        <div className="carousel">
          <button className="nav left" onClick={prevSlide}>❮</button>

          <div className="image-wrapper">
            <img src={images[current]} alt={`${title} ${current + 1}`} />
          </div>

          <button className="nav right" onClick={nextSlide}>❯</button>
        </div>

        <div className="dots">
          {images.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === current ? "active" : ""}`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </div>

      <style>{`
        /* ===== Card ===== */
        .gallery-card {
          max-width: 420px;
          margin: 2rem auto;
          padding: 1.5rem;
          border-radius: 20px;
          background: #ffffff;
          box-shadow: 0 15px 40px rgba(0,0,0,0.12);
        }

        .gallery-title {
          text-align: center;
          font-size: 1.4rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #111827;
        }

        /* ===== Carousel ===== */
        .carousel {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .image-wrapper {
          width: 100%;
          aspect-ratio: 1 / 1;
          overflow: hidden;
          border-radius: 16px;
          background: #e5e7eb;
        }

        .image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }

        .image-wrapper img:hover {
          transform: scale(1.05);
        }

        /* ===== Navigation ===== */
        .nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          border: none;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(0,0,0,0.5);
          color: white;
          font-size: 18px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s ease, transform 0.2s ease;
        }

        .nav:hover {
          background: rgba(0,0,0,0.7);
          transform: translateY(-50%) scale(1.1);
        }

        .nav.left { left: 10px; }
        .nav.right { right: 10px; }

        /* ===== Dots ===== */
        .dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 1rem;
        }

        .dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #d1d5db;
          cursor: pointer;
          transition: transform 0.2s ease, background 0.3s ease;
        }

        .dot:hover {
          transform: scale(1.2);
        }

        .dot.active {
          background: #111827;
          transform: scale(1.3);
        }

        /* ===== Responsive ===== */
        @media (max-width: 480px) {
          .gallery-card {
            margin: 1rem;
            padding: 1rem;
            border-radius: 16px;
          }
        }
      `}</style>
    </>
  );
}

export default ImageGallery;