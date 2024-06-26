import React from 'react'
import { Link } from "react-router-dom"

import './PagInical.css'

const PagInical = () => {

    return (
        <div className='PagInicial'>
            <div className='central'>
                <h1>teste</h1>
                <p className="txt-inicial">Bem-vindo(a), essa é a página inicial da FEBRACE!</p>
                <p className='descricao'>Aqui você terá acesso ao Painel de Dados dos projetos premiados da FEBRACE! </p>
                <p>Vamos lá?</p>
            </div>
            <div className='div-btn'>
                <Link to={'/projetos'}>
                    <button>Vamos lá</button>
                </Link>
            </div>
        </div>
    )
}

export default PagInical