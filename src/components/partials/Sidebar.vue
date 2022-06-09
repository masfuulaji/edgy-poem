<template>
    <div class="w-56 h-full shadow-md bg-white fixed" id="sidenavSecExample">
        <div class="pt-4 pb-2 px-6">
            <a href="#!">
                <div class="flex items-center">
                    <div class="shrink-0">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                            class="rounded-full w-10"
                            alt="Avatar"
                        />
                    </div>
                    <div class="grow ml-3">
                        <p class="text-sm font-semibold text-blue-600">
                            Edgy Poem
                        </p>
                    </div>
                </div>
            </a>
        </div>
        <ul class="relative px-1">
            <sidebar-dropdown-menu
                to="dashboard.index"
                icon="house"
                text="Dashboard"
            />
            <sidebar-dropdown-parent
                idMenu="sidebar-setting"
                icon="gears"
                text="Setting"
            >
                <sidebar-dropdown-child to="user.index" text="User" />
            </sidebar-dropdown-parent>
        </ul>
        <hr class="my-2" />
        <div class="text-center bottom-0 absolute w-full">
            <hr class="m-0" />
            <p class="py-2 text-sm text-gray-700">tailwind-elements.com</p>
        </div>
    </div>
</template>

<script>
import SidebarDropdownChild from "../shared/SidebarDropdownChild.vue";
import SidebarDropdownMenu from "../shared/SidebarDropdownMenu.vue";
import SidebarDropdownParent from "../shared/SidebarDropdownParent.vue";
export default {
    components: {
        SidebarDropdownMenu,
        SidebarDropdownChild,
        SidebarDropdownParent,
    },
    setup() {
        return {};
    },
};
</script>

<style scoped>
</style>