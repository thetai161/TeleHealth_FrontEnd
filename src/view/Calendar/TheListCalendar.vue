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
              >Danh sách biên bản</span
            >
          </a>
          <!-- / brand -->
          <div class="scroll-y mx-3 mb-0 card">
            <div
              class="list list-row"
              v-if="listRendered.length > 0 && !this.isLoading"
            >
              <div
                v-for="meeting in listRendered"
                :key="meeting.id"
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
                <div class="flex">
                  <a class="item-author text-color" data-pjax-state=""
                    >Tên biên bản</a
                  >
                  <div class="item-mail text-muted h-1x d-none d-md-block">
                    {{ meeting.meeting_title }}
                  </div>
                </div>
                <div class="flex">
                  <a class="item-author text-color" data-pjax-state=""
                    >Ngày giờ bắt đầu</a
                  >
                  <div
                    class="item-mail text-muted h-1x d-none d-md-block"
                  >
                    {{ meeting.meeting_time_start}}
                  </div>
                </div>
                <div class="flex">
                  <a class="item-author text-color" data-pjax-state=""
                    >Ngày giờ kết thúc</a
                  >
                  <div
                    class="item-mail text-muted h-1x d-none d-md-block"
                  >
                    {{ meeting.meeting_time_end}}
                  </div>
                </div>
                <div class="flex">
                  <a class="item-author text-color" data-pjax-state=""
                    >Link cuộc họp</a
                  >
                  <div
                    class="item-mail text-muted h-1x d-none d-md-block"
                  >
                    {{ meeting.meeting_url}}
                  </div>
                </div>
                
                <div>
                  <a-dropdown-button>
                    <template #overlay>
                      <a-menu>
                        <a-menu-item key="1" @click="detailMeeting(meeting)"> Thông tin chi tiết </a-menu-item>
                        <a-menu-item
                          key="2"
                          @click="endEdit(meeting.id)"
                        >
                          {{ meeting.is_valid ? "Kết thúc chỉnh sửa" : "" }}
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
          <div class="pagination" v-if="meeting.length > 0">
            <a-pagination
              v-model:pageSize="pageSize"
              v-model:current="current"
              :total="meeting.length"
              show-less-items
              @change="changePage"
            />
          </div>
        </div>
      </div>
    </div>
    <TheDetailCalendar
      :isShow="isShowDialog"
      @closeOnClick="showOrHideDialog"
      :meeting="meetingSelected"
    ></TheDetailCalendar>
  </div>
</template>

<script>
/* eslint-disable */
import TheDetailCalendar from "../Calendar/TheDetailCalendar.vue"
import axios from "axios";
import _ from "lodash";

export default {
  name: "the-meeting",
  components: {
    TheDetailCalendar,
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
      meeting: [],
      meetingSelected: {},
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
    showOrHideDialog(isShow) {
      this.isShowDialog = isShow;
    },
    detailMeeting(meeting) {
      this.meetingSelected = meeting
      this.showOrHideDialog(true);
    },
    endEdit(id) {
      const me = this;
      axios
      .get(`http://localhost:8000/meeting/end_edit_conclusion/?pk=${id}`, {
        headers: { Authorization: `Bearer ${me.accessToken}` },
      })
      .then(function (res) {
        this.showOrHideDialog(false)
      })
      .catch(function (err) {
        console.log(err);
      });
    }
  },
  async created() {
    const me = this;
    await axios
      .get("http://localhost:8000/meeting/list_meeting_creator_for_user/", {
        headers: { Authorization: `Bearer ${me.accessToken}` },
      })
      .then(function (res) {
        me.meeting = res.data.data;
        me.cloneFull = res.data.data;
        console.log(me.meeting.slice(0, me.pageSize));
        me.listRendered = me.meeting.slice(0, me.pageSize);
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
