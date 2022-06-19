<template>
  <div class="modal" id="myModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="(elemento.id.length>0)?edit():save()">
            <div class="row g-3 align-items-center">
              <div class="col-auto">
                <label for="inputPassword6" class="col-form-label">Nombres</label>
              </div>
              <div class="col-auto">
                <input type="text" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline"
                       v-model="elemento.nombres">
              </div>
            </div>
            <div class="row g-3 align-items-center">
              <div class="col-auto">
                <label for="inputPassword6" class="col-form-label">Apellidos</label>
              </div>
              <div class="col-auto">
                <input type="text" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline"
                       v-model="elemento.apellidos">
              </div>
            </div>
            <div class="row g-3 align-items-center">
              <div class="col-auto">
                <label for="inputPassword6" class="col-form-label">Numero</label>
              </div>
              <div class="col-auto">
                <input type="number" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline"
                       v-model="elemento.numero">
              </div>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="flexCheckDefault" v-model="elemento.gustos" value="piña">
              <label class="form-check-label" for="flexCheckDefault">
                piña
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="flexCheckDefault" v-model="elemento.gustos" value="papaya">
              <label class="form-check-label" for="flexCheckDefault">
                papaya
              </label>
            </div>
            <button type="submit">Guardar</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from "vuex";

const shortid = require('shortid');
export default {
  name: "InputForm",
  data(){
    return{
      myModal: {}
    }
  },
  computed: {
    ...mapState(["elemento","myModal"])
  },
  methods: {
    ...mapActions(['addAction',"setElementAction"]),
    save() {
      this.elemento.id = shortid.generate()
      this.addAction(this.elemento);
      this.myModal.hide()
    },
    edit(){
      this.myModal.hide()
    }
  },mounted() {
    this.myModal = new bootstrap.Modal(document.getElementById('myModal'), {
      keyboard: false
    })
  }
}
</script>

<style scoped>

</style>