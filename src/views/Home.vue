<template>
    <div class="home">
        <!-- <img alt="Vue logo" src="@/assets/logo.png" /> -->
        <input type="text">
    </div>
</template>

<script>
// @ is an alias to /src
export default {
    // name: "Home",
    components: {
    },
    activated() {
      console.log('activated')
    },
    deactivated() {
      console.log('deactivated')
    },
    unmounted() {
      console.log('unmounted')
    }

};
</script>

<style lang="stylus" scoped>

</style> 