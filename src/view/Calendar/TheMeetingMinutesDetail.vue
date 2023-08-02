<template>
  <div class="ck_editor">
    <ckeditor :model-value="conclusion" :editor="editor" :config="config" @ready="onReady" :readonly="true"></ckeditor>
  </div>
</template>

<script>
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
export default {
  name: "TheMeetingMinutesDetail",
  props: ["conclusion"],
  data() {
    return {
      editor: DecoupledEditor,
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

