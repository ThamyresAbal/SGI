<template>
    <h3> {{ todosOsFilmes }} </h3>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';

    export default {
        name: 'Home',
        computed: mapGetters(['todosOsFilmes']),
        methods:{ 
            ...mapActions(['getFilmes'])
        },
        created() {
            this.getFilmes();
        },
    }
</script>

<style scoped>

</style>