import React, { useState, useEffect } from 'react';
import { usePagination } from '../hooks/usePagination';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import './Projetos.css';

const Projetos = ({ ano, onTotalProjectsChange, searchName, searchEscola }) => {
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
        if (data.length === 0) {
            axios.get('https://febrace-project.up.railway.app/projetos')
                .then(response => {
                    setData(response.data);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }

        let filtered = ano === "todos os anos" ? data : data.filter(item => item.ano === String(ano));

        if (searchEscola) {
            filtered = filtered.filter(item => item.escola.toLowerCase().includes(searchEscola.toLowerCase()));
        }

        if (searchName) {
            filtered = filtered.filter(item => item.nome.toLowerCase().includes(searchName.toLowerCase()));
        }

        setFilteredData(filtered)

    }, [ano, data, searchName, searchEscola]);

    useEffect(() => {
        onTotalProjectsChange(filteredData.length);
    }, [onTotalProjectsChange, filteredData]);

    const nameExiste = !!searchName;
    const escolaExiste = !!searchEscola;

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
                            <h3 className={nameExiste?'destaque-pesquisa':''}>{item.nome}</h3>
                            <p ><strong>Categoria de premiação:</strong> {item.categoria_premiacao}</p>
                            <p className={escolaExiste?'destaque-pesquisa':''}><strong>Escola:</strong> {item.escola}</p>
                            <p ><strong>Cidade:</strong> {item.cidade}</p>
                            <p ><strong>Estado:</strong> {item.estado}</p>
                            <p ><strong>Ano:</strong> {item.ano}</p>
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
