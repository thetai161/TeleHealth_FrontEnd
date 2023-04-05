<template>
  <div class="d-flex flex-column flex">
    <div class="row no-gutters h-100">
      <div class="col-md-6 bg-primary" style="">
        <div class="p-3 p-md-5 d-flex flex-column h-100">
          <h4 class="mb-3 text-white">TeleHealth</h4>
          <div class="text-fade">Copyright @IBMELab</div>
          <div
            class="d-flex flex align-items-center justify-content-center"
          ></div>
          <div class="d-flex text-sm text-fade">
            <a href="index.html" class="text-white">About</a>
            <span class="flex"></span>
            <a href="#" class="text-white mx-1">Terms</a>
            <a href="#" class="text-white mx-1">Policy</a>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div id="content-body">
          <div class="p-3 p-md-5" style="width: 500px">
            <h5>Xin chào</h5>
            <p>
              <small class="text-muted">Đăng kí tài khoản của bạn</small>
            </p>
            <div class="">
              <form
                @submit.prevent="signUpDoctor"
                name="form"
                action="dashboard.html"
              >
                <div></div>
                <div class="my-3 text-muted text-sm text-muted"></div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    :class="{ 'red-border': usernameError }"
                    placeholder="Username"
                    v-model="userNameDoctor"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    :class="{ 'red-border': emailError }"
                    placeholder="Email"
                    v-model="emailDoctor"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control"
                    :class="{ 'red-border': pwdError }"
                    placeholder="Password"
                    v-model="password"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    :class="{ 'red-border': phoneNoError }"
                    placeholder="Số điện thoại"
                    v-model="phone"
                  />
                </div>
                <div class="mb-3 text-sm">
                  <span class="text-muted"
                    >Bằng việc nhấn đăng kí,Tôi đồng ý với
                  </span>
                  <a href="#" data-pjax-state="">những điều khoản dịch vụ</a>
                </div>
                <button type="submit" class="btn btn-primary mb-4">
                  Đăng kí
                </button>
                <div>
                  Bạn đã có tài khoản
                  <a
                    @click="formLogin"
                    class="text-primary _600"
                    data-pjax-state=""
                    >Đăng nhập</a
                  >
                </div>
              </form>
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
      userNameDoctor: "",
      emailDoctor: "",
      password: "",
      phone: "",
      usernameError: false,
      emailError: false,
      pwdError: false,
      phoneNoError: false,
    };
  },
  methods: {
    formLogin() {
      this.$router.push("/auth");
      this.resetForm();
    },

    resetForm() {
      setTimeout(() => {
        this.userNathis.meDoctor = "";
        this.emailDoctor = "";
        this.password = "";
        this.phone = "";
        this.usernameError = false;
        this.emailError = false;
        this.pwdError = false;
        this.phoneNoError = false;
      }, 300);
    },

    validateForm() {
      let isValid = true;

      if (!this.userNameDoctor) {
        this.$message.warning("Vui lòng nhập Username");
        this.usernameError = true;
        isValid = false;
      } else {
        this.usernameError = false;
      }

      if (!this.emailDoctor) {
        this.$message.warning("Vui lòng nhập Email");
        this.emailError = true;
        isValid = false;
      } else {
        this.emailError = false;
      }

      if (!this.password) {
        this.$message.warning("Vui lòng nhập mật khẩu");
        this.pwdError = true;
        isValid = false;
      } else {
        this.pwdError = false;
      }

      if (!this.phone) {
        this.$message.warning("Vui lòng nhập số điện thoại");
        this.phoneNoError = true;
        isValid = false;
      } else {
        this.phoneNoError = false;
      }

      return isValid;
    },

    signUpDoctor() {
      if (!this.validateForm()) {
        return;
      }
      const accountDoctor = {
        email: this.emailDoctor,
        username: this.userNameDoctor,
        password: this.password,
        phone: this.phone,
      };
      axios
        .post("http://127.0.0.1:8000/auth/doctor_register/", accountDoctor)
        .then((result) => {
          console.log(result);
          this.$message.success("Tạo tài khoản thành công !");
          this.$router.replace("/auth");
        })
        .catch((err) => {
          this.$message.error("Email hoặc Username đã tồn tại !");
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.d-flex.flex-column.flex {
  height: 100%;
  height: 100vh;
  direction: ltr;
}

#content-body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
