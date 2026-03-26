import React, { useState } from "react";
import { Menu, X, Search, ShoppingCart, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="nav">
        {/* LOGO */}
        <div className="logo">
          Travel<span>.co</span>
        </div>

        {/* DESKTOP MENU */}
        <nav className="menu desktop">
          <a href="#">HOME <ChevronDown size={14} /></a>
          <a href="#">TOURS <ChevronDown size={14} /></a>
          <a href="#">ABOUT <ChevronDown size={14} /></a>
          <a href="#">BLOG <ChevronDown size={14} /></a>
          <a href="#">PAGES <ChevronDown size={14} /></a>
          <a href="#">CONTACT <ChevronDown size={14} /></a>
        </nav>

        {/* RIGHT SIDE */}
        <div className="actions">
          <button className="iconBtn desktop">
            <Search size={18} />
          </button>

          <button className="iconBtn cart desktop">
            <ShoppingCart size={18} />
            <span className="badge">3</span>
          </button>

          <button className="cta desktop">BOOK YOUR STAY</button>

          {/* MOBILE BUTTON */}
          <button className="menuBtn" onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div className={`mobileMenu ${open ? "open" : ""}`}>
          <a href="#">Home</a>
          <a href="#">Tours</a>
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Pages</a>
          <a href="#">Contact</a>
          <button className="cta full">BOOK YOUR STAY</button>
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

        /* FULL WIDTH NAVBAR */
        .nav {
          width: 100vw;
          margin-left: calc(50% - 50vw);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px clamp(16px, 5vw, 60px);
          background: #0a2346;
          color: white;
          position: relative;
          z-index: 1000;
        }

        .logo {
          font-size: 24px;
          font-weight: 700;
        }

        .logo span {
          opacity: 0.8;
        }

        .menu {
          display: flex;
          gap: 28px;
        }

        .menu a {
          display: flex;
          align-items: center;
          gap: 4px;
          color: white;
          text-decoration: none;
          font-size: 13px;
          letter-spacing: 1px;
        }

        .actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .iconBtn {
          position: relative;
          border: 1px solid rgba(255,255,255,0.3);
          background: transparent;
          color: white;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          cursor: pointer;
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
          background: #1e88e5;
          border: none;
          padding: 10px 16px;
          color: white;
          border-radius: 4px;
          font-size: 12px;
          cursor: pointer;
        }

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
          width: 100vw;
          margin-left: calc(50% - 50vw);

          background: #0a2346;
          z-index: 999;

          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 20px;

          transform: translateY(-20px);
          opacity: 0;
          pointer-events: none;
          transition: all 0.3s ease;
        }

        .mobileMenu.open {
          transform: translateY(0);
          opacity: 1;
          pointer-events: all;
        }

        .mobileMenu a {
          color: white;
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
      `}</style>
    </>
  );
}