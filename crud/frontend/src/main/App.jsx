import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'


import Logo from '../componet/template/Logo'
import Nav from '../componet/template/Nav'
import Routes from './Routes'
import Footer from '../componet/template/Footer'


export default props =>
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>
    