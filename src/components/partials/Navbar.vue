<template>
    <nav
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
            -ml-3
        "
    >
        <div
            class="
                container-fluid
                w-full
                flex flex-wrap
                items-center
                justify-between
                px-6
            "
        >
            <div class="container-fluid mr-auto">
                <a class="text-xl text-black font-semibold" href="#">Navbar</a>
            </div>
            <span class="mr-2">
                {{ userAuth.user.email }}
            </span>
            <div class="relative mr-5">
                <a class="flex items-center" href="#" @click="dropdown('navbar-menu')">
                    <img
                        src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                        class="rounded-full"
                        style="height: 25px; width: 25px"
                        alt=""
                        loading="lazy"
                    />
                </a>
                <ul
                    class="
                        absolute
                        bg-white
                        text-base
                        py-2
                        list-none
                        text-left
                        rounded-lg
                        shadow-xl
                        mt-1
                        m-0
                        bg-clip-padding
                        hidden
                    "
                    id="navbar-menu"
                >
                    <li>
                        <navbar-dropdown-item
                            text="Profile"
                            :customClass="['text-gray-700']"
                        />
                    </li>
                    <li>
                        <navbar-dropdown-item
                            text="Logout"
                            :customClass="['text-red-600']"
                            @click="logout"
                        />
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import authService from "@/services/auth.service";
import { useRouter } from "vue-router";
import { useAuth } from "@/stores/authStore";
import NavbarDropdownItem from "../shared/NavbarDropdownItem.vue";

export default {
    components: { NavbarDropdownItem },
    setup() {
        const router = useRouter();
        const userAuth = useAuth();

        const logout = () => {
            authService.logout().then((res) => {
                if (res.success) {
                    userAuth.$patch({
                        user: {
                            name: "",
                            email: "",
                        },
                    });
                    router.push({ name: "login" });
                }
            });
        };

        const dropdown = (id) => {
            document.getElementById(id).classList.toggle("hidden");
        };

        return {
            logout,
            userAuth,
            dropdown
        };
    },
};
</script>

<style scoped>
</style>