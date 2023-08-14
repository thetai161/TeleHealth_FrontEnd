<template>
  <!-- Navbar -->
  <div
    id="aside"
    class="page-sidenav no-shrink bg-light nav-dropdown fade sticky"
    aria-hidden="true"
    data-class="bg-light"
  >
    <div class="sidenav h-100 modal-dialog bg-light">
      <!-- sidenav top -->
      <div id="navbar" class="navbar">
        <!-- brand -->
        <a href="#" class="navbar-brand" data-pjax-state="">
          <!-- <img src="../assets/img/logo.png" alt="..."> -->
          <span class="hidden-folded d-inline l-s-n-1x">TeleHealth</span>
        </a>
        <!-- / brand -->
      </div>
      <!-- Flex nav content -->
      <div class="flex scrollable hover">
        <div class="nav-active-text-primary" data-nav="">
          <ul class="nav bg">
            <li class="nav-header hidden-folded">
              <span class="text-muted">Chính</span>
            </li>
            <router-link to="/content/maincontent/dashboard">
              <li class="">
                <a href="dashboard.html" data-pjax-state="">
                  <span class="nav-icon text-primary"
                    ><img
                      src="../../assets/img/icons8-homepage-64.png"
                      style="width: 24px; height: 24px"
                      alt=""
                  /></span>
                  <span class="nav-text">Bảng điều khiển</span>
                </a>
              </li>
            </router-link>
            <li class="nav-header hidden-folded" v-if="role != 'role2' && role">
              <span class="text-muted">Quản lý</span>
            </li>

            <router-link
              to="/content/maincontent/patient"
              v-if="role != 'role2' && role != 'role4' && role"
            >
              <li class="">
                <a href="app.user.html" data-pjax-state="load">
                  <span class="nav-icon text-success">
                    <img
                      src="../../assets/img/icons_patient-64.png"
                      style="width: 24px; height: 24px"
                      alt=""
                  /></span>
                  <span class="nav-text">Bệnh nhân</span>
                </a>
              </li>
            </router-link>

            <router-link
              v-if="role == 'role3'"
              to="/content/maincontent/doctor"
            >
              <li class="">
                <a href="app.user.html" data-pjax-state="load">
                  <span class="nav-icon text-success">
                    <img
                      src="../../assets/img/iconsdoctoc-64.png"
                      style="width: 24px; height: 24px"
                      alt=""
                  /></span>
                  <span class="nav-text">Bác sĩ</span>
                </a>
              </li>
            </router-link>
            <router-link
              to="/content/maincontent/department"
              v-if="role == 'role3' || role == 'role4'"
            >
              <li class="">
                <a href="app.user.html" data-pjax-state="load">
                  <span class="nav-icon text-success"
                    ><img
                      src="../../assets/img/iconshospital.png"
                      style="width: 24px; height: 24px"
                      alt=""
                  /></span>
                  <span class="nav-text">Đơn vị y tế</span>
                </a>
              </li>
            </router-link>
            <li class="nav-header hidden-folded">
              <span class="text-muted">Danh mục</span>
            </li>
            <router-link to="/content/maincontent/ethnic">
              <li class="">
                <a href="app.user.html" data-pjax-state="load">
                  <span class="nav-icon text-success"
                    ><img
                      src="../../assets/img/icons8-ethnic50.png"
                      style="width: 24px; height: 24px"
                      alt=""
                  /></span>
                  <span class="nav-text">Dân tộc</span>
                </a>
              </li>
            </router-link>
            <router-link to="/content/maincontent/country">
              <li class="">
                <a href="app.user.html" data-pjax-state="load">
                  <span class="nav-icon text-success"
                    ><img
                      src="../../assets/img/icons8-country-64.png"
                      style="width: 24px; height: 24px"
                      alt=""
                  /></span>
                  <span class="nav-text">Quốc gia</span>
                </a>
              </li>
            </router-link>
            <router-link to="/content/maincontent/city">
              <li class="">
                <a href="app.user.html" data-pjax-state="load">
                  <span class="nav-icon text-success"
                    ><img
                      src="../../assets/img/icons8-thudo64.png"
                      style="width: 24px; height: 24px"
                      alt=""
                  /></span>
                  <span class="nav-text">Tỉnh thành</span>
                </a>
              </li>
            </router-link>
            <router-link to="/content/maincontent/district">
              <li class="">
                <a href="app.user.html" data-pjax-state="load">
                  <span class="nav-icon text-success"
                    ><img
                      src="../../assets/img/icons8-street-64.png"
                      style="width: 24px; height: 24px"
                      alt=""
                  /></span>
                  <span class="nav-text">Quận huyện</span>
                </a>
              </li>
            </router-link>
            <router-link to="/content/maincontent/commune">
              <li class="">
                <a href="app.user.html" data-pjax-state="load">
                  <span class="nav-icon text-success"
                    ><img
                      src="../../assets/img/icons8-ward32.png"
                      style="width: 24px; height: 24px"
                      alt=""
                  /></span>
                  <span class="nav-text">Xã phường</span>
                </a>
              </li>
            </router-link>
            <li class="nav-header hidden-folded" v-if="role != 'role2' && role != 'role4' && role">
              <span class="text-muted">Chức năng</span>
            </li>
            <router-link
              to="/content/maincontent/doctorwait"
              v-if="role == 'role3'"
            >
              <li class="">
                <a href="app.user.html" data-pjax-state="load">
                  <span class="nav-icon text-success">
                    <img
                      src="../../assets/img/waiting-room-64.png"
                      style="width: 24px; height: 24px"
                      alt=""
                  /></span>
                  <span class="nav-text">Xác nhận bác sĩ</span>
                </a>
              </li>
            </router-link>
            <router-link
              to="/content/maincontent/calendar"
              v-if="role != 'role2' && role != 'role4' && role"
            >
              <li class="">
                <a href="app.calendar.html" data-pjax-state="load">
                  <span class="nav-icon text-info"
                    ><img
                      src="../../assets/img/icons8-calender-85.png"
                      style="width: 24px; height: 24px"
                      alt=""
                  /></span>
                  <span class="nav-text">Lịch hội chẩn</span>
                </a>
              </li>
            </router-link>
            <router-link
              to="/content/maincontent/list_calendar"
              v-if="role != 'role2' && role != 'role4' && role"
            >
              <li class="">
                <a href="app.calendar.html" data-pjax-state="load">
                  <span class="nav-icon text-info"
                    ><img
                      src="../../assets/img/icons8-messages-48.png"
                      style="width: 24px; height: 24px"
                      alt=""
                  /></span>
                  <span class="nav-text">Biên bản hội chuẩn</span>
                </a>
              </li>
            </router-link>
            <!-- <router-link
              to="/content/maincontent/viewdicom"
              v-if="role != 'role2' && role"
            >
              <li class="">
                <a href="app.calendar.html" data-pjax-state="load">
                  <span class="nav-icon text-info"
                    ><img
                      src="../../assets/img/icons9-lung85.png"
                      style="width: 24px; height: 24px"
                      alt=""
                  /></span>
                  <span class="nav-text">Xem ảnh DICOM</span>
                </a>
              </li>
            </router-link> -->
            <router-link
              to="/content/maincontent/cancer"
              v-if="role != 'role2' && role != 'role4' && role"
            >
              <li class="">
                <a href="app.calendar.html" data-pjax-state="load">
                  <span class="nav-icon text-info"
                    ><img
                      src="../../assets/img/iconscancer.png"
                      style="width: 24px; height: 24px"
                      alt=""
                  /></span>
                  <span class="nav-text">Chẩn đoán ung thư</span>
                  <!-- <span class="nav-badge"><b class="badge-circle xs text-danger"></b></span> -->
                </a>
              </li>
            </router-link>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <!-- End Navbar -->
</template>

<script>
export default {
  name: "the-navbar",
  computed: {
    isAuthenticated() {
      return this.$store.getters["isAuthenticated"];
    },
    role() {
      return this.$store.getters["role"];
    },
  },
  mounted() {
    // console.log(this.$store.getters["role"]);
  },
};
</script>

<style scoped>
div#aside {
  position: absolute;
  left: 0;
}
.navbar {
  min-height: 3.75rem;
  padding: 0.75rem 1rem;
  display: flex;
  /* text-align: center; */
  flex-direction: row-reverse;
}
.sidenav .nav li > a {
  display: flex;
  flex-wrap: nowrap;
  padding: 0 0.5rem;
  line-height: 2.5rem;
  position: relative;
  flex-direction: row-reverse;
}
.sidenav .nav li > a {
  display: flex;
  flex-wrap: nowrap;
  padding: 0 0.5rem;
  line-height: 2.5rem;
  position: relative;
  flex-direction: row-reverse;
}
</style>
