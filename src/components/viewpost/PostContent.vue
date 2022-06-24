<template>
    <div class="post-wrapper">
        <div class="post-content">
            <div class="article" v-html="content"></div>

            <PostCategory />
            <Header class="intro" />
            <MorePosts />
        </div>
    </div>
</template>

<script>
import PostCategory from "./PostCategory.vue";
import Header from "../home/Header.vue";
import MorePosts from "./MorePosts.vue";

import { computed } from "vue";
import { useStore } from "vuex";

export default {
    name: "PostContent",
    components: {
        PostCategory,
        Header,
        MorePosts,
    },
    setup() {
        const store = useStore();
        const content = computed(() => store.state.content);

        return { content };
    },
};
</script>

<style lang="scss" scoped>
.post-wrapper {
    width: 100%;
    position: absolute;

    top: 450px;
    background-color: white;

    .post-content {
        width: 45%;
        margin: 30px auto;
        @media (max-width: 800px) {
            width: 90%;
        }
        .article {
            line-height: 2rem;
            margin-bottom: 50px;
            text-align: justify;
            text-indent: 15px;
            @media (max-width: 800px) {
                line-height: 1.5rem;
            }
        }
        .intro {
            margin-top: 100px;
        }
    }
}
</style>
