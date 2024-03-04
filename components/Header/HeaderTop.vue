<template>
  <ul class="flex menu border-b border-solid border-gray-300">
    <header-item
      v-for="(item, index) in items"
      :key="index"
      :is-active="isActive(index)"
      @toggle-active="toggleActive(index)"
    >
      {{ item }}
    </header-item>
  </ul>
</template>
  
  <script>
import HeaderItem from './HeaderItem.vue'

export default {
  components: { HeaderItem },
  data() {
    return {
      items: ['Главная', 'Вставить', 'Разметка страницы', 'Ссылки', 'Рассылки', 'Вид', 'Ижро'], 
      activeIndex: null,
    }
  },

  mounted() {
    // Set the default activeIndex to the index of "Главная" when the component is mounted
    const defaultItem = 'Главная';
    this.activeIndex = this.items.indexOf(defaultItem);
  },
  methods: {
    isActive(index) {
      // Check if the current item is active based on its index
      return this.activeIndex === index;
    },
    toggleActive(index) {
      // Toggle the active state of the clicked header-item
      if (this.activeIndex === index) {
        this.activeIndex = null; // If the clicked item is already active, deactivate it
      } else {
        this.activeIndex = index; // Activate the clicked item
      }
    },
  
  },
}
</script>
  
  <style scoped>
.menu {
  border-bottom: 1px solid #ddd;
}
</style>
  