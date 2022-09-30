<script lang="ts">
import LayoutBook from "../components/layouts/LayoutBook.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "DashboardView",
  setup() {
    return {};
  },
  components: {
    LayoutBook,
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
      <v-row class="py-3 px-2">
        <v-col cols="12" md="6">
          <v-card style="background: #445995">
            <v-card-title class="text-center">
              <h2 class="text-2xl font-semibold">Libros</h2>
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12" md="6">
                  <v-card>
                    <v-card-title class="text-center">
                      <h2 class="text-2xl font-semibold">Total</h2>
                    </v-card-title>
                    <v-card-text class="text-center">
                      <h2 class="text-4xl font-semibold">0</h2>
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12" md="6">
                  <v-card>
                    <v-card-title class="text-center">
                      <h2 class="text-2xl font-semibold">Disponibles</h2>
                    </v-card-title>
                    <v-card-text class="text-center">
                      <h2 class="text-4xl font-semibold">0</h2>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card style="background: #592984" class="bg-purple-600/50">
            <v-card-title class="text-center">
              <h2 class="text-2xl font-semibold">Usuarios</h2>
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12" md="6">
                  <v-card>
                    <v-card-title class="text-center">
                      <h2 class="text-2xl font-semibold">Total</h2>
                    </v-card-title>
                    <v-card-text class="text-center">
                      <h2 class="text-4xl font-semibold">0</h2>
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12" md="6">
                  <v-card>
                    <v-card-title class="text-center">
                      <h2 class="text-2xl font-semibold">Activos</h2>
                    </v-card-title>
                    <v-card-text class="text-center">
                      <h2 class="text-4xl font-semibold">0</h2>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="py-3 px-2">
        <v-col cols="12" md="6">
          <v-card style="background: #176c50" class="bg-emerald-500/50">
            <v-card-title class="text-center">
              <h2 class="text-2xl font-semibold">Libros Prestados</h2>
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12" md="6">
                  <v-card>
                    <v-card-title class="text-center">
                      <h2 class="text-2xl font-semibold">Total</h2>
                    </v-card-title>
                    <v-card-text class="text-center">
                      <h2 class="text-2xl font-semibold">0</h2>
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12" md="6">
                  <v-card>
                    <v-card-title class="text-center">
                      <h2 class="text-2xl font-semibold">Disponibles</h2>
                    </v-card-title>
                    <v-card-text class="text-center">
                      <h2 class="text-2xl font-semibold">0</h2>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card style="background: #873131" class="bg-red-500/50">
            <v-card-title class="text-center">
              <h2 class="text-2xl font-semibold">Libros por devolver</h2>
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12" md="6">
                  <v-card>
                    <v-card-title class="text-center">
                      <h2 class="text-2xl font-semibold">Total</h2>
                    </v-card-title>
                    <v-card-text class="text-center">
                      <h2 class="text-2xl font-semibold">0</h2>
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12" md="6">
                  <v-card>
                    <v-card-title class="text-center">
                      <h2 class="text-2xl font-semibold">Activos</h2>
                    </v-card-title>
                    <v-card-text class="text-center">
                      <h2 class="text-2xl font-semibold">0</h2>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </LayoutBook>
</template>

<style scoped></style>
