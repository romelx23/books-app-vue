<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import ButtomTop from "../ui/ButtomTop.vue";
const drawer = ref(false);
const toggleDrawer = () => (drawer.value = !drawer.value);
const { back } = useRouter();
const goBack = () => back();
const items = [
  { title: "Home", icon: "mdi-home", to: "/", name: "dashboard" },
  { title: "Books", icon: "mdi-book", to: "/books", name: "books" },
  { title: "Authors", icon: "mdi-account", to: "/authors", name: "authors" },
];
</script>

<template>
  <div class="flex flex-col layout__container">
    <v-app-bar>
      <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Book</v-toolbar-title>
    </v-app-bar>
    <v-sheet
      height="100%"
      class="overflow-hidden"
      style="position: relative; min-height: 100vh"
    >
      <v-container class="fill-height">
        <v-row class="pt-2 px-2">
          <v-btn
            color="primary"
            title="volver"
            class="w-28 flex justify-center"
            @click="goBack"
          >
            <v-icon>mdi-arrow-left</v-icon>
            Volver
          </v-btn>
        </v-row>
        <v-row class="pt-4">
          <slot> </slot>
        </v-row>
        <buttom-top></buttom-top>
      </v-container>

      <v-navigation-drawer v-model="drawer" temporary>
        <v-list-item class="flex justify-center pt-4">
          <v-img
            src="https://randomuser.me/api/portraits/men/78.jpg"
            class="drawer__img"
          ></v-img>
          <v-list-item-title class="text-center py-2 font-semibold"
            >John Leider</v-list-item-title
          >
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>
          <router-link
            class="flex justify-center py-2 font-semibold text-xl items-center hover:bg-gray-400/30 transition-colors duration-300"
            v-for="item in items"
            :key="item.title"
            :to="{ name: item.name }"
          >
            <v-icon>{{ item.icon }}</v-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </router-link>
        </v-list>
      </v-navigation-drawer>
    </v-sheet>
  </div>
</template>

<style scoped>
.layout__container {
  height: 100%;
  background: #333;
}
.drawer__img {
  width: 160px;
  height: 160px;
  object-fit: cover;
  border-radius: 50%;
}
.flex.v-list-item__content {
  display: flex !important;
}
.drawer__list-item {
  width: 100%;
  display: flex;
  flex: 1;
  align-items: center;
}
a.router-link-active {
  background: #333;
}
</style>
