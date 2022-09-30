<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
// import { useRoute } from "vue-router";
import LayoutBook from "../components/layouts/LayoutBook.vue";
import { useBooksStore } from "../store/books";
import CardBook from "../components/books/CardBook.vue";
import SearchBooks from "../components/books/SearchBooks.vue";
import { storeToRefs } from "pinia";
import AddBook from "../components/books/AddBook.vue";
import { useUiStore } from "../store/ui";
import UpdateBook from "../components/books/UpdateBook.vue";
export default defineComponent({
  name: "BookView",
  setup() {
    const { searchTerm, books, searchBooks } = storeToRefs(useBooksStore());
    const { loadLocalStorage } = useBooksStore();
    const { setIsOpen } = useUiStore();
    const book = ref("");
    onMounted(() => {
      loadLocalStorage();
    });
    return {
      book,
      books,
      searchTerm,
      searchBooks,
      setIsOpen,
      loadLocalStorage,
    };
  },
  data() {
    return {
      drawer: false,
    };
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
    goBack() {
      this.$router.go(-1);
    },
  },
  components: {
    LayoutBook,
    CardBook,
    SearchBooks,
    AddBook,
    UpdateBook,
  },
});
</script>

<template>
  <LayoutBook>
    <v-col>
      <v-row class="py-3 px-2">
        <h1 class="w-full text-center font-semibold text-2xl">
          Panel de Control de libros
        </h1>
      </v-row>
      <!-- btn agregar -->
      <v-row class="pt-2 flex justify-end">
        <v-btn
          color="secondary"
          title="Agregar"
          class="w-28 flex justify-center"
          @click="setIsOpen(true)"
        >
          <v-icon color="white">mdi-plus</v-icon>
          <p class="text-white">Agregar</p>
        </v-btn>
      </v-row>
      <!-- searh input -->
      <SearchBooks />
      <!-- cards -->
      <v-row>
        <v-col>
          <template v-if="!searchTerm">
            <template v-for="book in books" :key="book.id">
              <CardBook :book="book" />
            </template>
          </template>
          <template v-else>
            <h1>Resultados: {{ searchBooks.length }}</h1>
            <template v-for="book in searchBooks" :key="book.id">
              <CardBook :book="book" />
            </template>
          </template>
        </v-col>
      </v-row>

      <!-- modal -->
      <!-- <ModalAddBook :open-drawer="open" @close-modal="closeModal" /> -->
      <AddBook />
      <UpdateBook />
    </v-col>
  </LayoutBook>
</template>

<style scoped></style>
