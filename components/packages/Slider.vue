<template>
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper" :class="hasMargin ? 'my-swiper': ''">
      <div class="swiper-slide" v-for="(banner, i) in images" :key="i">
        <img :src="banner.src" />
      </div>
    </div>
    <div class="swiper-pagination swiper-pagination-bullets"></div>
  </div>
</template>


<script>
export default {
  name: "Slider",
  props: {
    images: {
      type: Array,
      default: []
    },
    hasMargin: {
      type: Boolean,
      default: false
    }
  },
  components: {},
  data() {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true
        },
        on: {
          // slideChange() {
          //   console.log("onSlideChangeEnd", this);
          // },
          // tap() {
          //   console.log("onTap", this);
          // }
        }
      }
    };
  }
};
</script>

<style lang="css" scoped>
.my-swiper {
  /* margin-top: 5em; */
  width: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 38px;
  font-weight: 700;
  background-color: #eee;
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
}

.swiper-pagination > .swiper-pagination-bullet {
  background-color: red;
}
</style>