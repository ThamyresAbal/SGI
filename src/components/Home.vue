<template>
    <div>
        <TopCarousel />
        <Catalog :title='titleCinema' :images='imagensCinema'/>
        <Catalog :title='titleTeatro' :images='imagensTeatro'/>
        <Catalog :title='titleShow' :images='imagensShow'/>
        
    </div>
</template>

<script>
    import TopCarousel from '@/components/TopCarousel.vue'
    import Catalog from '@/components/Catalogs/Catalog.vue'

    export default {
        name: 'Home',
        data() {
            return {
                titleCinema: "Cinema",
                imagensCinema: ['https://picsum.photos/500/300', 'https://picsum.photos/500/300', 'https://picsum.photos/500/300'],

                titleTeatro: "Teatro",
                imagensTeatro: ['https://picsum.photos/500/300', 'https://picsum.photos/500/300', 'https://picsum.photos/500/300'],

                titleShow: "Show",
                imagensShow: ['https://picsum.photos/500/300', 'https://picsum.photos/500/300', 'https://picsum.photos/500/300'],
            }
        },
        components: {
            TopCarousel,
            Catalog
        }
    }
</script>

<style scoped>

</style>