<template>
  <a-modal
    style="height: 200px; width: 650px"
    v-model:visible="success"
    title="Thanh toán thành công"
    :footer="null"
  >
    <div
      class="modal-body"
      style="
        max-height: 555px;
        direction: ltr;
        padding: 20px 10px 0 0;
      "
    >
      <h5>Bạn đã thanh toán thành công, hãy tiếp tục sử dụng dịch vụ!</h5>
      <div class="form-group row">
        <div class="flex-save-vnpay">
          <button
            @click="redirectHome"
            type="submit"
            class="btn btn-primary mt-1"
          >
            Đồng ý
          </button>
        </div>
      </div>
    </div>
  </a-modal>
</template>

<script>
import axios from "axios";

export default {
  name: "TheSuccessPayment",
  data() {
    return {
      success: true
    }
  },
  mounted() {
   
  },
  methods: {
    redirectHome() {
      const me = this;
      axios
      .post(
        `http://127.0.0.1:8000/auth/success_payment/`,
        {
          userId: this.userId
        },
        {
          headers: { Authorization: `Bearer ${me.accessToken}` },
        }
      )
      .then((res) => {
        this.$router.replace("/content/maincontent/cancer");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    }
  },
  computed: {
    accessToken() {
      return this.$store.getters.accessToken;
    },
    userId() {
      return this.$store.getters["userId"]
    }
  }
}
</script>