<template>
    <div class="home-wrapper">
        <div class="cover"></div>
        <div class="content">
            <Header />
            <HomeNav />
            <!-- <HomePortfolioCard />
            <HomePortfolioCard />
            <HomePortfolioCard />
            <HomePortfolioCard /> -->
            <HomePostCard
                v-for="(item, index) in posts"
                :key="index"
                :item="item"
            />
        </div>
    </div>
</template>

<script>
import Header from "@/components/home/Header.vue";
import HomeNav from "@/components/home/HomeNav.vue";
import HomePostCard from "@/components/home/HomePostCard.vue";
// import HomePortfolioCard from "@/components/home/HomePortfolioCard.vue";
import { computed } from "vue";
import { useStore } from "vuex";

export default {
    name: "MyHome",
    components: {
        Header,
        HomeNav,
        HomePostCard,
        // HomePortfolioCard,
    },
    setup() {
        const store = useStore();
        const posts = computed(() => store.state.posts);
        return { posts };
    },
};
</script>

<style lang="scss" scoped>
.home-wrapper {
    width: 100%;
    margin-bottom: 100px;
    .cover {
        width: 100%;
        height: 120px;
        background-color: #f8f8f8;

        @media (max-width: 800px) {
            height: 100px;
        }
    }
    .content {
        width: 45%;
        @media (max-width: 800px) {
            width: 90%;
        }
    }
}
</style>
