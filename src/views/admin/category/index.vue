<template>
    <h1 class="text-lg text-black font-medium w-full">Category</h1>
    <div class="w-full">
        <div class="float-right mr-10">
            <button
                type="button"
                class="
                    border-2
                    text-sm
                    p-1
                    rounded-md
                    border-blue-600
                    hover:bg-blue-300
                    w-16
                    h-10
                    mx-2
                "
            >
                Add
            </button>
            <button
                type="button"
                class="
                    border-2
                    text-sm
                    p-1
                    rounded-md
                    border-purple-600
                    hover:bg-purple-300
                    w-16
                    h-10
                    mx-2
                "
            >
                Refresh
            </button>
        </div>
    </div>
    <table class="w-full border-2 m-4">
        <thead>
            <tr>
                <td class="w-[5%] p-2 border-2">No</td>
                <td class="p-2 border-2">Name</td>
                <td class="p-2 border-2">Description</td>
                <td class="p-2 border-2">Action</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="p-2 border-2">1</td>
                <td class="p-2 border-2">Nama</td>
                <td class="p-2 border-2">Deskripsi</td>
                <!-- <td><button class="border-2"><font-awesome-icon class="m-1" icon="pen" /></button></td> -->
            </tr>
        </tbody>
    </table>
</template>

<script>
import { useCategory } from "@/stores/categoryStore";
import { onMounted } from "@vue/runtime-core";
export default {
    setup() {
        const categoryStore = useCategory();
        const getCategory = () => {
            categoryStore.getAll()
        };

        onMounted(() => {
            getCategory();
        });
    },
};
</script>

<style scoped>
</style>