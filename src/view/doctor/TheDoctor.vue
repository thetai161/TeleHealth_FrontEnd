<template>
  <div class="flex">
    <div>
      <div class="fade aside aside-sm" id="content-aside"></div>
      <div>
        <div class="d-flex flex-column flex" id="user-list">
          <div class="p-3">
            <div class="toolbar">
              <div class="btn-group">
                <button
                  class="btn btn-sm btn-icon btn-white"
                  data-toggle="tooltip"
                  title=""
                  id="btn-trash"
                  data-original-title="Trash"
                >
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
                    class="feather feather-trash text-muted"
                  >
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path
                      d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                    ></path>
                  </svg>
                </button>
              </div>
              <form class="flex">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control form-control-theme form-control-sm search"
                    placeholder="Tìm kiếm theo tên, số điện thoại hoặc email"
                    v-model="inputSearch"
                    @change="changeValueInputSeach"
                    required=""
                    style="font-size:14px"

                  />
                  <span class="input-group-append">
                    <button
                      class="btn btn-white no-border btn-sm"
                      type="button"
                    >
                      <span class="d-flex text-muted"
                        ><svg
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
                      </span>
                    </button>
                  </span>
                </div>
              </form>
              <button
                data-toggle="modal"
                data-target="#content-aside"
                data-modal=""
                class="btn btn-sm btn-icon btn-white d-md-none"
              >
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
                  class="feather feather-menu"
                >
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
          <!-- brand -->
          <a class="navbar-brand title" data-pjax-state="">
            <!-- <img src="../assets/img/logo.png" alt="..."> -->
            <span class="hidden-folded d-inline l-s-n-1x" style="color: #1890ff; font-size: 20px;"
              >Danh sách bác sĩ</span
            >
          </a>
          <!-- / brand -->
          <div class="scroll-y mx-3 mb-0 card">
            <div
              class="list list-row"
              v-if="listRendered.length > 0 && !this.isLoading"
            >
              <div
                v-for="doctor in listRendered"
                :key="doctor.id"
                class="list-item"
                data-id="2"
                data-sr-id="164"
                style="
                  visibility: visible;
                  transform: none;
                  opacity: 1;
                  transition: transform 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s,
                    opacity 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s;
                "
              >
                <div>
                  <a href="app.user.detail.html#16" data-pjax-state="">
                    <span
                      class="w-40 avatar gd-info"
                      data-toggle-class="loading"
                    >
                      <span
                        class="avatar-status on b-white avatar-right"
                      ></span>
                      {{ getFirstLetter(doctor.name) }}
                    </span>
                  </a>
                </div>
                <div class="flex" style="width: 180px">
                  <a class="item-author text-color" data-pjax-state=""
                    >Tên bác sĩ</a
                  >
                  <div class="item-mail text-muted h-1x d-none d-sm-block">
                    {{ doctor.name }}
                  </div>
                </div>
                <div class="flex">
                  <a class="item-author text-color" data-pjax-state=""
                    >Giới tính</a
                  >
                  <div
                    class="item-mail text-muted h-1x d-none d-sm-block"
                    style="width: 80px; text-align: left"
                  >
                    {{ doctor.gender == "woman" ? "Nữ" : "Nam" }}
                  </div>
                </div>
                <div class="flex">
                  <a class="item-author text-color" data-pjax-state=""
                    >Địa chỉ thường trú</a
                  >
                  <div
                    class="item-mail text-muted h-1x d-none d-sm-block"
                    style="width: 300px; text-align: left"
                  >
                    {{ doctor.detail_address }}
                  </div>
                </div>
                <div class="flex">
                  <a class="item-author text-color" data-pjax-state=""
                    >Tên không dấu</a
                  >
                  <div class="item-mail text-muted h-1x d-none d-sm-block">
                    {{ doctor.unsignedName }}
                  </div>
                </div>
                <div class="flex">
                  <a class="item-author text-color" data-pjax-state="">Email</a>
                  <div class="item-mail text-muted h-1x d-none d-sm-block">
                    {{ doctor.email }}
                  </div>
                </div>
                <div class="flex">
                  <a class="item-author text-color" data-pjax-state=""
                    >Số điện thoại</a
                  >
                  <div class="item-mail text-muted h-1x d-none d-sm-block">
                    {{ doctor.phone }}
                  </div>
                </div>
                <div>
                  <!-- <div @click="showChoiceAction" class="item-action dropdown">
                    <p
                      data-toggle="dropdown"
                      class="text-muted"
                      data-pjax-state=""
                    >
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
                        class="feather feather-more-vertical"
                      >
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="12" cy="5" r="1"></circle>
                        <circle cx="12" cy="19" r="1"></circle>
                      </svg>
                    </p>
                    <div
                      class="dropdown-menu dropdown-menu-right bg-black"
                      role="menu"
                    >
                      <a
                        class="dropdown-item"
                        data-pjax-state=""
                        @click="detailDoctor(doctor)"
                      >
                        See detail
                      </a>
                      <a class="dropdown-item download" data-pjax-state="">
                        Download
                      </a>
                      <a class="dropdown-item edit" data-pjax-state="">
                        Edit
                      </a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item trash" data-pjax-state="">
                        Delete item
                      </a>
                    </div>
                  </div> -->
                  <a-dropdown-button>
                    <template #overlay>
                      <a-menu @click="detailDoctor(doctor)">
                        <a-menu-item key="1"> Thông tin chi tiết </a-menu-item>
                        <!-- <a-menu-item key="3" @click="clickInput(patient.id)">
                          Tính thể tích phổi
                        </a-menu-item> -->
                        <a-menu-item
                          key="2"
                          @click="seeResults(patient.id)"
                          v-if="role == 'role3'"
                        >
                          Xóa
                        </a-menu-item>
                      </a-menu>
                    </template>
                  </a-dropdown-button>
                </div>
              </div>
            </div>
            <template v-if="listRendered.length == 0 && this.isLoading == true">
              <div
                style="display: flex; padding: 20px; align-items: center"
                v-for="(i, index) in 4"
                :key="index"
              >
                <a-skeleton
                  active
                  avatar
                  :paragraph="{ rows: 2 }"
                  style="width: 100px; position: relative; top: 30px"
                />
                <a-skeleton active :paragraph="{ rows: 1 }" />
                <a-skeleton active :paragraph="{ rows: 1 }" />
                <a-skeleton active :paragraph="{ rows: 1 }" />
                <a-skeleton active :paragraph="{ rows: 1 }" />
                <a-skeleton active :paragraph="{ rows: 1 }" />
                <a-skeleton active :paragraph="{ rows: 1 }" />
              </div>
            </template>
            <template
              v-if="listRendered.length == 0 && this.isLoading == false"
            >
              <a-empty style="margin-top: 200" description="Không có dữ liệu" />
            </template>
          </div>
          <div class="pagination" v-if="doctors.length > 0">
            <a-pagination
              v-model:pageSize="pageSize"
              v-model:current="current"
              :total="doctors.length"
              show-less-items
              @change="changePage"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- :isShow="isShowDialog" -->
    <FormDoctor
      :isShow="isShowDialog"
      @closeOnClick="showOrHideDialog"
      :formMode="formMode"
      :doctorSelected="doctorSelected"
    ></FormDoctor>
  </div>
