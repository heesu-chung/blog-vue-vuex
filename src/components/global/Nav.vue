<template>
    <div class="nav-wrapper">
        <div class="web-container">
            <router-link :to="{ name: 'Home' }" class="logo">Log</router-link>
        </div>
        <div class="mobile-container">
            <div class="background"></div>
            <router-link :to="{ name: 'Home' }" class="logo-link">
                <div class="logo">L</div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "AppNav",
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");

.logo {
    font-family: "Pacifico", cursive;
}
.nav-wrapper {
    .web-container {
        width: 100%;
        height: 80px;
        position: fixed;
        z-index: 100;
        top: 30px;
        @media (max-width: 800px) {
            display: none;
        }
        .logo {
            width: 30px;
            margin-left: 50px;
            font-size: 28px;
            cursor: pointer;
            text-decoration: none;
            color: black;
            transition: 0.5s all ease;
            &:hover {
                color: #48d4cf;
            }
        }
    }
    .mobile-container {
        position: fixed;
        z-index: 100;
        width: 100%;
        height: 50px;
        top: 0;
        left: 0;

        .background {
            width: 100%;
            height: 50px;
            top: 0;
            left: 0;
            background: rgba(#f8f8f8, 0.7);
            backdrop-filter: blur(3px);
        }

        @media (min-width: 800px) {
            display: none;
        }

        .logo-link {
            width: 100%;
            text-decoration: none;
            color: black;
            text-align: center;
            position: absolute;
            top: 10px;
            left: 0;

            .logo {
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 0.8rem;

                width: 30px;
                height: 30px;
                border-radius: 50%;
                background: black;
                color: white;
            }
        }
    }
}
</style>
