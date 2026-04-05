import React from "react";
import PackageCard from "../components/packageCard";
import packages from "../data/package";

const Allpackage = () => {
  return (
    <>
      <main className="container">
        <header className="page-header">
          <div>
            <h1>Explore Hotel Packages</h1>
          </div>

          <button className="viewAll">View All</button>
        </header>

        <section className="slider">
          {packages.map((pkg) => (
            <div className="slider__item" key={pkg.id}>
              <PackageCard pkg={pkg} />
            </div>
          ))}
        </section>

        <style>{`
          * { box-sizing: border-box; }

          /* ===== FULL WIDTH PREMIUM ===== */
          .container {
            // width: 100vw;
            // margin-left: calc(50% - 50vw);
            // padding: 40px clamp(16px, 5vw, 80px);
            // background: linear-gradient(to bottom, #f8fafc, #ffffff);
            margin-top:3%;
          }

          /* ===== HEADER ===== */
          .page-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 28px;
            gap: 20px;
          }

          .page-header h1 {
            font-weight: 800;
            color: black;
           
          }

        

          .viewAll {
            background: orange;
            color: white;
            border: none;
            padding: 10px 18px;
            border-radius: 999px;
            font-size: 13px;
            cursor: pointer;
            white-space: nowrap;
          }

          .viewAll:hover {
            background: #1565c0;
          }

          /* ===== SLIDER ===== */
          .slider {
            display: flex;
            gap: 24px;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            scroll-behavior: smooth;
            padding-bottom: 14px;
          }

          .slider::-webkit-scrollbar {
            height: 6px;
          }

          .slider::-webkit-scrollbar-thumb {
            background: rgba(0,0,0,0.15);
            border-radius: 999px;
          }

          /* CARD WRAPPER */
          .slider__item {
            flex: 0 0 320px;
            scroll-snap-align: start;
            transition: transform 0.3s ease;
          }

          .slider__item:hover {
            transform: translateY(-6px);
          }

          /* TABLET */
          @media (max-width: 900px) {
            .slider__item {
              flex: 0 0 280px;
            }
          }

          /* MOBILE */
          @media (max-width: 600px) {
            .container {
              padding: 24px 16px;
            }

            .page-header {
              flex-direction: column;
              align-items: flex-start;
            }

            .slider__item {
              flex: 0 0 85%;
            }

            .viewAll {
              align-self: flex-start;
            }
          }
        `}</style>
      </main>
    </>
  );
};

export default Allpackage;