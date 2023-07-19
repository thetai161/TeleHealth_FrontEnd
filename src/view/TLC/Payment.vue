<template>
  <div class="modal-result" hidden id="payment">
    <div class="" id="contentPayment">
      <div class="modal-content box-shadow mb-4">
        <div class="modal-header">
          <h5 class="modal-title">Thanh toán hóa đơn</h5>
          <button class="close" data-dismiss="modal" @click="closePayment">
            ×
          </button>
        </div>
        <div class="modal-body">
          <h5>Bạn đã sử dụng hết 5 lần miễn phí, vui lòng thanh toán dịch vụ để trải nghiệm không giới hạn !</h5>
          <div id="formVnPay" class="card-body" style="direction: ltr">
            <div class="form-group row">
              <label class="col-sm-4 col-form-label">Loại hàng hóa</label>
              <div class="col-sm-8">
                <select
                  v-model="orderType"
                  class="form-control"
                >
                  <option value="billpayment">Thanh toán hóa đơn</option>
                </select>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-4 col-form-label">Số tiền</label>
              <div class="col-sm-8">
                <select
                  v-model="amount"
                  class="form-control"
                >
                  <option value="100000000">Số tiền thanh toán: 1.000.000 VNĐ</option>
                </select>
              </div>
            </div>
            <div class="form-group row">
              <div class="flex-save-vnpay">
                <button
                  @click="handlePayment"
                  type="submit"
                  class="btn btn-primary mt-1"
                >
                  Thanh toán
                </button>
                <button @click="closePayment" class="btn btn-danger mt-1">
                  Hủy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      orderId: Math.floor(Math.random() * 10000),
      orderType: "",
      amount: "",
    }
  },
  methods: {
    async handlePayment() {
      const me = this;
      var formData = new FormData();
      formData.append("orderId", this.orderId);
      formData.append("orderType", this.orderType);
      formData.append("amount", this.amount)
      await axios({
        url: "http://127.0.0.1:8000/vn_pay/payment",
        method: "POST",
        data: formData,
        headers: {
          Authorization: `Bearer ${me.accessToken}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log("==============res", res);
      })
      .catch((err) => {
        console.log(err);
      })
    },
    closePayment() {
      const a = document.getElementById("payment");
      a.setAttribute("hidden", true);
    },
    showPayment() {
      const a = document.getElementById("payment");
      a.removeAttribute("hidden", true);
    },
  }
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
