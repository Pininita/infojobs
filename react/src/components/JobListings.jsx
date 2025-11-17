import React from 'react'
import JobCard from './JobCard'


const JobListings = ({jobs}) => {
  return (
    <div>
      <h2>Resultados de búsqueda</h2>

          <div className="jobs-listings">
            {/* lista de empleos */}
            {jobs.map(job  => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
    </div>
  )
}

export default JobListings
