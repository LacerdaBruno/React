import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import React from 'react'
import './App.css'

import Logo from '../componet/template/Logo'
import Nav from '../componet/template/Nav'
import Main from '../componet/template/Main'
import Footer from '../componet/template/Footer'


export default props =>
    <div className="app">
        <Logo />
        <Nav />
        <Main icon="home" title="Início" subtitle="Segundo Projeto do capítulo de React."/>
        <Footer />
    </div>
