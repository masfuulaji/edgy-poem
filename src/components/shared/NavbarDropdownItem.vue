<template>
    <a
        class="
            dropdown-item
            text-sm
            py-2
            px-4
            font-normal
            block
            w-full
            whitespace-nowrap
            bg-transparent
            hover:bg-gray-100
            cursor-pointer
        "
        :class="[customClass]"
        >{{ text }}
    </a>
</template>

<script>
export default {
    props: ["text", "customClass"],
    setup() {
        return {};
    },
};
</script>

<style lang="scss" scoped>
</style>