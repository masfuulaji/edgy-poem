<template>
    <h1 class="text-lg font-medium w-full">Category</h1>
    <div class="w-full">
        <div class="float-right mr-10">
            <bordered-button
                text="Add New Category"
                class="border-blue-600 hover:bg-blue-200"
                data-modal-toggle="defaultModal"
            />
            <bordered-button
                text="Refresh"
                class="border-purple-500 hover:bg-purple-100"
            />
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
        <tbody v-if="category.total > 0">
            <tr v-for="(item, index) in category.data" :key="index">
                <td class="p-2 border-2">#</td>
                <td class="p-2 border-2">{{ item.name }}</td>
                <td class="p-2 border-2">{{ item.description }}</td>
                <!-- <td><button class="border-2"><font-awesome-icon class="m-1" icon="pen" /></button></td> -->
            </tr>
        </tbody>
        <tbody v-else>
            <tr>
                <td colspan="4" class="p-2 border-2 text-center">No Data</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { useCategory } from "@/stores/categoryStore";
import { onMounted } from "@vue/runtime-core";
import BorderedButton from "../../../components/shared/BorderedButton.vue";
export default {
    components: { BorderedButton },
    setup() {
        const categoryStore = useCategory();
        let category = categoryStore.category;
        const getCategory = () => {
            categoryStore.getAll();
        };
        onMounted(() => {
            getCategory();
        });

        return {
            category,
        };
    },
};
</script>

<style scoped>
</style>