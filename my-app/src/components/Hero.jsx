import { useEffect, useRef } from "react";
import '../App.css';
/* ─── Star data ─────────────────────────────── */
const STARS = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  size: Math.random() * 2.5 + 0.5,
  top: Math.random() * 100,
  left: Math.random() * 100,
  dur: (Math.random() * 4 + 3).toFixed(1),
  del: (Math.random() * 6).toFixed(1),
  opLo: (Math.random() * 0.12 + 0.04).toFixed(2),
  opHi: (Math.random() * 0.4 + 0.2).toFixed(2),
}));

/* ─── Destination data ──────────────────────── */
const DESTINATIONS = [
  {
    slot: "main",
    emoji: "🏔️",
    country: "Nepal",
    name: "Everest Base Camp",
    rating: "4.9",
    price: "$2,490",
  },
  {
    slot: "left",
    emoji: "🌊",
    country: "Maldives",
    name: "Baa Atoll",
    rating: "4.8",
    price: "$1,890",
  },
  {
    slot: "right",
    emoji: "🏛️",
    country: "Italy",
    name: "Amalfi Coast",
    rating: "4.7",
    price: "$1,350",
  },
  {
    slot: "mini",
    emoji: "🌅",
    country: "Japan",
    name: "Kyoto",
    rating: "4.9",
    price: "$1,720",
  },
];

/* ─── DestCard ──────────────────────────────── */
function DestCard({ data }) {
  return (
    <div className={`dest-card dest-card--${data.slot}`}>
      <div className="dest-card__img--placeholder">{data.emoji}</div>
      <div className="dest-card__body">
        <p className="dest-card__country">{data.country}</p>
        <p className="dest-card__name">{data.name}</p>
        <div className="dest-card__meta">
          <span className="dest-card__rating">
            <svg width="10" height="10" fill="#c9a84c" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            {data.rating}
          </span>
          <span className="dest-card__price">{data.price}</span>
        </div>
      </div>
    </div>
  );
}

/* ─── HeroSection ───────────────────────────── */
export default function Hero() {
  const sceneRef = useRef(null);
  const heroRef = useRef(null);

  /* Parallax mouse tracking */
  useEffect(() => {
    const hero = heroRef.current;
    const scene = sceneRef.current;
    if (!hero || !scene) return;

    const onMove = (e) => {
      const { clientX, clientY } = e;
      const { width, height, left, top } = hero.getBoundingClientRect();
      const rx = ((clientY - top - height / 2) / height) * 8;
      const ry = ((clientX - left - width / 2) / width) * -8;
      scene.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
    };

    const onLeave = () => {
      scene.style.transform = "rotateX(0deg) rotateY(0deg)";
    };

    hero.addEventListener("mousemove", onMove);
    hero.addEventListener("mouseleave", onLeave);
    return () => {
      hero.removeEventListener("mousemove", onMove);
      hero.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      {/* ── Background ── */}
      <div className="hero__bg">
        <div className="hero__gradient" />
        <div className="hero__noise" />
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
        <div className="hero__stars">
          {STARS.map((s) => (
            <div
              key={s.id}
              className="star"
              style={{
                width: s.size,
                height: s.size,
                top: `${s.top}%`,
                left: `${s.left}%`,
                "--dur": `${s.dur}s`,
                "--del": `-${s.del}s`,
                "--op-lo": s.opLo,
                "--op-hi": s.opHi,
              }}
            />
          ))}
        </div>
      </div>

      {/* ── Navbar ── */}
      <nav className="hero__nav">
        <span className="nav__logo">
          Voyage<span>Arc</span>
        </span>
        <ul className="nav__links">
          {["Destinations", "Experiences", "Stories", "About"].map((l) => (
            <li key={l}>
              <a href="#">{l}</a>
            </li>
          ))}
        </ul>
        <button className="nav__cta">Book Now</button>
      </nav>

      {/* ── Content Grid ── */}
      <div className="hero__content">
        {/* Left */}
        <div className="hero__left">
          <div className="hero__eyebrow">
            <span className="eyebrow__line" />
            <span className="eyebrow__text">Curated Expeditions</span>
          </div>

          <h1 className="hero__title">
            <span className="line">Discover the</span>
            <span className="line line--italic">World's Hidden</span>
            <span className="line">Wonders</span>
          </h1>

          <p className="hero__desc">
            Handcrafted journeys to the planet's most extraordinary places.
            From Himalayan peaks to hidden ocean atolls — every expedition
            is a story waiting to unfold.
          </p>

          <div className="hero__actions">
            <button className="btn--primary">Explore Tours</button>
            <button className="btn--ghost">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="15" stroke="rgba(245,237,224,0.25)" />
                <polygon points="13,10 23,16 13,22" fill="rgba(245,237,224,0.7)" />
              </svg>
              Watch Reel
            </button>
          </div>

          <div className="hero__stats">
            {[
              { num: "12K", suf: "+", label: "Happy Travellers" },
              { num: "180", suf: "", label: "Destinations" },
              { num: "98", suf: "%", label: "Satisfaction Rate" },
            ].map((s) => (
              <div key={s.label}>
                <div className="stat__number">
                  {s.num}
                  <span>{s.suf}</span>
                </div>
                <div className="stat__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right – 3D card stack */}
        <div className="hero__right">
          <div
            className="scene"
            ref={sceneRef}
            style={{ transition: "transform 0.15s ease-out" }}
          >
            {DESTINATIONS.map((d) => (
              <DestCard key={d.slot} data={d} />
            ))}

            {/* Gold badge */}
            <div className="hero__badge">
              <span>Award</span>
              <span>Winner</span>
              <span>★ 2025</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="hero__scroll">
        <span className="scroll__label">Scroll</span>
        <div className="scroll__track">
          <div className="scroll__thumb" />
        </div>
      </div>
    </section>
  );
}