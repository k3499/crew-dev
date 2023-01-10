import "./App.css"
import SearchTools from "../SearchTools/SearchTools"
import PopularTools from "../PopularTools/PopularTools"
import Trusted from "../Trusted/Trusted"
import NewcomerTools from "../NewcomerTools/NewcomerTools"
import Feedback from "../Feedback/Feedback"
import ContributorForm from "../ContributorForm/ContributorForm"

function App() {
  return (
    <div className="App">
      <SearchTools />
      <PopularTools />
      <Trusted />
      <NewcomerTools />
      <Feedback />
      <ContributorForm />
    </div>
  )
}

export default App
