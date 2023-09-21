<template>
  <div>
    <h1>Добро пожаловать на сайт для просмотра изображений!</h1>
    <br>
    <div style="{width: 70vw}">
        <label for="viewMode">Выберите режим вписывания:</label>
        <select class="form-select" id="viewMode" v-model="selectedViewMode">
          <option v-for="mode in viewModes" :key="mode" :value="mode">{{ mode }}</option>
        </select>
    </div>
    <br>
  </div>
</template>

<script>
import FilePondInput from "@/views/main/FilePondInput.vue";

export default {

  name: "initial-screen",
  data(){
    return {
      selectedViewMode: this.$store.state.selectedViewMode
    }
  },
  watch: {
    selectedViewMode(val){
      this.$store.commit('setSelectedViewMode', val)
    }
  },
  computed: {
    selectedDirectory: {
      get() {
        return this.$store.state.selectedDirectory;
      },
      set(directory) {
        this.$store.commit('setSelectedDirectory', directory);
      },
    },

    viewModes() {
      return this.$store.state.viewModes;
    },
  },
  methods: {
    openFileInput() {
      this.$refs.fileInput.click();
    },
    handleViewModeChange() {
      // Сохраняем выбранный режим просмотра в хранилище Vuex
      this.$store.commit('setCurrentViewMode', this.selectedViewMode);
    },
    async handleFileInputChange(event) {
      const files = event.target.files;
      if (files.length > 0) {
        const images = [];

        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          const image = await this.readFileAsImage(file);
          images.push(image);
        }

        // Передаем массив объектов изображений в мутацию для хранения в хранилище Vuex.
        this.$store.commit('setImages', images);
      }
    },
    readFileAsImage(file) {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          const image = new Image();
          image.src = event.target.result;
          image.onload = () => {
            resolve({
              src: image.src,
              width: image.width,
              height: image.height,
            });
          };
        };
        reader.readAsDataURL(file);
      });
    },
    startViewing() {
      // Здесь можно перейти на экран просмотра изображений, используя данные из хранилища Vuex.
      // Можно использовать маршрутизацию Vue Router для этого.
    },
    saveSelectedViewMode() {
      // Сохраняем выбранный режим просмотра в хранилище Vuex
      this.$store.commit('setSelectedViewMode', this.selectedViewMode);
    },
  },
};
</script>

<style scoped>
/* Здесь можно добавить стили для вашего компонента */
</style>