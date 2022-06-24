<template>
    <router-link
        :to="{ name: 'ViewPost', params: { post: this.item.title } }"
        class="card"
    >
        <div class="card-content">
            <CategoryBlock
                class="category"
                v-for="(item, index) in this.item.category"
                :key="index"
                :item="item"
                :from="this.home"
            />

            <h2 class="title">{{ this.item.title }}</h2>
            <p class="desc">{{ this.item.desc.slice(0, 100) }}</p>
            <h5 class="date">{{ this.dateModify }}</h5>
        </div>
        <div class="card-img">
            <img class="img" alt />
        </div>
    </router-link>
</template>

<script>
import CategoryBlock from "../category/CategoryBlock.vue";
export default {
    name: "HomePostCard",
    props: ["item"],
    data() {
        return {
            home: "home",
        };
    },
    components: { CategoryBlock },

    computed: {
        dateModify() {
            const item = this.item.date.split(" ");
            const date = item.slice(0, 3).join(" ");
            const ampm = item.slice(3, 4).join("") === "오후" ? 12 : 0;
            let hour = item.slice(4).join("").split(":");
            hour[0] = Number(hour[0]) + ampm;
            return date + " " + hour.slice(0, 2).join(":");
        },
    },
};
</script>

<style lang="scss" scoped>
.card {
    width: 100%;
    padding: 40px 0;
    border-bottom: 1px solid #ccc;
    display: flex;
    flex-direction: row;
    text-decoration: none;
    cursor: pointer;
    transition: 0.5s all ease;

    @media (max-width: 800px) {
        padding: 20px 0;
    }

    &:hover {
        background-color: #f8f8f8;
    }

    .card-content {
        flex: 3;
        width: 100%;
        height: 120px;

        @media (max-width: 800px) {
            flex: 4;
        }

        .category {
            font-size: 12px;
            color: black;

            @media (max-width: 800px) {
                font-size: 10px;
            }
        }
        .title {
            font-size: 20px;
            color: black;
            letter-spacing: 0.5px;
            margin: 10px 0;

            @media (max-width: 800px) {
                font-size: 14px;
                font-weight: 400;
            }
        }
        .desc {
            font-size: 14px;
            letter-spacing: 0.5px;
            color: #888;

            @media (max-width: 800px) {
                font-size: 11px;
            }
        }
        .date {
            margin: 20px 0;
            font-size: 12px;
            color: #aaa;

            @media (max-width: 800px) {
                font-size: 10px;
                margin: 10px 0;
            }
        }
    }
    .card-img {
        flex: 1;
        text-align: right;
        .img {
            width: 120px;
            height: 120px;
            background-color: #ccc;

            @media (max-width: 800px) {
                width: 60px;
                height: 60px;
            }
        }
    }
}
</style>
