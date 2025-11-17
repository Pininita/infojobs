import './App.css'
import './index.css'
import { useState } from 'react'
import jobsData from './data.json'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Pagination from './components/Pagination.jsx'
import JobListings from './components/JobListings.jsx'
import SearchFormSection from './components/SearchFormSection.jsx'

const RESULTS_PER_PAGE = 4;


function App() {
  const [filters, setFilters] = useState({
    text: '',
    technology: '',
    location: '',
    experienceLevel: '',
  })
  const [currentPage, setCurrentPage] = useState(1);
  
 const jobsFilteredByFilters = jobsData.filter(job => {
    return (
      (filters.text === '' || job.titulo.toLowerCase().includes(filters.text.toLowerCase())) &&
      (filters.technology === '' || job.data.technology === filters.technology) &&
      (filters.location === '' || job.data.modalidad === filters.location) &&
      (filters.experienceLevel === '' || job.data.nivel === filters.experienceLevel)
    )
  })
  
  const totalPages = Math.ceil(jobsFilteredByFilters.length / RESULTS_PER_PAGE);

  const pageResults = jobsFilteredByFilters.slice(
    (currentPage - 1) * RESULTS_PER_PAGE,
    currentPage * RESULTS_PER_PAGE
  )


  const handlePageChange = (page) => {
    setCurrentPage(page);
  }

  const handleSearch = (filters) => {
    setFilters(filters)
    setCurrentPage(1); // cuando se filtra, regresar a la pagina 1, no tiene sentido estar en otra pagina
  }



  // const handleTextFilter = (newTextToFilter) => {
  //   setTextToFilter(newTextToFilter)
  //   setCurrentPage(1); // cuando se filtra, regresar a la pagina 1, no tiene sentido estar en otra pagina
  // }

  return (
    <>
      <Header />
      <main>
        <SearchFormSection onSearch={handleSearch}  />

        <section>
          <JobListings jobs={pageResults} />
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </section>
      </main>


      <Footer />

    </>
  )
}

export default App
