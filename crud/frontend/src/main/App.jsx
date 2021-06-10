import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import React from 'react'
import './App.css'

import Logo from '../componet/template/Logo'
import Nav from '../componet/template/Nav'
import Home from '../componet/home/Home'
import Footer from '../componet/template/Footer'


export default props =>
    <div className="app">
        <Logo />
        <Nav />
        <Home />
        <Footer />
    </div>
