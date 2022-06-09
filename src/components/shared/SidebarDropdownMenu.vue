<template>
    <li class="relative">
        <router-link
            class="
                flex
                items-center
                text-sm
                py-4
                px-6
                h-12
                overflow-hidden
                text-gray-700 text-ellipsis
                whitespace-nowrap
                rounded
                hover:text-blue-600 hover:bg-blue-50
                transition
                duration-300
                ease-in-out
            "
            :to="{ name: to }"
        >
            <font-awesome-icon class="mr-2" :icon="icon" />
            <span>{{ text }}</span>
        </router-link>
    </li>
</template>

<script>
export default {
    props: ["to", "icon", "text"],
};
</script>

<style lang="scss" scoped>
</style>