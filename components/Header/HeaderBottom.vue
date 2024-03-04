<template>
  <ul class="bg-[] border-b border-b-solid py-1 px-2 flex items-center gap-3">
    <li>
      <button
        class="flex items-center gap-2 py-1 px-3 transition hover:bg-[#edf5ef] rounded"
      >
        <img class="w-[18px]" src="../../assets/svg/save.svg" alt="save" />
        <span class="">Сохранить</span>
      </button>
    </li>
    <li>
      <button
        class="flex items-center gap-2 py-1 px-3 transition hover:bg-[#edf5ef] rounded"
      >
        <img class="w-[18px]" src="../../assets/svg/download.svg" alt="save" />
        <span class="">Скачать</span>
      </button>
    </li>
    <li>
      <button
        @click="$emit('trig-func', 'print')"
        class="flex items-center gap-2 py-1 px-3 transition hover:bg-[#edf5ef] rounded"
      >
        <img class="w-[18px]" src="../../assets/svg/print.svg" alt="save" />
        <span class="">Печать</span>
      </button>
    </li>
    <li class="flex gap-1">
      <button
        :disabled="disableUndoButton"
        :class="{ 'disabled-button': disableUndoButton }"
        class="flex items-center gap-2 py-1 px-2 transition hover:bg-[#edf5ef] rounded"
        @click="$emit('trig-func', 'undo')"
      >
        <img
          class="w-[18px] undo-img"
          src="../../assets/svg/rotate-left.svg"
          alt="save"
        />
      </button>
      <button
        :disabled="disableRedoButton"
        :class="{ 'disabled-button': disableRedoButton }"
        @click="$emit('trig-func', 'redo')"
        class="flex items-center gap-2 py-1 px-2 transition hover:bg-[#edf5ef] rounded"
      >
        <img
          class="w-[18px]"
          src="../../assets/svg/rotate-right.svg"
          alt="save"
        />
      </button>
    </li>
    <li>
      <button
        @click="$emit('trig-func', 'cut')"
        class="flex items-center gap-2 py-1 px-3 transition hover:bg-[#edf5ef] rounded"
      >
        <img class="w-[18px]" src="../../assets/svg/scissors.svg" alt="save" />
      </button>
    </li>
    <li>
      <button
        @click="$emit('trig-func', 'copy')"
        class="flex items-center gap-2 py-1 px-3 transition hover:bg-[#edf5ef] rounded"
      >
        <img class="w-[18px]" src="../../assets/svg/copy.svg" alt="save" />
      </button>
    </li>
    <li>
      <button
        @click="$emit('trig-func', 'paste')"
        class="flex items-center gap-2 py-1 px-3 transition hover:bg-[#edf5ef] rounded"
      >
        <img
          class="w-[18px]"
          src="../../assets/svg/paste-regular.svg"
          alt="save"
        />
      </button>
    </li>
    <li>
      <button
        @click="$emit('trig-func', 'fonts')"
        class="flex items-center gap-2 py-1 px-3 transition hover:bg-[#edf5ef] rounded"
      >
        <select name="" id="">
          <option value="">M</option>
          <option value="">x</option>
        </select>
      </button>
    </li>
    <li>
      <button
        @click="$emit('trig-func', 'increaseSize')"
        class="flex items-center gap-2 py-1 px-3 transition hover:bg-[#edf5ef] rounded"
      >
        <select name="" id="">
          <option value="">16</option>
          <option value="">18</option>
        </select>
      </button>
    </li>
    <li>
      <button
        @click="$emit('trig-func', 'increaseSize')"
        class="flex items-center gap-2 py-1 px-3 transition hover:bg-[#edf5ef] rounded"
      >
        A
      </button>
    </li>
    <li>
      <button
        class="text-[12px] flex items-end gap-2 py-1 px-3 transition hover:bg-[#edf5ef] rounded"
      >
        A
      </button>
    </li>
    <li class="flex gap-2 items-center">
      <div class="w-[17px] h-[17px] bg-[red]"></div>
      <button
        class="transition hover:bg-[#edf5ef] rounded cursor-pointer py-1 px-3"
      >
        <img class="w-[12px]" src="../../assets/svg/caret-down.svg" alt="" />
      </button>
    </li>
    <li>
      <button
        class="flex items-center gap-2 py-1 px-3 transition hover:bg-[#edf5ef] rounded"
      >
        <span class="relative inline-block"
          >A
          <img
            class="absolute bottom-0 right-[-4px] w-[12px]"
            src="../../assets/svg/paintbrush.svg"
            alt="save"
        /></span>
      </button>
    </li>
    <li>
      <button
        class="font-bold flex items-center gap-2 py-1 px-3 transition hover:bg-[#edf5ef] rounded"
      >
        B
      </button>
    </li>
    <li>
      <button
        class="flex items-center gap-2 py-1 px-3 transition hover:bg-[#edf5ef] rounded"
      >
        <em>I</em>
      </button>
    </li>
  </ul>
</template>
  
  <script>
export default {
  props: {
    editor: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {}
  },
  computed: {
    disableUndoButton() {
      // Check if editor is not null and has the can() method
      return (
        !this.editor ||
        !this.editor.can ||
        !this.editor.can().chain().focus().undo().run()
      )
    },
    disableRedoButton() {
      return (
        !this.editor ||
        !this.editor.can ||
        !this.editor.can().chain().focus().redo().run()
      )
    },
  },
  methods: {
    undoFuncHandler() {
      console.log('top bottom worked')
      this.$emit('trig-func', 'undo')
      console.log('bor')
    },
  },
}
</script>
  
  <style lang="scss" scoped>
.disabled-button {
  opacity: 0.6;
  cursor: not-allowed;
}
.undo-img {
  fill: rgb(255, 238, 127);
}
</style>