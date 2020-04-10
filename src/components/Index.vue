<template>
    <div class="container">
        <header class="header">header</header>
        <asideFolder class="asideFolder">
            <FolderList />
        </asideFolder>
        <asideTag class="asideTag">
            <FilterableDropdown :items="itemArray" v-model="selectedValue" />
        </asideTag>
        <mdeditor id="mdeditor">
            <div class="span"></div>
            <MarkdownEditor />
        </mdeditor>
        <guieditor class="guieditor">
            mermaid
            <Mermaid />
        </guieditor>
        <footer class="footer">footer</footer>
    </div>
</template>

<script>
import FolderList from "./FolderList.vue";
import FilterableDropdown from "./FilterableDropdown.vue";
import MarkdownEditor from "./MarkdownEditor.vue";
import Mermaid from "./mermaid";
export default {
    name: "Index",
    components: { FolderList, FilterableDropdown, MarkdownEditor, Mermaid }
};
</script>

<style>
.span {
    margin: 5px;
    clear: both;
}
.container {
    border: solid 1px black;
    display: grid;
    grid-template-columns: 180px 180px 0.5fr 0.5fr;
    grid-template-rows: 60px 1fr 600px;
}
.header {
    border: solid 1px black;
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: auto;
}

.asideFolder {
    border: solid 1px black;
    grid-column-start: 1;
    grid-column-end: auto;
    grid-row-start: 2;
    grid-row-end: 4;
}

.asideTag {
    border: solid 1px black;
    grid-column-start: 2;
    grid-column-end: auto;
    grid-row-start: 2;
    grid-row-end: 4;
}

.mdeditor {
    border: solid 1px black;
    grid-column-start: 3;
    grid-column-end: auto;
    grid-row-start: 2;
    grid-row-end: 4;
}

.guieditor {
    border: solid 1px black;
    grid-column-start: 4;
    grid-column-end: auto;
    grid-row-start: 2;
    grid-row-end: 4;
}

.footer {
    border: solid 1px black;
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: auto;
    grid-row-end: auto;
}
</style>
