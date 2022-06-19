<template>
  <Title text="Articulos de prueba"/>
  <div v-for="item in articulos" :key="item.id">
    <router-link :to="`/blog/${item.id}`">
      {{item.title}}
    </router-link>
  </div>
</template>

<script>
import Title from "@/components/Title";

export default {
  name: "BlogView",
  data() {
    return{
      articulos: []
    }
  },
  methods: {
    async obtenerData() {
      const data = await fetch('https://jsonplaceholder.typicode.com/posts')
      const array = await data.json()
      this.articulos = array;
    }
  },
  components: {
    Title
  },
  created() {
    this.obtenerData();
  }
}
</script>

<style scoped>

</style>