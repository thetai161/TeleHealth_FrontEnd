<template>
  <div class="flex">
    <div>
      <div class="fade aside aside-sm" id="content-aside"></div>
      <div>
        <div class="d-flex flex-column flex" id="user-list">
          <div class="p-3">
            <div class="toolbar">
              <button
                @click="btnAddOnClick"
                id="addPatient"
                class="btn btn-white"
                v-if="role == 'role4'"
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
                  class="feather feather-plus"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                <span class="mx-1">Thêm</span>
              </button>

              <form class="flex">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control form-control-theme form-control-sm search"
                    placeholder="Tìm kiếm theo tên, email, số điện thoại hoặc địa chỉ bệnh viện"
                    v-model="inputSearch"
                    @change="changeValueInputSeach"
                    required=""
                    style="font-size: 14px"
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
          <a href="#" class="navbar-brand title" data-pjax-state="">
            <!-- <img src="../assets/img/logo.png" alt="..."> -->
            <span style="font-size: 20px;" class="hidden-folded d-inline l-s-n-1x"
              >Danh sách phòng ban</span
            >
          </a>
          <!-- / brand -->
          <div class="scroll-y mx-3 mb-0 card">
            <div class="list list-row" v-if="departments.length > 0">
              <div
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
                v-for="department in listRendered"
                :key="department"
              >
                <div>
                  <a href="app.message.html" data-pjax-state="">
                    <span class="w-40 avatar gd-primary">
                      {{ getFirstLetter(department.name) }}
                    </span>
                  </a>
                </div>
                <div class="flex">
                  <a
                    href="app.user.detail.html#2"
                    class="item-author text-color"
                    data-pjax-state=""
                    >Email</a
                  >
                  <div class="item-mail text-muted h-1x d-none d-sm-block">
                    {{ department.email }}
                  </div>
                </div>
                <div class="flex">
                  <a
                    href="app.user.detail.html#2"
                    class="item-author text-color"
                    data-pjax-state=""
                    >Tên bệnh viện</a
                  >
                  <div class="item-mail text-muted h-1x d-none d-sm-block">
                    {{ department.name }}
                  </div>
                </div>
                <div class="flex">
                  <a
                    href="app.user.detail.html#2"
                    class="item-author text-color"
                    data-pjax-state=""
                    >Số điện thoại</a
                  >
                  <div class="item-mail text-muted h-1x d-none d-sm-block">
                    {{ department.phone }}
                  </div>
                </div>
                <div class="flex">
                  <a
                    href="app.user.detail.html#2"
                    class="item-author text-color"
                    data-pjax-state=""
                    >Tên không dấu</a
                  >
                  <div class="item-mail text-muted h-1x d-none d-sm-block">
                    {{ department.unsignedName }}
                  </div>
                </div>
                <div class="flex">
                  <a
                    href="app.user.detail.html#2"
                    class="item-author text-color"
                    data-pjax-state=""
                    >Mô tả</a
                  >
                  <div class="item-mail text-muted h-1x d-none d-sm-block">
                    {{ department.description }}
                  </div>
                </div>
                <div class="flex">
                  <a
                    href="app.user.detail.html#2"
                    class="item-author text-color"
                    data-pjax-state=""
                    >Địa chỉ</a
                  >
                  <div
                    class="item-mail text-muted h-1x d-none d-sm-block"
                    style="width: 200px"
                  >
                    {{ department.detail_address }}
                  </div>
                </div>
                <div class="flex">
                  <a
                    href="app.user.detail.html#2"
                    class="item-author text-color"
                    data-pjax-state=""
                    >Ngày tạo</a
                  >
                  <div
                    class="item-mail text-muted h-1x d-none d-sm-block"
                    style="width: 200px"
                  >
                    {{ $filters.formatDateTime(department.created_at, 'HH:mm DD/MM/YYYY') }}
                  </div>
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
          <div class="pagination">
            <a-pagination
              v-model:pageSize="pageSize"
              v-model:current="current"
              :total="departments.length"
              show-less-items
              @change="changePage"
            />
          </div>
        </div>
      </div>
      <DepartmentForm
        :isShow="isShowDialog"
        @closeOnClick="showOrHideDialog"
        @callData="callData"
      ></DepartmentForm>
    </div>
  </div>
</template>

<script>
import axios from "axios";
/* eslint-disable */
import DepartmentForm from "../department/DepartmentForm.vue";
import _ from "lodash";

export default {
  name: "the-department",
  components: {
    DepartmentForm,
  },
  watch: {
    inputSearch: _.debounce(function (newValue) {
      this.departments = [];
      this.listRendered = [];
      this.isLoading = true;
      this.cloneFull.forEach((item) => {
        if (
          item.name.toUpperCase().includes(newValue.toUpperCase()) ||
          item.detail_address.toUpperCase().includes(newValue.toUpperCase()) ||
          item.email.toUpperCase().includes(newValue.toUpperCase()) || 
          item.phone.toUpperCase().includes(newValue.toUpperCase())
        ) {
          this.departments.push(item);
        }
      });
      setTimeout(() => {
        this.listRendered = this.departments.slice(0, this.pageSize);
        this.isLoading = false;
      }, 1000);
    }, 500),
  },
  data() {
    return {
      isLoading: false,
      cloneFull: [],
      inputSearch: "",
      current: 1,
      pageSize: 10,
      isShowDialog: false,
      departments: [],
      listRendered: [],
    };
  },
  computed: {
    accessToken() {
      return this.$store.getters.accessToken;
    },
    role() {
      return this.$store.getters["role"];
    },
  },

  methods: {
    getFirstLetter(name) {
      if (name) {
        let a = name.split("");
        return a[0].toUpperCase();
      }
      return "";
    },
    changePage(value) {
      this.listRendered = this.departments.slice(
        (value - 1) * this.pageSize,
        value * this.pageSize
      );
    },
    btnAddOnClick() {
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
    showChoiceAction(e) {
      let choicesAction = e.target.querySelector(
        ".dropdown-menu.dropdown-menu-right.bg-black"
      );
      if (!choicesAction) {
        choicesAction = e.target.parentElement.parentElement.querySelector(
          ".dropdown-menu.dropdown-menu-right.bg-black"
        );
      }
      try {
        if (choicesAction.classList.contains("show")) {
          choicesAction.classList.remove("show");
        } else {
          choicesAction.classList.add("show");
        }
      } catch (error) {}
    },
    callData() {
      const me = this;
      axios
        .get("http://localhost:8000/medical_unit/", {
          headers: { Authorization: `Bearer ${me.accessToken}` },
        })
        .then((res) => {
          me.departments = res.data;
          me.cloneFull = res.data;
          me.listRendered = me.departments.slice(0, me.pageSize);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    const me = this;
    axios
      .get("http://localhost:8000/medical_unit/", {
        headers: { Authorization: `Bearer ${me.accessToken}` },
      })
      .then((res) => {
        me.departments = res.data;
        me.cloneFull = res.data;
        me.listRendered = me.departments.slice(0, me.pageSize);
      })
      .catch((err) => {
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
