document.addEventListener("DOMContentLoaded", function () {
    const movieCarousel = document.querySelector(".movie-carousel");
    const movieContainers = document.querySelectorAll(".movie-container");
    const nextButton = document.querySelector("#next-button");
    const prevButton = document.querySelector("#prev-button");

    let scrollPosition = 0;
    const scrollStep = movieContainers[0].clientWidth + 20; // Width + margin

    // Duplicate the movie containers for cyclic effect
    const clonedMovieContainers = Array.from(movieContainers).map((container) =>
        container.cloneNode(true)
    );
    movieCarousel.append(...clonedMovieContainers);

    // Function to scroll the carousel to the right
    function scrollCarouselRight() {
        scrollPosition += scrollStep;
        if (scrollPosition >= movieCarousel.scrollWidth - movieCarousel.clientWidth) {
            scrollPosition = 0;
        }
        movieCarousel.scrollTo({
            left: scrollPosition,
            behavior: "smooth"
        });
    }

    // Function to scroll the carousel to the left
    function scrollCarouselLeft() {
        scrollPosition -= scrollStep;
        if (scrollPosition < 0) {
            scrollPosition = movieCarousel.scrollWidth - movieCarousel.clientWidth;
        }
        movieCarousel.scrollTo({
            left: scrollPosition,
            behavior: "smooth"
        });
    }

    // Add event listeners to the carousel navigation buttons
    nextButton.addEventListener("click", scrollCarouselRight);
    prevButton.addEventListener("click", scrollCarouselLeft);
});
