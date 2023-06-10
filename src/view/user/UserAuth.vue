<template>
  <div class="d-flex flex-column flex">
    <div class="row no-gutters h-100">
      <!-- <div class="col-md-6 bg-primary" style="">
        <div class="p-3 p-md-5 d-flex flex-column h-100">
          <h4 class="mb-3 text-white">TeleHealth</h4>
          <div class="text-fade">copyright@HUSTIBME</div>
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
      </div> -->
      <div class="col-md-12">
        <div id="content-body">
          <div class="p-3 p-md-5 content" style="width: 500px">
            <h4>Đăng nhập</h4>
            <form
              class=""
              role="form"
              action="dashboard.html"
              @submit.prevent="login"
            >
              <div class="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  class="form-control"
                  :class="{ 'red-border': emailError }"
                  placeholder="Enter email"
                  v-model="email"
                />
              </div>
              <div class="form-group">
                <label>Mật khẩu:</label>
                <input
                  type="password"
                  class="form-control"
                  :class="{ 'red-border': pwdError }"
                  placeholder="Password"
                  v-model="password"
                />
                <!-- <div class="my-3 text-right">
                  <a
                    href="forgot-password.html"
                    class="text-muted"
                    data-pjax-state=""
                    >Quên mật khẩu?</a
                  >
                </div> -->
              </div>
              <div class="checkbox mb-3">
                <label class="ui-check">
                  <input type="checkbox" />
                  <i></i> Nhớ mật khẩu
                </label>
              </div>
              <div style="text-align: center;">
                <button type="submit" class="btn btn-primary mb-4"
                style="padding: 10px 20px; font-size: 16px">
                  Đăng nhập
                </button>
              </div>
              <div style="display: flex;">
                <div style="margin-right: 10px; font-size: 16px;">Bạn chưa có tài khoản? </div>
                <router-link to="signup">
                  <a
                    style="font-size: 16px;"
                    href=""
                    class="text-primary"
                    data-pjax-state=""
                    @click="resetForm"
                    >Đăng kí</a
                  >
                </router-link>
              </div>
            </form>
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
      email: "",
      emailError: false,
      pwdError: false,
      password: "",
      password2: "",
      status: "login",
      isLogIn: true,
      formIsValid: true,
    };
  },
  methods: {
    resetForm() {
      setTimeout(() => {
        this.email = "";
        this.password = "";
        this.emailError = false;
        this.pwdError = false;
      }, 300);
    },
    validateForm() {
      let isValid = true;

      if (!this.email) {
        this.$message.warning("Vui lòng nhập email");
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

      return isValid;
    },
    async login() {
      const me = this;
      if (!me.validateForm()) {
        return;
      }

      const accountLoggin = {
        email: me.email,
        password: me.password,
      };

      let user = null;
      axios
        .post("http://127.0.0.1:8000/auth/login/", accountLoggin)
        .then((result) => {
          user = result.data.data;
          me.$store.dispatch("login", user);
          if (result.data.success) {
            localStorage.setItem("usernameTele", me.email);
            localStorage.setItem("passwordTele", me.password);
            localStorage.setItem("role", result.data.data.role);
            this.$router.replace("/content/maincontent/dashboard");
          }
        })
        .catch((err) => {
          console.log(123);
          this.$message.error("Tên đăng nhập hoặc tài khoản không đúng");
          console.log(err);
        });
      // axios({
      //   url: "http://127.0.0.1:8000/auth/login/",
      //   method: "POST",
      //   body: {
      //     email: "doctor@gmail.com",
      //     password: "doctor",
      //   },
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // })
      //   .then((result) => {
      //     console.log(result);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
      // axios
      //   .post("http://127.0.0.1:8000/auth/login/",accountLoggin)
      //   .then((result) => {
      //     console.log(result);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    },
    // switchStatus(status) {
    //   this.status = status;
    //   if (status == "register") {
    //     this.isLogIn = false;
    //   } else if (status == "login") {
    //     this.isLogIn = true;
    //   }
    // },
    // submitForm() {
    //   if (
    //     !this.email ||
    //     !this.email.includes("@") ||
    //     this.password.length < 6 ||
    //     this.password !== this.password2
    //   ) {
    //     this.formIsValid = false;
    //     console.log("sai rồi");
    //   } else {
    //     console.log("đúng");
    //   }
    // },
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
  background-image: url('../../../background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}

.content {
  background-color: rgb(245, 245, 245);
}

.form-control {
  padding: 20px;
}

label {
  font-size: 16px;
}
</style>
