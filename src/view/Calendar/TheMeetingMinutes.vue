<template>
  <div class="ck_editor">
    <ckeditor v-model="dataText" :editor="editor" @ready="onReady"></ckeditor>
  </div>
</template>

<script>
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import { meetingMinutesDefault } from "../Calendar/meetingMinutes";
import { ref } from 'vue';
const configEditor = ref({
  fontSize: {
            options: [
                9,
                11,
                13,
                'default',
                17,
                19,
                21
            ]
        },
        toolbar: [
          'fontSize', 
        ]
})
export default {
  name: "TheMeetingMinutes",
  data() {
    return {
      editor: DecoupledEditor,
      dataText: meetingMinutesDefault,
    };
  },
  methods: {
    onReady(editor) {
      editor.ui
        .getEditableElement()
        .parentElement.insertBefore(
          editor.ui.view.toolbar.element,
          editor.ui.getEditableElement()
        );
    },
  },
};
</script>

<style scoped>
.ck_editor {
  display: block;
  width: 100%;
}
.ck.ck-content {
  min-height: 500px;
  max-height: 520px;
}
</style>

