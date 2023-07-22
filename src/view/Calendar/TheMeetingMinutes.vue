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

const editorData = ref("<p>&nbsp;</p><figure class=\"table\"><table><tbody><tr><td>SỞ Y TẾ</td><td>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</td></tr><tr><td>BỆNH VIỆN ĐA KHOA TỈNH</td><td>Độc lập - Tự do - Hạnh phúc</td></tr></tbody></table></figure>")
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

