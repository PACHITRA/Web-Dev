/* eslint-disable no-unused-vars */

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
//********************************************************************* */
/*
const App = () => {
  
    const [count, setCount] = useState(0);
    const increment = () => {
      setCount(count + 1);
    }
    const decrement = () => {
      setCount(count - 1);
    
      }

    return(
      <div>
        <h1>Count: {count}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    )
}


export default App
*/
//********************************************************************* */
/*
const App = () => {
  const [friends, setfriends] = useState(["John", "Emily"])

  return (
    <div>
      <h1>Friends:</h1>
      {friends.map((f)=>(
        <li key={Math.random}>{f}</li>
      ))} 
      <button onClick={() => setfriends([...friends, "Alice"])}>Add New Friend</button>
      <button onClick={() => setfriends(friends.filter((f)=> f !== "John"))}>Remove John</button>
      <button onClick={() => setfriends(friends.map((f)=> f === "John" ? "John Smith" : f))}>Update Friends</button>
    </div>
  )
}

export default App
*/
//********************************************************************* */

//********************************************************************* */
/*
const App = () => {

  const [movie, setmovie] = useState([
    {id:1, title: "The Shawshank Redemption", year: 1994,rating:10},
    {id:2, title: "The Godfather", year: 1972,rating:9},
  ])
  const handleClick = () => {
    setmovie(movie.map((m) => (m.id === 1 ? {...movie, title:"No way home", rating:8, year:2020}:m)))
      }

   return(
    <div>
      <h1>Movie List:</h1>
      {movie.map((m)=>(
        <div key={m.id}>  
        <h2>{m.title}</h2>
        <p>Year: {m.year}</p>
        <p>Rating: {m.rating}/10</p>
        </div>
        ))}
        <button onClick={handleClick}>Change Rating</button>
    </div>
    
  )
}

export default App
*/
//********************************************************************* */
/*
import Component1 from "./components/Component1"
import Component2 from "./components/Component2"
const App = () => {
  const [count, setcount] = useState(0)
  return (
    <div>
      <h1>Count:{count}</h1>
      <Component1 count={count} onClickHandler={() => setcount(count + 1)}/>
      <Component2 count={count} onClickHandler={() => setcount(count - 1)}/>
    </div>
  )
}

export default App
*/
//********************************************************************* */
//Examples
/*

import { useState } from "react"
import Todolist from "./components/Todolist"
const App = () => {
  return (
    <div>
      <Todolist />
    </div>
  )
}

export default App
*/
//********************************************************************* */
/*
import Profile from "./components/Profile"
const App = () => {
  return (
    <div>
      <Profile />
    </div>
  )
}

export default App
*/
//********************************************************************* */
/*
import React from 'react'
import ShoppingList from './components/ShoppingList'
const App = () => {
  return (
    <div>
      <ShoppingList />
    </div>
  )
}

export default App
*/
//************************************ */
import React from 'react'
import Switcher from './components/Switcher'
const App = () => {
  return (
    <div>
      
      <Switcher />
    </div>
  )
}

export default App
