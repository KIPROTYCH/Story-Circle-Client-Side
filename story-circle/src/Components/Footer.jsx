import React from "react";
import { BsInstagram, BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import "../Css/Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-top">
        <div>
          <h1 className="brand-title">Story Circle</h1>
        </div>
        <div className="social-icons">
          <div className="social-icon-container">
            <a href="https://www.instagram.com/">
              <BsInstagram size={25} color="orange" />
            </a>
          </div>
          <div className="social-icon-container">
            <a href="https://www.facebook.com/">
              <BsFacebook size={25} color="orange" />
            </a>
          </div>
          <div className="social-icon-container">
            <a href="https://www.linkedin.com/">
              <BsLinkedin size={25} color="orange" />
            </a>
          </div>
          <div className="social-icon-container">
            <a href="https://twitter.com/">
              <BsTwitter size={25} color="orange" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-column">
          <h3 className="footer-header">Products</h3>
          <ul className="footer-list">
            <li>Custom Bookmarks</li>
            <li>Merchandise</li>
            <li>Our Workshop</li>
            <li>Exclusive Access</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-header">Community</h3>
          <ul className="footer-list">
            <li>MysteryMinds</li>
            <li>GlobalReads</li>
            <li>Poets' Corner</li>
            <li>CampusPages</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-header">Support Center</h3>
          <ul className="footer-list">
            <li>24/7 Assistance</li>
            <li>Contact Us</li>
            <li> Blog</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-header">Others</h3>
          <ul className="footer-list">
            <li>Terms Of Service</li>
            <li>Privacy & Data</li>
            <li>Code of Conduct</li>
            <li>Liability and Disputes</li>
          </ul>
        </div>
      </div>

      <p className="footer-copyright">
        &copy; {new Date().getFullYear()} Story Circle, Inc. All rights
        reserved.
      </p>
    </div>
  );
}

export default Footer;

