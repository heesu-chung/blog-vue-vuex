<template>
    <div class="posts-container">
        <router-link :to="{ name: 'PostList' }" class="more"
            ><div>다른 포스트...</div></router-link
        >
        <Posts v-for="(item, index) in getArr" :key="index" :item="item" />
    </div>
</template>

<script>
import Posts from "./posts/Posts.vue";

export default {
    name: "MorePosts",
    components: { Posts },
    data() {
        return {
            arr: [],
        };
    },
    computed: {
        getArr() {
            const rvArr = [...this.$store.state.posts].reverse();
            const idx = this.$store.state.number - 1;
            let newArr = [];
            if (idx > 2) {
                newArr = rvArr.slice(idx - 2, idx + 3).reverse();
            } else if (idx <= 2 && newArr.length !== 0) {
                newArr = rvArr.slice(0, idx + 3).reverse();
            }
            return newArr;
        },
    },
};
</script>

<style lang="scss" scoped>
.posts-container {
    width: 100%;
    margin-top: 50px;

    border: 1px solid #ccc;
    .more {
        text-decoration: none;
        width: 100%;
        div {
            font-size: 13px;
            font-weight: 500;
            padding: 10px;
            padding-left: 15px;
            color: #48d4cf;

            transition: 0.5s all ease;
            &:hover {
                background: #f8f8f8;
            }
        }
        cursor: pointer;
    }
}
</style>
