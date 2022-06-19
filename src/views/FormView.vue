<template>
  <h1>Form VueJS</h1>
  <button class="btn btn-primary" @click="showModal">+Nuevo</button>
  <TableForm></TableForm>
  <InputForm/>
</template>

<script>
import TableForm from "@/components/TableForm";
import InputForm from "@/components/InputForm";
import {mapMutations} from "vuex";

export default {
  name: "FormView",
  data(){
    return{
      myModal: {}
    }
  },
  components: {TableForm, InputForm},
  methods: {
    ...mapMutations(['clear']),
    showModal(){
      this.clear()
      this.myModal.show()
    }
  },
  mounted() {
    this.myModal = new bootstrap.Modal(document.getElementById('myModal'), {
      keyboard: false
    })
  }
}
</script>
