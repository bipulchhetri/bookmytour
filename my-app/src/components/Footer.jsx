import {
    Globe,
    Mail,
    Phone,
    MapPin
  } from "lucide-react";
export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__container">
          {/* BRAND */}
          <div className="footer__brand">
            <h2>Trip Buddy</h2>
            <p>
              Discover the world with premium travel experiences,
              curated just for you.
            </p>

            <div className="footer__socials">
              <Globe size={18} />
              <Phone size={18} />
              <MapPin size={18} />
            </div>
          </div>

          {/* LINKS */}
          <div className="footer__links">
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
          </div>

          <div className="footer__links">
            <h4>Support</h4>
            <a href="#">Help Center</a>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">FAQs</a>
          </div>

          {/* NEWSLETTER */}
          <div className="footer__newsletter">
            <h4>Stay Updated</h4>
            <p>Get travel deals & updates directly.</p>

            <div className="newsletterBox">
              <Mail size={16} />
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Trip Buddy . All rights reserved.</p>
        </div>
      </footer>

      {/* CSS */}
      <style>{`
        * { box-sizing: border-box; }

        .footer {
          width: 100vw;
          margin-left: calc(50% - 50vw);
          background: orange;
          color: white;
          padding-top: 60px;
        }

        .footer__container {
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 2fr;
          gap: 40px;
          padding: 0 clamp(16px, 5vw, 80px);
        }

        /* BRAND */
        .footer__brand h2 {
          color: black;
          margin-bottom: 10px;
        }

        .footer__brand p {
          font-size: 14px;
          color: white;
          margin-bottom: 16px;
        }

        .footer__socials {
          display: flex;
          gap: 12px;
          cursor: pointer;
        }

        .footer__socials svg:hover {
          color: white;
        }

        /* LINKS */
        .footer__links h4,
        .footer__newsletter h4 {
          margin-bottom: 12px;
          color: black;
        }

        .footer__links a {
          display: block;
          font-size: 14px;
          color: white;
          text-decoration: none;
          margin-bottom: 8px;
          transition: 0.2s;
        }

        .footer__links a:hover {
          color: white;
        }

        /* NEWSLETTER */
        .footer__newsletter p {
          font-size: 14px;
          color: white;
          margin-bottom: 12px;
        }

        .newsletterBox {
          display: flex;
          align-items: center;
          background: #1e293b;
          border-radius: 10px;
          padding: 6px;
          gap: 6px;
        }

        .newsletterBox input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: white;
          font-size: 14px;
        }

        .newsletterBox button {
          background: white;
          border: none;
          color: black;
          padding: 8px 12px;
          border-radius: 8px;
          font-size: 13px;
          cursor: pointer;
        }

        .newsletterBox button:hover {
          background: #1565c0;
        }

        /* BOTTOM */
        .footer__bottom {
          margin-top: 40px;
          padding: 20px;
          text-align: center;
          border-top: 1px solid #1e293b;
          font-size: 13px;
          color: black;
        }

        /* TABLET */
        @media (max-width: 900px) {
          .footer__container {
            grid-template-columns: 1fr 1fr;
          }
        }

        /* MOBILE */
        @media (max-width: 600px) {
          .footer__container {
            grid-template-columns: 1fr;
          }

          .newsletterBox {
            flex-direction: column;
            align-items: stretch;
          }

          .newsletterBox button {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}