<template>
    <button
        type="button"
        class="border-2 text-sm p-1 rounded-md h-10 mx-2"
    >
        {{ text }}
    </button>
</template>

<script>
export default {
    props: ["text"],
    setup() {},
};
</script>

<style scoped>
</style>