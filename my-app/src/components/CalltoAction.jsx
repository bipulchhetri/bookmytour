import { useNavigate } from "react-router-dom";

export default function CalltoAction() {
  const navigate = useNavigate();

  return (
    <>
      <section className="ctaSection">
        <div className="ctaContent">
          <h2>Ready to Explore Your Next Destination?</h2>
          <p>
            Discover handpicked travel experiences, luxury stays, and
            unforgettable adventures curated just for you.
          </p>

          <div className="ctaActions">
            <button
              className="primaryBtn"
              onClick={() => navigate("/packages")}
            >
              View All Packages →
            </button>

            <button
  className="secondaryBtn"
  onClick={() =>
    window.open(
      "https://wa.me/8250742530?text=Hi, I want to know more about your travel packages",
      "_blank"
    )
  }
>
  Talk to Expert
</button>
          </div>
        </div>
      </section>

      {/* CSS */}
      <style>{`
        * { box-sizing: border-box; }

        .ctaSection {
          width: 100vw;
          margin-left: calc(50% - 50vw);
          padding: 80px 20px;
          background:black;
          color: white;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        /* SUBTLE GLOW EFFECT */
        .ctaSection::before {
          content: "";
          position: absolute;
          width: 400px;
          height: 400px;
          background: rgba(255,255,255,0.08);
          border-radius: 50%;
          top: -100px;
          left: -100px;
          filter: blur(80px);
        }

        .ctaSection::after {
          content: "";
          position: absolute;
          width: 300px;
          height: 300px;
          background: rgba(255,255,255,0.08);
          border-radius: 50%;
          bottom: -100px;
          right: -100px;
          filter: blur(80px);
        }

        .ctaContent {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .ctaContent h2 {
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 800;
          margin-bottom: 16px;
        }

        .ctaContent p {
          font-size: 16px;
          opacity: 0.9;
          margin-bottom: 30px;
          line-height: 1.6;
        }

        .ctaActions {
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .primaryBtn {
          background: white;
          color: black;
          border: none;
          padding: 14px 28px;
          border-radius: 999px;
          font-weight: 700;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .primaryBtn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.25);
        }

        .secondaryBtn {
          background: transparent;
          border: 1px solid rgba(255,255,255,0.5);
          color: white;
          padding: 14px 28px;
          border-radius: 999px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .secondaryBtn:hover {
          background: rgba(255,255,255,0.1);
        }

        /* MOBILE */
        @media (max-width: 600px) {
          .ctaSection {
            padding: 60px 16px;
          }

          .ctaContent p {
            font-size: 14px;
          }
        }
      `}</style>
    </>
  );
}