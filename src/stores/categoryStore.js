import { defineStore } from "pinia";
import CategoryService from "../services/category.service";

export const useCategory = defineStore("categoryStore", {
    state: () => ({
        category: [],
    }),
    actions: {
        getAll(page = 1) {
            return CategoryService.getAll(page).then((res) => {
                this.category = res.data.data;
            });
        },
    },
});
