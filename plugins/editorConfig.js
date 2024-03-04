// editorConfig.js
import { Schema } from 'tiptap';
import { fontSize } from '@tiptap/extension-font-size';

const schema = new Schema({
  // Define your schema
  marks: {
    fontSize: fontSize(),
  },
});

export default schema;
