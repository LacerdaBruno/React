import React from 'react'
import {childrenWthiProps} from '../utils/utils'

export default props =>
    <divi>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {
                childrenWthiProps(props)
            }
        </ul>
    </divi>