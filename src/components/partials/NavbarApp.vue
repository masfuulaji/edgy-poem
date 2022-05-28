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
    <div v-if="menu_bar" class="fixed top-0 left-0 bg-ldblue-100 w-2/3 h-full border-r-2 border-teal-600">
        <div class="w-full h-18 p-4 flex flex-wrap">
            <div class="w-10 mr-auto">
                <Logo />
            </div>
            <button type="button" @click="onMenu">
                <font-awesome-icon class="mr-2 text-slate-300" icon="angles-left" size="xl" />
            </button>
        </div>
        <div class="w-full h-full">
            <SidebarLink text="Products" to="landing" icon="house"/>
            <SidebarLink text="Features" to="landing" icon="bolt"/>
            <SidebarLink text="Company" to="landing" icon="box"/>
            <SidebarLink text="Application" to="landing" icon="brain"/>
            <SidebarLink text="About" to="landing" icon="bugs"/>
        </div>
    </div>
</template>

<script>
import Logo from '@/assets/img/Logo.svg'
import NavbarLink from '@/components/shared/NavbarLink.vue'
import SidebarLink from '@/components/shared/SidebarLink.vue'
import { ref } from 'vue'
export default {
    components: { Logo, NavbarLink, SidebarLink },
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