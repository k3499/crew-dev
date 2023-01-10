import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <nav className="footer__wrapper">
        <div className="footer__credits">
          <a className="logo" href="/" target="_blank">
            antools.
          </a>
          <h4 className="footer__copyright">Copyright 2021. Antools</h4>
          <p className="footer__description">
            Antool is a web collection of information on paid or free Design and
            Development tools
          </p>
        </div>
        <div className="footer__contact-us">
          <h4 className="footer__nav-title">Contact Us</h4>
          <ul className="footer__list">
            <li className="footer__item">
              <a href="" className="footer__link">
                +621987463
              </a>
            </li>
            <li className="footer__item">M Building, No.10 A</li>
            <li className="footer__item">
              <a href="" className="footer__link">
                antools@awesome.com
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__categories">
          <h4 className="footer__nav-title">Categories</h4>
          <ul className="footer__list">
            <li className="footer__item">
              <a href="#" className="footer__link">
                Design
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Development
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__company-info">
          <h4 className="footer__nav-title">Company Info</h4>
          <ul className="footer__list">
            <li className="footer__item">
              <a href="#" className="footer__link">
                About Us
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Our Partners
              </a>
            </li>
            <li className="footer__item">
              <a href="#" className="footer__link">
                Blog
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </footer>
  )
}

export default Footer
