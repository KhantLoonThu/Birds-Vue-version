<template>
  <div class="container-fluid position-relative">
    <div class="square1"></div>
    <div class="circle1"></div>

    <div class="container position-absolute">
      <div class="row">
        <div class="col-md-4 col-lg-4 col-8 mx-auto position-relative mb-5">
          <img :src="require(`@/assets/${getBirdDetail.ImagePath}`)" alt="" />
          <div class="image-shaper"></div>
        </div>
        <div class="col-12 col-md-6 col-lg-6 mx-auto mb-5">
          <h2 class="mb-3">{{ getBirdDetail.BirdMyanmarName }}</h2>
          <h3 class="my-3">{{ getBirdDetail.BirdEnglishName }}</h3>
          <p class="mt-5">{{ getBirdDetail.Description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BirdsDetail",
  props: ["id"],
  computed: {
    getBirdDetail() {
      let birds = this.$store.state.birds;
      let currendBird = this.id;
      return birds.find((bird) => bird.Id == currendBird);
    },
  },
};
</script>

<style scoped>
.container-fluid {
  height: 100vh;
  overflow: hidden;
}
.square1 {
  width: 600px;
  height: 600px;
  background: #92c7cf;
  border-radius: 5%;
  transform: rotate(60deg);
  position: absolute;
  bottom: 670px;
  right: 400px;
  z-index: 0;
}
.circle1 {
  width: 600px;
  height: 600px;
  background: #aad7d9;
  border-radius: 50%;
  position: absolute;
  bottom: -200px;
  right: -500px;
  z-index: 0;
}

.container {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.container img {
  width: 100%;
}

.container img,
.container h2,
.container h3,
.container p {
  z-index: 1000;
}

.image-shaper {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  top: -35px;
  left: -25px;
  z-index: -1;
}
</style>
