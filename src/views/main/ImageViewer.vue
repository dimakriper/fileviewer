<template>
  <div>
    <!-- Модальное окно PhotoSwipeLightbox -->
    <div class="pswp-gallery" tabindex="-1" role="dialog" aria-hidden="true" id="gallery--no-dynamic-import">
      <div class="container">
        <div class="row row-cols-2 row-cols-md-2 row-cols-lg-3">
          <div v-for="(image, index) in images" :key="index" class="col">
            <a :href="image.src" :data-size="image.originalSize" @click.prevent="openGallery(index)"
               :data-pswp-src="image.thumbnail"
               :data-pswp-width="image.width"
               :data-pswp-height="image.height"
               target="_blank">
              <img :src="image.thumbnail" class="img-fluid" :alt="image.name">
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PhotoSwipe from 'photoswipe';
import PhotoSwipeLightbox from "photoswipe/lightbox";

export default {
  computed: {
    viewModes() {
      return this.$store.state.viewModes;
    },
    currentViewMode() {
      return this.$store.state.selectedViewMode;
    },
    images() {
      return this.$store.state.images.map((image) => ({
        src: image.src,
        thumbnail: image.thumbnail ? image.thumbnail : image.src, // Используйте src в качестве миниатюры, если thumbnail не указан
        originalSize: [image.width, image.height].join('x'), // Ширина и высота оригинального изображения
        alt: image.alt || '', // Альтернативный текст (пустая строка, если не указан)
        height: image.height,
        width:  image.width,
        name: image.name
      }));
    },
  },
  methods: {
    horizontalFittingZoom(){

    },
    transformHeight(pic){
      let res = this.currentViewMode === 'fit-vertical' ? window.innerHeight : pic.height;
      console.log(res);
      return res
    },
    transformWidth(pic){
      return this.currentViewMode === 'fit-horizontal' ? window.innerWidth : pic.width;
    },
    openGallery(index) {
      const items = this.images.map((image) => ({
        src: image.src,
        w: image.originalSize.split('x')[0], // Ширина оригинала
        h: image.originalSize.split('x')[1], // Высота оригинала
      }));

      const lightbox = new PhotoSwipeLightbox({
        gallery: '#gallery--no-dynamic-import',
        children: 'a',
        pswpModule: PhotoSwipe,
        initialZoomLevel: 'fit'

      });
      lightbox.on('change', () => {
        if (this.currentViewMode !== 'fit'){
          const pswp = lightbox.pswp;
          console.log(pswp);
          console.log(this.currentViewMode);
          let zoom
          switch (this.currentViewMode){
            case 'fit-horizontal':{
              zoom = window.innerWidth/pswp.currSlide.data.width;
              break
            }
            case 'fit-vertical':{
              zoom = window.innerHeight/pswp.currSlide.data.height;
              console.log(zoom);
              break
            }
            case 'original': {
              zoom = 1;
              break
            }
          }

          console.log(zoom);
          setTimeout(() => {
            pswp.currSlide.zoomTo(
              zoom, // slide zoom level, 1 - original image size
              { x: 0, y: 0 }, // zoom center point
              0, // transition duration, can be 0
              true // wether pan/zoom bounds should be ignored
            );
          }, 100)
        }



      });

      lightbox.init();

    },
  },
};
</script>
<style>
.col{
  padding-bottom: 10px;
}
/*.pswp__img {*/
/*  !*max-width: 100vw ;*!*/
/*  !*max-height: 100vh ;*!*/
/*  !*margin: auto; !* Центрирование изображения *!*!*/
/*  !*max-width: 100em; !* Максимальная ширина 100% *!*!*/
/*  !*max-height: none; !* Убрать максимальную высоту *!*!*/
/*  !*height: auto !important; !* Автоматическая высота *!*!*/
/*}*/
/*!* CSS для режима выравнивания по вертикали *!*/
.pswp__img.vertical-align {
  max-width: none; /* Убрать максимальную ширину */
  max-height: 100%; /* Максимальная высота 100% */
  width: auto !important; /* Автоматическая ширина */
}

/* CSS для режима выравнивания по горизонтали */
.pswp__img.horizontal-align {
  max-width: 100em; /* Максимальная ширина 100% */
  max-height: none; /* Убрать максимальную высоту */
  height: auto !important; /* Автоматическая высота */
}

/* CSS для режима 1:1 */
.pswp__img.one-to-one {
  width: 100% !important; /* Ширина 100% */
  height: 100% !important; /* Высота 100% */
  max-width: none !important; /* Убрать максимальную ширину */
  max-height: none !important; /* Убрать максимальную высоту */
}
</style>