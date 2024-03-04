<template>
  <div
    class="w-[100%] font-serif bg-[#f7f7f7] p-[8px] font-sans font-medium cursor-pointer flex justify-center items-center hover:bg-[#fff] btn-active-border"
    :class="{ active: isActive }"
    @click="$emit('toggle-active')"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.btn-active-border {
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
}
// .btn-active-border:focus,
// .btn-active-border:hover,
// .btn-active-border:active {
//   border-left-color: #ddd;
//   border-right-color: #ddd;
// }
.active {
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  background: #fec4c4;
}
</style>