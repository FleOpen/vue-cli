<template>
<Title text="el articulo" />
  <h3>{{article.title}}</h3>
  <p>{{article.body}}</p>
</template>

<script>
import Title from "@/components/Title";
export default {
  name: "ArticuloView",
  data() {
    return {
      article:[],
      id: 3
    }
  },
  methods: {
    async getArticulo(){
      const data = await fetch('https://jsonplaceholder.typicode.com/posts/'+ this.$route.params.id)
      const json = await data.json();
      this.article = json
    }
  },
  components:{
    Title
  },
  created() {
    this.getArticulo()
  }
}
</script>

<style scoped>

</style>