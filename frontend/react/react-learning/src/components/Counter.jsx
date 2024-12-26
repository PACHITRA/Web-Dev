import { useState } from "react"

const Counter = () => {
  const [count, setcount] = useState(0)
  
  return (
    <div>Counter:{count}
    <button onClick={()=>setcount({count}+1)}></button>
    </div>
  )
}

export default Counter