import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import css from '../components/main.module.css'
const AddItemForm = (props) => {
       //for redirect
        const navigate = useNavigate()

       // forms submit variables 
        const[name, setName] = useState("")
        const[image, setImage] = useState("")
        const[catagory, setCatagory] = useState("")
        const[price, setPrice] = useState("")
        const[quantity, setQuantity] = useState(0)

       //DB error array
        const [errors,setErrors] = useState([]);

        const createProduct = (e) => {
            e.preventDefault();
            const tempObjToSendToDB = {
                name,
                image,
                catagory,
                price,
                quantity
            }
            axios.post('http://localhost:8000/api/products', tempObjToSendToDB, {withCredentials: true})
            .then(response => {
                console.log("Client Success")
                console.log(response.data)
                navigate('/dashboard')
            })
            .catch(error => {
                console.log("Something Went Wrong")
                console.log(error)
               const errorResponse = error.response.data.errors; // Get the errors from err.response.data
                   const errorArr = []; // Define a temp error array to push the messages in
                   for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                        errorArr.push(errorResponse[key].message)
                    }
                   // Set Errors
                    setErrors(errorArr);
            }) 
        }
return (
    <>
        <div className={css.container5}>
            {errors.map((error,index) => <p key ={index}>{error}</p>)}
            <form onSubmit={createProduct}>
                
                Item Name:<input onChange={(e) => setName(e.target.value)} value={name}/><br/>
                Image Url:<input onChange={(e) => setImage(e.target.value)} value={image}/><br/>
                Catagory:<input onChange={(e) => setCatagory(e.target.value)} value={catagory}/><br/>
                Price:<input type="number" onChange={(e) => setPrice(e.target.value)} value={price}/><br/>
                Quantity:<input type="number" onChange={(e) => setQuantity(e.target.value)} value={quantity}/><br/>
                <br/><button className={css.btn}>Submit</button>
                <button className={css.btn} onClick={() => navigate('/dashboard')}>Cancel</button>
            </form>
        </div>
    </>
)
}


export default AddItemForm