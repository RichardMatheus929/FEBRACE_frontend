import React, { useState, useEffect } from 'react';
import "./ProjectDetails.css"
import { useParams } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import Loading from "../components/Loading"

const ProjectDetails = () => {
    const [searchParams] = useSearchParams();
    const [project, setProject] = useState([]);
    const [infoProject, setInfoProject] = useState([]);

    const id = searchParams.get('id');

    // const api = "http://localhost:8000"
    const api = "https://richardmatheus929.pythonanywhere.com" 


    useEffect(() => {
        axios.get(api + `/projetos/${id}`)
            .then(response => setProject(response.data))
            .catch(error => console.error("There was an error fetching the project data!", error));

        axios.get(api + `/projetos/${id}/info`)
            .then(response => setInfoProject(response.data))
            .catch(error => console.error("There was an error fetching the project data!", error));
    }, []);

    return project.length < 1 ? (
        <div> <Loading></Loading> </div>
    ) : (
        <div className="project-details-container">
            <div className="project-card">
                <h1 className="project-title">{project.nome}</h1>
                <hr />
                <div className="project-info">
                    <p><strong>Cidade:</strong> {project.cidade}</p>
                    <p><strong>Estado:</strong> {project.estado}</p>
                </div>
                <hr />
                <div className="additional-info">
                    <h3>Escola do projeto: <span>{infoProject.escola}</span></h3>
                    <h3>Projetos premiados dessa escola: <span>{infoProject.escola_quantidade}</span></h3>
                    <h3>Prêmios que esse projeto recebeu: <span>{infoProject.premios}</span></h3>
                    <h3>Categorias que esse projeto ganhou: <span>{infoProject.categorias}</span></h3>
                    <h3>Anos que o projeto foi premiado: <span>{infoProject.ano}</span></h3>
                </div>
            </div>
        </div>
    );
};
export default ProjectDetails;
