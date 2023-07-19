<template>
  <!-- Header -->
  <div id="header" class="page-header bg-body sticky" data-class="bg-body">
    <div class="navbar navbar-expand-lg">
      <!-- brand -->
      <a href="index.html" class="navbar-brand d-lg-none" data-pjax-state="">
        <svg
          width="32"
          height="32"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          <g class="loading-spin" style="transform-origin: 256px 256px">
            <path
              d="M200.043 106.067c-40.631 15.171-73.434 46.382-90.717 85.933H256l-55.957-85.933zM412.797 288A160.723 160.723 0 0 0 416 256c0-36.624-12.314-70.367-33.016-97.334L311 288h101.797zM359.973 134.395C332.007 110.461 295.694 96 256 96c-7.966 0-15.794.591-23.448 1.715L310.852 224l49.121-89.605zM99.204 224A160.65 160.65 0 0 0 96 256c0 36.639 12.324 70.394 33.041 97.366L201 224H99.204zM311.959 405.932c40.631-15.171 73.433-46.382 90.715-85.932H256l55.959 85.932zM152.046 377.621C180.009 401.545 216.314 416 256 416c7.969 0 15.799-.592 23.456-1.716L201.164 288l-49.118 89.621z"
            ></path>
          </g>
        </svg>
        <!-- <img src="../../assets/img/logo.png" alt="..."> -->
        <span class="hidden-folded d-inline l-s-n-1x d-lg-none">Basik</span>
      </a>
      <!-- / brand -->
      <!-- Navbar collapse -->
      <div
        class="collapse navbar-collapse order-2 order-lg-1"
        id="navbarToggler"
      >
        <form class="input-group m-2 my-lg-0">
          <div class="input-group-prepend">
            <button type="button" class="btn no-shadow no-bg px-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-search"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>
          <span
            class="twitter-typeahead"
            style="position: relative; display: inline-block"
            ><input
              type="text"
              class="form-control no-border no-shadow no-bg typeahead tt-hint"
              data-api="../../assets/api/menu.json"
              readonly=""
              autocomplete="off"
              spellcheck="false"
              tabindex="-1"
              style="
                position: absolute;
                top: 0px;
                left: 0px;
                border-color: transparent;
                box-shadow: none;
                opacity: 1;
                background: none 0% 0% / auto repeat scroll padding-box
                  border-box rgba(0, 0, 0, 0);
              "
              dir="ltr" /><input
              type="text"
              class="form-control no-border no-shadow no-bg typeahead tt-input"
              data-api="../../assets/api/menu.json"
              autocomplete="off"
              spellcheck="false"
              dir="auto"
              style="
                position: relative;
                vertical-align: top;
                background-color: transparent;
              " />
            <pre
              aria-hidden="true"
              style="
                position: absolute;
                visibility: hidden;
                white-space: pre;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
                  Roboto, 'Helvetica Neue', Arial, sans-serif,
                  'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
                font-size: 14px;
                font-style: normal;
                font-variant: normal;
                font-weight: 400;
                word-spacing: 0px;
                letter-spacing: 0px;
                text-indent: 0px;
                text-rendering: auto;
                text-transform: none;
              "
            ></pre>
            <div
              class="dropdown-menu mt-3"
              style="
                position: absolute;
                top: 100%;
                left: 0px;
                z-index: 100;
                display: none;
              "
            >
              <div class="tt-dataset tt-dataset-0"></div></div
          ></span>
        </form>
      </div>
      <ul v-if="isAuthenticated" class="nav navbar-menu order-1 order-lg-2">
        <a-dropdown v-if="true">
          <template #overlay>
            <a-menu style="min-width: 140px">
              <a-menu-item
                key="1"
                @click="updateProfileDoctor"
                v-if="role == 'role1'"
              >
                Thông tin cá nhân <i class="fa-solid fa-circle-info"></i>
              </a-menu-item>
              <a-menu-item key="2">
                Cài đặt <i class="fa-solid fa-gear"></i>
              </a-menu-item>
              <a-menu-item key="3" @click="LogOut">
                Đăng xuất <i class="fa-solid fa-right-from-bracket"></i>
              </a-menu-item>
            </a-menu>
          </template>
          <a-avatar size="large" src="https://random.imagecdn.app/500/150" />
        </a-dropdown>
      </ul>
      <router-link
        v-if="!isAuthenticated"
        class="nav navbar-menu order-1 order-lg-2"
        to="/auth"
        ><a-button type="primary">Đăng nhập</a-button></router-link
      >
      <div class="nav navbar-menu order-1 order-lg-2" v-if="isAuthenticated">
        <div
          class="icon-notification"
          style="position: absolute; z-index: 100; right: 80px"
        >
        </div>
      </div>
    </div>
    <FormPersonalDoctor
      :isShow="isShowDialog"
      @closeOnClick="showOrHideDialog"
      :inforDoctor="inforDoctor"
    ></FormPersonalDoctor>
  </div>
  <!-- End Header -->
</template>

<script>
import FormPersonalDoctor from "../../view/doctor/ThePersonalDoctor.vue";
export default {
  name: "the-header",
  components: {
    FormPersonalDoctor,
  },
  data() {
    return {
      inforDoctor: {
        name: "",
        gender: "",
        unsignedName: "",
        phone: "",
        address: {
          country: "",
          ward: "",
          district: "",
          province: "",
        },
        detail_address: "",
      },
      isShowDialog: false,
    };
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters["isAuthenticated"];
    },
    role() {
      return this.$store.getters["role"];
    },
  },

  methods: {
    LogOut() {
      localStorage.removeItem("usernameTele");
      localStorage.removeItem("passwordTele");
      localStorage.removeItem("role");
      this.$router.push("/");
      this.$store.dispatch("logout");
    },
    showOrHideDialog(isShow) {
      this.isShowDialog = isShow;
    },
    updateProfileDoctor() {
      this.showOrHideDialog(true);
    },
  },
};
</script>

<style scoped>
.navbar {
  min-height: 3.75rem;
  padding: 0.75rem 1rem;
  display: flex;
  flex-direction: row-reverse;
  align-items: space-between !important;
}
div#header {
  position: absolute;
  width: calc(100% - 248px);
}
</style>
