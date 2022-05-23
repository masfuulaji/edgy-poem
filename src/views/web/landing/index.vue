<template>
    <div class="absolute w-full left-0 top-0 bg-ldblue-100" style="height: 40rem;">
        <div class="mx-14 lg:mx-28 my-7 lg:my-14">
            <NavbarApp />
            
            <div class="flex flex-wrap">
                <div class="w-full lg:w-4/6">
                    <div class="flex flex-wrap mt-12 my-8">
                        <div class="rounded-lg px-3 py-2 text-slate-200" style="background-color: #34BD04;">New</div>
                        <span class="mx-2 my-auto text-lg text-slate-200">We just launch new feature:
                            crypto-transfer</span>
                    </div>
                    <p class="text-3xl lg:text-5xl font-bold my-8 text-stone-200 pr-0 lg:pr-10">EASY & SECURE TRANSFER
                        YOUR MONEY</p>
                    <p class="text-stone-50 pr-0 lg:pr-10 my-8">With iPay you can transfer your money in a second. We
                        also
                        provide
                        you with secure transfer. And you
                        dont need to frustration. </p>
                    <div class="flex flex-wrap">
                        <button
                            class="bg-slate-200 rounded-lg p-3 lg:p-6 font-bold tracking-wider mr-5 lg:mr-14">Donwload
                            Now</button>
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
import NavbarApp from '@/components/partials/NavbarApp.vue'
import Phone from '@/assets/img/Phone.svg'
export default {
    components: { Phone, NavbarApp }
}
</script>

<style scoped>
</style>