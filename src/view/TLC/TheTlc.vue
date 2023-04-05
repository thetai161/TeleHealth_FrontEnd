<template>
  <section>
    <input
      type="file"
      webkitdirectory
      directory
      multiple
      @change="onFilesSelected"
      id="dicomFiles"
    />
    <button @click="clickInput">Add</button>
    <ListResults />
  </section>
</template>

<script>
/* eslint-disable */
import axios from "axios";
import ListResults from "./ListReults.vue";
export default {
  components: {
    ListResults
  },
  data() {
    return {
      filesDicom: [],
    };
  },
  methods: {
    clickInput() {
      const input = document.getElementById("dicomFiles");
      console.log(input);
      input.click();
    },
    onFilesSelected(event) {
      const me = this;
      var formData = new FormData();
      for (var i = 0; i < event.target.files.length; i++) {
        formData.append("uploadfiles", event.target.files[i]);
      }
      formData.append("patientId", "d6a480e9-f3ad-427c-8278-85bb67c150be");
      // axios({
      //   url: "http://127.0.0.1:8000/tlc/post_file",
      //   method: "POST",
      //   data: formData,
      //   headers: {
      //     Authorization:
      //       "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjYwMjQzMzgyLCJpYXQiOjE2NjAyNDAwODIsImp0aSI6IjQzYzMwNjAzZWE0ODRmMDJiNWEyODFlODg1YzdhNGI5IiwidXNlcl9pZCI6Ijg4YjMwMzgxLTgyOWMtNDc3OS04YzAyLTU3MmRkOWE0M2MxMyJ9.pkN6bvUqWYVuL75Kg_m1caSlKhOQBoQswkahxKCliOE",
      //     "Content-Type": "multipart/form-data",
      //   },
      // })
      //   .then((result) => {
      //     console.log(result);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    },
  },
};
</script>

<style scoped>
.padding.d-flex {
  flex-direction: row-reverse;
}
div#datatable_wrapper {
  overflow: hidden;
}
#location .row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  justify-content: end;
}
input {
  margin-top: 100px;
}
</style>
