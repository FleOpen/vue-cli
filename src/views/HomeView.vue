<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1 :style="colorContador">Mi contador: {{ contador }}</h1>
    <input type="text" v-model.number="cantidad" />
    <br/>
    <Boton :titulo="'incrementar'" :cantidad="cantidad"/>
    <Boton :titulo="'disminuir'" :cantidad="cantidad"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {mapState,mapActions} from 'vuex'
import Boton from "@/components/Boton";
export default {
  name: 'HomeView',
  data(){
    return {
     cantidad: 1
    }
  },
  computed: {
    ...mapState(['contador']),
    colorContador(){
      return [this.contador>100 ? {'color':'green'}:{'color':'red'}]
    }
  },
  methods: {
    ...mapActions(['accionIncrementar'])
  },
  components: {
    Boton,
    HelloWorld
  }
}
</script>
