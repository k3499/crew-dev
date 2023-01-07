import "./SearchToolsForm.css"

function SearchToolsForm() {
  return (
    <form className="searchToolsForm">
      <div className="searchToolsForm__block">
        <input
          className="searchToolsForm__input"
          type="search"
          placeholder="find more than 430+ tools..."
        />
        <button className="searchToolsForm__button" type="submit">
          Search
        </button>
      </div>
    </form>
  )
}

export default SearchToolsForm
