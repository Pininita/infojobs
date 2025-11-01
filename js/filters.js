const filterLocation = document.querySelector("#filter-location");
const filterTechnology = document.querySelector("#filter-technology");
const filterExperienceLevel = document.querySelector("#filter-experience-level");
const mensaje = document.querySelector("#filter-selected-value");

filterLocation.addEventListener("change", function () {
    const jobs = document.querySelectorAll(".job-listing-card");
    const selectedValue = filterLocation.value;

    if (selectedValue) {
        mensaje.textContent = `Has selecionado: ${selectedValue}`
    } else {
        mensaje.textContent = "";
    }

    jobs.forEach(job => {
        const modalidad = job.dataset.modalidad
        console.log(modalidad);
        

        if (selectedValue === "" || selectedValue === modalidad) {
            job.style.display = "flex";
        } else {
            job.style.display = "none";
        }
    })
})

filterTechnology.addEventListener("change", function () {
    const jobs = document.querySelectorAll(".job-listing-card");
    const selectedValue = filterTechnology.value;
    // console.log(selectedValue);
    
    

    if (selectedValue) {
        mensaje.textContent = `Has selecionado: ${selectedValue}`
    } else {
        mensaje.textContent = "";
    }

    jobs.forEach(job => {
        const modalidad = job.dataset.technology
        console.log(modalidad);
        
        if (selectedValue === "" || selectedValue === modalidad) {
            job.style.display = "flex";
        } else {
            job.style.display = "none";
        }
    })
})

filterExperienceLevel.addEventListener("change", function () {
    const jobs = document.querySelectorAll(".job-listing-card");
    const selectedValue = filterExperienceLevel.value;    

    if (selectedValue) {
        mensaje.textContent = `Has selecionado: ${selectedValue}`
    } else {
        mensaje.textContent = "";
    }

    jobs.forEach(job => {
        const modalidad = job.dataset.nivel

        if (selectedValue === "" || selectedValue === modalidad) {
            job.style.display = "flex";
        } else {
            job.style.display = "none";
        }
    })
})







