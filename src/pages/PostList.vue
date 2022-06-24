<template>
    <div class="list-wrapper">
        <!-- <Header /> -->
        <HomePostCard
            v-for="(item, index) in posts"
            :key="index"
            :item="item"
        />
        <div class="paging"></div>
        <Header />
    </div>
</template>

<script>
import Header from "@/components/home/Header.vue";
import HomePostCard from "../components/home/HomePostCard.vue";
import { useStore } from "vuex";
import { computed } from "vue";
export default {
    name: "PostList",
    components: { Header, HomePostCard },
    setup() {
        const store = useStore();
        const posts = computed(() => store.state.posts);
        return { posts };
    },
};
</script>

<style lang="scss" scoped>
.list-wrapper {
    margin: 50px auto;
    width: 45%;

    @media (max-width: 800px) {
        width: 90%;
    }
}
</style>
