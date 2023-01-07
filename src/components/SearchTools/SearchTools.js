import "./SearchTools.css"
import Header from "../Header/Header"
import SearchToolsForm from "../SearchToolsForm/SearchToolsForm"

function SearchTools() {
  return (
    <div className="searchTools">
      <Header />
      <div className="searchTools__leftside">
        <h1 className="searchTools__title">
          Awesome tools for Designer & Developer<span>.</span>
        </h1>

        <p className="searchTools__subtitle">
          Antool is a web collection of information on paid or free Design and
          Development tools
        </p>
        <SearchToolsForm />
        <div className="searchTools__social">
          <a className="searchTools__social-link fb" href="#">
            facebook
          </a>
          <a className="searchTools__social-link in" href="#">
            instagram
          </a>
          <a className="searchTools__social-link tw" href="#">
            twitter
          </a>
        </div>
        <div className="searchTools__bg"></div>
      </div>
    </div>
  )
}

export default SearchTools
