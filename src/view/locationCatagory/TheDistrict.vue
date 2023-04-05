<template>
  <section>
    <div class="page-hero page-container" id="page-hero">
      <div class="padding d-flex">
        <div class="page-title">
          <h2 class="text-md text-highlight" style="color: #1890ff">
            Danh sách Quận Huyện
          </h2>
          <small class="text-muted"></small>
        </div>
        <div class="flex"></div>
        <button
        v-if="false"
          @click="showOrHideDetailLocation(true)"
          id="addPatient"
          class="btn btn-white"
          data-v-75b7bec2=""
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
            data-v-75b7bec2=""
          >
            <line x1="12" y1="5" x2="12" y2="19" data-v-75b7bec2=""></line>
            <line x1="5" y1="12" x2="19" y2="12" data-v-75b7bec2=""></line></svg><span class="mx-1" data-v-75b7bec2="">Thêm</span>
        </button>
      </div>
    </div>
    <div class="page-content page-container" id="page-content location">
      <div class="padding">
        <div class="table-responsive">
          <div
            id="datatable_wrapper"
            class="dataTables_wrapper dt-bootstrap4 no-footer"
          >
            <div class="row">
              <div class="navbar">
                <div class="input-group flex bg-light rounded">
                  <input
                    type="text"
                    class="form-control no-bg no-border no-shadow search"
                    placeholder="Tìm kiếm"
                    required=""
                    v-model="searchValue"
                  />
                  <span class="input-group-append">
                    <button class="btn no-bg no-shadow" type="button">
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
                        class="feather feather-search text-fade"
                      >
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      </svg>
                    </button>
                  </span>
                </div>
              </div>
            </div>
            <div class="row">
              <div
                class="col-sm-12"
                style="height: 600px; overflow: hidden; overflow-y: auto"
              >
                <table
                  id="datatable"
                  class="table table-theme table-row v-middle dataTable no-footer"
                  role="grid"
                  aria-describedby="datatable_info"
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
                        <span class="text-muted">Tùy chọn</span>
                      </th>
                      <th
                        class="sorting_disabled"
                        rowspan="1"
                        colspan="1"
                        aria-label="Tasks"
                        style="width: 120px"
                      >
                        <span class="text-muted d-none d-sm-block"
                          >Mã code</span
                        >
                      </th>
                      <th
                        class="sorting_disabled"
                        tabindex="0"
                        aria-controls="datatable"
                        rowspan="1"
                        colspan="1"
                        aria-label="Project: activate to sort column ascending"
                        style="width: 200px"
                      >
                        <span class="text-muted">Division type</span>
                      </th>
                      <th
                        class="sorting_disabled"
                        tabindex="0"
                        aria-controls="datatable"
                        rowspan="1"
                        colspan="1"
                        aria-label="Project: activate to sort column ascending"
                        style="width: 200px"
                      >
                        <span class="text-muted">Code name</span>
                      </th>
                      <th
                        class="sorting_disabled"
                        tabindex="0"
                        aria-controls="datatable"
                        rowspan="1"
                        colspan="1"
                        aria-label="Project: activate to sort column ascending"
                        style="width: 200px"
                      >
                        <span class="text-muted">Tên quận/huyện</span>
                      </th>
                      <th
                        class="image"
                        tabindex="0"
                        aria-controls="datatable"
                        rowspan="1"
                        colspan="1"
                        aria-label="Owner: activate to sort column ascending"
                        style="width: 120px; text-align: center"
                      >
                        <span class="text-muted">Avatar</span>
                      </th>
                      <th
                        class="sorting_disabled"
                        tabindex="0"
                        aria-controls="datatable"
                        rowspan="1"
                        colspan="1"
                        aria-sort="ascending"
                        aria-label="ID: activate to sort column descending"
                        style="width: 40px; text-align: center"
                      >
                        <span class="text-muted">STT</span>
                      </th>
                    </tr>
                  </thead>
                  <template v-if="!isLoading && listRendered.length > 0">
                    <tbody>
                      <tr
                        class="odd"
                        data-id="1"
                        role="row"
                        v-for="(district, index) in listRendered"
                        :key="index"
                      >
                        <td>
                          <a-dropdown-button
                            style="width: 150px; text-align: center"
                          >
                            <template #overlay>
                              <a-menu @click="handleDetail(district)">
                                <a-menu-item key="1">
                                  Thông tin chi tiết
                                </a-menu-item>
                                <a-menu-item
                                  key="2"
                                  @click="seeResults(patient.id)"
                                >
                                  Xóa
                                </a-menu-item>
                                <!-- <a-menu-item key="3"  @click="clickInput(patient.id)">
                                Tính thể tích phổi
                              </a-menu-item> -->
                              </a-menu>
                            </template>
                          </a-dropdown-button>
                        </td>

                        <td style="text-align: left">
                          <span class="item-amount d-none d-sm-block text-sm">
                            {{ district.code }}
                          </span>
                        </td>
                        <td class="flex">
                          <a href="#" class="item-title text-color">{{
                            district.division_type
                          }}</a>
                        </td>
                        <td class="flex">
                          <a href="#" class="item-title text-color">{{
                            district.codename
                          }}</a>
                        </td>
                        <td class="flex">
                          <a href="#" class="item-title text-color">{{
                            district.name
                          }}</a>
                        </td>

                        <td class="letter">
                          <a href="app.message.html" data-pjax-state="">
                            <span class="w-40 avatar gd-success">{{
                              getFirstLetter(district.name)
                            }}</span>
                          </a>
                        </td>
                        <td
                          style="min-width: 30px; text-align: center"
                          class="sorting_1"
                        >
                          <small class="text-muted">{{ index + 1 }}</small>
                        </td>
                      </tr>
                    </tbody>
                  </template>
                  <template v-if="isLoading && listRendered.length == 0">
                    <tbody>
                      <tr
                        class="odd"
                        data-id="1"
                        role="row"
                        v-for="(district, index) in 5"
                        :key="index"
                      >
                        <td>
                          <a-skeleton active :paragraph="{ rows: 0 }" />
                        </td>

                        <td style="text-align: left">
                          <a-skeleton active :paragraph="{ rows: 0 }" />
                        </td>
                        <td class="flex">
                          <a-skeleton active :paragraph="{ rows: 0 }" />
                        </td>
                        <td class="flex">
                          <a-skeleton active :paragraph="{ rows: 0 }" />
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
                  </template>
                </table>
              </div>
              <div class="pagination">
                <a-pagination
                  v-model:pageSize="pageSize"
                  v-model:current="current"
                  :total="districts.length"
                  show-less-items
                  :pageSizeOptions="['7', '10', '20', '30', '40']"
                  @change="changePage"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <TheDistrictDetail
      :showLocations="showLocations"
      :is-edit="isEdit"
      :data-location="dataLocation"
      @showOrHideDetailLocation="showOrHideDetailLocation"
    ></TheDistrictDetail>
  </section>
