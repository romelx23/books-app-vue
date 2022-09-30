<script lang="ts">
import { useBooksStore } from "@/store/books";
import { ref, defineComponent } from "vue";
import ModalAddBook from "./ModalAddBook.vue";
import { useUiStore } from "../../store/ui";
import { storeToRefs } from "pinia";

export default defineComponent({
  name: "UpdateBook",
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
    const { bookSelected, isUpdate } = storeToRefs(useBooksStore());
    const { updateBook, setIsUpdate } = useBooksStore();
    return {
      formBook,
      updateBook,
      initialState,
      setIsOpen,
      bookSelected,
      setIsUpdate,
      isUpdate,
    };
  },
  methods: {
    handleUpdateBook() {
      this.updateBook({
        ...this.formBook,
      });
      this.setIsOpen(false);
      this.cleanForm();
      this.setIsUpdate(false);
    },
    cleanForm() {
      this.formBook = { ...this.initialState };
    },
  },
  watch: {
    bookSelected() {
      //   console.log(this.bookSelected);
      if (!this.bookSelected) return;
      this.formBook = { ...this.bookSelected };
    },
  },
  components: { ModalAddBook },
});
</script>

<template>
  <ModalAddBook v-if="isUpdate">
    <div class="flex flex-col w-full">
      <h1 class="font-semibold">Actualizar Libro</h1>
      <form action="" @submit.prevent="handleUpdateBook">
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
          <v-icon>mdi-update</v-icon>
          Editar Libro
        </v-btn>
      </form>
    </div>
  </ModalAddBook>
</template>

<style scoped></style>
