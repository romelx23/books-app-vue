<script lang="ts">
import LayoutBook from "../components/layouts/LayoutBook.vue";
import { defineComponent, onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import { useAuthorStore } from "../store/author";
import type { Author } from "@/interfaces/author";
export default defineComponent({
  name: "AuthorView",
  setup() {
    const isSearch = ref(false);
    const search = ref("");
    const { authors, authorSelected, searchAuthors, searchTerm } = storeToRefs(
      useAuthorStore()
    );
    const {
      createAuthor,
      deleteAuthor,
      updateAuthor,
      selectedAuthor,
      loadLocalStorage,
      searchAuthor,
    } = useAuthorStore();
    const initialAuthor = {
      name: "",
      country: "",
      age: "",
      image: "",
    };
    const formAuthor = ref<Author>({ ...initialAuthor });
    onMounted(() => {
      loadLocalStorage();
    });
    return {
      formAuthor,
      authors,
      createAuthor,
      initialAuthor,
      deleteAuthor,
      updateAuthor,
      selectedAuthor,
      authorSelected,
      isSearch,
      searchAuthor,
      search,
      searchAuthors,
      searchTerm,
    };
  },
  components: {
    LayoutBook,
  },
  methods: {
    handleAddAuthor() {
      console.log(this.formAuthor);
      this.createAuthor({
        id: crypto.randomUUID(),
        ...this.formAuthor,
      });
      this.formAuthor = { ...this.initialAuthor };
    },
    handleDeleteAuthor(id: string) {
      this.deleteAuthor(id);
    },
    handleEditAuthor(author: Author) {
      this.updateAuthor(author);
      this.handleCancelAuthor();
    },
    handleCancelAuthor() {
      this.formAuthor = { ...this.initialAuthor };
      this.selectedAuthor("");
    },
    handleValidateAuthor() {
      if (this.formAuthor.name === "") {
        return true;
      }
      if (this.formAuthor.country === "") {
        return true;
      }
      if (this.formAuthor.age === "") {
        return true;
      }
      if (this.formAuthor.image === "") {
        return true;
      }
      return false;
    },
  },
  watch: {
    authorSelected() {
      // console.log(this.authorSelected);
      if (!this.authorSelected) return;
      this.formAuthor = { ...this.authorSelected };
    },
  },
});
</script>

<template>
  <LayoutBook>
    <v-col>
      <v-row class="pt-2 px-2">
        <v-col>
          <h1 class="text-center text-3xl font-semibold">
            Panel de Control Autores
          </h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div class="flex justify-center mx-3">
            <transition name="search">
              <form
                @submit.prevent="searchAuthor(search)"
                class="flex w-full justify-center max-w-[468px]"
                v-if="isSearch"
              >
                <v-text-field
                  v-model="search"
                  label="Buscar Autor"
                  outlined
                  dense
                  class="w-full"
                  @click:append="isSearch = false"
                />
                <v-btn icon class="" type="submit">
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>
              </form>
            </transition>
          </div>
          <!-- formulario -->
          <form @submit.prevent="handleAddAuthor">
            <v-card class="mx-auto" max-width="500">
              <v-card-title class="text-center">
                <div class="flex justify-between relative">
                  <h1 class="text-2xl font-semibold">
                    {{ authorSelected ? "Editar Autor" : "Agregar Autor" }}
                  </h1>
                  <div class="flex">
                    <v-btn
                      color="secondary"
                      class="ml-2"
                      title="Buscar"
                      @click="isSearch = !isSearch"
                    >
                      <v-icon v-if="!isSearch" color="white"
                        >mdi-magnify</v-icon
                      >
                      <v-icon v-else color="white">mdi-close</v-icon>
                    </v-btn>
                    <v-btn
                      color="secondary"
                      class="ml-2"
                      title="Limpiar"
                      @click="handleCancelAuthor"
                    >
                      <v-icon color="white">mdi-cached</v-icon>
                    </v-btn>
                  </div>
                </div>
              </v-card-title>
              <v-card-text>
                <v-text-field
                  v-model="formAuthor.name"
                  label="Nombre"
                  outlined
                  dense
                ></v-text-field>
                <v-text-field
                  v-model="formAuthor.country"
                  label="Pais"
                  outlined
                  dense
                ></v-text-field>
                <v-text-field
                  v-model="formAuthor.age"
                  label="Edad (años)"
                  outlined
                  dense
                ></v-text-field>
                <v-text-field
                  v-model="formAuthor.image"
                  label="Imagen"
                  outlined
                  dense
                ></v-text-field>
                <v-img
                  v-if="formAuthor.image"
                  :src="formAuthor.image"
                  class="mx-auto"
                  max-width="200"
                ></v-img>
              </v-card-text>
              <v-btn
                v-if="!authorSelected"
                color="secondary"
                class="w-full"
                type="submit"
              >
                <span class="text-white">Agregar</span>
                <v-icon right class="text-white">mdi-plus</v-icon>
              </v-btn>
              <v-btn
                v-else
                color="primary"
                class="w-full"
                @click="handleEditAuthor(formAuthor)"
              >
                <span class="text-white">Editar</span>
                <v-icon right class="text-white">mdi-pencil</v-icon>
              </v-btn>
            </v-card>
          </form>
          <!-- grid -->
          <div class="grid-author pt-2" v-if="!searchTerm">
            <v-card
              v-for="author in authors"
              :key="author.id"
              class="mx-auto relative"
              width="250"
              max-width="500"
            >
              <v-card-title class="text-center">
                <h1 class="text-2xl font-semibold">{{ author.name }}</h1>
              </v-card-title>
              <div class="absolute z-20 flex flex-col top-0 right-0 gap-1">
                <v-btn
                  color="error"
                  class="w-12 bg-red-600"
                  title="Eliminar"
                  @click="handleDeleteAuthor(author.id || '')"
                >
                  <!-- <span class="text-white">Eliminar</span> -->
                  <v-icon right class="text-white">mdi-delete</v-icon>
                </v-btn>
                <v-btn
                  color="info"
                  class="w-12"
                  title="Editar"
                  @click="selectedAuthor(author.id || '')"
                >
                  <!-- <span class="text-white">Editar</span> -->
                  <v-icon right class="text-white">mdi-pencil</v-icon>
                </v-btn>
              </div>
              <v-card-text>
                <v-img
                  :src="author.image"
                  class="mx-auto object-cover"
                  max-width="200"
                  height="200"
                ></v-img>
                <p class="text-center">Pais: {{ author.country }}</p>
                <p class="text-center">Edad: {{ author.age }}</p>
              </v-card-text>
            </v-card>
            <!-- <h1>Autor 1</h1>
            <h1>Autor 2</h1> -->
          </div>
          <!-- grid search -->
          <div class="grid-author pt-2" v-if="searchTerm">
            <v-card
              v-for="author in searchAuthors"
              :key="author.id"
              class="mx-auto relative"
              width="250"
              max-width="500"
            >
              <v-card-title class="text-center">
                <h1 class="text-2xl font-semibold">{{ author.name }}</h1>
              </v-card-title>
              <div class="absolute z-20 flex flex-col top-0 right-0 gap-1">
                <v-btn
                  color="error"
                  class="w-12 bg-red-600"
                  title="Eliminar"
                  @click="handleDeleteAuthor(author.id || '')"
                >
                  <!-- <span class="text-white">Eliminar</span> -->
                  <v-icon right class="text-white">mdi-delete</v-icon>
                </v-btn>
                <v-btn
                  color="info"
                  class="w-12"
                  title="Editar"
                  @click="selectedAuthor(author.id || '')"
                >
                  <!-- <span class="text-white">Editar</span> -->
                  <v-icon right class="text-white">mdi-pencil</v-icon>
                </v-btn>
              </div>
              <v-card-text>
                <v-img
                  :src="author.image"
                  class="mx-auto object-cover"
                  max-width="200"
                  height="200"
                ></v-img>
                <p class="text-center">Pais: {{ author.country }}</p>
                <p class="text-center">Edad: {{ author.age }}</p>
              </v-card-text>
            </v-card>
          </div>
          <!-- <h1>Autor 1</h1>
            <h1>Autor 2</h1> -->
        </v-col>
      </v-row>
    </v-col>
  </LayoutBook>
</template>

<style scoped>
.grid-author {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1rem;
}
.search-enter-active,
.search-leave-active {
  transition: opacity 0.5s, transform 0.5s, scale 0.3s;
}
.search-enter-to {
  transform: translateX(-20px);
  opacity: 0.5;
}
.search-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
