<!-- <script setup>
import { ref, onMounted } from 'vue'
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css'

const content = ref({})
const getDefaultContent = () => {
  content.value = JSON.parse('aaaaaaaaaa')
}
onMounted(getDefaultContent)

</script>

<template>
  <QuillEditor v-model:content="content" theme="snow" toolbar="essential"/>
</template> -->

<script setup>
import { ref } from 'vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { component as CKEditor } from '@ckeditor/ckeditor5-vue';

const editorData = ref('')
const editorConfig = ref({
  toolbar : ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote'],
  heading: {
    options: [
      { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph'},
      { model: 'heading1', title: 'h1', class: 'ck-heading_heading1'},
      { model: 'heading2', title: 'h2', class: 'ck-heading_heading2'},
    ]
  }
})
</script>

<template>
  <CKEditor :editor="ClassicEditor" v-model="editorData" />
</template>

<style>
.ck-editor_editable {
  min-height: 260px;
}
</style>

