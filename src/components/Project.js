import React from 'react'
import { useParams } from 'react-router-dom';
import { works } from '../data/works';
import { useEffect } from 'react';

export const Project = () => {
    const params = useParams();
    const [project, setProject] = React.useState({});
    useEffect(() => {
        let project = works.find(work => work.name === params.name);
        setProject(project);
    }, []);
  return (
    <div className='page'>
        <div className="mask">
                <img src={`/images/imagen${project.name}.jpg`} />
            </div>
        <h1>Project page</h1>
        <p>Project name: {project.name}</p>
        <p>Project description: {project.category}</p>
        <a href={project.url} target="_blank">View project</a>
        
      </div>
  )
}
