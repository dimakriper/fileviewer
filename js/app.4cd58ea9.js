(function(){var e={2508:function(e,t,i){"use strict";var n=i(6369),r=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},o=[],a=i(1001),l={},s=(0,a.Z)(l,r,o,!1,null,null,null),c=s.exports,d=i(2631),u=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("div",{staticClass:"row"},[t("initial-screen"),t("div",{staticClass:"col-3 col-sm-2 col-md-2 col-lg-2",staticStyle:{"max-height":"100vh","overflow-y":"scroll"}},[t("file-pond-input")],1),t("div",{staticClass:"col-9 col-sm-10 col-md-10 col-lg-10",staticStyle:{"max-height":"100vh","overflow-y":"scroll"}},[t("image-viewer")],1)],1)])},h=[],f=function(){var e=this,t=e._self._c;return t("div",[t("h1",[e._v("Добро пожаловать на сайт для просмотра изображений!")]),t("br"),t("div",{staticStyle:{"{width":"70vw}"}},[t("label",{attrs:{for:"viewMode"}},[e._v("Выберите режим вписывания:")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedViewMode,expression:"selectedViewMode"}],staticClass:"form-select",attrs:{id:"viewMode"},on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedViewMode=t.target.multiple?i:i[0]}}},e._l(e.viewModes,(function(i){return t("option",{key:i,domProps:{value:i}},[e._v(e._s(i))])})),0)]),t("br")])},m=[],w=(i(7658),function(){var e=this,t=e._self._c;return t("div",[t("file-pond",{ref:"pond",attrs:{name:"test","label-idle":"Drop files here...","allow-multiple":!0,"accepted-file-types":"image/jpeg, image/png","allow-image-size-metadata":!0,files:e.myFiles},on:{init:e.handleFilePondInit,updatefiles:e.onUpdateFiles}})],1)}),g=[],p=i(7014),v=i.n(p),y=i(3339),M=i.n(y),b=i(2548),_=i.n(b),V=i(5513),S=i.n(V),I=i(3368),x=i.n(I),F=(v()(M(),_(),S(),x()),{data:function(){return{myFiles:[]}},methods:{onUpdateFiles(e){let t=[];e.forEach((e=>{t.push({src:e.getFileEncodeDataURL(),thumbnail:null,width:e.getMetadata().size.width,height:e.getMetadata().size.height}),console.log(t)})),this.$store.commit("setImages",t)},handleFilePondInit:function(){console.log("FilePond has initialized")}}}),O=F,P=(0,a.Z)(O,w,g,!1,null,null,null),z=P.exports,C={name:"initial-screen",data(){return{selectedViewMode:this.$store.state.selectedViewMode}},watch:{selectedViewMode(e){this.$store.commit("setSelectedViewMode",e)}},computed:{selectedDirectory:{get(){return this.$store.state.selectedDirectory},set(e){this.$store.commit("setSelectedDirectory",e)}},viewModes(){return this.$store.state.viewModes}},methods:{openFileInput(){this.$refs.fileInput.click()},handleViewModeChange(){this.$store.commit("setCurrentViewMode",this.selectedViewMode)},async handleFileInputChange(e){const t=e.target.files;if(t.length>0){const e=[];for(let i=0;i<t.length;i++){const n=t[i],r=await this.readFileAsImage(n);e.push(r)}this.$store.commit("setImages",e)}},readFileAsImage(e){return new Promise((t=>{const i=new FileReader;i.onload=e=>{const i=new Image;i.src=e.target.result,i.onload=()=>{t({src:i.src,width:i.width,height:i.height})}},i.readAsDataURL(e)}))},startViewing(){},saveSelectedViewMode(){this.$store.commit("setSelectedViewMode",this.selectedViewMode)}}},k=C,D=(0,a.Z)(k,f,m,!1,null,"27b40282",null),Z=D.exports,$=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"pswp-gallery",attrs:{tabindex:"-1",role:"dialog","aria-hidden":"true",id:"gallery--no-dynamic-import"}},[t("div",{staticClass:"container"},[t("div",{staticClass:"row row-cols-2 row-cols-md-2 row-cols-lg-3"},e._l(e.images,(function(i,n){return t("div",{key:n,staticClass:"col"},[t("a",{attrs:{href:i.src,"data-size":i.originalSize,"data-pswp-src":i.thumbnail,"data-pswp-width":i.width,"data-pswp-height":i.height,target:"_blank"},on:{click:function(t){return t.preventDefault(),e.openGallery(n)}}},[t("img",{staticClass:"img-fluid",attrs:{src:i.thumbnail,alt:i.name}})])])})),0)])])])},j=[],E=i(8484),T=i(8345),A={computed:{viewModes(){return this.$store.state.viewModes},currentViewMode(){return this.$store.state.selectedViewMode},images(){return this.$store.state.images.map((e=>({src:e.src,thumbnail:e.thumbnail?e.thumbnail:e.src,originalSize:[e.width,e.height].join("x"),alt:e.alt||"",height:e.height,width:e.width,name:e.name})))}},methods:{horizontalFittingZoom(){},transformHeight(e){let t="fit-vertical"===this.currentViewMode?window.innerHeight:e.height;return console.log(t),t},transformWidth(e){return"fit-horizontal"===this.currentViewMode?window.innerWidth:e.width},openGallery(e){this.images.map((e=>({src:e.src,w:e.originalSize.split("x")[0],h:e.originalSize.split("x")[1]})));const t=new T.Z({gallery:"#gallery--no-dynamic-import",children:"a",pswpModule:E.Z,initialZoomLevel:"fit"});t.on("change",(()=>{if("fit"!==this.currentViewMode){const e=t.pswp;let i;switch(console.log(e),console.log(this.currentViewMode),this.currentViewMode){case"fit-horizontal":i=window.innerWidth/e.currSlide.data.width;break;case"fit-vertical":i=window.innerHeight/e.currSlide.data.height,console.log(i);break;case"original":i=1;break}console.log(i),setTimeout((()=>{e.currSlide.zoomTo(i,{x:0,y:0},0,!0)}),100)}})),t.init()}}},L=A,U=(0,a.Z)(L,$,j,!1,null,null,null),R=U.exports,W={components:{InitialScreen:Z,ImageViewer:R,FilePondInput:z}},H=W,G=(0,a.Z)(H,u,h,!1,null,"027c7f96",null),N=G.exports;n["default"].use(d.ZP);const q=[{path:"/",name:"home",component:N}],B=new d.ZP({routes:q});var J=B,K=i(3822);n["default"].use(K.ZP);var Q=new K.ZP.Store({state:{selectedDirectory:null,selectedViewMode:"fit",images:[],viewModes:["fit","fit-vertical","fit-horizontal","original"],currentViewMode:"fit"},mutations:{setSelectedDirectory(e,t){e.selectedDirectory=t},setSelectedViewMode(e,t){e.selectedViewMode=t},setImages(e,t){e.images=t}}});i(2166);n["default"].config.productionTip=!1,new n["default"]({router:J,store:Q,render:e=>e(c)}).$mount("#app")},3368:function(e,t,i){i(6229),i(7330),i(2062),function(t,i){e.exports=i()}(0,(function(){"use strict";var e=function(e){return/^image/.test(e.type)},t=function(e){return new Promise((function(t,i){var n=document.createElement("img");n.src=URL.createObjectURL(e),n.onerror=function(e){clearInterval(r),i(e)};var r=setInterval((function(){n.naturalWidth&&n.naturalHeight&&(clearInterval(r),URL.revokeObjectURL(n.src),t({width:n.naturalWidth,height:n.naturalHeight}))}),1)}))},i=function(i){var n=i.addFilter,r=i.utils,o=r.Type,a=r.isFile;return n("DID_LOAD_ITEM",(function(i,n){var r=n.query;return new Promise((function(n,o){var l=i.file;if(!a(l)||!e(l)||!r("GET_ALLOW_IMAGE_SIZE_METADATA"))return n(i);t(l).then((function(e){i.setMetadata("size",{width:e.width,height:e.height}),n(i)}))}))})),{options:{allowImageSizeMetadata:[!0,o.BOOLEAN]}}};return"undefined"!==typeof navigator&&document&&document.dispatchEvent(new CustomEvent("FilePond:pluginloaded",{detail:i})),i}))}},t={};function i(n){var r=t[n];if(void 0!==r)return r.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,i),o.exports}i.m=e,function(){var e=[];i.O=function(t,n,r,o){if(!n){var a=1/0;for(d=0;d<e.length;d++){n=e[d][0],r=e[d][1],o=e[d][2];for(var l=!0,s=0;s<n.length;s++)(!1&o||a>=o)&&Object.keys(i.O).every((function(e){return i.O[e](n[s])}))?n.splice(s--,1):(l=!1,o<a&&(a=o));if(l){e.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[n,r,o]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};i.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,a=n[0],l=n[1],s=n[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(r in l)i.o(l,r)&&(i.m[r]=l[r]);if(s)var d=s(i)}for(t&&t(n);c<a.length;c++)o=a[c],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(d)},n=self["webpackChunkfileviewer"]=self["webpackChunkfileviewer"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=i.O(void 0,[998],(function(){return i(2508)}));n=i.O(n)})();
//# sourceMappingURL=app.4cd58ea9.js.map