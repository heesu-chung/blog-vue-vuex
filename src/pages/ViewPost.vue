<template>
    <div class="view-post">
        <TitleCover :titleProp="title" />
        <PostContent />
    </div>
</template>

<script>
import TitleCover from "@/components/viewpost/TitleCover.vue";
import PostContent from "@/components/viewpost/PostContent.vue";

import { useStore } from "vuex";
import { computed, onUnmounted, watch } from "vue";

export default {
    name: "ViewPost",
    props: ["post"],
    components: {
        TitleCover,
        PostContent,
    },
    setup(props) {
        const store = useStore();
        const posts = computed(() => store.state.posts);

        const setPost = () => {
            return setTimeout(() => store.commit("setPost", props.post), 1000);
        };
        setPost();
        watch(
            () => props.post,
            () => {
                store.commit("initPost");
                setPost();
            }
        );

        onUnmounted(() => {
            store.commit("initPost");
        });

        return { props, posts };
    },
};
</script>

<style lang="scss" scoped></style>
