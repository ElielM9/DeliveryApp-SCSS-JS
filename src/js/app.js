// Variables contenedor del carrusel
const carouselContainer = document.querySelector(`.main__carousel`);

// Eventos
document.addEventListener(`DOMContentLoaded`, startApp);

function startApp() {
  showRestaurants(restaurants);
}

// Funciones
function showRestaurants(restaurants) {
  restaurants.forEach((restaurant) => {
    const { nameRestaurant, description } = restaurant;

    const cardRestaurant = document.createElement(`div`);
    cardRestaurant.classList.add(`card-restaurant`, `swiper-slide`);
    cardRestaurant.innerHTML = `  
          <div class="card-restaurant__grid">
            <picture class="card-restaurant__picture">
              <source
                srcset="./assets/img/logo_ensaladas.avif"
                type="image/avif"
              />
              <source
                srcset="./assets/img/logo_ensaladas.webp"
                type="image/webp"
              />
              <img
                class="card-restaurant__img"
                loading="lazy"
                width="500"
                height="300"
                src="./assets/img/logo_ensaladas.png"
                alt="Logo-Restaurante"
              />
            </picture>
            <div class="card-restaurant__content">
              <img
                src="./assets/img/estrellas.png"
                alt="Calificacion-Restaurante"
              />
              <h3 class="card-restaurant__name">${nameRestaurant}</h3>
              <p class="card-restaurant__text">
                ${description} 
              </p>
            </div>
          </div>`;

    carouselContainer.appendChild(cardRestaurant);
  });
}
