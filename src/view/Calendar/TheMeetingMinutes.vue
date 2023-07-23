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
import { meetingMinutesDefault } from "../Calendar/meetingMinutes"

const editorData = meetingMinutesDefault;
const editorConfig = ref({
  removePlugins: ['CKFinderUploadAdapter', 'CKFinder', 'EasyImage', 'Image', 'ImageCaption', 'ImageStyle', 'ImageToolbar', 'ImageUpload', 'MediaEmbed'],
})
</script>

<template>
  <CKEditor :editor="ClassicEditor" v-model="editorData" :config="editorConfig"/>
</template>

<style>
.ck.ck-editor {
  width: 100%;
}
</style>

