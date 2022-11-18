import React, {useState, useEffect } from 'react'
import { useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'
import css from '../components/main.module.css'
import Header from '../components/Header'




const UpdateProfile = (props) => {

    const navigate = useNavigate()
    const [user,setUser] = useState([]);

    //grab the url variable :id
    const {id} = useParams()

    // forms submit variables 
    const[name, setName] = useState("")
    const[image, setImage] = useState("")
    const[phoneNumber, setPhoneNumber] = useState(0)
    const[bio, setBio] = useState("")

    
    //DB error array
    const [errors,setErrors] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/users/${id}`,{withCredentials: true})
        .then(response => {
            console.log(response.data)
            setUser(response.data.user)
            setName(response.data.name)
            setImage(response.data.image)
            setPhoneNumber(response.data.phoneNumber)
            setBio(response.data.bio)
        })
        .catch(error => {
            console.log(error)
        })
    },[id])

    const updateUser = (e) => {
        e.preventDefault();
        const tempObjToSendToDB = {
            name,
            image,
            phoneNumber,
            bio,

        }
        axios.put(`http://localhost:8000/api/users/update/${id}`, tempObjToSendToDB, {withCredentials: true})
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
                console.log("Something went wrong")
        }) 
        }
    


return (
    <div className={css.background6}>
    <div className={css.headerdiv}>
        <header>{<Header />}</header>
    </div>
        <div className={css.main}>
            <h1 className={css.text}>Update Your Profile</h1>
        </div>
        
            {errors.map((error,index) => <p key ={index}>{error}</p>)}
        
        <form className={css.container} onSubmit={updateUser}>
            <p className={css.text}>Name:</p><input onChange={(e) => setName(e.target.value)} value={name}/><br/>   
            <p className={css.text}>Image Url:</p><input onChange={(e) => setImage(e.target.value)} value={image}/><br/>
            <p className={css.text}>Phone Number:</p><input onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber}/><br/>           
            <p className={css.text}>Bio:</p><input onChange={(e) => setBio(e.target.value)} value={bio}/><br/>     
            <button>Update Profile</button>
        </form>
        <button onClick={() => navigate('/dashboard')}>Back</button>
    </div>
)
}

export default UpdateProfile