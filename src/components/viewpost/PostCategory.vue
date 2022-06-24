<template>
    <div class="category-wrapper">
        <CategoryBlock
            class="category"
            v-for="(item, index) in category"
            :key="index"
            :item="item"
        />
    </div>
</template>

<script>
import CategoryBlock from "../category/CategoryBlock.vue";
import { computed } from "vue";
import { useStore } from "vuex";
export default {
    name: "PostCategory",
    components: { CategoryBlock },
    setup() {
        const store = useStore();
        const category = computed(() => store.state.category);
        return { category };
    },
};
</script>

<style lang="scss" scoped>
.category-wrapper {
    width: 100%;
    margin: 50px 0;

    .category {
        padding: 5px 10px;
        margin-right: 10px;
        border: 1px solid #ccc;
        font-size: 12px;
        border-radius: 20px;

        cursor: pointer;
        transition: 0.5s all ease;
        &:hover {
            background-color: #48d4cf;
            color: white;
            border: 1px solid #48d4cf;
        }
    }
}
</style>
