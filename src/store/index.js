import { createStore } from "vuex";
import { db } from "@/config/firebaseInit";

const store = createStore({
    state() {
        return {
            posts: [],
            portfolios: [],
            dailies: [],
            post: "",
            title: "읽어오는 중입니다...",
            subTitle: "",
            category: [],
            content: "",
            desc: "",
            date: "",
            number: 0,
        };
    },
    mutations: {
        setPost(state, payload) {
            state.post = state.posts.filter((el) => el.title === payload);
            state.title = state.post[0].title;
            state.subTitle = state.post[0].subTitle;
            state.category = state.post[0].category;
            state.content = state.post[0].content;
            state.desc = state.post[0].desc;
            state.date = state.post[0].date;
            state.number = state.post[0].number;
        },
        initPost(state) {
            state.title = "읽어오는 중입니다....";
            state.subTitle = "";
            state.category = [];
            state.content = "";
            state.desc = "";
            state.date = "";
            state.post = "";
            state.number = 0;
        },
        setPosts(state, payload) {
            state.posts = payload;
        },
        setPortfolios(state, payload) {
            state.portfolios = payload;
        },
        setDailies(state, payload) {
            state.dailies = payload;
        },
    },
    actions: {
        getPost(context, payload) {
            context.commit(
                "setPost",
                context.state.posts.filter((el) => el.title === payload)
            );
        },
        async getPosts(context) {
            const database = db.collection("posts");
            try {
                await database
                    .orderBy("date", "desc")
                    .get()
                    .then((docs) => {
                        const arr = [];
                        docs.forEach((el) => {
                            arr.push(el.data());
                        });
                        context.commit("setPosts", arr);
                        context.commit(
                            "setPortfolios",
                            arr.filter(
                                (el) => el.category.indexOf("portfolio") !== -1
                            )
                        );
                        context.commit(
                            "setDailies",
                            arr.filter(
                                (el) => el.category.indexOf("daily") !== -1
                            )
                        );
                    });
            } catch (err) {
                console.log(err);
            }
        },
        async updatePost(context, payload) {
            const database = db.collection("posts");
            try {
                await database.add(payload);
            } catch (err) {
                console.log(err);
            }
        },
    },
});

export default store;
