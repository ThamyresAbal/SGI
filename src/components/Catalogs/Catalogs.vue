<template>
  <div class="catalogs">
    <TopCarousel
      @on-search="searchMovie"
    />

    <div class="catalogs__list">
      <Catalog
        title="Cinema"
        :images="[
          'https://picsum.photos/500/300',
          'https://picsum.photos/id/10/500/300',
          'https://picsum.photos/id/237/500/300',
          'https://picsum.photos/seed/picsum/500/300',
        ]"
      />

      <Catalog
        title="Teatro"
        :images="[
          'https://picsum.photos/id/237/500/300',
          'https://picsum.photos/500/300',
          'https://picsum.photos/seed/picsum/500/300',
          'https://picsum.photos/id/10/500/300',
        ]"
      />

      <Catalog
        title="Shows"
        :images="[
          'https://picsum.photos/id/10/500/300',
          'https://picsum.photos/id/237/500/300',
          'https://picsum.photos/seed/picsum/500/300',
          'https://picsum.photos/500/300',
        ]"
      />
    </div>
  </div>
</template>

<script>
import TopCarousel from '../../components/TopCarousel.vue';
import Catalog from './components/Catalog.vue';

export default {
  name: 'Catalogs',
  components: {
    TopCarousel,
    Catalog,
  },
  methods: {
    searchMovie(query) {
      window.alert("Pesquisando por " + query + '....');
    }
  }
}
</script>

<style scoped>
.catalogs__list {
  margin: 0 5%;
}
</style>