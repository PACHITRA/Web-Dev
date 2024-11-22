import Person from "./components/Person"
import Card from "./components/Card"
const App = () => {
  return (
    <div>
      <Person name="Pavan" age={22}/>
      <Card>
      <h1>
        My Card
      </h1>
      <p>My card Details</p>
    </Card>
    </div>
    
  )
}

export default App