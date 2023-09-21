import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedDirectory: null,
    selectedViewMode: 'fit',
    images: [],
    viewModes: ["fit", "fit-vertical", "fit-horizontal", "original"], // Доступные режимы просмотра
    currentViewMode: "fit", // Режим по умолчанию
  },
  mutations: {
    setSelectedDirectory(state, directory) {
      state.selectedDirectory = directory;
    },
    setSelectedViewMode(state, viewMode) {
      state.selectedViewMode = viewMode;
    },
    setImages(state, images) {
      state.images = images;
    },
  },
});