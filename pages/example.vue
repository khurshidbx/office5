<template>
  <div>
    <editor-content :editor="editor" ref="editorContent" />
    <editor-menu-bar :editor="editor">
      <template>
        <button @click="copyContent">
          Copy
        </button>
        <button @click="pasteContent">
          Paste
        </button>
      </template>
    </editor-menu-bar>
  </div>
</template>

<script>
import {  EditorContent,  } from '@tiptap/vue-2';
// import { useEditor, useCommand } from '@tiptap/vue-2';
import { copyTextToClipboard } from '../utils/index';

export default {
  components: {
    // Editor,
    EditorContent,
    // EditorMenuBar
  },
  data() {
    return {
      editor: null
    };
  },
  mounted() {
    this.editor = this.$refs.editorContent.editor;
  },
  methods: {
    copyContent() {
      const content = this.editor.getHTML();
      copyTextToClipboard(content);
    },
    pasteContent() {
      navigator.clipboard.readText()
        .then(copiedContent => {
          this.editor.commands.setContent(copiedContent);
        })
        .catch(err => {
          console.error('Error pasting content:', err);
        });
    }
  }
};
</script>
