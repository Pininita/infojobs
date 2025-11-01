
const searchBar = document.querySelector(".empleos-search-input");

searchBar.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        const value = e.target.value.toLowerCase();
        console.log(value);
        
        const jobs = document.querySelectorAll(".job-listing-card");

        jobs.forEach(job => {
            const title = job.querySelector('h4').textContent.toLowerCase();
            
            if (title.includes(value)) {
                job.style.display = 'flex'; // Mostrar
            } else {
                job.style.display = 'none'; // Ocultar
            }
        });
    }
});
