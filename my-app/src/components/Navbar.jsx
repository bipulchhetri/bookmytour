import React, { useState } from "react";
import { Menu, X, Search, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="nav">
        {/* LOGO */}
        <div className="logo">
          <Link to="/">Tripora</Link>
        </div>

        {/* DESKTOP MENU */}
        <nav className="menu desktop">
          <Link to="/">Home</Link>
          <Link to="/packages">Package</Link>
          <Link to="/about">About Us</Link>
        </nav>

        {/* RIGHT SIDE */}
        <div className="actions">
    
          <button className="cta desktop"><a href="tel:8250742530" target="_blank" rel="noopener noreferrer">Call Now</a></button>

          {/* MOBILE MENU BUTTON */}
          <button className="menuBtn" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div className={`mobileMenu ${open ? "open" : ""}`}>
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/packages">Package</Link>
          <Link to="/about">About Us</Link>
          <button className="cta  full"><a href="tel:8250742530" target="_blank" rel="noopener noreferrer">Call Now</a></button>
        </div>
      </header>

      {/* CSS */}
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: Arial, sans-serif;
        }

        /* NAVBAR */
        .nav {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 40px;
          background: orange;
          color: white;
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        /* LOGO */
        .logo a {
          color: white;
          text-decoration: none;
          font-size: 24px;
          font-weight: bold;
        }

        /* MENU */
        .menu {
          display: flex;
          gap: 30px;
        }

        .menu a {
          color: white;
          text-decoration: none;
          font-size: 16px;
          transition: 0.3s;
        }

        .menu a:hover {
          color: #1e88e5;
        }

        /* ACTIONS */
        .actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .iconBtn {
          border: 1px solid rgba(255,255,255,0.3);
          background: transparent;
          color: white;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          cursor: pointer;
          position: relative;
        }

        .badge {
          position: absolute;
          top: -5px;
          right: -5px;
          background: red;
          font-size: 10px;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          display: grid;
          place-items: center;
        }

        .cta {
          background: white !important;
          border: none;
          padding: 10px 18px;
          color: black !important;
          border-radius: 4px;
          cursor: pointer;
          font-size: 13px;
        }
          .cta a{
          text-decoration:none;
          color:black !important:
        }
    
        /* MOBILE BUTTON */
        .menuBtn {
          display: none;
          background: transparent;
          border: none;
          color: white;
          cursor: pointer;
        }

        /* MOBILE MENU */
        .mobileMenu {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background: #0a2346;
          display: flex;
          flex-direction: column;
          padding: 20px;
          gap: 16px;

          transform: translateY(-20px);
          opacity: 0;
          pointer-events: none;
          transition: 0.3s ease;
        }

        .mobileMenu.open {
          transform: translateY(0);
          opacity: 1;
          pointer-events: all;
        }

        .mobileMenu a {
          color: black;
          text-decoration: none;
          font-size: 16px;
        }

        .cta.full {
          width: 100%;
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .desktop {
            display: none;
          }

          .menuBtn {
            display: block;
          }
        }

        @media (max-width: 500px) {
          .nav {
            padding: 14px 20px;
          }
        }
      `}</style>
    </>
  );
}