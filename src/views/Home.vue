<template>
  <section class="container-fluid">
    <div class="container mb-5">
      <h1>Birds</h1>
      <p>
        Birds are a group of warm-blooded vertebrates constituting the class
        Aves, characterised by feathers, toothless beaked jaws, the laying of
        hard-shelled eggs, a high metabolic rate, a four-chambered heart, and a
        strong yet lightweight skeleton. Birds live worldwide and range in size
        from the 5.5 cm (2.2 in) bee hummingbird to the 2.8 m (9 ft 2 in) common
        ostrich. There are about ten thousand living species, more than half of
        which are passerine, or "perching" birds. Birds have wings whose
        development varies according to species; the only known groups without
        wings are the extinct moa and elephant birds. Wings, which are modified
        forelimbs, gave birds the ability to fly, although further evolution has
        led to the loss of flight in some birds, including ratites, penguins,
        and diverse endemic island species.
      </p>
    </div>

    <div class="container">
      <div class="row">
        <div
          class="col-md-4 col-6 col-lg-3 mb-4"
          v-for="bird in $store.state.birds"
          :key="bird.Id"
        >
          <div
            class="card rounded-4 position-relative border border-2 border-secondary"
          >
            <img :src="require(`@/assets/${bird.ImagePath}`)" alt="" />
            <div class="card-body">
              <h5>{{ bird.BirdMyanmarName }}</h5>
              <h5>{{ bird.BirdEnglishName }}</h5>
              <div class="btn-holder position-absolute">
                <router-link
                  class="btn"
                  :to="{
                    name: 'BirdsDetail',
                    params: {
                      id: bird.Id,
                    },
                  }"
                  >See More</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeVue",
};
</script>

<style scoped>
.container-fluid {
  margin-top: 50px;
}

h1 {
  font-size: 48px;
  font-weight: 600;
  letter-spacing: 1px;
}

p {
  font-weight: 500;
  letter-spacing: 0.5px;
}
.card {
  height: 430px;
  background: #fbf9f1;
}

.card img {
  height: 250px;
  object-fit: cover;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.card-body h5 {
  font-weight: 600;
  letter-spacing: 0.8px;
}

.btn-holder {
  bottom: 15px;
}

.btn-holder .btn {
  background: #aad7d9;
}

.btn:hover {
  transition: 0.5s;
  background: #e5e1da;
  color: #92c7cf;
}

@media screen and (max-width: 768px) {
  .card {
    height: 470px;
  }
}
</style>
