import "./ContributorForm.css"

function ContributorForm() {
  return (
    <div className="contributorForm">
      <h1 className="contributorForm__title">Become a contributor?</h1>
      <p className="contributorForm__subtitle">
        Join us and get tips & tricks to become a great Designer and Developer
      </p>
      <form className="contributorForm_form">
        <div className="contributorForm__block">
          <input
            className="contributorForm__input"
            type="email"
            placeholder="Enter your email..."
          />
          <button className="contributorForm__button" type="submit">
            Join Us
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContributorForm
