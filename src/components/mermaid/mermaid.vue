<template>
    <div>
        <div>
            <div id="overlay" v-show="showContent">
                <div id="content">
                    <input v-model="InputTest" type="text" />
                    <button v-on:click="closeModal">Close</button>
                </div>
            </div>
        </div>
        <vue-mermaid
            v-bind:nodes="data"
            type="graph TB"
            @nodeClick="editNode"
            v-bind:config="mermaid"
        ></vue-mermaid>
        <button @click="button">new node</button>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            data: [
                { id: "1", text: "A", next: ["2"], editable: true },
                { id: "2", text: "B", next: ["3"], editable: true },
                { id: "3", text: "C", next: ["4", "6"], editable: true },
                { id: "4", text: "D", next: ["5"], editable: true },
                { id: "5", text: "E", editable: true },
                { id: "6", text: "F", editable: true },
                { id: "7", text: "G", next: ["8", "9"], editable: true },
                { id: "8", text: "H", editable: true },
                { id: "9", text: "I", next: ["10"], editable: true },
                { id: "10", text: "J", editable: true }
            ],
            mermaid: {
                theme: "default",
                startOnLoad: !1,
                securityLevel: "loose"
            },
            InputTest: "",
            showContent: false
        };
    },
    methods: {
        editNode(nodeId) {
            openModal();
            this.data[nodeId - 1].text = this.InputTest;
        },
        button() {
            let length = this.data.length;
            this.data.push({
                id: length + 1,
                text: this.InputTest,
                editable: true
            });
        },
        openModal() {
            this.showContent = true;
        },
        closeModal() {
            this.showContent = false;
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
