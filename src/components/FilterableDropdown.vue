<template>
  <div ref="wrapper" class="fd__wrapper">
    <input type="hidden" :name="name" :value="value" />
    <input
      ref="textBox"
      type="text"
      class="fd__display-textbox"
      :disabled="disabled"
      :value="displayText"
      :placeholder="placeholder"
      readonly="readonly"
      @click="textBoxClicked"
    />
    <div class="fd__list" v-show="showList">
      <div class="fd__filter-input">
        <input
          ref="filterTextBox"
          type="text"
          class="fd__filter-textbox"
          placeholder="Filter..."
          v-model="filterString"
        />
      </div>
      <ul>
        <li
          class="fd__item"
          v-if="showEmptyItem"
          :value="emptyItemValue"
          @click.stop.prevent="itemClicked(null)"
        >{{ emptyItemText || ' ' }}</li>
        <li
          class="fd__item"
          v-if="filteredItems.length > 0"
          v-for="item in filteredItems"
          :key="'item_'+(idKey ? item[idKey] : item)"
          :value="(valueKey ? item[valueKey] : item)"
          @click.stop.prevent="itemClicked(item)"
        >{{ textKey ? item[textKey] : item }}</li>
        <li v-if="filteredItems.length === 0">No Items</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      filterString: null,
      showList: false
    }
  }
}
</script>
