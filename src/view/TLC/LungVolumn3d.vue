<template>
  <div class="modal-result"  id="lungVolumn">
    <div class="" id="contentTlc">
      <div class="modal-content box-shadow mb-4">
        <div class="modal-header">
          <h5 class="modal-title">PHỔI 3D</h5>
          <button class="close" data-dismiss="modal" @click="closeResult">
            ×
          </button>
        </div>
        <div>
          <a-spin
            v-if="!showLung"
            size="large"
            style="
              display: inline-block;
              opacity: 1;
              position: fixed;
              top: 48%;
              left: 50%;
              transform: scale(1.5);
            "
          />
        </div>
        <iframe v-if="showLung" class="iframe-lung" :src="link"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["link","showLung"],
  methods: {
    closeResult() {
      const a = document.getElementById("lungVolumn");
      a.setAttribute("hidden", true);
    },
    showResult() {
      const a = document.getElementById("lungVolumn");
      a.removeAttribute("hidden", true);
    },
  },
};
</script>

<style scoped>
#lungVolumn .modal-content.box-shadow.mb-4 {
  width: 1000px;
  height: 820px;
}
.modal-result {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10000;
  align-items: center;
  justify-content: center;
  display: flex;
}
.iframe-lung {
  margin-bottom: 35px;
  margin-left: 55px;
  width: 900px;
  height: 800px;
  border-radius: 10px;
  border: 1px solid #ccc;
  overflow: hidden;
}
div#contentTlc {
  width: 1000px;
  direction: ltr;
}
.modal-footer.flex {
  display: flex;
  justify-content: center;
}
button.btn.btn-primary {
  width: 75px;
}
</style>
