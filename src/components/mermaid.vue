<template>
    <div>
        <vue-mermaid
            v-bind:nodes="data"
            type="graph TB"
            @nodeClick="editNode"
            v-bind:config="mermaid"
        ></vue-mermaid>
        <input v-model="InputTest" type="text" />
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
            InputTest: ""
        };
    },
    methods: {
        editNode(nodeId) {
            console.log(nodeId);
            this.data[nodeId - 1].text = this.InputTest;
        },
        button() {
            let length = this.data.length;
            this.data.push({
                id: length + 1,
                text: this.InputTest,
                editable: true
            });
        }
    }
};
</script>
