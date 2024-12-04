import React from "react";
import PagesHero from "../../../components/client/common/PagesHero/PagesHero";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="page-container">
      <PagesHero
        title="About Infines..."
        subtitle="Transforming Ideas into Digital Reality"
      />
      <section className="about-content">
        <div className="about-section">
          <h2>Our Journey</h2>
          <p>
            Infines started in December 2019 with the goal of revolutionizing
            the way businesses approach their online presence. What began as a
            small web development firm quickly grew into a full-service digital
            solutions provider. From the very beginning, our mission was clear:
            to deliver high-quality web development, innovative enterprise web
            applications, and digital marketing strategies tailored to each
            client's unique needs.
          </p>
          <p>
            Over the years, we have focused on building long-term partnerships
            with our clients, offering them custom web solutions that not only
            meet their requirements but also exceed their expectations. Through
            continuous learning and adaptation to the ever-changing digital
            landscape.
          </p>
        </div>

        <div className="about-section">
          <h2>What We Offer</h2>
          <p>
            At Infines, we specialize in a wide range of digital services,
            including web development, enterprise web applications, digital
            marketing, branding, and logo design. Whether you need a custom
            website to showcase your products, a complex web application to
            streamline your business operations, or a strategic marketing
            campaign to grow your audience, we’ve got you covered. Our team
            combines creativity with technical expertise to bring your ideas to
            life.
          </p>
          <div className="about-link-box">
            <Link
              to="/services"
              className="about-link"
              title="Explore our Services"
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>

        <div className="about-section">
          <h2>Our Approach</h2>
          <p>
            We take a client-first approach, working closely with our clients to
            understand their goals and challenges. This enables us to craft
            solutions that are not only functional but also innovative and
            scalable. From conceptualization to execution, our team is committed
            to delivering results that drive business success. Whether it's web
            development, enterprise solutions, or digital marketing, we work
            hard to ensure that every project meets the highest standards of
            quality.
          </p>
        </div>
        <div className="about-section">
          <h2>Ready to Get Started?</h2>
          <p>
            We'd love to help bring your ideas to life. Get in touch with us
            today to discuss how we can work together to achieve your goals.
          </p>
          <div className="about-link-box">
            <Link to="/contact" className="about-link" title="Click to contact">
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
