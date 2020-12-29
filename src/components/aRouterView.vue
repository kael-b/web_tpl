<template>
    <router-view v-slot="{ Component }">
        <!-- <transition name="slide-fade" mode="out-in"> -->
            <keep-alive :include="aliveArr">
                <component :is="Component" />
            </keep-alive>
        <!-- </transition> -->
    </router-view>
</template>

<script>
export default {
    name: "aRouterView",
    data() {
        return {};
    },
    mounted() {
    },
    watch: {
        $route(to) {
            if (to.meta.isAlive) {
                let com = to.matched[0];
                for (let key in com.components) {
                    if (!com.components[key].name) {
                        com.components[key].name = com.name + '_' + key;
                    }
                }
                let name = com.components.default.name;
                this.$store.dispatch("addAliveArr", name);
            }
        },
    },
    computed: {
        aliveArr() {
            return this.$store.state.aliveArr || [];
        },
        isAlive() {
            return this.$route.meta.isAlive;
        },
    },
    methods: {
        genName(prefix = "_al_com_") {
            return prefix + Date.now();
        },
    },
};
</script>

<style lang="stylus" scoped>
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from, .slide-fade-leave-to {
    transform: translateX(100%);
    opacity: 0;
}
</style>