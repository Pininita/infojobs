
const container = document.querySelector('.jobs-listings');
fetch('data.json')
    .then(response => response.json())
    // .then(data => console.log(data))
    .then((job) => {
        job.forEach(job => {
            const article = document.createElement('article');
            article.className = 'job-listing-card';
            article.dataset.modalidad = job.data.modalidad
            article.dataset.nivel = job.data.nivel
            article.dataset.technology = job.data.technology

            article.innerHTML = `<div>
                            <h4>${job.titulo}</h4>
                            <p>${job.empresa} | ${job.ubicacion}</p>
                            <p>${job.descripcion}</p>
                            </div>
                            <button class="button-apply-job">
                                Aplicar
                            </button>`
            container.appendChild(article);
        })
    })
    