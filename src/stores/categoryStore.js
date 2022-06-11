import { defineStore } from "pinia";
import CategoryService from "../services/category.service";

export const useCategory = defineStore("categoryStore", {
    state: () => ({
        category: [],
    }),
    actions: {
        getAll() {
            CategoryService.getAll().then((res) => {
                this.category = res.data.data;
            });
        },
    },
});