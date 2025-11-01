
// containerJob.addEventListener('click', (event) => {
//     const containerJob = document.querySelector('.container');
//     const element = event.target;
    
//     if (element.classList.contains('apply-btn')) {
//         const applyButton = document.querySelectorAll('.apply-btn');
        
//         applyButton.forEach(button => {
//             button.textContent = "¡Aplicado!";
//             button.classList.add("is-applied");
//             button.disabled = true;
//         })
//     }
// })

const jobsListingSection = document.querySelector(".jobs-listings");

jobsListingSection.addEventListener("click", function (event) {
    const element = event.target;
    console.log(element);
    // const urlJob = () => {
    //     setTimeout(() => {
    //         window.location.href = "./empleos.html"
    //     }, 2000)
    // }

    if (element.classList.contains("button-apply-job")) {
        element.textContent = "¡Aplicado!";
        element.classList.add("is-applied");
        element.disabled = true;
        // urlJob();
    }
})