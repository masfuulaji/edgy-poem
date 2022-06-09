<template>
    <div v-show="!$route.meta.NotFound" class="flex flex-wrap">
        <div class="w-1/6">
            <!-- Side Bar -->
            <SidebarVue />
        </div>
        <div class="w-5/6">
            <!-- Navbar -->
            <NabarVue />

            <!--Content  -->
            <div class="p-3">
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

export default {
    components: {
        SidebarVue,
        NabarVue,
    },
    setup() {
        const userAuth = useAuth();

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