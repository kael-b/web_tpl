<template>
    <div id="nav">
        <router-link to="/">Home</router-link>|
        <router-link to="/about">About</router-link>
    </div>
    <aRouterView />
</template>
<script>
import aRouterView from "@/components/aRouterView.vue";
export default {
    name: "app",
    components: {
        aRouterView,
    },
};
</script>
<style lang="stylus">
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

:root {
    --mainColor: #12345678;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: var(--mainColor);
    margin-top: 60px;
}
</style>
