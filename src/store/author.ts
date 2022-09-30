import type { Author } from "@/interfaces/author";
import { defineStore } from "pinia";

export const useAuthorStore = defineStore("author", {
    state: () => ({
        authors: [] as Author[],
        authorSelected: null as Author | null,
        searchAuthors: [] as Author[],
        searchTerm: false,
        isUpdate: false,
        loading: false,
        error: null as string | null,
    }),
    getters: {
        getAuthors(state) {
            return state.authors;
        },
    },
    actions: {
        setAuthors(authors: Author[]) {
            this.authors = authors;
        },
        createAuthor(author: Author) {
            this.authors.unshift(author);
            localStorage.setItem("authors", JSON.stringify(this.authors));
        },
        updateAuthor(author: Author) {
            const index = this.authors.findIndex((a) => a.id === author.id);
            this.authors[index] = author;
            localStorage.setItem("authors", JSON.stringify(this.authors));
        },
        deleteAuthor(id: string) {
            const index = this.authors.findIndex((a) => a.id === id);
            this.authors.splice(index, 1);
            localStorage.setItem("authors", JSON.stringify(this.authors));
        },
        searchAuthor(name: string) {
            console.log(name);
            this.searchTerm = name ? true : false;
            this.searchAuthors = name ? this.authors.filter((a) => a.name.toLowerCase().includes(name.toLowerCase())) : [];
        },
        loadLocalStorage() {
            const authors = localStorage.getItem("authors");
            if (authors) {
                this.authors = JSON.parse(authors);
            }
        },
        selectedAuthor(id: string) {
            // console.log(id);
            if (!id)
                return this.authorSelected = null;
            this.authorSelected = this.authors.find((a) => a.id === id) || null;
        }
    },
});