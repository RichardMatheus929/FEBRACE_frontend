import React, { useEffect, useState } from 'react'

import Projetos from '../components/Projetos'

import "./pagProjetos.css"

const home = () => {

    const [ano, setAno] = useState("todos os anos")
    const [totalPag, setTotalPag] = useState(1080)

    const totalproje = (totalPag) => {
        setTotalPag(totalPag)
    }

    return (
        <div className='pagProjetos'>
            <h1>Febrace - Projetos premiados {ano}</h1> <br />
            <h3 id='totalproje'> {totalPag} projetos</h3>
            <div className="button-container">
                <input type="button" value="Todos os anos" onClick={() => setAno("todos os anos")} />
                <input type="button" value="2023" onClick={() => { setAno(2023) }} />
                <input type="button" value="2021" onClick={() => { setAno(2021) }} />
                <input type="button" value="2020" onClick={() => { setAno(2020) }} />
                <input type="button" value="2019" onClick={() => { setAno(2019) }} />
                <input type="button" value="2018" onClick={() => { setAno(2018) }} />
            </div>
            <div className='home'>
                <Projetos ano={ano} onTotalProjectsChange={totalproje}></Projetos>
            </div>
        </div>
    )
}


export default home