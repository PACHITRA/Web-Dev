/* eslint-disable react/prop-types */


const Greeting = ({timeOfDay}) => {
 return timeOfDay === "gg" ? <h1>Good Morning</h1> : <h1>Good day</h1>
}

export default Greeting