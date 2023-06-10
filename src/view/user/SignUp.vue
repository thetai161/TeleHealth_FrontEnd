<template>
  <div class="d-flex flex-column flex">
    <div class="row no-gutters h-100">
      <!-- <div class="col-md-6 bg-primary" style="">
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
      </div> -->
      <div class="col-md-12">
        <div id="content-body">
          <div class="p-3 p-md-5 content" style="width: 500px">
            <h4>Đăng ký tài khoản</h4>
            <!-- <p>
              <small class="text-muted">Đăng kí tài khoản của bạn</small>
            </p> -->
            <hr>
            <div class="">
              <form
                @submit.prevent="signUpDoctor"
                name="form"
                action="dashboard.html"
              >
                <div></div>
                <div class="my-3 text-muted text-sm text-muted"></div>
                <div class="form-group">
                  <label>Tên tài khoản:</label>
                  <input
                    type="text"
                    class="form-control"
                    :class="{ 'red-border': usernameError }"
                    placeholder="Username"
                    v-model="userNameDoctor"
                  />
                </div>
                <div class="form-group">
                  <label>Email:</label>
                  <input
                    type="email"
                    class="form-control"
                    :class="{ 'red-border': emailError }"
                    placeholder="Email"
                    v-model="emailDoctor"
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
                </div>
                <div class="form-group">
                  <label>Số điện thoại:</label>
                  <input
                    type="text"
                    class="form-control"
                    :class="{ 'red-border': phoneNoError }"
                    placeholder="Số điện thoại"
                    v-model="phone"
                  />
                </div>
                <div class="form-group">
                  <label for="role">Chức vụ:</label>
                  <div>
                    <select id="role" v-model="role">
                      <option v-for="option in options" v-bind:value="option.value">
                        {{ option.text }}
                      </option>
                    </select>
                  </div>
                </div>
                <!-- <div class="mb-3 text-sm">
                  <span class="text-muted"
                    >Bằng việc nhấn đăng kí,Tôi đồng ý với
                  </span>
                  <a href="#" data-pjax-state="">những điều khoản dịch vụ</a>
                </div> -->
                <div style="text-align: center;">
                  <button type="submit" class="btn btn-primary mb-4" style="padding: 10px 20px; font-size: 16px">
                    Đăng ký
                  </button>
                </div>
                <div style="display: flex;">
                  <div style="margin-right: 10px; font-size: 16px;">Bạn đã có tài khoản? </div>
                  <a
                    style="font-size: 16px;"
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
      role: "role1",
      options: [
        { text: 'Bác sĩ', value: 'role1' },
        { text: 'Bệnh viện', value: 'role3' }
      ],
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
        role: this.role
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

select {
  width: 50%;
  padding: 10px;
  border: 1px solid #ced4da;
}

</style>
