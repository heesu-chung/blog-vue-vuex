<template>
    <div class="title">
        <div class="title-cover"></div>
        <div class="info">
            <h1 class="title">{{ title }}</h1>
            <p class="subtitle">{{ subTitle }}</p>
            <div class="article-info">
                <span class="by">by </span>
                <span class="author">데데뎁 Dededef · </span>
                <span class="date">{{ date }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
    name: "TitleCover",

    setup() {
        const store = useStore();
        const title = computed(() => store.state.title);
        const subTitle = computed(() => store.state.subTitle);
        const date = computed(() => store.state.date);

        return { title, subTitle, date };
    },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@300&display=swap");
.title {
    .title-cover {
        width: 100%;
        height: 450px;
        position: fixed;
        top: 0;
        left: 0;
        background-color: #f8f8f8;
        z-index: -1;

        @media (max-width: 800px) {
            width: 100%;
            height: 400px;
        }
    }

    .info {
        width: 45%;
        margin: 150px auto;
        left: 50%;
        transform: translateX(-50%);
        position: fixed;
        @media (max-width: 800px) {
            width: 90%;
        }

        .title {
            font-family: "Noto Serif KR", serif;
            font-size: 45px;

            @media (max-width: 800px) {
                font-size: 30px;
            }
        }
        .subtitle {
            margin-top: 10px;
            font-size: 18px;
            font-weight: 500;
            color: #aaa;

            @media (max-width: 800px) {
                margin-top: 5px;
                font-size: 16px;
            }
        }
        .article-info {
            font-size: 12px;
            font-weight: 500;
            color: #aaa;
            margin-top: 30px;

            @media (max-width: 800px) {
                margin-top: 15px;
            }

            .date {
                color: #ccc;
            }
        }
    }
}
</style>
