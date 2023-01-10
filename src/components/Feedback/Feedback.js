import "./Feedback.css"

function Feedback() {
  return (
    <div className="feedback">
      <div className="feedback__wrapper">
        <a className="feedback__arr-left" href="">
          Previous
        </a>
        <a className="feedback__arr-right" href="">
          Next
        </a>

        <div className="feedback__photo-block">
          <div className="feedback__photo">
            <div className="feedback__circle"></div>
            <div className="feedback__name-block">
              <h5 className="feedback__name">Ronald Richards</h5>
              <p className="feedback__job">Product Manager</p>
            </div>
          </div>
        </div>
        <div className="feedback__quote-block">
          <div className="feedback__quote-bg"></div>
          <p className="feedback__quote-text">
            Incididunt cillum do sint sint enim ullamco id deserunt mollit qui
            reprehenderit do. Velit ex tempor cillum ad sint occaecat. Do nulla
            velit labore occaecat do deserunt Lorem magna officia incididunt
            consectetur amet. Sunt consectetur veniam minim ex commodo sint non.
            Occaecat aute officia excepteur non laboris id qui ad.
          </p>
        </div>

        <a className="feedback__bot-line-prev" href="">
          Previus
        </a>
        <a className="feedback__bot-line-active" href="">
          Active
        </a>
        <a className="feedback__bot-line-next" href="">
          next
        </a>
      </div>
    </div>
  )
}

export default Feedback
