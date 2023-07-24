import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container mx-auto">
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <a className="btn btn-ghost normal-case text-xl">College Hunt</a>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>

        <div>
          <span className="footer-title">Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
          <div>
            <div className="grid grid-flow-col gap-5">
              <a>
                <FaFacebook size={30}></FaFacebook>
              </a>
              <a>
                <FaTwitter size={30}></FaTwitter>
              </a>
              <a>
                <FaLinkedinIn size={30}></FaLinkedinIn>
              </a>
              <a>
                <FaInstagram size={30}></FaInstagram>
              </a>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>Copyright © 2023 - All right reserved by Rashik</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
