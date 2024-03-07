<template>
  <div>
    <HeaderTop />
    <HeaderBottom :editor="editor" @trig-func="undoFuncHandler" />
    <div>
      <button @click="increaseFontSize" class="p-3 bg-yellow-100">
        Increase
      </button>
    </div>
    <select v-model="selectedFontSize" @change="changeFontSize">
      <option v-for="size in fontSizeOptions" :key="size" :value="size">
        {{ size }}px
      </option>
    </select>
    <div class="flex items-center justify-center py-12 bg-gray-100">
      <TipTapEditor class="w-[90%] h-[1056px]" :editor="editor" />
    </div>
    <div class="h-[100px]"></div>
  </div>
</template>

<script>
// import { FontSize } from 'tiptap-extensions'
// import { TextStyle } from '@tiptap/extension-text-style';
// import { setFontSize } from '@tiptap/extension-text-style'
import { Editor } from '@tiptap/vue-2'
// import { Schema } from 'prosemirror-model'
// import { schema } from 'prosemirror-schema-basic'
import StarterKit from '@tiptap/starter-kit'
import HeaderBottom from '../components/Header/HeaderBottom.vue'
import HeaderTop from '../components/Header/HeaderTop.vue'
import TipTapEditor from '../components/TipTapEditor.vue'

// const fontSize = {
//   attrs: {
//     size: {
//       default: 12, // Default font size
//     },
//   },
//   inclusive: false,
//   parseDOM: [
//     {
//       style: 'font-size',
//       getAttrs: (value) => ({ size: parseInt(value) }),
//     },
//   ],
//   toDOM: (mark) => ['span', { style: `font-size: ${mark.attrs.size}px` }, 0],
// }

export default {
  name: 'IndexPage',

  components: {
    HeaderTop,
    HeaderBottom,
    TipTapEditor,
  },

  data() {
    return {
      selectedFontSize: 12, // Default font size
      fontSizeOptions: [
        8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64,
        68, 72,
      ], // Available font sizes

      editor: null,
    }
  },
  mounted() {
    this.editor = new Editor({
      content: ``,
      extensions: [StarterKit],
    })
    // console.log(this.$ref)
  },
  beforeDestroy() {
    this.editor.destroy()
  },
  methods: {
    increaseFontSize() {
      const { state } = this.editor
      const { from, to } = state.selection

      const selectedText = state.doc.textBetween(from, to, ' ')
      // const editor = this.$refs.editor
      // if (this.editor && this.editor.isActive('textSelection')) {
      this.editor.chain().focus().setFont({ size: '24px' }).run()
      // }

      console.log(state.schema.marks.bold, 'hello', selectedText)

      // Check if the from and to positions are within range
      // if (
      //   from >= 0 &&
      //   from <= state.doc.content.size &&
      //   to >= 0 &&
      //   to <= state.doc.content.size
      // ) {
      // Get the selected text

      // const tr = state.tr
      // tr.addMark(
      //   from,
      //   to,
      //   state.schema.marks.fontSize.create({ size: '10px' })
      // )

      // Log the selected text to the console

      // Apply the transaction to the editor
      // this.editor.dispatch(tr)

      // Log the selected text to the console
      // } else {
      //   console.warn('Selection is out of range')
      // }
    },

    changeFontSize() {
      // const {  dispatch } = this.editor
      // const { from, to } = state.selection
      console.log(this.editor.view.state.schema)

      // Get the selected font size
      // const selectedSize = parseInt(this.selectedFontSize)

      // Apply the selected font size to the selected text
      // dispatch(
      //   state.tr.addMark(
      //     from,
      //     to,
      //     state.schema.marks.fontSize.create({ size: selectedSize })
      //   )
      // )
    },
    undoFuncHandler(val) {
      const editor = this.editor
      if (val === 'cut') {
        const text = this.editor.getHTML() // Get the HTML content of the editor

        // Remove <p> tags from the text content
        const textContent = text.replace(/<\/?p>/g, '')

        // Copy the text content to the clipboard
        navigator.clipboard
          .writeText(textContent)
          .then(() => {
            console.log('Content cut and copied to clipboard')
            // Remove the content from the editor
            this.editor.commands.deleteSelection()
          })
          .catch((err) => {
            console.error('Error cutting content:', err)
          })
      } else if (val === 'copy') {
        const text = this.editor.getHTML() // Get the HTML content of the editor

        const textContent = text.replace(/<\/?p>/g, '')
        console.log(textContent)

        navigator.clipboard
          .writeText(text) // Copy the HTML content to the clipboard
          .then(() => {
            console.log('Content copied to clipboard')
          })
          .catch((err) => {
            console.error('Error copying content:', err)
          })
      } else if (val === 'paste') {
        navigator.clipboard
          .readText() // Read text from the clipboard
          .then((copiedText) => {
            const textContent = copiedText.replace(/<\/?p>/g, '')
            console.log('Content from clipboard:', textContent) // Log the copied text
            // Insert the copied text into the editor at the current selection point
            this.editor.commands.insertContent(textContent)
            console.log('Content pasted from clipboard')
          })
          .catch((err) => {
            console.error('Error pasting content:', err)
          })
      } else if (val === 'print') {
        const printWindow = window.open('', '_blank')
        // Copy editor content to the new window
        const content = this.editor.getHTML()
        printWindow.document.open()
        printWindow.document.write(content)
        printWindow.document.close()

        // Print the new window
        printWindow.print()
      } else if (val === 'increaseSize') {
        const { state } = this.editor
        console.log(state.schema.marks)
        // const { from, to } = state.selection
        // const fontSize = 2

        // // Apply custom font size style to the selected text
        // dispatch(
        //   state.tr.addMark(
        //     from,
        //     to,
        //     state.schema.marks.fontSize.create({ size: fontSize })
        //   )
        // )
      } else {
        console.dir(editor.chain().deleteSelection().run())
      }
    },
  },
}
</script>
<style lang="css">
@import url('../assets/css/mian.css');

.khzuck {
  font-family: MyCustomFont, sans-serif;
}
</style>
