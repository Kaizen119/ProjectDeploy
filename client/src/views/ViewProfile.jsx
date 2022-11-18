import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../components/Header'
import css from '../components/main.module.css'


const ViewProfile = (props) => {
 //grab the url variable
    const {id} = useParams();
    const navigate = useNavigate();

    const [thisUser, setThisUser] = useState(null)

useEffect(() => {
    axios.get(`http://localhost:8000/api/users/${id}`, {withCredentials: true})
    .then(response => {
        console.log(response.data)
        setThisUser(response.data)
    })
    .catch(error => {
        console.log(error)
    })
},[id])

    return (
    <div>
    {thisUser ? (
        <div className={css.background7}>
        <div className={css.headerdiv}>
            <header>{<Header />}</header>
        </div>
        <div className={css.main}>
            <h1 className={css.text}>{thisUser.name}</h1>
        </div>
            <div>
                <img className={css.image} src={thisUser.image} alt="not found"  />
            </div>
            <div className={css.main}>
                <h3 className={css.text}>About</h3>
                <p className={css.text}>Phone Number:{thisUser.phoneNumber}</p>
                <p className={css.text}>Bio:{thisUser.bio}</p>
                </div><br/><br/>
                <button className={css.btn} onClick={() => navigate('/dashboard')}>Back</button>
                <button className={css.btn} onClick={() => navigate(`/editprofile/${thisUser._id}`)}>Edit Profile</button>
                </div>
        ): ("You are not part of the team...")
    }

    </div>
    )
}


export default ViewProfile