</template>

<script>
import axios from "axios";
import TheDistrictDetail from "../locationDetail/TheDistrictDetail.vue";
import _ from "lodash";
export default {
  components: { TheDistrictDetail },
  data() {
    return {
      searchValue: "",
      pageSize: 7,
      current: 1,
      showLocations: false,
      districts: [],
      listRendered: [],
      isLoading: false,
      isEdit: false,
      dataLocation: {},
      cloneFull:[],
    };
  },
  methods: {
    handleDetail(payload){
      this.isEdit = true,
      this.dataLocation = payload;
      this.showLocations = true;
    },

    searchAction:_.debounce(async function (newValue) {
      const me = this;
      this.isLoading = true;
      this.listRendered = [];
      if(newValue.trim()){
        this.districts = this.districts.filter(item => item.name.toLowerCase().search(newValue.toLowerCase()) != -1)
      } else {
        me.districts = me.cloneFull
      }
      setTimeout(() =>{
        this.listRendered = this.districts.slice(0, this.pageSize );
        this.isLoading = false;
      },500)
    },500),
    showOrHideDetailLocation(show) {
      this.showLocations = show;
      this.isEdit = false;
    },
    getFirstLetter(name) {
      let a = name.split("");
      return a[0].toUpperCase();
    },
    changePage(value) {
      this.listRendered = this.districts.slice(
        (value - 1) * this.pageSize,
        value * this.pageSize
      );
    },
  },
  watch: {
    async searchValue(newValue) {
      await this.searchAction(newValue);
    },
  },
  async created() {
    const me = this;
    this.isLoading = true;
    await axios.get("https://provinces.open-api.vn/api/d/").then((res) => {
      this.districts = res.data;
      me.cloneFull = res.data
      me.listRendered = me.districts.slice(0, 7);
      this.isLoading = false;
    });
  },
};
</script>

<style scoped>
div#page-hero {
  height: 60px;
}
.pagination {
  direction: ltr;
  margin: 30px auto 0px;
}
.padding.d-flex {
  flex-direction: row-reverse;
}
div#datatable_wrapper {
  overflow: hidden;
}
#location .row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  justify-content: end;
}
td.letter {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
