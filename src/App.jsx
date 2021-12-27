import React from 'react'



import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import RandomNumber from './components/RandomNumber'

export default _ =>
    <div id="app">
        <h1>Fundamentos React</h1>
        <RandomNumber min={1} max={100} />
        <Fragmento />
        <Primeiro />
        <ComParametro
            titulo="Situação"
            aluno="Murilo"
            nota={9} />
    </div>