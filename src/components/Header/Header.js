import "./Header.css"

function Header() {
  return (
    <header className="header">
      <a className="logo" href="/" target="_blank">
        antools.
      </a>
      <nav>
        <ul className="header__menu-list">
          <li className="header__menu-item">
            <a className="header__menu-link" href="/" target="_blank">
              Home
            </a>
          </li>
          <li className="header__menu-item">
            <a className="header__menu-link arr" href="/" target="_blank">
              Categories
            </a>
          </li>
          <li className="header__menu-item">
            <a className="header__menu-link" href="/" target="_blank">
              My Collections
            </a>
          </li>
          <li className="header__menu-item">
            <a className="header__menu-link" href="/" target="_blank">
              Blog
            </a>
          </li>
        </ul>
      </nav>
      <div className="header__login-box">
        <button name="login" className="header__button">
          Login
        </button>
        <button name="SignUp" className="header__button orange">
          Sign Up
        </button>
      </div>
    </header>
  )
}

export default Header
