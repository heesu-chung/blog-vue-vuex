<template>
    <div>
        <Nav />
        <router-view class="router-view" />
    </div>
</template>

<script>
import Nav from "./components/global/Nav.vue";

import { useStore } from "vuex";

export default {
    name: "App",
    components: { Nav },
    setup() {
        const store = useStore();
        store.dispatch("getPosts");

        return {};
    },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap");

* {
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 300;
    box-sizing: border-box;
    width: 100%;
    margin: 0 auto;
}

.navigation {
    width: 100%;
    height: 70px;
}
</style>
