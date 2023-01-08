import PopularToolsList from "../PopularToolsList/PopularToolsList"
import "./PopularTools.css"

function PopularTools() {
  return (
    <div className="popularTools">
      <div className="popularTools__wrapper">
        <h2 className="popularTools__title">Most Popular Tools</h2>
        <p className="popularTools__subtitle">
          Tools for the best Designers and Developers most popularly used in the
          world
        </p>
        <PopularToolsList />
        <button className="popularTools__load-more">Load more</button>
      </div>
    </div>
  )
}

export default PopularTools
