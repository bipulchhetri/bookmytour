import React from "react";
import {
  Plane,
  Hotel,
  Bus,
  Map,
  Car,
  Ship,
} from "lucide-react";

export default function Services() {
  const services = [
    { icon: <Plane size={28} />, title: "Flights" },
    { icon: <Hotel size={28} />, title: "Hotels" },
    { icon: <Bus size={28} />, title: "Buses" },
    { icon: <Car size={28} />, title: "Cabs" },
    { icon: <Ship size={28} />, title: "Cruises" },
    { icon: <Map size={28} />, title: "Sightseeing" },
  ];

  return (
    <section className="services">
      <div className="container">
        <h2 className="heading">Our Services</h2>

        <div className="grid">
          {services.map((item, index) => (
            <div className="card" key={index}>
              <div className="icon">{item.icon}</div>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CSS */}
      <style>{`
        * { box-sizing: border-box; }

        .services {
          width: 100vw;
          margin-left: calc(50% - 50vw);
        //   padding: 60px 20px;
          background: #f8fafc;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }

        .heading {
          font-size: 32px;
          margin-bottom: 40px;
          color: #0f172a;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 20px;
        }

        .card {
          background: white;
          border-radius: 12px;
          padding: 20px 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }

        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
        }

        .icon {
          color: #1e88e5;
        }

        .card p {
          font-size: 14px;
          font-weight: 500;
          color: #334155;
        }

        /* TABLET */
        @media (max-width: 900px) {
          .grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* MOBILE */
        @media (max-width: 500px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .heading {
            font-size: 24px;
          }
        }
      `}</style>
    </section>
  );
}