import "./App.css"
import SearchTools from "../SearchTools/SearchTools"
import PopularTools from "../PopularTools/PopularTools"
import Trusted from "../Trusted/Trusted"
import NewcomerTools from "../NewcomerTools/NewcomerTools"

function App() {
  return (
    <div className="App">
      <SearchTools />
      <PopularTools />
      <Trusted />
      <NewcomerTools />
    </div>
  )
}

export default App
