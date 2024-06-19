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

    useEffect(() => {
        axios.get(`http://localhost:8000/projetos/${id}`)
            .then(response => setProject(response.data))
            .catch(error => console.error("There was an error fetching the project data!", error));

        axios.get(`http://localhost:8000/projetos/${id}/info`)
            .then(response => setInfoProject(response.data))
            .catch(error => console.error("There was an error fetching the project data!", error));
    }, []);

    return project.length < 1 ? (
        <div> <Loading></Loading> </div>
    ) : (
        <div className="project-details">
            <h1>{project.nome}</h1>
            <p><strong>Categoria de premisação:</strong> {project.categoria_premiacao}</p>
            <p><strong>Escola:</strong> {project.escola}</p>
            <p><strong>Cidade:</strong> {project.cidade}</p>
            <p><strong>Estado:</strong> {project.estado}</p>
            <p></p>
            <hr />
            <br />
            <br />
            <div>
                <h3>{infoProject.info}</h3>
            </div>
        </div>
    );
}

export default ProjectDetails;
