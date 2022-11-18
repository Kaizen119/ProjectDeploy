import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {useState, useEffect } from 'react'
import axios from 'axios'
import css from '../components/main.module.css'
import Header from '../components/Header'

const OneProduct = () => {
  //grab the url variable
    const {id} = useParams();
    const navigate = useNavigate();

    const [thisProduct, setThisProduct] = useState(null)

useEffect(() => {
    axios.get(`http://localhost:8000/api/products/${id}`, {withCredentials: true})
    .then(response => {
        console.log(response.data)
        setThisProduct(response.data)
    })
    .catch(error => {
        console.log(error)
    })
},[id])

return (
    
<>
    {thisProduct ? (

        <div className={css.background3}>
        <div className={css.headerdiv}>
            <header>{<Header />}</header>
        </div>
        <div className={css.container3}>
                <h1>{thisProduct.name} </h1>
                <img src={thisProduct.image} width="500px"  border="5px, solid" alt="where did you go" />
                <h2>{thisProduct.catagoy}</h2>
                <h2>Price:{thisProduct.price}</h2>
                <h2>Quantity{thisProduct.quantity}</h2>
                <br/>
                <button className={css.btn} onClick={() => navigate('/dashboard')}>Back</button>

    </div>

    </div>
        ): ("This Product is not shown in Inventory...")
    }
    </>
    )
}

export default OneProduct