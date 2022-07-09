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
    <div class="w-[70%] my-2 mx-auto">
        <div class="border-b border-gray-400 shadow-lg">
            <table class="table table-compact w-full">
                <thead class="bg-gray-50">
                    <tr>
                        <TableTD class="w-[5%]">No</TableTD>
                        <TableTD>Name</TableTD>
                        <TableTD>Description</TableTD>
                        <TableTD>Action</TableTD>
                    </tr>
                </thead>
                <tbody class="bg-white" v-if="category.total > 0">
                    <tr
                        class="whitespace-nowrap"
                        v-for="(item, index) in category.data"
                        :key="index"
                    >
                        <TableTD class="py-1">#</TableTD>
                        <TableTD class="py-1">{{ item.name }}</TableTD>
                        <TableTD class="py-1">{{ item.description }}</TableTD>
                        <!-- <td><button class="border-2"><font-awesome-icon class="m-1" icon="pen" /></button></td> -->
                    </tr>
                </tbody>
                <tbody v-else>
                    <tr>
                        <td colspan="4" class="p-2 text-center border">
                            No Data
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <Pagination v-if="category.total > 0" :data="category"  @on-page="getCategory"/>
</template>

<script>
import { useCategory } from "@/stores/categoryStore";
import { onMounted, ref } from "@vue/runtime-core";
import BorderedButton from "../../../components/shared/BorderedButton.vue";
import Pagination from "../../../components/shared/Pagination.vue";
import TableTD from "../../../components/shared/TableTD.vue";
export default {
    components: { BorderedButton, Pagination, TableTD },
    emits:["on-page"],
    setup() {
        const categoryStore = useCategory();
        let category = ref(categoryStore.category);
        const getCategory = async (page) => {
            await categoryStore.getAll(page).then(() => {
                category.value = categoryStore.category;
            });
        };
        onMounted(() => {
            getCategory(1);
        });

        return {
            category,
            getCategory
        };
    },
};
</script>

<style scoped>
</style>