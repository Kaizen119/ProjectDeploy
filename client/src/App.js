import React from 'react'
import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom'
import Dashboard from './views/Dashboard';
import LogIn from './views/LogIn';
import Register from './views/Register';
import AddProducts from './views/AddProducts';
import UpdateProducts from './views/UpdateProducts'
import OneProduct from './views/OneProduct'
import css from './components/main.module.css'
import Splash from './views/splash';
import ViewProfile from './views/ViewProfile';
import EditProfile from './views/EditProfile'


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Splash />}/>
      <Route path='/login' element={<LogIn />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/viewprofile/:id' element={<ViewProfile />}/>
      <Route path='/editprofile/:id' element={<EditProfile />}/>
      <Route path='/dashboard' element={<Dashboard />}/>
      <Route path='/addProduct' element={<AddProducts />}/>
      <Route path='/oneProduct/:id' element={<OneProduct />}/>
      <Route path='/updateProduct/:id' element={<UpdateProducts />}/>

      {/* Redirect */}
      <Route path='*' element={<Navigate to="/" replace/>}/>
    </Routes>
    </div>
  );
}




export default App;
