const projectsContainer = document.getElementById("projects-container");

proyectos.forEach((proyecto) => {

    const article = document.createElement("article");

    article.classList.add("project");

    const plataformas = proyecto.plataformas.join(" · ");

    const images = proyecto.imagenes.map((imagen, index) => `
        <img
            src="${imagen}"
            alt="${proyecto.titulo} - Imagen ${index + 1}"
            class="carousel-image${index === 0 ? " active" : ""}"
        >
    `).join("");

    const indicators = proyecto.imagenes.map((_, index) => `
        <button
            type="button"
            class="carousel-indicator${index === 0 ? " active" : ""}"
            aria-label="Mostrar imagen ${index + 1}"
            data-index="${index}"
        ></button>
    `).join("");

    article.innerHTML = `
        <div class="project-content">

            <div class="project-text">

                <p class="section-label">
                    ${proyecto.tipo}
                </p>

                <h3>
                    ${proyecto.titulo}
                </h3>

                <p>
                    ${proyecto.descripcion}
                </p>

                <p class="project-platforms">
                    ${plataformas}
                </p>

            </div>


            <div class="project-gallery">

                <button
                    type="button"
                    class="carousel-button carousel-prev"
                    aria-label="Imagen anterior"
                >
                    &#10094;
                </button>


                <div class="carousel-images">
                    ${images}
                </div>


                <button
                    type="button"
                    class="carousel-button carousel-next"
                    aria-label="Siguiente imagen"
                >
                    &#10095;
                </button>


                <div class="carousel-indicators">
                    ${indicators}
                </div>

            </div>

        </div>
    `;


    projectsContainer.appendChild(article);


    const carouselImages = article.querySelectorAll(".carousel-image");
    const previousButton = article.querySelector(".carousel-prev");
    const nextButton = article.querySelector(".carousel-next");
    const indicatorButtons = article.querySelectorAll(".carousel-indicator");

    let currentIndex = 0;


    function showImage(index) {

        if (index >= carouselImages.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = carouselImages.length - 1;
        } else {
            currentIndex = index;
        }


        carouselImages.forEach((image, imageIndex) => {
            image.classList.toggle(
                "active",
                imageIndex === currentIndex
            );
        });


        indicatorButtons.forEach((indicator, indicatorIndex) => {
            indicator.classList.toggle(
                "active",
                indicatorIndex === currentIndex
            );
        });

    }


    previousButton.addEventListener("click", () => {
        showImage(currentIndex - 1);
    });


    nextButton.addEventListener("click", () => {
        showImage(currentIndex + 1);
    });


    indicatorButtons.forEach((indicator) => {

        indicator.addEventListener("click", () => {

            const index = Number(
                indicator.dataset.index
            );

            showImage(index);

        });

    });

});

/* =========================
   ANIMACIÓN AL HACER SCROLL
========================= */

const projects = document.querySelectorAll(".project");

const observer = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    }
);


projects.forEach((project) => {
    observer.observe(project);
});
