<script lang="ts">
import type { Book } from "@/interfaces/books";
import { useBooksStore } from "@/store/books";
import { useUiStore } from "@/store/ui";
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "CardBook",
  setup() {
    const modal = ref(null);
    const { setIsOpen } = useUiStore();
    const { updateBook, deleteBook, selectedBook, setIsUpdate } =
      useBooksStore();
    return {
      modal,
      updateBook,
      deleteBook,
      selectedBook,
      setIsOpen,
      setIsUpdate,
    };
  },
  props: {
    book: {
      type: Object as () => Book,
      default: () => {},
    },
  },
  methods: {
    handleUpdateBook() {
      if (!this.book.id) return;
      this.setIsOpen(true);
      this.selectedBook(this.book.id);
      this.setIsUpdate(true);
    },
  },
});
</script>

<template>
  <v-card
    class="mx-auto my-2 hover:cursor-pointer hover:shadow-md hover:shadow-gray-400/30"
  >
    <div class="flex flex-col justify-center md:flex-row">
      <v-img
        :src="book.image ? book.image : 'https://picsum.photos/200/300'"
        max-width="350"
        max-height="350"
        class="flex md:w-1/2 h-full m-auto min-w-full md:min-w-fit"
      ></v-img>
      <div class="md:w-1/2">
        <v-card-title class="text-h5" v-if="book.title"
          >{{ book.title }}
        </v-card-title>
        <v-card-title class="text-h5" v-if="!book.title"
          >Libro de Ejemplo</v-card-title
        >
        <v-card-text>
          <p class="capitalize">
            {{ book.description ? book.description : "Sin descripción" }}
          </p>
        </v-card-text>
        <v-card-text class="pt-0 flex items-center gap-2">
          <p class="font-semibold">Género:</p>
          <div
            class="bg-purple-400 p-1 px-3 rounded-lg flex justify-center font-semibold"
          >
            <p>{{ book.genero ? book.genero : "Sin género" }}</p>
          </div>
        </v-card-text>
        <v-card-text class="pt-0 flex items-center gap-2">
          <p class="font-semibold">Autor:</p>
          <div
            class="bg-emerald-500 w-20 p-1 rounded-lg flex justify-center font-semibold"
          >
            <p>{{ book.autor ? book.autor : "Sin autor" }}</p>
          </div>
        </v-card-text>
        <v-card-text class="pt-0 flex items-center gap-2">
          <p class="font-semibold">Editorial:</p>
          <div
            class="bg-purple-400 p-1 px-3 rounded-lg flex justify-center font-semibold"
          >
            <p>{{ book.editorial ? book.editorial : "Sin Editorial" }}</p>
          </div>
        </v-card-text>
        <v-card-text class="pt-0 flex items-center gap-2">
          <p class="font-semibold">Año de publicación:</p>
          <div
            class="bg-purple-400 w-20 p-1 rounded-lg flex justify-center font-semibold"
          >
            <p>{{ book.year ? book.year : "Sin autor" }}</p>
          </div>
        </v-card-text>
      </div>
    </div>
    <div class="flex flex-col md:flex-row justify-end gap-3 p-3">
      <v-btn
        color="primary"
        class="w-full md:w-28 flex justify-center"
        @click="handleUpdateBook"
      >
        <v-icon>mdi-pencil</v-icon>
        Editar
      </v-btn>
      <v-btn
        color="error"
        class="w-full md:w-28 flex justify-center"
        @click="deleteBook(book.id + '')"
      >
        <v-icon>mdi-delete</v-icon>
        Eliminar
      </v-btn>
    </div>
  </v-card>
</template>

<style scoped></style>
