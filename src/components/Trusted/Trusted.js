import "./Trusted.css"
import microsoftLogo from "../../images/microsoft.svg"
import googleLogo from "../../images/google.svg"
import slackLogo from "../../images/slack.svg"
import wordpressLogo from "../../images/wordpress.svg"

function Trusted() {
  return (
    <div className="trusted">
      <div className="trusted__orange-circle"></div>
      <h1 className="trusted__title">Trusted more than 150+ brand</h1>
      <ul className="trusted__list">
        <li>
          <img src={microsoftLogo} />
        </li>
        <li>
          <img src={googleLogo} />
        </li>
        <li>
          <img src={slackLogo} />
        </li>
        <li>
          <img src={wordpressLogo} />
        </li>
      </ul>
    </div>
  )
}

export default Trusted
