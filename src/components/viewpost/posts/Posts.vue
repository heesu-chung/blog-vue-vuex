<template>
    <router-link
        :to="{ name: 'ViewPost', params: { post: this.item.title } }"
        class="container"
    >
        <h3 class="title">{{ this.item.title }}</h3>
        <h6 class="date">{{ this.item.date }}</h6>
    </router-link>
</template>

<script>
export default {
    name: "MyPosts",
    props: ["item"],
    computed: {},
    setup() {},
};
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    border-top: 1px solid #eee;
    .title {
        font-size: 15px;
        padding: 5px;
        padding-left: 15px;
        font-weight: 300;
        color: #666;
        @media (max-width: 800px) {
            font-size: 12px;
        }
    }

    .date {
        font-size: 11px;
        text-align: right;
        padding: 5px;
        padding-right: 15px;
        color: #aaa;
    }
}
</style>
