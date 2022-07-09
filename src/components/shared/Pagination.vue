<template>
    <div
        class="
            bg-white
            px-4
            py-3
            flex
            items-center
            justify-between
            border-t border-gray-200
            sm:px-6
            w-full
        "
    >
        <div class="flex-1 flex justify-between sm:hidden">
            <a
                href="#"
                class="
                    relative
                    inline-flex
                    items-center
                    px-4
                    py-2
                    border border-gray-300
                    text-sm
                    font-medium
                    rounded-md
                    text-gray-700
                    bg-white
                    hover:bg-gray-50
                "
            >
                Previous
            </a>
            <a
                href="#"
                class="
                    ml-3
                    relative
                    inline-flex
                    items-center
                    px-4
                    py-2
                    border border-gray-300
                    text-sm
                    font-medium
                    rounded-md
                    text-gray-700
                    bg-white
                    hover:bg-gray-50
                "
            >
                Next
            </a>
        </div>
        <div
            class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"
        >
            <div>
                <p class="text-sm text-gray-700">
                    Showing
                    <span class="font-medium">1</span>
                    to
                    <span class="font-medium">10</span>
                    of
                    <span class="font-medium">97</span>
                    results
                </p>
            </div>
            <div class="ml-auto">
                <nav
                    class="
                        relative
                        z-0
                        inline-flex
                        rounded-md
                        shadow-sm
                        -space-x-px
                    "
                >
                    <PaginationLink
                        class="
                            rounded-l-md
                            px-2
                            border-gray-300
                            text-gray-500
                            hover:bg-gray-50
                            bg-white
                        "
                        @click="prevPage"
                    >
                        <span class="sr-only">Previous</span>
                        <svg
                            class="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </PaginationLink>
                    <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
                    <PaginationLink
                        v-if="data.current_page - 2 > 0"
                        @click="$emit('onPage', data.current_page - 2)"
                        class="
                            border-gray-300
                            text-gray-500
                            hover:bg-gray-50
                            bg-white
                        "
                    >
                        {{ data.current_page - 2 }}
                    </PaginationLink>
                    <PaginationLink
                        v-if="data.current_page - 1 > 0"
                        @click="$emit('onPage', data.current_page - 1)"
                        class="
                            border-gray-300
                            text-gray-500
                            hover:bg-gray-50
                            bg-white
                        "
                    >
                        {{ data.current_page - 1 }}
                    </PaginationLink>
                    <PaginationLink
                        class="
                            z-10
                            bg-indigo-50
                            border-indigo-500
                            text-indigo-600
                            hover:bg-indigo-150
                        "
                    >
                        {{ data.current_page }}
                    </PaginationLink>
                    <!-- <PaginationLinkDot /> -->
                    <PaginationLink
                        v-if="data.last_page - data.current_page > 0"
                        @click="$emit('onPage', data.current_page + 1)"
                        class="
                            border-gray-300
                            text-gray-500
                            hover:bg-gray-50
                            bg-white
                        "
                    >
                        {{ data.current_page + 1 }}
                    </PaginationLink>
                    <PaginationLink
                        v-if="data.last_page - data.current_page > 1"
                        @click="$emit('onPage', data.current_page + 2)"
                        class="
                            border-gray-300
                            text-gray-500
                            hover:bg-gray-50
                            bg-white
                        "
                    >
                        {{ data.current_page + 2 }}
                    </PaginationLink>
                    <PaginationLink
                        class="
                            rounded-r-md
                            px-2
                            border-gray-300
                            text-gray-500
                            hover:bg-gray-50
                            bg-white
                        "
                        @click="nextPage"
                    >
                        <span class="sr-only">Next</span>
                        <!-- Heroicon name: solid/chevron-right -->
                        <svg
                            class="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </PaginationLink>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/runtime-core';
import PaginationLink from "./PaginationLink.vue";
import PaginationLinkDot from "./PaginationLinkDot.vue";
export default {
    components: { PaginationLink, PaginationLinkDot },
    props: ["data"],
    setup(props, { emit }) {
        const prevPage = () => {
            if (props.data.current_page - 1 > 0) {
                emit("onPage", props.data.current_page - 1);
            }
        };
        const nextPage = () => {
            console.log(props.data.current_page);
            if (props.data.last_page - props.data.current_page > 0) {
                emit("onPage", props.data.current_page + 1);
            }
        };
        return {
            prevPage,
            nextPage,
        };
    },
};
</script>

<style lang="scss" scoped>
</style>