</template>

<script>
/* eslint-disable */
import FormDoctor from "./DoctorFormDetail.vue";
import axios from "axios";
import _ from "lodash";

export default {
  name: "the-doctor",
  components: {
    FormDoctor,
  },
  watch: {
    inputSearch: _.debounce(function (newValue) {
      this.doctors = [];
      this.listRendered = [];
      this.isLoading = true;
      this.cloneFull.forEach((item) => {
        if (
          item.name.toUpperCase().includes(newValue.toUpperCase()) ||
          item.email.toUpperCase().includes(newValue.toUpperCase()) ||
          item.phone.toUpperCase().includes(newValue.toUpperCase())
        ) {
          this.doctors.push(item);
        }
      });
      setTimeout(() => {
        this.listRendered = this.doctors.slice(0, this.pageSize);
        this.isLoading = false;
      }, 1000);
    }, 500),
  },
  data() {
    return {
      inputSearch: "",
      isLoading: false,
      cloneFull: [],
      current: 1,
      pageSize: 10,
      isShowDialog: false,
      doctors: [],
      doctorSelected: {},
      listRendered: [],
      // formMode để biết là form dùng để thêm mới hoặc là sửa
      formMode: this.TeleHealthEnum.FormMode.Add,
    };
  },
  computed: {
    accessToken() {
      return this.$store.getters.accessToken;
    },
    email() {
      return this.$store.getters.email;
    },
    role() {
      return this.$store.getters["role"];
    },
    idProfile() {
      return this.$store.getters["idProfile"];
    },
  },

  methods: {
    changePage(value) {
      this.listRendered = this.doctors.slice(
        (value - 1) * this.pageSize,
        value * this.pageSize
      );
    },
    getFirstLetter(name) {
      let a = name.split("");
      return a[0].toUpperCase();
    },
    btnAddOnClick() {
      this.doctorSelected = {};
      this.formMode = this.TeleHealthEnum.FormMode.Add;
      this.showOrHideDialog(true);
    },
    /**
     * Mô tả : Mô tả code
     * @param
     * @return
     * Created by: Cao Thanh Lâm - MF1103
     * Created date: 18:32 05/07/2022
     */
    showOrHideDialog(isShow) {
      this.isShowDialog = isShow;
    },
    /**
     * Mô tả : Mô tả code
     * @param
     * @return
     * Created by: Cao Thanh Lâm - MF1103
     * Created date: 18:32 05/07/2022
     */
    /**
     * Mô tả : Xem chi tiết bác sĩ
     * @param
     * @return
     * Created by: Cao Thanh Lâm - MF1103
     * Created date: 14:38 26/07/2022
     */
    detailDoctor(doctor) {
      this.formMode = this.TeleHealthEnum.FormMode.Update;
      this.doctorSelected = doctor;
      this.doctorSelected.country = "Anh";
      this.showOrHideDialog(true);
    },
  },
  async created() {
    const me = this;
    let url = "";
    if (this.role == "role3") {
      url =
        "http://localhost:8000/medical_unit/list_doctor_by_medical_unit/?dataFilter=null";
    } else if (this.role == "role1") {
      url = `http://127.0.0.1:8000/doctor/`;
    }
    await axios
      .get(url, {
        headers: { Authorization: `Bearer ${me.accessToken}` },
      })
      .then(function (res) {
        me.doctors = res.data;
        me.cloneFull = res.data;
        me.listRendered = me.doctors.slice(0, me.pageSize);
      })
      .catch(function (err) {
        console.log(err);
      });
  },
};
</script>

<style scoped>
.pagination {
  direction: ltr;
  margin: 30px auto 0px;
}
/* div#content {
  width: 86vw;
  position: relative;
} */
div#flexVue {
  flex-direction: row-reverse;
  justify-content: space-between;
}
#flexVue .flex.d-flex.flex-row {
  justify-content: end;
}
#flexVue .pagination.pagination-sm.mx-1 {
  flex-direction: row-reverse;
}
.list-row .list-item {
  align-items: center;
  padding: 0.75rem 0.625rem;
}
button#addPatient {
  height: 30px;
}
.mt-auto,
.my-auto {
  margin-top: 30px !important;
}
a.navbar-brand.title {
  flex-direction: row-reverse;
  margin-bottom: 15px;
}
.scroll-y.mx-3.mb-0.card {
  direction: ltr;
  min-height: 600px;
}
</style>
