import React, { useEffect, useState } from 'react'
import Projetos from '../components/Projetos'
import "./pagProjetos.css"

const Home = () => {
    const [ano, setAno] = useState("todos os anos")
    const [totalPag, setTotalPag] = useState(1080)

    const [searchName, setSearchName] = useState('');
    const [searchEscola, setSearchEscola] = useState('');

    const totalproje = (totalPag) => {
        setTotalPag(totalPag)
    }

    return (
        <div className='pagProjetos'>
            <div className='cabecalho'>
                <div className='filtro_pesquisa'>
                    <h1>Pesquise por nome ou escola do projeto</h1>
                    <form action="post">
                        <div id='searchname'>
                            <label htmlFor="">Nome do projeto:</label>
                            <input
                                type="text"
                                placeholder='Digite um nome de projeto'
                                value={searchName}
                                onChange={e => setSearchName(e.target.value)}
                            />
                        </div>
                        <div id='searchescola'>
                            <label htmlFor="">Escola do projeto:</label>
                            <input
                                type="text"
                                placeholder='Digite uma escola'
                                value={searchEscola}
                                onChange={e => setSearchEscola(e.target.value)}
                            />
                        </div>
                    </form>
                </div>
                <div className='filtro_anos'>
                    <div className='mainProjetos'>
                        <h1>Febrace - Projetos premiados  </h1> <h1 id='ano'>{ano}</h1>
                    </div><br />
                    <div className='qntdProjetos'>
                        <h3 id='projetos-total'>{totalPag}</h3> <h3>projetos</h3>
                    </div>
                    <div className="button-container">
                        <input type="button" value="Todos os anos" onClick={() => setAno("todos os anos")} />
                        <input type="button" value="2023" onClick={() => { setAno(2023) }} />
                        <input type="button" value="2022" onClick={() => { setAno(2022) }} />
                        <input type="button" value="2021" onClick={() => { setAno(2021) }} />
                        <input type="button" value="2020" onClick={() => { setAno(2020) }} />
                        <input type="button" value="2019" onClick={() => { setAno(2019) }} />
                        <input type="button" value="2018" onClick={() => { setAno(2018) }} />
                    </div>
                </div>
            </div>
            <hr />
            <div className='home'>
                <Projetos ano={ano} searchEscola={searchEscola} searchName={searchName} onTotalProjectsChange={totalproje} />
            </div>
        </div>
    )
}

export default Home;
