<template>
    <router-link :to="{ name: to }">
        <div class="rounded-lg bg-ldblue-100 hover:bg-indigo-600 mx-5 p-2">
            <div class="mx-2 my-1 font-semibold text-sm lg:text-2xl text-slate-200 tracking-wider">
                <font-awesome-icon class="mr-2 text-slate-300" :icon="icon" size="sm" />{{ text }}
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    props: ['text', 'to', 'icon'],
    setup() {


        return {}
    }
}
</script>

<style lang="scss" scoped>
</style>