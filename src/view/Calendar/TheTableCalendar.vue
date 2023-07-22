<template style="direction: rtl">
  <div>
    <div style="position: relative">
      <a-button
        type="primary"
        style="top: 12px; position: absolute; right: 180px"
        @click="showOrHideForm(true)"
        v-if="!isInvited"
        >Tạo hội chẩn +</a-button
      >
      <a-calendar
        v-model:value="valueCalendar"
        style="direction: ltr; margin-top: 20px; margin-right: 10px"
        @panelChange="onPanelChange"
        @select="onSelect"
        class="custom-celandar-table"
      >
        <template #dateCellRender="{ current }">
          <ul class="events" style="list-style: none">
            <li v-for="item in getListData(current)" :key="item.content">
              <a-badge :status="item.type" :text="item.content" />
            </li>
          </ul>
        </template>
        <!-- <template #monthCellRender="{ current }">
        <div v-if="getMonthData(current)" class="notes-month">
          <section>{{ getMonthData(current) }}</section>
          <span>Backlog number</span>
        </div>
      </template> -->
      </a-calendar>
    </div>
    <div>
      <a-modal
        title="Danh sách hội chẩn"
        class="modal-schedule"
        :visible="visibleModalSchedule"
        :closable="false"
        :footer="false"
        style="width: 900px; height: 700px"
      >
        <a-tabs
          default-active-key="1"
          @change="callback"
          style="direction: ltr"
        >
          <a-tab-pane
            key="1"
            :tab="isInvited ? 'Hội chẩn tham gia' : 'Hội chẩn đã tạo'"
          >
            <table
              id="datatable"
              class="table table-theme table-row v-middle dataTable no-footer"
              role="grid"
              aria-describedby="datatable_info"
              style="direction: rtl"
            >
              <thead>
                <tr role="row">
                  <th
                    class="sorting_disabled"
                    rowspan="1"
                    colspan="1"
                    aria-label=""
                    style="width: 150px; text-align: center"
                  >
                    <span class="text-muted d-none d-sm-block">Tùy chọn</span>
                  </th>
                  <th
                    class="sorting_disabled"
                    rowspan="1"
                    colspan="1"
                    aria-label="Tasks"
                    style="width: 150px; text-align: left"
                  >
                    <span class="text-muted d-none d-sm-block"
                      >Ngày kết thúc</span
                    >
                  </th>
                  <th
                    class="sorting_disabled"
                    tabindex="0"
                    aria-controls="datatable"
                    rowspan="1"
                    colspan="1"
                    aria-label="Project: activate to sort column ascending"
                    style="width: 150px; text-align: left"
                  >
                    <span class="text-muted">Ngày bắt đầu</span>
                  </th>
                  <th
                    class="image"
                    tabindex="0"
                    aria-controls="datatable"
                    rowspan="1"
                    colspan="1"
                    aria-label="Owner: activate to sort column ascending"
                    style="width: 300px; text-align: left"
                  >
                    <span class="text-muted">Nội dung</span>
                  </th>
                  <th
                    class="sorting_disabled"
                    tabindex="0"
                    aria-controls="datatable"
                    rowspan="1"
                    colspan="1"
                    aria-sort="ascending"
                    aria-label="ID: activate to sort column descending"
                    style="width: 120px"
                  >
                    <span class="text-muted">Tiêu đề</span>
                  </th>
                </tr>
              </thead>
              <template v-if="!isLoading && successDataModal.length > 0">
                <tbody>
                  <tr
                    class="odd"
                    data-id="1"
                    role="row"
                    v-for="(item, index) in successDataModal"
                    :key="index"
                  >
                    <td>
                      <a-dropdown-button style="min-width: 120px">
                        <template #overlay>
                          <a-menu @click="detailOrUpdate(item, 'E')">
                            <a-menu-item key="1">
                              {{
                                isInvited
                                  ? "Thông tin chi tiết"
                                  : "Cập nhật thông tin"
                              }}
                            </a-menu-item>
                            <!-- <a-menu-item key="2" @click="seeResults(item.id)">
                              Xóa
                            </a-menu-item> -->
                          </a-menu>
                        </template>
                      </a-dropdown-button>
                    </td>

                    <td style="text-align: left">
                      <span class="item-amount d-none d-sm-block text-sm">
                        {{ formatDate(item.meeting_time_end) }}
                      </span>
                    </td>
                    <td class="flex">
                      <span class="item-amount d-none d-sm-block text-sm">{{
                        formatDate(item.meeting_time_start)
                      }}</span>
                    </td>
                    <td class="flex">
                      <span class="item-title text-color">{{
                        item.meeting_content
                      }}</span>
                    </td>
                    <td class="flex">
                      <span class="item-title text-color">{{
                        item.meeting_title
                      }}</span>
                    </td>
                  </tr>
                </tbody>
              </template>
              <!-- <template v-if="isLoading">
                <tbody>
                  <tr
                    class="odd"
                    data-id="1"
                    role="row"
                    v-for="(ethinic, index) in 5"
                    :key="index"
                  >
                    <td>
                      <a-skeleton
                        active
                        class="flex-skeleton"
                        :paragraph="{ rows: 0 }"
                      />
                    </td>

                    <td style="text-align: left">
                      <span class="item-amount d-none d-sm-block text-sm">
                        <a-skeleton
                          active
                          class="flex-skeleton"
                          :paragraph="{ rows: 0 }"
                        />
                      </span>
                    </td>
                    <td class="flex">
                      <a-skeleton active :paragraph="{ rows: 1 }" />
                    </td>
                    <td class="letter">
                      <a-skeleton active avatar :paragraph="{ rows: 0 }" />
                    </td>
                    <td
                      style="min-width: 30px; text-align: center"
                      class="sorting_1"
                    >
                      <small class="text-muted">{{ index + 1 }}</small>
                    </td>
                  </tr>
                </tbody>
              </template> -->
            </table>
          </a-tab-pane>
          <a-tab-pane key="2" tab="Hội chẩn đang diễn ra" force-render>
            <table
              id="datatable"
              class="table table-theme table-row v-middle dataTable no-footer"
              role="grid"
              aria-describedby="datatable_info"
              style="direction: rtl"
            >
              <thead>
                <tr role="row">
                  <th
                    class="sorting_disabled"
                    rowspan="1"
                    colspan="1"
                    aria-label=""
                    style="width: 150px; text-align: center"
                  >
                    <span class="text-muted d-none d-sm-block">Tùy chọn</span>
                  </th>
                  <th
                    class="sorting_disabled"
                    rowspan="1"
                    colspan="1"
                    aria-label="Tasks"
                    style="width: 150px; text-align: left"
                  >
                    <span class="text-muted d-none d-sm-block"
                      >Ngày kết thúc</span
                    >
                  </th>
                  <th
                    class="sorting_disabled"
                    tabindex="0"
                    aria-controls="datatable"
                    rowspan="1"
                    colspan="1"
                    aria-label="Project: activate to sort column ascending"
                    style="width: 120px; text-align: left"
                  >
                    <span class="text-muted">Ngày bắt đầu</span>
                  </th>
                  <th
                    class="image"
                    tabindex="0"
                    aria-controls="datatable"
                    rowspan="1"
                    colspan="1"
                    aria-label="Owner: activate to sort column ascending"
                    style="width: 300px; text-align: left"
                  >
                    <span class="text-muted">Nội dung</span>
                  </th>
                  <th
                    class="sorting_disabled"
                    tabindex="0"
                    aria-controls="datatable"
                    rowspan="1"
                    colspan="1"
                    aria-sort="ascending"
                    aria-label="ID: activate to sort column descending"
                    style="width: 120px"
                  >
                    <span class="text-muted">Tiêu đề</span>
                  </th>
                </tr>
              </thead>
              <template v-if="!isLoading && warningDataModal.length > 0">
                <tbody>
                  <tr
                    class="odd"
                    data-id="1"
                    role="row"
                    v-for="(item, index) in warningDataModal"
                    :key="index"
                  >
                    <td>
                      <a-dropdown-button style="min-width: 120px">
                        <template #overlay>
                          <a-menu>
                            <a-menu-item
                              key="3"
                              v-if="isInvited"
                              @click="detailOrUpdate(item, 'D')"
                            >
                              Thêm kết luận
                            </a-menu-item>
                            <a-menu-item
                              v-if="!isInvited"
                              key="1"
                              @click="detailOrUpdate(item, 'U')"
                            >
                              Thêm kết luận
                            </a-menu-item>
                            <!-- <a-menu-item key="2" @click="seeResults(item.id)">
                              Xóa
                            </a-menu-item> -->
                          </a-menu>
                        </template>
                      </a-dropdown-button>
                    </td>

                    <td style="text-align: left">
                      <span class="item-amount d-none d-sm-block text-sm">
                        {{ formatDate(item.meeting_time_end) }}
                      </span>
                    </td>
                    <td class="flex">
                      <span class="item-amount d-none d-sm-block text-sm">{{
                        formatDate(item.meeting_time_start)
                      }}</span>
                    </td>
                    <td class="flex">
                      <span class="item-title text-color">{{
                        item.meeting_content
                      }}</span>
                    </td>
                    <td class="flex">
                      <span class="item-title text-color">{{
                        item.meeting_title
                      }}</span>
                    </td>
                  </tr>
                </tbody>
              </template>
              <!-- <template v-if="isLoading">
                <tbody>
                  <tr
                    class="odd"
                    data-id="1"
                    role="row"
                    v-for="(ethinic, index) in 5"
                    :key="index"
                  >
                    <td>
                      <a-skeleton
                        active
                        class="flex-skeleton"
                        :paragraph="{ rows: 0 }"
                      />
                    </td>

                    <td style="text-align: left">
                      <span class="item-amount d-none d-sm-block text-sm">
                        <a-skeleton
                          active
                          class="flex-skeleton"
                          :paragraph="{ rows: 0 }"
                        />
                      </span>
                    </td>
                    <td class="flex">
                      <a-skeleton active :paragraph="{ rows: 1 }" />
                    </td>
                    <td class="letter">
                      <a-skeleton active avatar :paragraph="{ rows: 0 }" />
                    </td>
                    <td
                      style="min-width: 30px; text-align: center"
                      class="sorting_1"
                    >
                      <small class="text-muted">{{ index + 1 }}</small>
                    </td>
                  </tr>
                </tbody>
              </template> -->
            </table>
          </a-tab-pane>
          <a-tab-pane key="3" tab="Hội chẩn đã kết thúc" force-render>
            <table
              id="datatable"
              class="table table-theme table-row v-middle dataTable no-footer"
              role="grid"
              aria-describedby="datatable_info"
              style="direction: rtl"
            >
              <thead>
                <tr role="row">
                  <th
                    class="sorting_disabled"
                    rowspan="1"
                    colspan="1"
                    aria-label=""
                    style="width: 150px; text-align: center"
                  >
                    <span class="text-muted d-none d-sm-block">Tùy chọn</span>
                  </th>
                  <th
                    class="sorting_disabled"
                    rowspan="1"
                    colspan="1"
                    aria-label="Tasks"
                    style="width: 150px; text-align: left"
                  >
                    <span class="text-muted d-none d-sm-block"
                      >Ngày kết thúc</span
                    >
                  </th>
                  <th
                    class="sorting_disabled"
                    tabindex="0"
                    aria-controls="datatable"
                    rowspan="1"
                    colspan="1"
                    aria-label="Project: activate to sort column ascending"
                    style="width: 120px; text-align: left"
                  >
                    <span class="text-muted">Ngày bắt đầu</span>
                  </th>
                  <th
                    class="image"
                    tabindex="0"
                    aria-controls="datatable"
                    rowspan="1"
                    colspan="1"
                    aria-label="Owner: activate to sort column ascending"
                    style="width: 300px; text-align: left"
                  >
                    <span class="text-muted">Nội dung</span>
                  </th>
                  <th
                    class="sorting_disabled"
                    tabindex="0"
                    aria-controls="datatable"
                    rowspan="1"
                    colspan="1"
                    aria-sort="ascending"
                    aria-label="ID: activate to sort column descending"
                    style="width: 120px"
                  >
                    <span class="text-muted">Tiêu đề</span>
                  </th>
                </tr>
              </thead>
              <template v-if="!isLoading && errorDataModal.length > 0">
                <tbody>
                  <tr
                    class="odd"
                    data-id="1"
                    role="row"
                    v-for="(item, index) in errorDataModal"
                    :key="index"
                  >
                    <td>
                      <a-dropdown-button style="min-width: 120px">
                        <template #overlay>
                          <a-menu @click="detailOrUpdate(item, 'D')">
                            <a-menu-item key="1">
                              Chỉnh sửa kết luận
                            </a-menu-item>
                            <!-- <a-menu-item key="2" @click="seeResults(item.id)">
                              Xóa
                            </a-menu-item> -->
                          </a-menu>
                        </template>
                      </a-dropdown-button>
                    </td>

                    <td style="text-align: left">
                      <span class="item-amount d-none d-sm-block text-sm">
                        {{ formatDate(item.meeting_time_end) }}
                      </span>
                    </td>
                    <td class="flex">
                      <span class="item-amount d-none d-sm-block text-sm">{{
                        formatDate(item.meeting_time_start)
                      }}</span>
                    </td>
                    <td class="flex">
                      <span class="item-title text-color">{{
                        item.meeting_content
                      }}</span>
                    </td>
                    <td class="flex">
                      <span class="item-title text-color">{{
                        item.meeting_title
                      }}</span>
                    </td>
                  </tr>
                </tbody>
              </template>
            </table>
          </a-tab-pane>
        </a-tabs>
        <a-button
          style="float: right; position: absolute; bottom: 10px; right: 10px"
          class="btn-schedule"
          @click="visibleModalSchedule = false"
          >Thoát</a-button
        >
      </a-modal>
      <TheFormCalendar :isShow="isShow" @showOrHideForm="showOrHideForm" />
      <TheFormDetailCalendar
        :isShow="isShowDetail"
        @showOrHideForm="showOrHideFormDetail"
        :method="methodsDetailOrUpdate"
        :inforCalendar="inforCalendar"
        :isInvited="isInvited"
      />
    </div>
  </div>
