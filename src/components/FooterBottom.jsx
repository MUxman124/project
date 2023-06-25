import "../styles/FooterBottom.scss";

const FooterBottom = () => {
  return (
    <>
      <div class="horizontal-line"></div>

      <div className="footer-bottom">
        <p>Copyright © 2022. All rights reserved.</p>

        <div>
          <span className="footer-bottom__link">Terms & Conditions</span>
          <span> | </span>
          <span className="footer-bottom__link">Privacy Policy</span>
          <span> | </span>
          <span className="footer-bottom__link">Accesibility Statment</span>
          <span> | </span>
          <span className="footer-bottom__link">
            Do not Sell my Personal Information
          </span>
          <span> | </span>
          <span className="footer-bottom__link">Manage Cookies</span>
        </div>
      </div>
    </>
  );
};

export default FooterBottom;
