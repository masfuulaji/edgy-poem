<template>
    <div class="flex flex-wrap mb-14">
        <div class="mr-auto w-14 lg:w-20">
            <Logo />
        </div>
        <div class="my-auto mx-0 hidden md:inline">
            <NavbarLink text="Products" to="landing" />
            <NavbarLink text="Features" to="landing" />
            <NavbarLink text="Company" to="landing" />
            <NavbarLink text="Application" to="landing" />
            <NavbarLink text="About" to="landing" />
        </div>
        <div class="my-auto inline md:hidden">
            <button type="button" @click="onMenu">
                <font-awesome-icon v-if="!menu_bar" class="mr-2 text-slate-300" icon="bars" size="xl" />
                <font-awesome-icon v-if="menu_bar" class="mr-2 text-slate-300" icon="xmark" size="xl" />
            </button>
        </div>
    </div>
    <div v-if="menu_bar" class="fixed top-0 left-0 bg-red-600">
        allo
    </div>
</template>

<script>
import Logo from '@/assets/img/Logo.svg'
import NavbarLink from '@/components/shared/NavbarLink.vue'
import { ref } from 'vue'
export default {
    components: { Logo, NavbarLink },
    setup() {
        const menu_bar = ref(false)
        const onMenu = () => {
            menu_bar.value = !menu_bar.value
        }
        return { menu_bar, onMenu }
    }
}
</script>

<style scoped>
</style>