<template>
    <div class="app">
        <span></span>
        <input :value="title" @input="input" />
        <button @click="exec">Exec</button>
        <span>{{ title }}</span>
    </div>
</template>

<script>
export default {
    name: "VuexTest",
    data() {
        return {};
    },
    setup() {
        let title = "";
        const exec = () => {
            console.log(`button clicked`);
            console.log(title);
        };
        const input = (e) => {
            title = e.target.value;
            console.log(title);
        };
        return { title, exec, input };
    },
};
</script>

<style>
.app {
    margin-top: 100px;
}
</style>
