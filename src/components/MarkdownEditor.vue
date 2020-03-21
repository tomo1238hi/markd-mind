<template>
  <div class="me">
    <div class="tabs">
      <TabItem v-for="item in list" v-bind="item" :key="item.id" v-model="currentId" />
    </div>
    <div class="contents">
      <transition>
        <section class="item" :key="currentId">
          <textarea class="markdown-editor" rows="50" cols="100"></textarea>
          {{ current.content }}
        </section>
      </transition>
    </div>
  </div>
</template>

<script>
import TabItem from "./TabItem.vue";
export default {
  components: { TabItem },
  data() {
    return {
      currentId: 1,
      list: [
        { id: 1, label: "Tab1", content: "" },
        { id: 2, label: "Tab2", content: "" },
        { id: 3, label: "Tab3", content: "" }
      ]
    };
  },
  computed: {
    current() {
      return this.list.find(el => el.id === this.currentId) || {};
    }
  }
};
</script>

<style scoped>
.markdown-editor {
  margin: -16px;
  border: none;
  resize: none;
}
.contents {
  overflow: hidden;
  border: 2px solid #000;
}
.item {
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
  transition: all 0.8s ease;
}
/* トランジション用スタイル */
.v-leave-active {
  position: absolute;
}
.v-enter {
  transform: translateX(-100%);
}
.v-leave-to {
  transform: translateX(100%);
}
</style>
