<template>
  <div class="catalog">
    <h1 class="catalog__title">
      {{ title }}
    </h1>

    <div class="catalog__carousel">
      <swiper :options="swiperOptions">
        <swiper-slide
          v-for="(image, i) in images"
          v-bind:key="i"
        >
          <img :src="image" class="image" />
        </swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Catalog',
  data: () => ({
    swiperOptions: {
      pagination: {
        el: '.swiper-pagination',
      },
      breakpoints: {
        700: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        1000: {
          slidesPerView: 3,
          spaceBetween: 16,
        }
      },
    }
  }),
  props: {
    title: String,
    images: Array,
  },
}
</script>

<style scoped>
  .catalog {
    margin: 24px 24px 48px 24px;
  }

  .catalog__title {
    font-family: var(--default-font);
    color: var(--primary-color);
    font-size: 22px;
    line-height: 26px;
    font-weight: 600;
    margin-bottom: 24px;
  }

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>