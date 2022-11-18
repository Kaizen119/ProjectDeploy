import React from 'react'
import {useNavigate} from 'react-router-dom'

const InventoryStats = (props) => {

  const navigate = useNavigate()

  return (
    <div>
        <h2>Inventory Stats</h2>
          <div>
            <p>Total Products :{props.products.length}</p>
          </div>
        <div>
          <p>Total Inventory Value: {props.products.reduce((sum,product) => {return sum + (product['price'] * product['quantity'])},0)}</p>
        </div>
        <div>
          <p>Out of Stock: {props.products.filter(product => product['quantity'] <= 0).length}</p>
        </div>
        <br/>
    </div>
  )
}

export default InventoryStats