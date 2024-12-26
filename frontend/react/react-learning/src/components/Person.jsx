/* eslint-disable react/prop-types */

const Products = (props) => {
  return (
    <div>
        <h2>
            Name:{props.name}

        </h2>
        <p>
            Age:{props.age}
        </p>
    </div>
  )
}

export default Products