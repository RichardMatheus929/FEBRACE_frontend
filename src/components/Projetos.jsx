import React, { useState, useEffect } from 'react';
import { usePagination } from '../hooks/usePagination'

import axios from 'axios';
import { Link } from 'react-router-dom';

import Loading from './Loading';
import './Projetos.css';

const Projetos = ({ ano, onTotalProjectsChange }) => {

    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const {
        actualPage,
        getItemsPage,
        handleBackPage,
        handleNextPage,
        totalPages,
    } = usePagination(filteredData, 4);

    useEffect(() => {

        // Sou iniciante em react e posso não está fazendo tudo da melhor forma possível
        // Lógica desse useEffect => O primerio if é para criar a primeira e única requisição desssa página 
        // ele só acontece quando data é o padrão state que eu defino
        // Após isso eu apenas dou o check se ano chegou do componente pai como todos os anos, se for isso eu passo
        // data direto no filter data, caso não seja, eu passo uma data filtrada no filterdata

        if (data.length == 0) {

            console.log('é igual a 0')

            axios.get('http://localhost:8000/projetos')
                .then(response => {
                    setData(response.data);

                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    setFilteredData(data)
                })
        }

        setFilteredData(ano === "todos os anos" ? data : data.filter(item => item.ano === String(ano)));

    }, [ano, data]);

    useEffect(() => {
        onTotalProjectsChange(filteredData.length)
    }, [onTotalProjectsChange, filteredData])


    return data.length < 1 ? (
        <div className='loading'>
            <Loading />
        </div>
    ) : (
        <div className='projetos'>
            <section className='paginacao'>
                <button
                    className='btn-paginacao'
                    type="button"
                    onClick={handleBackPage}
                    disabled={actualPage === 1}
                >
                    Voltar
                </button>

                <p>PÁGINA {actualPage} DE {totalPages}</p>

                <button
                    className='btn-paginacao'
                    type="button"
                    onClick={handleNextPage}
                    disabled={actualPage === totalPages}
                >
                    Avançar
                </button>
            </section>
            <div className="container">
                {getItemsPage().map(item => (
                    <div className="card" key={item.id}>
                        <Link to={`/projeto?id=${item.id}`}>
                            <h3>{item.nome}</h3>
                            <p className='item_p'><strong>Categoria de premiação:</strong> {item.categoria_premiacao}</p>
                            <p><strong>Escola:</strong> {item.escola}</p>
                            <p className='item_p'><strong>Cidade:</strong> {item.cidade}</p>
                            <p className='item_p'><strong>Estado:</strong> {item.estado}</p>
                            <p className='item_p'><strong>Ano:</strong> {item.ano}</p>
                            <p></p>
                            <hr />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projetos;
