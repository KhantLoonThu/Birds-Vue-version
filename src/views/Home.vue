<template>
  <section class="container-fluid">
    <div class="container">
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
          class="col-md-4 col-6 col-lg-3"
          v-for="bird in $store.state.birds"
          :key="bird.Id"
        >
          <div class="card">
            <img :src="require(`@/assets/${bird.ImagePath}`)" alt="" />
            <div class="card-body">
              <h5>{{ bird.BirdMyanmarName }}</h5>
              <h5>{{ bird.BirdEnglishName }}</h5>
              <div>
                <router-link :to="{ name: 'BirdsDetail' }"
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

<style scoped></style>
