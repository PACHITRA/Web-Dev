/*import Person from "./components/Person"
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

export default App*/
/*------------------------------------------------------------------------------*/
/*
const ValidPassword = () => <h1>Valid Password</h1>
const InvalidPassword = () => <h1>Invalid Password</h1>

// eslint-disable-next-line react/prop-types
const Password = ({isValid}) => {
if(isValid) return <ValidPassword />
else return <InvalidPassword />
//return isValid ? <ValidPassword /> : <InvalidPassword />
}
const App = () => {
  return (
    <div><Password isValid={false}/></div>
  )
}

export default App
*/
//********************************************************************************* */
/*
const Cart = () => {
  const items = ["Wireless Earbuds","Power bank","New SSD", "Hoodie"];
  return (
    <div>
      <h1>Cart</h1>
      {items.length > 0 && <h2>You have {items.length} items in your cart</h2>}
      <ul>
        <h2>Products in your cart</h2>
        {items.map((item) => (
          <li key={item}>{item}</li>
          ))}
      </ul>
    </div>
    )
}


const App = () => {
  return <Cart></Cart>
}

export default App
*/
//********************************************************************* */

/*
import Weather from "./components/Weather";
const App = () => {
  return <Weather temp={13}/>
}

export default App
*/

//********************************************************************* */

/*
import UserStatus from "./components/UserStatus"
const App = () => {
  return <UserStatus loggedIn={true} isAdmin={false} />
}

export default App
*/
//********************************************************************* */
/*
import Greeting from "./components/Greeting"

const App = () => {
  return <Greeting timeOfDay={"morning"}></Greeting>
}

export default App
*/
const App = () => {
  return (
    <div>App</div>
  )
}


export default App

