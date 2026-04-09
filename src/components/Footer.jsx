import React from "react";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer-section" className="bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row g-4">
          {/* Column 1: Brand & Bio */}
          <div className="col-lg-4 col-md-6">
            <h4 className="fw-bold text-warning mb-3">Shambhavi Travels</h4>
            <p className="text-secondary small">
              Leading the way in premium travel solutions since 2014. From
              luxury chauffeur drives to adventurous self-drive rentals and
              curated packages, we make every journey memorable.
            </p>
            <div className="d-flex gap-3 mt-4">
              <a href="#" className="social-icon">
                <FaInstagram className="text-white" />{" "}
                <h7 className="text-white">Insta</h7>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold mb-4 text-uppercase">Services</h6>
            <ul className="list-unstyled footer-links">
              <li>
                <a
                  href="#vehicles"
                  className="text-secondary text-decoration-none"
                >
                  Chauffeur Drive
                </a>
              </li>
              <li>
                <a
                  href="#packages"
                  className="text-secondary text-decoration-none"
                >
                  Tour Packages
                </a>
              </li>
              <li>
                <a
                  href="#selfdrive"
                  className="text-secondary text-decoration-none"
                >
                  Self Driving
                </a>
              </li>
              <li>
                <a
                  href="#corporate"
                  className="text-secondary text-decoration-none"
                >
                  Corporate Ties
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold mb-4 text-uppercase">Support</h6>
            <ul className="list-unstyled footer-links">
              <li>
                <a href="#" className="text-secondary text-decoration-none">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary text-decoration-none">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary text-decoration-none">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary text-decoration-none">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div className="col-lg-4 col-md-6">
            <h6 className="fw-bold mb-4 text-uppercase">Get Updates</h6>
            <p className="text-secondary small">
              Subscribe for exclusive travel deals.
            </p>
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control bg-secondary border-0 text-white"
                placeholder="Email Address"
              />
              <button className="btn btn-warning fw-bold">Join</button>
            </div>
            <p className="small text-secondary mt-3">
              📍 Ramanthapur, Hyderabad, India <br />
              📞 +91 79952 67449
            </p>
          </div>
        </div>

        <hr className="my-5 border-secondary opacity-25" />

        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="small text-secondary mb-0">
              © 2026 Shambhavi Travels. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
