<template>
    <div v-show="!$route.meta.NotFound" class="flex flex-wrap">
        <SidebarVue/>
        <div class="w-full ml-[280px]">
            <!-- Navbar -->
            <NabarVue />

            <!--Content  -->
            <div
                class="
                    w-full
                    flex flex-wrap
                    items-center
                    justify-between
                    py-3
                    bg-white
                    text-gray-500
                    hover:text-gray-700
                    focus:text-gray-700
                    shadow-lg
                    p-5
                    mt-3
                    mb-5
                    -ml-3
                "
            >
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import SidebarVue from "@/components/partials/Sidebar.vue";
import NabarVue from "@/components/partials/Navbar.vue";
import { onMounted } from "@vue/runtime-core";
import { useAuth } from "@/stores/authStore";
import { useRouter } from "vue-router";

export default {
    components: {
        SidebarVue,
        NabarVue,
    },
    setup() {
        const userAuth = useAuth();
        const router = useRouter();

        const isUserExist = () => {
            let data = userAuth.user;
            if (data.email === "") {
                userAuth.getUserAuth();
            } else {
                userAuth.$patch({
                    user: {
                        name: "",
                        email: "",
                    },
                });
                router.push({ name: "login" });
            }
        };
        onMounted(() => {
            isUserExist();
        });
    },
};
</script>

<style scoped>
</style>