import React, { useState } from 'react'
import "../index.css"



const JobCard = ({job}) => {
    let [isApplied, setIsApplied] = useState(false);

    const handleApplyClick = () => {
        setIsApplied(true);
    } 

    return (
        <>
        
            <article 
            className='job-listing-card' 
            data-modalidad={job.data.modalidad} 
            data-nivel={job.data.nivel}  
            data-technology={job.data.technology} 
            >
                <div>
                    <h4 className='job-title'>{job.titulo}</h4>
                    <p className='job-subtitle'>{job.empresa} | {job.ubicacion}</p>
                    <p className='job-description'>{job.descripcion}</p>
                </div>
                <button 
                onClick={handleApplyClick} 
                className={`button-apply-job ${isApplied ? "is-applied" : ""}`}
                disabled={isApplied}>
                    {isApplied ? 'Aplicado' : 'Aplicar'}
                </button>
            </article>
        
            
        </>
    )
}

export default JobCard
