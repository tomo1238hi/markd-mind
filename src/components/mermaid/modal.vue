<template>
    <div>
        <div id="overlay">
            <div id="content">
                <p>これがモーダルウィンドウです。</p>
                <button v-on:click="closeModal">close</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        clickEvent: function() {
            this.$emit("from-child");
        }
    }
};
</script>

<style>
#overlay {
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);

    display: flex;
    align-items: center;
    justify-content: center;
}
#content {
    z-index: 2;
    width: 50%;
    padding: 1em;
    background: #fff;
}
</style>
