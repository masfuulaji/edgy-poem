<template>
    <button
        class="px-6 py-3 bg-red-600 text-gray-100 rounded shadow"
        @click="toggleClass"
    >
        Modal
    </button>
    <div
        class="
            bg-black bg-opacity-50
            absolute
            inset-0
            flex
            justify-center
            items-center
        "
        :class="{ flex: isFlex, hidden: isHidden }"
        @click.self="closeModal"
    >
        <div
            class="
                bg-gray-200
                max-w-sm
                py-2
                px-3
                rounded
                shadow-xl
                text-gray-800
            "
        >
            <div class="flex justify-between items-center">
                <h4 class="text-lg font-bold">Hallo</h4>
                <font-awesome-icon
                    class="mr-2 text-xs cursor-pointer"
                    icon="x"
                    @click="toggleClass"
                />
            </div>
            <div class="mt-2 text-sm">
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Est, facilis. Accusantium officiis ipsa sed quo placeat
                    quisquam eius expedita, quos odit iusto? Molestiae,
                    voluptatibus voluptatum nisi alias quisquam nesciunt quam?
                </p>
            </div>
            <div class="mt-3 flex justify-end space-x-3">
                <button
                    class="
                        px-3
                        py-1
                        rounded
                        hover:bg-red-300 hover:bg-opacity-50 hover:text-red-900
                    "
                    @click="toggleClass"
                >
                    cancle
                </button>
                <button
                    class="
                        px-3
                        py-1
                        rounded
                        bg-red-800
                        text-gray-200
                        hover:bg-red-600
                    "
                >
                    delete
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
    setup() {
        let isHidden = ref(true);
        let isFlex = ref(false);
        const toggleClass = () => {
            isHidden.value = !isHidden.value;
            isFlex.value = !isFlex.value;
        };

        const closeModal=()=>{
            isHidden.value = true;
            isFlex.value = false;
        }

        return {
            isHidden,
            isFlex,
            toggleClass,
            closeModal
        };
    },
};
</script>

<style scoped>
</style>