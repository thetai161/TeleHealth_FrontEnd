<template>
  <div class="ck_editor">
    <ckeditor :model-value="conclusion === null ? dataDefault : conclusion" @update:model-value="updateContent" :editor="editor" :config="config" @ready="onReady"></ckeditor>
  </div>
</template>

<script>
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import { meetingMinutesDefault } from "../Calendar/meetingMinutes";
export default {
  name: "TheMeetingMinutes",
  props: ["isInvited", "method", "conclusion"],
  data() {
    return {
      editor: DecoupledEditor,
      dataDefault: meetingMinutesDefault,
      config: {
        fontSize: {
            options: [
                9,
                10,
                11,
                12,
                13,
                'default',
                15,
                16,
                17,
                18,
                19,
                20
            ]
        }
      },
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
    updateContent(data) {
      this.$emit('update:conclusion', data)
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

