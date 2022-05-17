<template>
    <nav
        class="w-full flex flex-wrap items-center justify-between py-3 bg-white text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg">
        <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
            <div class="container-fluid mr-auto">
                <a class="text-xl text-black font-semibold" href="#">Navbar</a>
            </div>
            <div class="container-fluid">
                <div class="dropdown relative">
                    <a class="dropdown-toggle flex items-center hidden-arrow" href="#" id="dropdownMenuButton2"
                        role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://mdbootstrap.com/img/new/avatars/2.jpg" class="rounded-full"
                            style="height: 25px; width: 25px" alt="" loading="lazy" />
                    </a>
                    <ul class="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none"
                        aria-labelledby="dropdownMenuButton2">
                        <li>
                            <a class="
                                    dropdown-item
                                    text-sm
                                    py-2
                                    px-4
                                    font-normal
                                    block
                                    w-full
                                    whitespace-nowrap
                                    bg-transparent
                                    text-gray-700
                                    hover:bg-gray-100
                                    " href="#">Profile</a>
                        </li>
                        <li>
                            <a class="dropdown-item
                                    text-sm
                                    py-2
                                    px-4
                                    font-normal
                                    block
                                    w-full
                                    whitespace-nowrap
                                    bg-transparent
                                    text-red-600
                                    hover:bg-gray-100
                                " href="#">Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
</style>