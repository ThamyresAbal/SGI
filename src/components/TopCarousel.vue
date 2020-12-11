<template>
  <div class="top-carousel">
    <div class="swiper-container">
      <swiper :options="swiperOptions">
        <swiper-slide>
          <img
            class="carousel__item"
            src="https://picsum.photos/1600/400"
          />
        </swiper-slide>

        <swiper-slide>
          <img
            class="carousel__item"
            src="https://picsum.photos/1600/400"
          />
        </swiper-slide>

        <swiper-slide>
          <img
            class="carousel__item"
            src="https://picsum.photos/1600/400"
          />
        </swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>

    <div class="search">
      <form class="search__form">
        <div class="formgroup">
          <div class="formgroup__input">
            <input
              v-model="searchFieldValue"
              type="text"
              placeholder="Digite aqui para buscar?"
            >
          </div>

          <button
            @click="$emit('on-search', searchFieldValue)"
            class="formgroup__right-icon"
          >
            <i class="fas fa-search" />
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopCarousel',
  data: () => ({
    searchFieldValue: '',
    swiperOptions: {
      pagination: {
        el: '.swiper-pagination',
      },
    },
  }),
}
</script>

<style scoped>
.top-carousel {
  overflow: hidden;
}

.carousel__item {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.search {
  background: var(--primary-color);
  width: 100%;
  padding: 8px;
  display: flex;
  justify-content: center;
}

.search__form {
  width: 50%;
  margin: 0 auto;
  display: block;
}

.swiper-container {
  height: 400px;
}

@media screen and (max-width: 800px) {
  .search__form {
    width: 90%;
  }
}
</style>