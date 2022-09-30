import { defineStore } from "pinia";

export const useUiStore = defineStore("ui", {
    state: () => ({
        drawer: false,
        isOpen: false,
        loading: false,
        error: null as string | null,
    }),
    getters: {
        getDrawer(state) {
            return state.drawer;
        },
    },
    actions: {
        setDrawer(drawer: boolean) {
            this.drawer = drawer;
        },
        setLoading(loading: boolean) {
            this.loading = loading;
        },
        setError(error: string | null) {
            this.error = error;
        },
        setIsOpen(isOpen: boolean) {
            this.isOpen = isOpen;
        }
    },
});