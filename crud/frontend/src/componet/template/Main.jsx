import React from 'react'
import Header from './Header'
import './Main.css'

export default props =>
    <React.Fragment>
        <Header { ...props} />
        <main className="content">
            Conteúdo
        </main>
    </React.Fragment>