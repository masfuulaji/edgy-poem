<template>
    <div class="w-56 h-full shadow-md bg-white fixed" id="sidenavSecExample">
        <div class="pt-4 pb-2 px-6">
            <a href="#!">
                <div class="flex items-center">
                    <div class="shrink-0">
                        <img src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" class="rounded-full w-10"
                            alt="Avatar">
                    </div>
                    <div class="grow ml-3">
                        <p class="text-sm font-semibold text-blue-600">Edgy Poem</p>
                    </div>
                </div>
            </a>
        </div>
        <ul class="relative px-1">
            <li class="relative">
                <router-link
                    class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                    :to="{ name: 'dashboard.index' }">
                    <font-awesome-icon class="mr-2" icon="house" />
                    <span>Dashboard</span>
                </router-link>
            </li>
            <li class="relative" id="sidenavSecEx2">
                <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer"
                    data-bs-toggle="collapse" data-bs-target="#collapseSidenavSecEx2" aria-expanded="false"
                    aria-controls="collapseSidenavSecEx2">
                    <font-awesome-icon class="mr-2" icon="gears" />
                    <span>Setting</span>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" class="w-3 h-3 ml-auto" role="img"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor"
                            d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z">
                        </path>
                    </svg>
                </a>
                <ul class="relative accordion-collapse collapse" id="collapseSidenavSecEx2"
                    aria-labelledby="sidenavSecEx2" data-bs-parent="#sidenavSecExample">
                    <li class="relative">
                        <router-link :to="{ name: 'user.index' }"
                            class="flex items-center text-sm py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out">
                            User</router-link>
                    </li>
                </ul>
            </li>
        </ul>
        <hr class="my-2">
        <div class="text-center bottom-0 absolute w-full">
            <hr class="m-0">
            <p class="py-2 text-sm text-gray-700">tailwind-elements.com</p>
        </div>
    </div>
</template>

<script>
export default {
    setup() {


        return {}
    }
}
</script>

<style scoped>
</style>