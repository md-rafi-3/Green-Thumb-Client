import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AuthContext } from '../Context/AuthContext';

const Footer = () => {
  const { user } = useContext(AuthContext);

  const links = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/gardeners">Explore Gardeners</NavLink></li>
      <li><NavLink to="/browseTips">Browse Tips</NavLink></li>
    </>
  );

  const socialLinks = (
    <>
      <a target="_blank" href="https://www.facebook.com/rafi.rupo"><FaFacebook size={28} color="#1877f2" /></a>
      <a target="_blank" href="https://www.twitter.com"><FaSquareXTwitter size={28} color="black" /></a>
      <a target="_blank" href="https://www.linkedin.com"><FaLinkedin size={28} color="#0077B5" /></a>
      <a target="_blank" href="https://www.youtube.com"><FaYoutube size={28} color="#FF0000" /></a>
    </>
  );

  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-base-content p-10">
      <aside>
        <p className="text-4xl text-secondary font-bold">
          Green<span className='text-primary'>Thumb</span>
        </p>
        <p className='text-accent'>
          Growing community through shared gardening <br /> knowledge and experiences.
        </p>
        <nav className='space-y-3 text-accent'>
          <p className='text-lg'>Follow Us</p>
          <div className="grid grid-flow-col grayscale-60 gap-4">{socialLinks}</div>
        </nav>
      </aside>

      <ul className='text-accent'>
        <li className="footer-title">Quick Links</li>
        {links}
        {user && (
          <>
            <li><NavLink to="/shareTips">Share a Tip</NavLink></li>
            <li><NavLink to="/myTips">My Tips</NavLink></li>
          </>
        )}
      </ul>

      <nav className='text-accent'>
        <h6 className="footer-title">Legal</h6>
        <a onClick={() => document.getElementById('terms_modal').showModal()} className="link link-hover cursor-pointer">Terms of use</a>
        <a onClick={() => document.getElementById('privacy_modal').showModal()} className="link link-hover cursor-pointer">Privacy policy</a>
        <a onClick={() => document.getElementById('cookie_modal').showModal()} className="link link-hover cursor-pointer">Cookie policy</a>
      </nav>

      {/* ========== Modals ========== */}

      {/* Terms of Use */}
      <dialog id="terms_modal" className="modal">
        <div className="modal-box  overflow-y-auto m-auto top-1/2 transform -translate-y-1/2">
          <h3 className="font-bold text-lg">📜 Terms of Use</h3>
          <p className="py-2 text-sm text-accent">
            By using GreenThumb, you agree to follow our community rules, not share harmful content, and respect other members.
            Your account can be suspended for violating our guidelines.
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn text-white">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      {/* Privacy Policy */}
      <dialog id="privacy_modal" className="modal">
        <div className="modal-box  overflow-y-auto m-auto top-1/2 transform -translate-y-1/2">
          <h3 className="font-bold text-lg">🔐 Privacy Policy</h3>
          <p className="py-2 text-sm text-accent">
            We collect basic information like your name, email, and gardening interests to personalize your experience.
            Your data is never shared with third-parties without consent.
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn text-white">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      {/* Cookie Policy */}
      <dialog id="cookie_modal" className="modal">
        <div className="modal-box overflow-y-auto m-auto top-1/2 transform -translate-y-1/2">
          <h3 className="font-bold text-lg">🍪 Cookie Policy</h3>
          <p className="py-2 text-sm text-accent">
            We use cookies to improve site performance and remember your preferences. You can disable cookies in your browser settings.
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn text-white">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </footer>
  );
};

export default Footer;
