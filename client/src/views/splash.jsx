import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import css from '../components/main.module.css'


const Splash = () => {

      //for redirect
        const navigate = useNavigate()

      // forms submit variables 
        const[email, setEmail] = useState("")
        const[password, setPassword] = useState("")


      //DB error array
        const [errors,setErrors] = useState([]);

        const loginUser = (e) => {
            e.preventDefault();
            const tempObjToSendToDB = {
                email,
                password,

            }
            axios.post('http://localhost:8000/api/login', tempObjToSendToDB , {withCredentials: true})
            .then(response => {
                console.log("Client Success")
                console.log(response.data)
                navigate('/')
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
    <div className={css.background4}>
      <div>
      {/* <img src="/imgs/white bear.png" alt="" onClick={() => navigate('/login')}/> */}
        <div className={css.container4}>
        <h1 onClick={() => navigate('/login')}>Grizzly Inventory</h1>
        </div>
      </div>
    </div>
    </>

)
}

export default Splash