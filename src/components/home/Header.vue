<template>
    <header class="header">
        <div class="intro">
            <div class="title">
                <span class="name">데데뎁 Dededef</span>
                <span class="about">개발과 창작을 함께 하고 있습니다.</span>
            </div>
            <div class="info">
                <div class="post-wrapper">
                    <h3 class="post-desc">포스트</h3>
                    <span class="post-info">{{ postsLen }}</span>
                </div>
                <div class="btn-wrapper">
                    <router-link
                        :to="{ name: 'CreatePost' }"
                        class="create-post"
                        ><button class="btn">작성하기</button></router-link
                    >
                    <button class="github-link btn">
                        <a href="https://github.com/heesu-chung">Github</a>
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
    name: "MyHeader",
    setup() {
        const store = useStore();
        const postsLen = computed(() => store.state.posts.length);

        return { postsLen };
    },
};
</script>

<style lang="scss" scoped>
.header {
    width: 100%;

    .intro {
        width: 100%;
        margin: 30px auto;
        display: flex;
        flex-direction: column;

        .title {
            display: flex;
            flex-direction: column;

            .name {
                font-size: 28px;
                font-weight: 300;
            }
            .about {
                font-size: 14px;
                font-weight: 300;
                color: #999;
            }
        }

        .info {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin: 30px 0;

            @media (max-width: 800px) {
                width: 100%;
                margin-bottom: 0px;
                .btn-wrapper {
                    display: flex;
                    flex-direction: row;
                }
            }

            .post-wrapper {
                .post-desc {
                    font-size: 14px;
                    font-weight: 300;
                    color: #999;
                }
                .post-info {
                    font-size: 20px;
                    font-weight: 300;
                    color: #999;
                }
            }
            .btn-wrapper {
                text-align: right;

                .btn {
                    width: 90px;
                    height: 30px;

                    font-weight: 300;
                    font-size: 14px;
                    text-decoration: none;
                    margin-right: 10px;
                    border-radius: 15px;
                    background-color: white;
                    border: 1px solid #ccc;
                    cursor: pointer;
                    transition: 0.5s all ease;

                    &:hover {
                        background-color: #f8f8f8;
                        color: white;
                    }

                    a {
                        text-decoration: none;
                        color: black;
                    }
                }
                .create-post .btn {
                    border: none;
                    border: 1px solid #48d4cf;
                    color: #48d4cf;
                }
            }
        }
    }
}
</style>
