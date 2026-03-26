import React from "react";

export default function Hero() {
  return (
    <section className="videoHero">
      {/* BACKGROUND VIDEO */}
      <video
        className="bgVideo"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="https://www.pexels.com/download/video/35815159/" type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className="overlay" />

      {/* CONTENT */}
      <div className="content">
        <h1>Explore the World Like Never Before</h1>
        <p>Your journey begins here. Discover amazing places with us.</p>
        <button className="cta">Start Your Journey</button>
      </div>

      {/* CSS */}
      <style>{`
        * {
          box-sizing: border-box;
        }

        .videoHero {
          position: relative;
          width: 100vw;
          height: 100vh;
          margin-left: calc(50% - 50vw);
          overflow: hidden;
        }

        /* VIDEO */
        .bgVideo {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* OVERLAY */
        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.45);
        }

        /* CONTENT */
        .content {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          padding: 0 20px;
        }

        .content h1 {
          font-size: clamp(32px, 6vw, 72px);
          margin-bottom: 20px;
          font-weight: 800;
        }

        .content p {
          font-size: clamp(16px, 2vw, 22px);
          margin-bottom: 30px;
          opacity: 0.9;
        }

        .cta {
          padding: 14px 28px;
          font-size: 14px;
          font-weight: 600;
          border: none;
          border-radius: 6px;
          background: #1e88e5;
          color: white;
          cursor: pointer;
        }

        .cta:hover {
          background: #1565c0;
        }

        /* MOBILE */
        @media (max-width: 600px) {
          .content h1 {
            line-height: 1.2;
          }
        }
      `}</style>
    </section>
  );
}