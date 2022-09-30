<script setup lang="ts">
import { ref, watchEffect } from "vue";

const show = ref(false);
const handleScrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
watchEffect(() => {
  if (window.scrollY > 100) {
    show.value = true;
  } else {
    show.value = false;
  }
});
</script>

<template>
  <v-btn
    class="bottom-4 right-4"
    style="position: fixed"
    color="primary"
    @click="handleScrollTop"
  >
    <v-icon>mdi-arrow-up</v-icon>
  </v-btn>
</template>

<style scoped></style>
