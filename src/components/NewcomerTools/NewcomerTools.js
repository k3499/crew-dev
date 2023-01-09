import NewcomerToolsList from "../NewcomerToolsList/NewcomerToolsList"
import "./NewcomerTools.css"

function NewcomerTools() {
  return (
    <div className="newcomerTools">
      <div className="newcomerTools__leftside">
        <h2 className="newcomerTools__title">Newcomer Tools</h2>
        <p className="newcomerTools__subtitle">
          Wow! see the latest update of the most recommended tools from reliable
          designers and developers
        </p>
        <a className="newcomerTools__button" href="#">
          Explore more
        </a>
      </div>
      <NewcomerToolsList />
    </div>
  )
}

export default NewcomerTools
