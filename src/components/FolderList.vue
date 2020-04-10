<template>
    <ul>
        <li class="folders" v-for="folder in folders">
            {{ folder.name }}
            <ul>
                <li class="files" v-for="page in folder.pages">
                    {{ page.name }}
                </li>
            </ul>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            folders: [
                {
                    name: "111",
                    pages: [{ name: "123" }, { name: "234" }, { name: "345" }]
                },
                {
                    name: "222",
                    pages: [{ name: "456" }, { name: "567" }, { name: "678" }]
                },
                {
                    name: "333",
                    pages: [{ name: "890" }, { name: "901" }, { name: "012" }]
                }
            ]
        };
    }
};
</script>

<style>
li.folders {
}
</style>
