<script lang="ts">
import { storeToRefs } from "pinia";
import { defineComponent, ref } from "vue";
import { useUiStore } from "../../store/ui";
import { useBooksStore } from "../../store/books";

export default defineComponent({
  name: "ModalAddBook",
  setup() {
    const { isOpen } = storeToRefs(useUiStore());
    const { setIsOpen } = useUiStore();
    const { setIsUpdate } = useBooksStore();
    return { setIsOpen, isOpen, setIsUpdate };
  },
  methods: {
    closeModal() {
      this.setIsOpen(false);
      this.setIsUpdate(false);
    },
  },
});
</script>

<template>
  <Teleport to="#modal">
    <transition name="modal">
      <div class="flex justify-center items-center" v-if="isOpen">
        <div class="modal-bg" @click="closeModal"></div>
        <div class="modal">
          <div class="w-full flex justify-end absolute right-0 top-2 pr-3">
            <!-- <v-btn
              color="secondary"
              title="limpiar formulario"
              class="w-12 flex justify-center mr-2"
              @click="cleanForm"
            >
              <v-icon color="white">mdi-delete</v-icon>
            </v-btn> -->
            <v-btn
              color="primary"
              title="Agregar"
              class="w-12 flex justify-center"
              @click="closeModal"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>
          <slot> </slot>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<style scoped>
.modal-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin-top: 50px;
  overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 90;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  background-color: #555;
  width: 70%;
  min-width: 320px;
  max-width: 600px;
  height: 100vh;
  min-height: 300px;
  max-height: 650px;
  overflow-y: auto;
  border-radius: 10px;
  padding: 1rem;
  margin-top: 100px;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  z-index: 100;
}
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s ease, transform 0.25s ease;
  /* transition: all 0.5s ease; */
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  /* transform: scale(1.1); */
}
</style>
