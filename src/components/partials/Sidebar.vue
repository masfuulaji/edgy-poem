<template>
    <div class="fixed top-0 bottom-0 lg:left-0 p-2 w-[250px] overflow-y-auto text-center bg-gray-900">
        <div class="text-gray-100 text-xl">
            <div class="p-2.5 mt-1 flex items-center">
                <h1 class="font-bold text-gray-200 text-[15px] ml-3">My App</h1>
            </div>
        </div>
        <ul class="relative px-1">
            <sidebar-dropdown-menu
                to="dashboard.index"
                icon="house"
                text="Dashboard"
            />

            <sidebar-dropdown-parent
                idMenu="sidebar-master"
                icon="book"
                text="Master"
            >
                <sidebar-dropdown-child to="category.index" text="Category" />
            </sidebar-dropdown-parent>

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
            <p class="py-2 text-sm text-gray-700">Oh No no no</p>
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