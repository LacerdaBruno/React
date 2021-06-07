import React from 'react'
import ReactDOM from 'react-dom'

//import Primeiro from './componentes/Primeiro'
//import BomDia from './componentes/BomDia'
//import Saudacao from './componentes/Saudacao'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
    <div>
        <Pai nome="João" sobrenome="Silva">
            <Filho nome="Pedro" />
            <Filho nome="João" />
            <Filho nome="Carla" />
        </Pai>
    </div>
    , document.getElementById('root'))

