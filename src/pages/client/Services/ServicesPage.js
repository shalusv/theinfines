// src/pages/client/Services/ServicesPage.js
import React from "react";
import "./ServicesPage.css";
import PagesHero from "../../../components/client/common/PagesHero/PagesHero";
import sev1 from "../../../assets/images/client/services/web-main.png";
import sev2 from "../../../assets/images/client/services/logo-main.png";
import sev3 from "../../../assets/images/client/services/digital-main.png";
import sev4 from "../../../assets/images/client/services/enterprise-main.png";

const ServicesPage = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "We specialize in creating dynamic, responsive, and user-friendly websites tailored to your business needs. Our websites are designed to provide an excellent user experience and optimized for SEO.",
      details: [
        "Custom website design and development",
        "Mobile-first and responsive layouts",
        "Integration with third-party services",
        "SEO optimization for better visibility",
      ],
      image: require("../../../assets/images/client/services/web-main.png"),
    },
    {
      title: "Logo Design",
      description:
        "Our creative team crafts unique and professional logos that reflect your brand’s identity. We ensure your logo leaves a lasting impression.",
      details: [
        "Tailored designs that represent your brand",
        "Multiple logo variations for selection",
        "High-resolution and scalable formats",
        "Logo guidelines for consistent use",
      ],
      image: require("../../../assets/images/client/services/logo-main.png"),
    },
    {
      title: "Enterprise Solutions",
      description:
        "We provide robust and scalable enterprise solutions to help you streamline business processes and improve efficiency. Our solutions are tailored to your specific needs.",
      details: [
        "Custom ERP/CRM systems",
        "Data management",
        "System integration",
        "E-commerce solutions",
      ],
      image: require("../../../assets/images/client/services/enterprise-main.png"),
    },
    {
      title: "Digital Marketing",
      description:
        "Grow your online presence with our targeted and result-driven digital marketing strategies. We help you reach your audience effectively.",
      details: [
        "Search Engine Optimization (SEO)",
        "Content creation and marketing",
        "Social media marketing and campaigns",
        "Pay-per-click (PPC) advertising",
        "Email marketing strategies",
      ],
      image: require("../../../assets/images/client/services/digital-main.png"),
    },
  ];

  return (
    <div className="page-container">
      <PagesHero
        title="What we offer"
        subtitle="Discover the full range of solutions we offer to help you succeed."
        as="h4"
      />
      <div className="services-section page">
        {services.map((service, index) => (
          <div
            key={index}
            className={`service-detail ${
              index % 2 === 0 ? "align-left" : "align-right"
            }`}
          >
            <img
              src={service.image}
              alt={service.title}
              className="service-image"
            />
            <div
              className={`service-content ${
                index % 2 !== 0 ? "align-right" : ""
              }`}
            >
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-list">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="service-list-item">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
