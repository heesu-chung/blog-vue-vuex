<template>
    <div class="list-wrapper">
        <p class="desc">'{{ this.category }}' 카테고리로 검색한 결과입니다</p>
        <HomePostCard
            v-for="(item, index) in newPosts"
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
    name: "CategoryList",
    components: { Header, HomePostCard },
    props: ["category"],
    setup(props) {
        const store = useStore();
        const posts = computed(() => store.state.posts);

        const newPosts = [...posts.value].filter(
            (el) => el.category.indexOf(props.category) !== -1
        );
        return { newPosts };
    },
};
</script>

<style lang="scss" scoped>
.desc {
    font-size: 20px;
    font-weight: 700;
    margin-top: 100px;
    margin-bottom: 30px;
    text-align: center;
    @media (max-width: 800px) {
        font-size: 15px;
    }
}
.list-wrapper {
    margin: 50px auto;
    width: 45%;

    @media (max-width: 800px) {
        width: 90%;
    }
}
</style>