</template>

<script>
import TheFormCalendar from "../Calendar/TheFormCalendar.vue";
import TheFormDetailCalendar from "../Calendar/TheFormDetailCalendar.vue";
import axios from "axios";

export default {
  props: ["dataMeeting", "isInvited"],
  components: {
    TheFormCalendar,
    TheFormDetailCalendar,
  },
  data() {
    return {
      isLoading: false,
      isShow: false,
      valueCalendar: "",
      schedules: [],
      visibleModalSchedule: false,
      dataModal: [],
      oldDate: new Date(),
      dataTest: [],
      methodsDetailOrUpdate: "D",
      inforCalendar: "",
      isShowDetail: false,
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
    successDataModal() {
      let arr1 = this.dataModal.filter(
        (item) => item.type == "success" && !item.content.conclusion
      );

      let result = arr1.map((item) => {
        return item.content;
      });

      return result;
    },
    warningDataModal() {
      let arr1 = this.dataModal.filter((item) => item.type == "warning");

      let result = arr1.map((item) => {
        return item.content;
      });

      return result;
    },
    errorDataModal() {
      let arr1 = this.dataModal.filter((item) => item.type == "error");

      let result = arr1.map((item) => {
        return item.content;
      });

      return result;
    },
  },
  methods: {
    detailOrUpdate(item, methods) {
      this.isShowDetail = true;
      this.inforCalendar = item;
      this.methodsDetailOrUpdate = methods;
    },
    formatDate(data) {
      let date = new Date(data);
      return `${date.getDate()}-${
        date.getMonth() + 1
      }-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
    },
    showOrHideForm(bool) {
      this.isShow = bool;
    },
    showOrHideFormDetail(bool) {
      this.isShowDetail = bool;
    },
    onPanelChange(value, mode) {
      this.visibleModalSchedule = false;
    },
    onSelect(value) {
      let dateSelected = new Date(
        value.month() + 1 + "-" + value.date() + "-" + +value.year()
      );
      if (this.oldDate.getMonth() == dateSelected.getMonth()) {
        this.dataModal = [];
        this.dataTest.forEach((item) => {
          let data = {
            type: "success",
            content: item,
          };
          if (
            (new Date() > new Date(item.meeting_time_start) &&
              !item.conclusion) ||
            (new Date() > new Date(item.meeting_time_end) &&
              !item.conclusion) ||
            (new Date() < new Date(item.meeting_time_end) &&
              item.conclusion &&
              new Date() > new Date(item.meeting_time_end))
          ) {
            data.type = "warning";
          } else if (
            new Date() > new Date(item.meeting_time_end) &&
            item.conclusion
          ) {
            data.type = "error";
          }
          if (
            value.date() == new Date(item.meeting_time_start).getDate() &&
            value.month() == new Date(item.meeting_time_start).getMonth()
          ) {
            this.dataModal.push(data);
          }
        });
        if (this.dataModal.length > 0) {
          this.visibleModalSchedule = true;
        } else {
          this.$message.warning({ content: "Không có lịch hội chẩn", key:"No content" });
        }
      } else if (this.oldDate.getMonth() != dateSelected.getMonth()) {
        this.oldDate = dateSelected;
      }
    },
    getListData(value) {
      let listData = [];
      this.dataTest.forEach((item) => {
        let data = {
          type: "success",
          content: item.meeting_title,
        };
        if (
          (new Date() > new Date(item.meeting_time_start) &&
            !item.conclusion) ||
          (new Date() > new Date(item.meeting_time_end) && !item.conclusion) ||
          (new Date() < new Date(item.meeting_time_end) &&
            item.conclusion &&
            new Date() > new Date(item.meeting_time_end))
        ) {
          data.type = "warning";
        } else if (
          new Date() > new Date(item.meeting_time_end) &&
          item.conclusion
        ) {
          data.type = "error";
        }
        if (
          value.date() == new Date(item.meeting_time_start).getDate() &&
          value.month() == new Date(item.meeting_time_start).getMonth()
        ) {
          listData.push(data);
        }
      });
      return listData || [];
    },
    getMonthData(value) {
      if (value.month() === 8) {
        return 1394;
      }
    },
  },
  async created() {
    this.dataTest = this.dataMeeting;
  },
  mounted() {
    let a = document.querySelector(
      ".ant-radio-group.ant-radio-group-outline.ant-picker-calendar-mode-switch"
    );
    a.setAttribute("hidden", "true");
    let b = document.querySelectorAll(
      ".ant-radio-button-wrapper.ant-radio-button-wrapper-checked"
    );
    b.forEach((item) => {
      item.setAttribute("hidden", "true");
    });
    let c = document.querySelectorAll(".ant-radio-button-wrapper");
    c.forEach((item) => {
      item.setAttribute("hidden", "true");
    });
  },
};
</script>

<style scoped>
.modal-schedule .ant-modal-content {
  height: 100% !important;
}
.ant-select-dropdown.ant-select-dropdown-placement-bottomLeft {
  z-index: 999 !important;
  max-height: 200px;
  overflow-y: scroll;
  direction: ltr;
}
</style>
