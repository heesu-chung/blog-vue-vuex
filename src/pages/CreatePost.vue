<template>
    <div class="container">
        <input
            class="title"
            placeholder="Title here..."
            v-bind="title"
            @input="handleTitle"
        />
        <input
            class="sub title"
            placeholder="sub title here..."
            v-bind="subTitle"
            @input="handleSubTitle"
        />
        <input
            type="text"
            class="category"
            placeholder="Category here...Press Enter"
            @keydown.enter="submitCategory"
            v-bind="category"
            @input="handleCategory"
        />
        <div class="categories">
            <CategoryBlock
                v-for="(item, index) in categoryArr"
                :key="index"
                :item="item"
            />
        </div>

        <QuillEditor
            class="quill-editor"
            theme="snow"
            :toolbar="[
                { header: [1, 2, 3, 4, 5, 6, false] },
                'bold',
                'italic',
                'blockquote',
                'code-block',
                'link',
                'image',
            ]"
            style="min-height: 500px"
            v-model="content"
            @input="handleContent"
        />
        <button class="btn" @click="uploadPost">작성하기</button>
    </div>
</template>

<script>
import CategoryBlock from "@/components/category/CategoryBlock.vue";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import { useRouter } from "vue-router";
import { ref, computed, reactive } from "vue";
import { useStore } from "vuex";

export default {
    name: "CreatePost",
    components: {
        QuillEditor,
        CategoryBlock,
    },
    setup: () => {
        let title = "";
        let subTitle = "";
        let content = "";
        let desc = "";
        let category = ref("");
        const categoryArr = reactive([]);

        const router = useRouter();
        const store = useStore();
        const posts = computed(() => store.state.posts);
        const handleTitle = (e) => {
            title = e.target.value;
        };
        const handleSubTitle = (e) => {
            subTitle = e.target.value;
        };
        const handleContent = (e) => {
            content = e.target.innerHTML;
            desc = e.target.innerText;
        };

        const uploadPost = () => {
            let post = {
                title: title,
                subTitle: subTitle,
                category: categoryArr,
                content: content,
                desc: desc.split("\n").join(" "),
                date: new Date().toLocaleString(),
                number: posts.value.length + 1,
            };
            store.dispatch("updatePost", post);
            store.dispatch("getPosts");
            router.push("Home");
        };
        const submitCategory = (e) => {
            categoryArr.push(e.target.value);
            e.target.value = "";
        };
        const handleCategory = (e) => {
            category = e.target.value;
        };
        return {
            title,
            subTitle,
            category,
            categoryArr,
            content,
            handleTitle,
            handleSubTitle,
            handleContent,
            handleCategory,
            uploadPost,
            submitCategory,
        };
    },
};
</script>

<style lang="scss" scoped>
.container {
    width: 45%;
    /* margin-top: 100px; */
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
    @media (max-width: 800px) {
        width: 90%;
    }

    input {
        height: 50px;
        font-size: 22px;
        border: none;
        border-bottom: 1px solid #aaa;
        margin-bottom: 20px;
    }
    .title {
        margin-top: 100px;
    }
    .sub {
        margin-top: 0;
    }
    .category {
        height: 40px;
        font-size: 18px;
    }
    .categories {
        padding: 10px 0;
        margin-bottom: 30px;
        overflow-x: hidden;
    }

    .btn {
        width: 100px;
        height: 30px;
        margin-top: 30px;
        border-radius: 15px;
        border: 1px solid #aaa;
        background: white;
        letter-spacing: 1px;
        cursor: pointer;
        transition: 0.5s all ease;
        &:hover {
            background: #48d4cf;
            color: white;
            border: 1px solid #48d4cf;
        }
    }
}
</style>
