<template>
  <div id="content-cancer">
    <div
      @click="test"
      style="
        width: 820px;
        height: 240px;
        background-color: transparent;
        position: absolute;
        left: 680px;
        top: 207px;
        z-index: 100000000;
        cursor: pointer;
      "
    ></div>
    <a-upload-dragger
      name="file"
      :multiple="true"
      style="width: 800px; height: 500px"
      accept="image/png, image/jpeg"
      @click="handleChange"
      :fileList="defaultFileList"
      listType="picture"
      :showUploadLis="false"
    >
      <p class="ant-upload-drag-icon">
        <img
          src="../../assets/img/iconsaddimage.png"
          alt=""
          srcset=""
          style="width: 96px; height: 96px"
        />
      </p>
      <p class="ant-upload-text">
        Nhấp vào khu vực này để tải ảnh lên
      </p>
      <p class="ant-upload-hint">Chỉ hỗ trợ cho ảnh có dạng .png hoặc .jpg</p>
    </a-upload-dragger>
    <input
      hidden
      type="file"
      multiple
      @change="onFilesSelected"
      id="file-input"
      accept="image/png, image/gif, image/jpeg"
    />
    <a-modal
      style="height: 700px; width: 800px"
      v-model:visible="visibleCancer"
      title="Chuẩn đoán ung thư"
      @ok="assignPatient"
      class="view-cancer"
      :footer="null"
    >
      <div class="view-image" style="margin-bottom: 30px">
        <img :src="thumUrl" alt="" width="200" />
      </div>
      <div class="title">
        Kết quả chuẩn đoán dựa trên hình ảnh :
        <b>{{ isHave ? "Bị ung thư" : "Không bị" }}</b>
      </div>
    </a-modal>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      visibleCancer: false,
      isHave: false,
      thumUrl: "",
      defaultFileList: [],
    };
  },
  computed: {
    accessToken() {
      return this.$store.getters.accessToken;
    },
  },
  methods: {
    test() {
      document.querySelector("#file-input").click();
    },
    async onFilesSelected(files) {
      this.defaultFileList.push({
        uid: "-2",
        name: files.target.files[0].name,
        status: "done",
        url: window.URL.createObjectURL(files.target.files[0]),
        thumbUrl: window.URL.createObjectURL(files.target.files[0]),
      });
      const me = this;
      var formData = new FormData();
      formData.append("uploadfiles", files.target.files[0]);
      await axios({
        url: "http://127.0.0.1:8000/pc/pc_result",
        method: "POST",
        data: formData,
        headers: {
          Authorization: `Bearer ${me.accessToken}`,
          "Content-Type": "multipart/form-data",
        },
      })
        .then((result) => {
          this.visible = true;
          this.thumUrl = window.URL.createObjectURL(files.target.files[0]);
          this.isHave = result.data.data.result;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
div#content-cancer {
  margin-top: 150px;
  margin-left: 440px;
  direction: ltr;
}
#content-cancer .ant-upload-list-picture-container {
  width: 800px;
}
#content-cancer .ant-upload-list.ant-upload-list-text {
  width: 800px;
}
.view-cancer .ant-modal-body {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
