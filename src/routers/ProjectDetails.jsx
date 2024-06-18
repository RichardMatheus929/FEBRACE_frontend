import React, { useState, useEffect } from 'react';
import "./ProjectDetails.css"
import { useParams } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import Loading from "../components/Loading"

const ProjectDetails = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');
    const [project, setProject] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/projetos/${id}`)
            .then(response => setProject(response.data))
            .catch(error => console.error("There was an error fetching the project data!", error));
        console.log(id, project)
    }, []);

    if (project.length < 2) return <Loading></Loading>


    return (
        <div className="project-details">
            <h1>{project.nome}</h1>
            <p><strong>Categoria de premisação:</strong> {project.categoria_premiacao}</p>
            <p><strong>Escola:</strong> {project.escola}</p>
            <p><strong>Cidade:</strong> {project.cidade}</p>
            <p><strong>Estado:</strong> {project.estado}</p>
            <p></p>
            <hr />
        </div>
    );
}

export default ProjectDetails;
