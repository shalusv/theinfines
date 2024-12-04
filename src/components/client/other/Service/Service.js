import React from "react";
import "./Service.css";
import { FaLaptopCode, FaPaintBrush, FaMobileAlt } from "react-icons/fa";
import SectionTitle from "../../widgets/SectionTitle/SectionTitle";
import ExploreButton from "../../widgets/ExploreButton/ExploreButton";

const Service = () => {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Web Development",
      description:
        "Building responsive, scalable web applications to elevate your business online.",
    },
    {
      icon: <FaPaintBrush />,
      title: "Logo Design",
      description:
        "Crafting unique logos that represent your brand's identity and core values.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Enterprise Solutions",
      description:
        "Delivering robust enterprise solutions to streamline business operations.",
    },
  ];

  return (
    <section className="services-section">
      <SectionTitle title="What we do" position={1} />
      <div className="services-list">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
      <ExploreButton text="More about our services" to="/services" />
    </section>
  );
};

export default Service;
