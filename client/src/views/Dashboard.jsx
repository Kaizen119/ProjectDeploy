import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Header from '../components/Header'
import InventoryStats from '../components/InventoryStats'
import InventoryTable from '../components/InventoryTable'
import css from '../components/main.module.css'

const Dashboard = (props) => {
    const [products,setProducts] = useState([]);

    useEffect(() => {
        //get all the products from the server
        axios.get("http://localhost:8000/api/products", {withCredentials: true})
        .then(response => {
            console.log(response.data)
            setProducts(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    },[]);

return(
    <div className={css.background2}>
        <div className={css.headerdiv}>
            <header>{<Header />}</header>
        </div>
        <div className={css.main}>
        <div>{<InventoryStats products = {products} setProducts={setProducts} />}</div>
        <div>{<InventoryTable products = {products} setProducts={setProducts} />}</div>
    </div>
    </div>
)
}
export default Dashboard;