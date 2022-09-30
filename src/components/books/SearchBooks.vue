<script lang="ts">
import { defineComponent, ref } from "vue";
import { useBooksStore } from "../../store/books";
export default defineComponent({
  name: "SearchBooks",
  setup() {
    const search = ref("");
    const { searchBook } = useBooksStore();
    return { search, searchBook };
  },
  methods: {
    handleSearchBook() {
      this.searchBook(this.search);
    },
  },
});
</script>

<template>
  <v-row>
    <v-col>
      <form @submit.prevent="handleSearchBook">
        <v-label for="buscar" class="pb-2">Ingrese el nombre libro</v-label>
        <v-text-field
          v-model="search"
          class="w-full"
          id="buscar"
          outlined
          dense
          placeholder="Buscar"
        />
      </form>
      <v-btn
        type="submit"
        color="primary"
        class="w-full md:w-28 flex justify-center"
      >
        <v-icon>mdi-magnify</v-icon>
        Buscar
      </v-btn>
    </v-col>
  </v-row>
</template>

<style scoped></style>
