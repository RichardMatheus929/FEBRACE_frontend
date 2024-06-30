import React, { useEffect, useState } from 'react'
import Projetos from '../components/Projetos'
import "./pagProjetos.css"

const Home = () => {
    const [ano, setAno] = useState("todos os anos")
    const [totalPag, setTotalPag] = useState(1080)

    const [searchName, setSearchName] = useState('');
    const [searchEscola, setSearchEscola] = useState('');

    const [esconderFilter, setEsconderFilter] = useState(false)

    const totalproje = (totalPag) => {
        setTotalPag(totalPag)
    }

    return (
        <div className='pagProjetos'>
            <div className={esconderFilter ? 'cabecalho' : 'esconder'}>
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
                        {(() => {
                            const anos = ["todos os anos", 2023, 2022, 2021, 2020, 2019, 2018];
                            return anos.map((anoValue) => (
                                <input
                                    style={ano === anoValue ? { backgroundColor: '#70e970' } : {}}
                                    key={anoValue}
                                    type="button"
                                    value={anoValue}
                                    onClick={() => setAno(anoValue)}
                                />
                            ));
                        })()}
                    </div>
                </div>
            </div>
            <hr style={esconderFilter ? {} : { display: 'none' }} />
            <div onClick={() => setEsconderFilter(true)} className={esconderFilter ? 'esconder' : 'toback'} >
                <h2>Filtros</h2>
            </div>
            <div className={esconderFilter ? 'toback' : 'esconder'} onClick={() => setEsconderFilter(false)}>
                <h2>Esconder</h2>
                <h3>Foram achados <span style={{ color: '#70e970' }}>{totalPag}</span> projetos em <span style={{ color: '#70e970' }}>{ano}</span></h3>
                {searchName ? <h3> com <span style={{ color: '#70e970' }}>{searchName}</span> no seu nome </h3> : <h2></h2>}
                {searchEscola ? <h3> com <span style={{ color: '#70e970' }}>{searchEscola}</span> em sua escola </h3> : <h2></h2>}
            </div>
            <div className='home'>
                <Projetos ano={ano} searchEscola={searchEscola} searchName={searchName} onTotalProjectsChange={totalproje} />
            </div>
        </div>
    )
}

export default Home;
