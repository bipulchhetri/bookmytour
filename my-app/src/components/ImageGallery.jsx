import { useState } from "react";

function ImageGallery({ images, title }) {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="gallery">
        {/* IMAGE */}
        <div className="gallery__imageWrapper">
          <img
            src={images[current]}
            alt={`${title} ${current + 1}`}
          />

          {/* OVERLAY */}
          <div className="gallery__overlay" />

          {/* NAV BUTTONS */}
          {total > 1 && (
            <>
              <button className="gallery__btn gallery__btn--left" onClick={prevSlide}>
                ❮
              </button>
              <button className="gallery__btn gallery__btn--right" onClick={nextSlide}>
                ❯
              </button>
            </>
          )}

          {/* TOP INFO */}
          <div className="gallery__topBar">
            {current + 1}/{total}
          </div>
        </div>

        {/* DOTS */}
        {total > 1 && (
          <div className="gallery__dots">
            {images.map((_, i) => (
              <span
                key={i}
                className={`gallery__dot ${i === current ? "active" : ""}`}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>
        )}
      </div>

      <style>{`
        .gallery {
          width: 100%;
        }

        /* IMAGE */
        .gallery__imageWrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          border-radius: 16px;
          background: #e5e7eb;
        }

        .gallery__imageWrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .gallery:hover img {
          transform: scale(1.08);
        }

        /* OVERLAY */
        .gallery__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.35),
            rgba(0,0,0,0.05)
          );
        }

        /* BUTTONS */
        .gallery__btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: none;
          background: rgba(255,255,255,0.8);
          backdrop-filter: blur(8px);
          color: #111;
          font-size: 16px;
          cursor: pointer;
          display: grid;
          place-items: center;
          opacity: 0;
          transition: all 0.25s ease;
        }

        .gallery:hover .gallery__btn {
          opacity: 1;
        }

        .gallery__btn:hover {
          transform: translateY(-50%) scale(1.1);
          background: white;
        }

        .gallery__btn--left { left: 10px; }
        .gallery__btn--right { right: 10px; }

        /* TOP BAR */
        .gallery__topBar {
          position: absolute;
          top: 10px;
          left: 10px;
          background: rgba(0,0,0,0.5);
          color: white;
          font-size: 12px;
          padding: 4px 10px;
          border-radius: 999px;
          backdrop-filter: blur(6px);
        }

        /* DOTS */
        .gallery__dots {
          display: flex;
          justify-content: center;
          gap: 6px;
          margin-top: 10px;
        }

        .gallery__dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #cbd5f5;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .gallery__dot.active {
          width: 18px;
          border-radius: 999px;
          background: #1e88e5;
        }

        /* MOBILE */
        @media (max-width: 600px) {
          .gallery__btn {
            opacity: 1;
            width: 30px;
            height: 30px;
          }

          .gallery__topBar {
            font-size: 11px;
          }
        }
      `}</style>
    </>
  );
}

export default ImageGallery;