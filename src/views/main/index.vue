<template>
  <div class="container">
    <div class="row">
      <initial-screen></initial-screen>
      <div class="col-3 col-sm-2 col-md-2 col-lg-2" style="max-height: 100vh; overflow-y: scroll">
        <file-pond-input></file-pond-input>
      </div>
      <div class="col-9 col-sm-10 col-md-10 col-lg-10" style="max-height: 100vh; overflow-y: scroll">
        <image-viewer></image-viewer>
      </div>
    </div>
  </div>
</template>

<script>
import InitialScreen from "@/views/main/InitialScreen.vue";
import ImageViewer  from "@/views/main/ImageViewer.vue" ;
import FilePondInput from "@/views/main/FilePondInput.vue";
export default {
  // name: "indexView",
  components: {
    InitialScreen,
    ImageViewer,
    FilePondInput
  }
};
</script>

<style scoped>

</style>