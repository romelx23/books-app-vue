<script lang="ts">
import { useBooksStore } from "@/store/books";
import { ref, defineComponent } from "vue";
import ModalAddBook from "./ModalAddBook.vue";
import { useUiStore } from "../../store/ui";

export default defineComponent({
  name: "AddBook",
  setup() {
    const initialState = {
      title: "",
      description: "",
      image: "",
      genero: "",
      autor: "",
      editorial: "",
      year: "",
      pages: "",
      price: "",
    };
    const formBook = ref({ ...initialState });
    const { setIsOpen } = useUiStore();
    const { createBook } = useBooksStore();
    return { formBook, createBook, initialState, setIsOpen };
  },
  methods: {
    addBook() {
      this.createBook({
        id: crypto.getRandomValues(new Uint8Array(4)).join(""),
        ...this.formBook,
      });
      this.setIsOpen(false);
      this.cleanForm();
    },
    cleanForm() {
      this.formBook = { ...this.initialState };
    },
  },
  components: { ModalAddBook },
});
</script>

<template>
  <ModalAddBook>
    <div class="flex flex-col w-full">
      <h1 class="font-semibold">Agregar Libro</h1>
      <form action="" @submit.prevent="addBook">
        <v-col>
          <v-label for="nombre">Nombre</v-label>
          <v-text-field
            v-model="formBook.title"
            class="w-full"
            id="nombre"
            outlined
            dense
            placeholder="Biografia de Steve Jobs"
          />
          <v-label for="description">Descripción</v-label>
          <v-textarea
            v-model="formBook.description"
            class="w-full"
            id="description"
            max-rows="4"
            outlined
            dense
            placeholder="Esta es la biografía de Steve Jobs , donde se cuenta ..."
          />
          <v-label for="image">Image</v-label>
          <v-text-field
            v-model="formBook.image"
            class="w-full"
            id="image"
            outlined
            dense
            placeholder="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          />
          <template v-if="formBook.image">
            <v-img
              :src="formBook.image"
              class="w-32 h-32"
              contain
              position="center"
              max-width="100%"
            />
          </template>
          <!-- genero -->
          <v-label for="genero">Genero</v-label>
          <v-text-field
            v-model="formBook.genero"
            class="w-full"
            id="genero"
            outlined
            dense
            placeholder="Biografía"
          />
          <!-- autor -->
          <v-label for="autor">Autor</v-label>
          <v-text-field
            v-model="formBook.autor"
            class="w-full"
            id="autor"
            outlined
            dense
            placeholder="Walter Isaacson"
          />
          <!-- fecha de publicacion -->
          <v-label for="editorial">Editorial</v-label>
          <v-text-field
            v-model="formBook.editorial"
            class="w-full"
            id="editorial"
            outlined
            dense
            placeholder="Simon & Schuster"
          />
          <!-- fecha de publicacion -->
          <v-label for="year">Fecha de publicación</v-label>
          <v-text-field
            v-model="formBook.year"
            class="w-full"
            id="year"
            outlined
            dense
            placeholder="2011"
          />
        </v-col>
        <v-btn type="submit" color="primary" class="w-full flex justify-center">
          <v-icon>mdi-plus</v-icon>
          Agregar Libro
        </v-btn>
      </form>
    </div>
  </ModalAddBook>
</template>

<style scoped></style>
