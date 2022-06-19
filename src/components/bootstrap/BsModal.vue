<template>
  <div>
    <slot name="trigger"></slot>
    <slot name="target"></slot>
  </div>
</template>

<script>
export default {
  name: "BsModal",
  mounted() {
    var trigger = this.$slots['trigger'][0].elm
    var target = this.$slots['target'][0].elm
    trigger.addEventListener('click',()=>{
      var theModal = new Modal(target, {})
      theModal.show()
    })
  }
}
</script>

<style scoped>

</style>