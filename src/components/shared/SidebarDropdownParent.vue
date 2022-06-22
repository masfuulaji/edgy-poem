<template>
    <li class="relative">
        <a
            class="
                flex
                items-center
                text-sm
                py-4
                px-6
                h-12
                overflow-hidden
                text-gray-100 text-ellipsis
                whitespace-nowrap
                rounded
                hover:text-blue-600 hover:bg-blue-50
                transition
                duration-300
                ease-in-out
                cursor-pointer
            "
            @click="dropdown(idMenu)"
        >
            <font-awesome-icon class="mr-2" :icon="icon" />
            <span>{{ text }}</span>
            <font-awesome-icon class="mr-2 ml-auto" icon="angle-down" />
        </a>
        <ul
            class="relative hidden"
            data-dp-child="dropdown-child"
            :id="idMenu"
        >
            <slot />
        </ul>
    </li>
</template>

<script>
export default {
    props: ["idMenu", "icon", "text"],
    setup() {
        const dropdown = (id) => {
            let dr = document.querySelectorAll("[data-dp-child]");
            dr.forEach((el) => {
                if(el.id != id){
                    el.classList.add("hidden");
                }
            });
            document.getElementById(id).classList.toggle("hidden");
        };
        return {
            dropdown,
        };
    },
};
</script>

<style lang="scss" scoped>
</style>