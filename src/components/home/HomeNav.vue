<template>
    <div class="home-nav">
        <div class="about menu">About</div>
        <div class="posts menu">Posts</div>
        <div class="portfolio menu">Portfolio</div>
        <div class="Daily menu">Daily</div>
    </div>
</template>

<script>
export default {
    name: "HomeNav",
};
</script>

<style lang="scss" scoped>
.home-nav {
    width: 100%;
    margin-top: 50px;

    display: flex;
    flex-direction: row;
    font-size: 18px;
    font-weight: 300;
    color: #aaa;
    cursor: pointer;

    .menu {
        border-top: 1px solid #ccc;
        padding: 10px 0;
        transition: 0.5s all ease;
        text-align: center;
        &:hover {
            color: #555;
        }
    }
}
</style>
