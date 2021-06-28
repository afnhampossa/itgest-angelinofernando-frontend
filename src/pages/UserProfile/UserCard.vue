<template>
  <md-card class="md-card-profile">
    <div class="md-card-avatar">
      <img class="img" :src="cardUserImage" />
    </div>

    <md-card-content>
      <h6 class="category text-gray">Administrador</h6>
      <h4 class="card-title">Angelino Fernando</h4>
      <p class="card-description">
        Sou formado em Engenharia Informática, com inclinação em Desenvolvimento de Sistemas.
      </p>
      <md-button class="md-round md-success">Trocar Foto</md-button>
    </md-card-content>
  </md-card>
</template>
<script>
export default {
  name: "user-card",
  props: {
    cardUserImage: {
      type: String,
      default: require("@/assets/img/faces/marc.jpg")
    }
  },
  data() {
    return {};
  }
};
</script>
<style></style>
