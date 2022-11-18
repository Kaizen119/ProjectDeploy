import React from 'react'
import Header from '../components/Header'
import AddItemForm from '../components/AddItemForm'
import css from '../components/main.module.css'



const AddProducts = (props) => {

return (
    <>
    <div className={css.background5}>
        
    <div className={css.headerdiv}>
            <header>{<Header />}</header>
        </div>
        <div><AddItemForm /></div>
    </div>
    </>
)
}

export default AddProducts