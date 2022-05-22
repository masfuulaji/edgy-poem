<template>
    <router-link :to="{ name: to }" class="mx-3 font-semibold text-base lg:text-2xl text-slate-200 tracking-wider">
        {{ text }}</router-link>
</template>

<script>
export default {
    props: ['text', 'to'],
    setup() {


        return {}
    }
}
</script>

<style lang="scss" scoped>
</style>