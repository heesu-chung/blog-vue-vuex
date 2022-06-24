<template>
    <span class="home-item" v-if="this.from === 'home'">{{ this.item }}</span>

    <router-link
        :to="{ name: 'CategoryList', params: { category: this.item } }"
        class="create-item"
        v-else
        >{{ this.item }}{{ this.from }}</router-link
    >
</template>

<script>
export default {
    name: "CategoryBlock",
    props: ["item", "index", "from"],
    setup() {},
};
</script>

<style lang="scss" scoped>
.create-item {
    color: white;
    text-decoration: none;
    background: #48d4cf;
    padding: 3px 13px;
    font-size: 13px;
    border-radius: 20px;
    margin-right: 10px;

    cursor: pointer;
    transition: 0.5s all ease;
    &:hover {
        color: black;
    }
}
.home-item {
    color: black;
    font-size: 12px;
    padding: 3px 13px;
    border-radius: 20px;
    background: white;
    border: 1px solid #ccc;
    margin-right: 5px;
}
</style>
