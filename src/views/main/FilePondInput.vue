<template>
  <div >
    <file-pond
      name="test"
      ref="pond"
      label-idle="Drop files here..."
      v-bind:allow-multiple="true"
      accepted-file-types="image/jpeg, image/png"
      :allow-image-size-metadata="true"
      v-bind:files="myFiles"
      v-on:init="handleFilePondInit"
      @updatefiles="onUpdateFiles"
    />
  </div>
</template>

<script>
// Import Vue FilePond
import vueFilePond from "vue-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import FilePond plugins
// Please note that you need to install these plugins separately

// Import image preview plugin styles
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";

// Import image preview and file type validation plugins
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginFileEncode from 'filepond-plugin-file-encode';
import FilepondPluginImageSizeMetadata from '@/plugins/ilepond-plugin-image-size-metadata'
// Create component
var FilePond = vueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview,
  FilePondPluginFileEncode,
  FilepondPluginImageSizeMetadata
);

export default {

  data: function () {
    return { myFiles: [] };
  },
  methods: {
    onUpdateFiles(files){

      // console.log(file.getMetadata());
      let imgges = []
      files.forEach(file => {
          imgges.push({
            src: file.getFileEncodeDataURL(),
            thumbnail: null,
            width: file.getMetadata().size.width,
            height: file.getMetadata().size.height
          })
      console.log(imgges);
      })
      this.$store.commit('setImages', imgges)
      // console.log(this.$store.state.images);
    },
    handleFilePondInit: function () {
      console.log("FilePond has initialized");

      // FilePond instance methods are available on `this.$refs.pond`
    },
  },
};
</script>
<style>

</style>