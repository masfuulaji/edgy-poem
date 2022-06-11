<template>
    <li class="relative">
        <router-link
            :to="{ name: to }"
            class="
                flex
                items-center
                text-sm
                py-4
                pl-12
                pr-6
                h-6
                overflow-hidden
                text-gray-100 text-ellipsis
                whitespace-nowrap
                rounded
                hover:text-blue-600 hover:bg-blue-50
                transition
                duration-300
                ease-in-out
            "
        >
            {{ text }}
        </router-link>
    </li>
</template>

<script>
export default {
    props: ["to", "text"],
    setup() {
        return {};
    },
};
</script>

<style lang="scss" scoped>
</style>