<template>
    <div class="absolute w-full left-0 top-0 bg-ldblue-100" style="height: 40rem;">
        <div class="mx-14 lg:mx-28 my-7 lg:my-14">
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
                    <font-awesome-icon class="mr-2 text-slate-300" icon="bars" size="xl" />
                </div>
            </div>
            <div class="flex flex-wrap">
                <div class="w-full lg:w-4/6">
                    <div class="flex flex-wrap mt-12 my-8">
                        <div class="rounded-lg px-3 py-2 text-slate-200" style="background-color: #34BD04;">New</div>
                        <span class="mx-2 my-auto text-lg text-slate-200">We just launch new feature:
                            crypto-transfer</span>
                    </div>
                    <p class="text-3xl lg:text-5xl font-bold my-8 text-stone-200 pr-0 lg:pr-10">EASY & SECURE TRANSFER YOUR MONEY</p>
                    <p class="text-stone-50 pr-0 lg:pr-10 my-8">With iPay you can transfer your money in a second. We also
                        provide
                        you with secure transfer. And you
                        dont need to frustration. </p>
                    <div class="flex flex-wrap">
                        <button class="bg-slate-200 rounded-lg p-3 lg:p-6 font-bold tracking-wider mr-5 lg:mr-14">Donwload Now</button>
                        <button
                            class="border-slate-200 border-x border-y rounded-lg p-3 lg:p-6 text-slate-200 font-bold tracking-wider bg-ldblue-100">Documentation</button>
                    </div>
                </div>
                <div class="w-full lg:w-2/6">
                    <div class="w-full max-w-xs h-auto">
                        <Phone />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Logo from '@/assets/img/Logo.svg'
import Phone from '@/assets/img/Phone.svg'
import NavbarLink from '@/components/shared/NavbarLink.vue'
export default {
    components: { Logo, NavbarLink, Phone }
}
</script>

<style scoped>
</style>