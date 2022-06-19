<template>
  <h1>Titulo</h1>
  <h2>{{ text }}</h2>
</template>

<script>
export default {
  name: "Title",
  props: {
    text: String
  }
}
</script>

<style scoped>

</style>