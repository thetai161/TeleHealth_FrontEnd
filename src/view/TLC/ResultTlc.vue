<template>
  <div class="modal-result" hidden id="resultTlc">
    <div class="" id="contentTlc" >
      <div class="modal-content box-shadow mb-4">
        <div class="modal-header">
          <h5 class="modal-title">KẾT QUẢ TÍNH THỂ TÍCH PHỔI</h5>
          <button class="close" data-dismiss="modal" @click="closeResult">
            ×
          </button>
        </div>
        <div class="modal-body">
          <p>Phổi trái : {{ resultLeft }} ml</p>
          <p>Phổi trái : {{ resultRight }} ml</p>
          <p>
            <b> Tổng : {{ total }} ml</b>
          </p>
        </div>
        <div class="modal-footer flex">
          <button class="btn btn-primary" @click="closeResult">OK</button>
          <button class="btn btn-primary" @click="showLung3D" style="min-width:120px;margin-left: 15px;">Dựng phổi 3d</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["resultLeft", "resultRight", "total"],
  methods: {
    showLung3D(){
      this.$emit('showLung3D')
    },
    closeResult() {
      const a = document.getElementById("resultTlc");
      a.setAttribute("hidden", true);
    },
    showResult() {
      const a = document.getElementById("resultTlc");
      a.removeAttribute("hidden", true);
    },
  },
};
</script>

<style scoped>
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
div#contentTlc {
  width: 500px;
  direction: ltr;
}
.modal-footer.flex {
  display: flex;
  justify-content:center;
}
button.btn.btn-primary {
  width: 75px;
}
</style>
