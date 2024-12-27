import { useState } from 'react'

const ShoppingList = () => {
    
    const [items, setItems] = useState([])
    const [name,setname] = useState("")
    const [quantity, setquantity] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!name || !quantity) return;
        const newItem = {name, quantity: parseInt(quantity)};
        setItems([...items, newItem])
        setname("");
        setquantity("");
        }

  return (
    <div>ShoppingList
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} placeholder='Item name' onChange={(e) => setname(e.target.value)} />
            <input type="number" value={quantity} placeholder='Quantity' onChange={(e) => setquantity(e.target.value)} />
            <button type="submit">Add to list</button>
        </form>
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item.name} - {item.quantity}</li>
                ))}
        </ul>
    </div>
  )
}

export default ShoppingList