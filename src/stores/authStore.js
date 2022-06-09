import { defineStore } from "pinia";
import authService from "../services/auth.service";

export const useAuth = defineStore("authStore", {
    state: () => ({
        user: {
            name: "",
            email: "",
        },
    }),
    actions: {
        getUserAuth() {
            authService.getUser().then((res) => {
                this.user = {
                    name: res.data.name,
                    email: res.data.email,
                };
            });
        },
    },
});
