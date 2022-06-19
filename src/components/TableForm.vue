<template>
  <table class="table">
    <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Nombres</th>
      <th scope="col">Apellidos</th>
      <th scope="col">Numero</th>
      <th scope="col">Gustos</th>
      <th scope="col">Acciones</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="value in elementos" :key="value.id">
      <th scope="row">{{value.id}}</th>
      <td>{{value.nombres}}</td>
      <td>{{value.apellidos}}</td>
      <td>{{value.numero}}</td>
      <td>{{(value.gustos)?value.gustos.join(', '):''}}</td>
      <td><button class="btn btn-success" @click="showEdit(value.id)">editar</button>
      <button class="btn btn-warning" @click="eliminar(value.id)">eliminar</button></td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import {mapState,mapActions} from "vuex";
const Swal = require('sweetalert2')
export default {
  name: "TableForm",
  data(){
    return {
      myModal:{}
    }
  },
  computed:{
    ...mapState(["elementos"]),
    /*gustos(data){
      return data.join(', ')
    }*/
  },
  methods: {
    ...mapActions(['deleteAction','setElementAction','addLocalStorague','addAllFirebase']),
    eliminar(id){
      Swal.fire({
        title: 'eliminar?',
        showCancelButton: true,
      }).then((result)=>{
        if(result.isConfirmed){
          this.deleteAction(id)
        }
      })
    },
    showEdit(id){
      this.setElementAction(id)
      this.myModal.show();
    }
  },
  created() {
    this.addAllFirebase()
  },
  mounted() {
    this.myModal = new bootstrap.Modal(document.getElementById('myModal'), {
      keyboard: false
    })
  }
}
</script>

<style scoped>

</style>