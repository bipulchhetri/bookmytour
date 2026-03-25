import React from 'react'
import PackageCard from "../components/packageCard";
import packages from "../data/package";

const Allpackage = () => {
  return (
   <>
   <main className="container">
  <header className="page-header">
    <h1>Hotel Packages</h1>
  </header>

  <section className="slider">
    {packages.map(pkg => (
      <div className="slider__item" key={pkg.id}>
        <PackageCard pkg={pkg} />
      </div>
    ))}
  </section>

  <style>{`
    .container {
      padding: 24px;
      max-width: 1400px;
      margin: auto;
    }

    .page-header h1 {
      font-size: 28px;
      font-weight: 800;
      margin-bottom: 20px;
      color: #111827;
    }

    /* ===== SLIDER ===== */
    .slider {
      display: flex;
      gap: 24px;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      padding-bottom: 10px;
      scroll-behavior: smooth;
    }

    .slider::-webkit-scrollbar {
      height: 8px;
    }

    .slider::-webkit-scrollbar-track {
      background: transparent;
    }

    .slider::-webkit-scrollbar-thumb {
      background: rgba(0,0,0,0.15);
      border-radius: 999px;
    }

    .slider__item {
      flex: 0 0 340px; /* card width */
      scroll-snap-align: start;
    }

    /* Mobile */
    @media (max-width: 768px) {
      .slider__item {
        flex: 0 0 85%;
      }
    }
  `}</style>
</main>
   </>
  )
}

export default Allpackage