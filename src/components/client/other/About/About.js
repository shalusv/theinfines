import React from "react";
import "./About.css";
import SectionTitle from "../../widgets/SectionTitle/SectionTitle";
import { RiExpandLeftLine, RiExpandLeftRightLine } from "react-icons/ri";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import ExploreButton from "../../widgets/ExploreButton/ExploreButton";

const About = () => {
  return (
    <section className="page-section">
      <SectionTitle position={1} title="About infines" />
      <p className="about-description">
        At Infines, we strive to turn your vision into reality through
        innovative digital solutions. From crafting responsive websites to
        providing enterprise-level web applications, our mission is to help
        businesses thrive in the digital era. Our expert team is dedicated to
        delivering high-quality services tailored to your unique needs, ensuring
        that your business stands out online.
      </p>
      <ExploreButton text="More about infines" to="/about" />
    </section>
  );
};

export default About;
