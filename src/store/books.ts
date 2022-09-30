import type { Book } from "@/interfaces/books";
import { defineStore } from "pinia";

export const useBooksStore = defineStore("books", {
  state: () => ({
    books: [] as Book[],
    bookSelected: null as Book | null,
    searchBooks: [] as Book[],
    searchTerm: false,
    isUpdate: false,
    loading: false,
    error: null as string | null,
  }),
  getters: {
    getBooks(state) {
      return state.books;
    },
  },
  actions: {
    setBooks(books: Book[]) {
      this.books = books;
    },
    createBook(book: Book) {
        this.books.unshift(book);
        localStorage.setItem("books", JSON.stringify(this.books));
    },
    updateBook(book: Book) {
        const index = this.books.findIndex((b) => b.id === book.id);
        this.books[index] = book;
        localStorage.setItem("books", JSON.stringify(this.books));
    },
    deleteBook(id: string) {
        const index = this.books.findIndex((b) => b.id === id);
        this.books.splice(index, 1);
        localStorage.setItem("books", JSON.stringify(this.books));
    },
    searchBook(title: string) {
      console.log(title);
      this.searchTerm =title?true:false;
      this.searchBooks= title?this.books.filter((b) =>  b.title.toLowerCase().includes(title.toLowerCase())):[];
    },
    loadLocalStorage() {
      const books = localStorage.getItem("books");
      if (books) {
        this.books = JSON.parse(books);
      }
    },
    selectedBook(id: string) {
      console.log(id);
      if(!id) return this.bookSelected = null;
      this.bookSelected = this.books.find((b) => b.id === id) || null;
    },
    setIsUpdate(isUpdate: boolean) {
      this.isUpdate = isUpdate;
    }
  },
});
