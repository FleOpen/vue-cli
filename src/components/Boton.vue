<template>
  <button @click="boton(objeto)">{{ titulo }}</button>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: "boton",
  props: {
    titulo: String,
    cantidad: Number
  },
  methods: {
    ...mapActions(['boton'])
  },
  computed: {
    objeto() {
      return {title:this.titulo,cantidad:this.cantidad};
    }
  }
}
</script>

<style scoped>

</style>