<template>
  <div class="movie-detail">
    <TopCarousel />

    <div class="movie-detail__content">
      <div class="detail-card">
        <h1 class="detail-card__title">Cinema</h1>

        <div class="detail-card__content">
          <div class="detail-card__image">
            <img
              src="https://upload.wikimedia.org/wikipedia/pt/thumb/9/9f/Mulher_Maravilha_2009.jpg/250px-Mulher_Maravilha_2009.jpg"
            />
          </div>

          <div class="detail-card__text-container">
            <h2 class="detail-card__subtitle">
              Mulher maravilha
            </h2>

            <ul class="detail-card__categories">
              <li>Ação</li>
              <li>Aventura</li>
              <li>Lorem ipsum</li>
            </ul>

            <div class="detail-card__description">
              <h3 class="detail-card__description__title">
                Lorem Ipsum.
              </h3>

              <p class="detail-card__description__text">
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Nesciunt blanditiis
                earum quisquam voluptate nulla, enim
                repellat in voluptates assumenda? Sunt,
                sint! Aliquam voluptatum accusamus a.
                Officia nobis laboriosam exercitationem
                quis?

                Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Fuga ratione,
                suscipit laudantium ea voluptatum
                consectetur saepe odit quam totam
                esse, ullam enim minus quia non quo
                rem, doloribus consequatur voluptates.
              </p>
            </div>

            <div class="detail-card__actors">
              <div class="detail-card__actors-label">
                Atores: 
              </div>

              <ul class="detail-card__actors">
                <li>Lorem</li>
                <li>Ipsum</li>
                <li>Dolor</li>
                <li>Amet.</li>
              </ul>
            </div>

            <div class="detail-card__ratings">
              <h2 class="detail-card__subtitle">
                Avaliação crítica
              </h2>

              <ul class="detail-card__ratings">
                <li class="rating">
                  <div class="rating__description">
                    Lorem, ipsum dolor sit amet consectetur elit.
                  </div>

                  <div class="rating__stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                </li>

                <li class="rating">
                  <div class="rating__description">
                    Lorem, ipsum dolor sit amet consectetur elit.
                  </div>

                  <div class="rating__stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                </li>

                <li class="rating">
                  <div class="rating__description">
                    Lorem, ipsum dolor sit amet consectetur elit.
                  </div>

                  <div class="rating__stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="movie-detail__moreinfo">
      <div class="movie-detail__moreinfo__item movie-detail__moreinfo__item--is-red">
        Seg, Ter, Qua, Quin, Sex
      </div>

      <div class="movie-detail__moreinfo__item movie-detail__moreinfo__item--is-gray">
        <div class="heart-container">
          <i class="far fa-heart"></i>
          Lorem ipsum dolor amet.
        </div>

        <p>
          Lorem ipsum dolor amet.
        </p>
      </div>
    </div>

    <div class="movie-detail__submitbutton">
      <router-link
        class="button button--secondary"
        to="/pagamento"
      >
        Finalizar
      </router-link>
    </div>
  </div>
</template>

<script>
import TopCarousel from '../components/TopCarousel.vue';

export default {
  name: 'FilmeDetalhe',
  components: {
    TopCarousel,
  },
};
</script>

<style scoped>
  .movie-detail__content {
    margin: 40px 110px 0px;
  }

  .detail-card {
    padding: 16px;
    border-radius: 8px;
    background: #F3F3F3;
    margin-bottom: 58px;
  }

  .detail-card__title {
    margin-bottom: 24px;
    color: var(--primary-color);
    text-transform: uppercase;
    font-size: 24px;
  }

  .detail-card__content {
    display: flex;
  }

  .detail-card__image {
    height: 100%;
    width: 250px;
    flex-shrink: 0;
    margin-right: 32px;
  }

  .detail-card__image img {
    height: 100%;
    width: 100%;
  }

  .detail-card__subtitle {
    font-size: 16px;
    text-transform: uppercase;
    color: var(--primary-color);
    margin-bottom: 12px;
  }

  .detail-card__text-container { }

  ul {
    padding-left: 0px;
    list-style: none;
  }

  .detail-card__categories {
    display: flex;
    font-size: 14px;
    color: var(--primary-color);
    font-weight: bolder;
    margin: 24px 0px 24px 16px;
  }

  .detail-card__categories li:not(:last-child)::after {
    content: '|';
    margin: 0px 4px;
  }

  .detail-card__description__title {
    font-size: 14px;
    text-transform: uppercase;
    color: #333;
    margin-bottom: 16px;
    font-weight: 600;
  }

  .detail-card__description__text {
    font-size: 14px;
    line-height: 24px;
    color: #333;
    margin-bottom: 16px;
  }

  div.detail-card__actors {
    margin-bottom: 24px;
  }

  .detail-card__actors {
    display: flex;
    flex-wrap: wrap;
    color: #333;
    font-size: 14px;
    text-transform: uppercase;
  }

  .detail-card__actors-label {
    margin-right: 12px;
  }

  ul.detail-card__actors {
  }

  ul.detail-card__actors li:not(:last-child)::after {
    content: ',';
    margin-right: 6px;
  }

  ul.detail-card__ratings {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    display: flex;
  }

  ul.detail-card__ratings li {
    flex: 1;
    margin-right: 16px;
  }

  .rating__stars {
    margin-top: 4px;
  }

  .rating__stars svg {
    font-size: 14px;
    margin-right: 4px;
    color: #f1c40f;
  }

  .movie-detail__moreinfo {
    display: flex;
    height: 350px;
    margin: 0px 20% 32px 20%;
  }

  .movie-detail__moreinfo__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
  }

  .movie-detail__moreinfo__item--is-red {
    background: var(--primary-color);
    color: #fff;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .movie-detail__moreinfo__item--is-gray {
    background: #f3f3f3;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .heart-container {
    margin-bottom: 16px;
  }

  .heart-container svg {
    font-size: 24px;
    color: #e84393;
  }

  .movie-detail__submitbutton {
    display: flex;
    justify-content: center;
    margin-bottom: 32px;
  }

  @media screen and (max-width: 1100px) {
    .movie-detail__content {
      margin: 40px 24px;
    }

    .movie-detail__moreinfo {
      margin: 0px 5% 32px 5%;
    }
  }

   @media screen and (max-width: 900px) {
    .movie-detail__moreinfo {
      margin: 0px 5% 32px 5%;
      flex-direction: column;
      height: 400px;
    }
  }

  @media screen and (max-width: 800px) {
    .detail-card__content {
      flex-direction: column;
    }

    .detail-card__image {
      margin: 0 auto 24px auto;
    }
  }

  @media screen and (max-width: 500px) {
    .detail-card__ratings {
      flex-direction: column;
    }

    .rating {
      margin-bottom: 16px;
    }

    .rating:last-child {
      margin-bottom: 0px;
    }
  }
</style>