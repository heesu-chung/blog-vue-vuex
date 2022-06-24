<template>
    <div class="wrapper">
        <div class="content">
            <span class="title">this is the title</span>
        </div>
        <div class="img">
            <img src="" @error="replaceImg" />
        </div>
        <div class="stack">JS, Frontend</div>
        <div class="title">this is the title</div>
    </div>
</template>

<script>
export default {
    name: "HomePortfolioCard",
    data() {
        return {
            image: "",
        };
    },
    methods: {
        replaceImg(e) {
            e.target.src = require(`@/assets/logo.png`);
        },
    },
};
</script>

<style lang="scss" scoped>
.wrapper {
    width: 33%;
    border: 1px solid black;
    .content {
        display: flex;
        justify-content: center;
        align-items: center;
        .title {
            font-size: 20px;
        }
        .img {
            img {
                object-fit: cover;
            }
        }
    }
}
</style>
