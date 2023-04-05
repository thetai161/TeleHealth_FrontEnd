<template>
  <div class="modal-result" hidden id="listResults">
    <div class="" id="contentTlc">
      <div class="modal-content box-shadow mb-4">
        <div class="modal-header">
          <h5 class="modal-title">LỊCH SỬ TÍNH THỂ TÍCH PHỔI</h5>
          <button class="close" data-dismiss="modal" @click="closeListResult">
            ×
          </button>
        </div>
        <div class="modal-body">
          <ul v-if="listResults.length > 0">
            <li
              class="item-result"
              v-for="(item, index) in listResults"
              :key="item.id"
            >
              <p class="name-result">
                <b>Lần {{ index + 1 }}</b>
              </p>
              <p class="date-result">
                <b>Ngày: {{ $filters.formatDateTime(item.created_at, 'HH:mm DD/MM/YYYY') }}</b>
              </p>
              <button class="btn see-result" @click="seeDetailResult(item.id)">
                Xem chi tiết
              </button>
            </li>
          </ul>
          <template v-else>
            <a-empty description="Không có dữ liệu" />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["listResults"],
  methods: {
    closeListResult() {
      const a = document.getElementById("listResults");
      a.setAttribute("hidden", true);
    },
    showListResult() {
      const a = document.getElementById("listResults");
      a.removeAttribute("hidden", true);
    },
    seeDetailResult(id) {
      const me = this;
      axios
        .get(`http://127.0.0.1:8000/tlc/detail_result?pk=${id}`)
        .then((res) => {
          me.closeListResult();
          me.assignResult(res.data.data);
        });
    },
    assignResult(result) {
      this.$emit("assignResult", result);
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

li.item-result {
  margin-bottom: 20px;
}
div#contentTlc {
  width: 700px;
  direction: ltr;
}
.modal-footer.flex {
  display: flex;
  justify-content: center;
}
button.btn.btn-primary {
  width: 75px;
}
li.item-result {
  display: flex;
  list-style: none;
  height: 30px;
  justify-content: space-between;
  align-items: center;
}
button.btn.see-result {
  background: #2689c9;
  color: white;
}
button.btn.see-result:hover {
  color: white;
  opacity: 0.8;
}
</style>
