import React, { useEffect, useRef } from "react";
import "./PagesHero.css";

const PagesHero = ({ title, subtitle, as: Tag = "h2" }) => {
  const heroRef = useRef(null);

  useEffect(() => {
    // Adjust PagesHero's position based on header height
    const header = document.querySelector("header");
    const headerHeight = header?.offsetHeight || 0;

    if (heroRef.current) {
      heroRef.current.style.paddingTop = `${headerHeight + 20}px`;
    }
  }, []);

  return (
    <div className="pages-hero" ref={heroRef}>
      <div className="page-hero-contents">
        <div className="hero-triangle"></div>
        <div className="pages-hero-content">
          <Tag className="pages-hero-title">{title}</Tag>
          {subtitle && <p className="pages-hero-subtitle">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
};

export default PagesHero;
