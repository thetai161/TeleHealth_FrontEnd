<template>
  <div id="content" class="flex">
    <div class="d-flex flex fixed-content">
      <div class="fade aside aside-sm" id="content-aside"></div>
      <div class="d-flex flex" id="content-body">
        <div class="d-flex flex-column flex" id="user-list">
          <div class="p-3">
            <div class="toolbar">
              <!-- @click="selecPatient" -->
              <button
                @click="btnAddOnClick"
                id="addPatient"
                class="btn btn-white"
                v-if="role == 'role3'"
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
                    placeholder="Tìm kiếm theo tên, số điện thoại, CMT/CCCD hoặc email"
                    v-model="inputSearch"
                    @change="changeValueInputSeach"
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
            <span class="hidden-folded d-inline l-s-n-1x"
              >Danh sách bệnh nhân</span
            >
          </a>
          <!-- / brand -->
          <div class="scroll-y mx-3 mb-0 card">
            <div
              class="list list-row"
              v-if="listRendered.length > 0 && !this.isLoading"
            >
              <div
                class="list-item"
                data-id="2"
                data-sr-id="164"
                style="
                  transform: none;
                  opacity: 1;
                  transition: transform 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s,
                    opacity 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s;
                "
                v-for="patient in listRendered"
                :key="patient.id"
              >
                <div>
                  <a href="app.message.html" data-pjax-state="">
                    <span class="w-40 avatar gd-primary">
                      {{ getFirstLetter(patient.name) }}
                    </span>
                  </a>
                </div>
                <div class="flex" style="width: 180px">
                  <a
                    href="app.user.detail.html#2"
                    class="item-author text-color"
                    data-pjax-state=""
                    >Tên bệnh nhân</a
                  >
                  <div class="item-mail text-muted h-1x d-none d-sm-block">
                    {{ patient.name }}
                  </div>
                </div>
                <div class="flex" style="width: 100px">
                  <a class="item-author text-color" data-pjax-state=""
                    >Giới tính</a
                  >
                  <div class="item-mail text-muted h-1x d-none d-sm-block">
                    {{ patient.gender === "man" ? "Nam" : "Nữ" }}
                  </div>
                </div>
                <div class="flex">
                  <a class="item-author text-color" data-pjax-state=""
                    >Địa chỉ</a
                  >
                  <div
                    class="item-mail text-muted h-1x d-none d-sm-block"
                    style="width: 250px"
                  >
                    {{ patient.detail_address }}
                  </div>
                </div>
                <div class="flex">
                  <a class="item-author text-color" data-pjax-state=""
                    >Ngày sinh</a
                  >
                  <div class="item-mail text-muted h-1x d-none d-sm-block">
                    {{ patient.dateOfBirth }}
                  </div>
                </div>
                <div class="flex">
                  <a class="item-author text-color" data-pjax-state=""
                    >CMT/CCCD</a
                  >
                  <div class="item-mail text-muted h-1x d-none d-sm-block">
                    {{ patient.identification }}
                  </div>
                </div>
                <div class="flex">
                  <a class="item-author text-color" data-pjax-state=""
                    >Số điện thoại</a
                  >
                  <div class="item-mail text-muted h-1x d-none d-sm-block">
                    {{ patient.phone }}
                  </div>
                </div>
                <div class="flex">
                  <a
                    href="app.user.detail.html#2"
                    class="item-author text-color"
                    data-pjax-state=""
                    >Email</a
                  >
                  <div class="item-mail text-muted h-1x d-none d-sm-block">
                    {{ patient.email }}
                  </div>
                </div>
                <div>
                  <a-dropdown-button>
                    <template #overlay>
                      <a-menu>
                        <a-menu-item
                          key="2"
                          @click="seeResults(patient.id)"
                          v-if="role == 'role3' || role == 'role1'"
                        >
                          Xem các kết quả trước
                        </a-menu-item>
                        <a-menu-item
                          key="3"
                          @click="clickInput(patient.id)"
                          v-if="role == 'role3' || role == 'role1'"
                        >
                          Chẩn đoán ung thư
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
          <a-modal
            style="height: 200px; width: 650px"
            v-model:visible="modalHistory"
            title="Lịch sử chẩn đoán ung thư"
            :footer="null"
          >
            <div
              class="modal-body"
              style="
                max-height: 555px;
                direction: ltr;
                overflow-y: auto;
                padding: 20px 10px 0 0;
              "
            >
              <ul v-if="listHistoryPatient.length > 0">
                <li
                  style="
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 25px;
                  "
                  class="item-result"
                  v-for="(item, index) in listHistoryPatient"
                  :key="item.id"
                >
                  <p class="name-result">
                    <b>Lần {{ index + 1 }}</b>
                  </p>
                  <p class="date-result">
                    <b>Ngày: {{ $filters.formatDateTime(item.created_at, 'HH:mm DD/MM/YYYY') }}</b>
                  </p>
                  <b style="position: relative; top: -8px">{{
                    item.result ? "Bị ung thư" : "Không bị"
                  }}</b>
                </li>
              </ul>
              <template v-else>
                <a-empty description="Không có dữ liệu" />
              </template>
            </div>
          </a-modal>
          <a-modal
            style="height: 800px; width: 1000px; direction: ltr"
            v-model:visible="test123"
            title="Chẩn đoán ung thư"
            :footer="null"
            class="diagnose-cancer"
          >
            <div id="content-cancer">
              <div
                @click="test"
                style="
                  width: 952px;
                  height: 240px;
                  background-color: red;
                  background-color: transparent;
                  position: absolute;
                  left: 24px;
                  top: 76px;
                  z-index: 100000000;
                  cursor: pointer;
                "
              ></div>
              <a-upload-dragger
                name="file"
                :multiple="true"
                style="width: 952px; height: 500px"
                accept="image/png, image/jpeg"
                :fileList="defaultFileList"
                listType="picture"
                :showUploadLis="false"
              >
                <p class="ant-upload-drag-icon">
                  <img
                    src="../../assets/img/iconsaddimage.png"
                    alt=""
                    srcset=""
                    style="width: 96px; height: 96px"
                  />
                </p>
                <p class="ant-upload-text">
                  Nhấp vào khu vực này để tải ảnh lên
                </p>
                <p class="ant-upload-hint">
                  Chỉ hỗ trợ cho ảnh có dạng .png hoặc .jpg
                </p>
              </a-upload-dragger>
              <input
                hidden
                type="file"
                multiple
                @change="onFilesSelected"
                id="file-input"
                accept="image/png, image/gif, image/jpeg"
              />
              <a-modal
                style="height: 900px; width: 800px"
                v-model:visible="visibleCancer"
                title="Chuẩn đoán ung thư"
                @ok="assignPatient"
                class="view-cancer"
                :footer="null"
              >
                <div class="view-image" style="margin-bottom: 30px">
                  <img :src="thumUrl" alt="" width="200" />
                </div>
                <div class="title">
                  Kết quả chuẩn đoán dựa trên hình ảnh :
                  <b>{{ isHave ? "Bị ung thư" : "Không bị" }}</b>
                </div>
              </a-modal>
            </div>
          </a-modal>
          <div class="pagination" v-if="patients.length > 0">
            <a-pagination
              v-model:pageSize="pageSize"
              v-model:current="current"
              :total="patients.length"
              show-less-items
              @change="changePage"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import FormPatient from "../patient/FormPatient.vue";
import axios from "axios";
import _ from "lodash";

export default {
  name: "the-patient",
  components: {
    FormPatient,
  },
  watch: {
    inputSearch: _.debounce(function (newValue) {
      this.patients = [];
      this.listRendered = [];
      this.isLoading = true;
      this.cloneFull.forEach((item) => {
        if (
          item.name.toUpperCase().includes(newValue.toUpperCase()) ||
          item.email.toUpperCase().includes(newValue.toUpperCase()) ||
          item.phone.toUpperCase().includes(newValue.toUpperCase()) ||
          item.identification.toUpperCase().includes(newValue.toUpperCase())
        ) {
          this.patients.push(item);
        }
      });
      setTimeout(() => {
        this.listRendered = this.patients.slice(0, this.pageSize);
        this.isLoading = false;
      }, 1000);
    }, 500),
  },
  data() {
    return {
      test123: false,
      listHistoryPatient: [],
      historyPatient: {},
      fileHistory: "",
      modalHistory: false,
      modalHistory1: false,
      isLoading: false,
      cloneFull: [],
      inputSearch: "",
      valueDoctor: "",
      idDoctorForPatient: "",
      optionDoctor: [],
      visible: false,
      link: "",
      current: 1,
      pageSize: 12,
      resultRight: "",
      resultLeft: "",
      totalLung: "",
      isShowDialog: false,
      idPatient: "",
      patients: [],
      listResults: [],
      patientSelected: {
        email: "",
        password: "",
        username: "",
        name: "",
        unsignedName: "",
        gender: "",
        ethnic: "",
        phone: "",
        dateOfBirth: "",
        insuranceCode: "",
        identification: "",
        address: {
          country: "",
          province: "",
          district: "",
          ward: "",
        },
        contact: "",
        detail_address: "",
      },
      formMode: "",
      listRendered: [],
      visibleCancer: false,
      isHave: false,
      thumUrl: "",
      defaultFileList: [],
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
    getFirstLetter(name) {
      if (name) {
        let a = name.split("");
        return a[0].toUpperCase();
      }
      return "";
    },
    test() {
      document.querySelector("#file-input").click();
    },
    async onFilesSelected(files) {
      this.defaultFileList.push({
        uid: "-2",
        name: files.target.files[0].name,
        status: "done",
        url: window.URL.createObjectURL(files.target.files[0]),
        thumbUrl: window.URL.createObjectURL(files.target.files[0]),
      });
      const me = this;
      var formData = new FormData();
      formData.append("uploadfiles", files.target.files[0]);
      formData.append("patientId", this.idPatient);
      await axios({
        url: "http://127.0.0.1:8000/pc/pc_load",
        method: "POST",
        data: formData,
        headers: {
          Authorization: `Bearer ${me.accessToken}`,
          "Content-Type": "multipart/form-data",
        },
      })
        .then((result) => {
          this.visibleCancer = true;
          this.thumUrl = window.URL.createObjectURL(files.target.files[0]);
          this.isHave = result.data.data.result;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async seeDetailHistory(id) {
      const me = this;
      await axios
        .get(
          `http://127.0.0.1:8000/medical_record/detail_medical_record?pk=${id}`,
          {
            headers: { Authorization: `Bearer ${me.accessToken}` },
          }
        )
        .then((res) => {
          this.historyPatient = res.data.data;
          this.modalHistory1 = true;
          console.log(this.historyPatient);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // async addHistory() {
    //   let me = this;
    //   var formData = new FormData();
    //   for (var i = 0; i < this.fileHistory.target.files.length; i++) {
    //     console.log(this.fileHistory.target.files[i]);
    //     formData.append("files", this.fileHistory.target.files[i]);
    //   }
    //   // return;
    //   for (const [key, value] of Object.entries(this.historyPatient)) {
    //     formData.append(key, value);
    //   }
    //   formData.append("patient", this.idPatient);
    //   await axios({
    //     url: "http://127.0.0.1:8000/medical_record/",
    //     method: "POST",
    //     data: formData,
    //     headers: {
    //       Authorization: `Bearer ${me.accessToken}`,
    //     },
    //   })
    //     .then((result) => {
    //       this.$message.success("Thêm tiểu sử khám bệnh thành công !");
    //       this.modalHistory = false;
    //       console.log(result);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // },
    addFileHistory(event) {
      this.modalHistory = true;
      this.fileHistory = event;
    },
    // async showModalHistory(id) {
    //   const me = this;
    //   this.modalHistory = true;
    //   this.idPatient = id;
    //   await axios
    //     .get(
    //       `http://127.0.0.1:8000/medical_record/list_medical_record_by_patient_id?pk=${id}`,
    //       {
    //         headers: { Authorization: `Bearer ${me.accessToken}` },
    //       }
    //     )
    //     .then((res) => {
    //       this.listHistoryPatient = res.data.data;
    //       console.log(this.listHistoryPatient);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // },
    // changeValueInputSeach() {
    //   console.log(123);
    //   console.log(this.inputSearch);
    // },
    changePage(value) {
      this.listRendered = this.patients.slice(
        (value - 1) * this.pageSize,
        value * this.pageSize
      );
    },
    async assignPatient() {
      const me = this;
      await axios
        .post(
          `http://127.0.0.1:8000/patient_management/`,
          {
            doctor: this.idDoctorForPatient,
            patient: this.idPatient,
          },
          {
            headers: { Authorization: `Bearer ${me.accessToken}` },
          }
        )
        .then((res) => {
          console.log(res);
          this.$message.success("Thêm bệnh nhân cho bác sĩ thành công");
          (this.valueDoctor = ""), (this.idDoctorForPatient = "");
          this.idPatient = "";
          this.visible = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleChangeDoctorForPatient(value, object) {
      this.idDoctorForPatient = object.id;
    },
    showModalDoctor(idPatient) {
      this.visible = true;
      this.idPatient = idPatient;
    },
    async getListPatients() {
      let url = "";
      if (this.role == "role3") {
        url =
          "http://127.0.0.1:8000/medical_unit/list_patient_by_medical_unit/?dataFilter=null";
      } else if (this.role == "role1") {
        url = `http://127.0.0.1:8000/patient_management/list_patient_by_doctor?pk=${this.idProfile}`;
      }
      const me = this;
      await axios
        .get(url, {
          headers: { Authorization: `Bearer ${me.accessToken}` },
        })
        .then(function (res) {
          me.patients = res.data;
          console.log(me.patients);
        })
        .catch(function (err) {
          console.log(err);
        });
    },
    selecPatient(patient) {
      this.formMode = "edit";
      this.patientSelected = {
        ...patient,
        country: patient.address.country,
        province: patient.address.province,
        district: patient.address.district,
        ward: patient.address.ward,
      };
      console.log(this.patientSelected);
      // this.patientSelected = {
      //   email: "abc@gmail.com",
      //   password: "aaaaaa",
      //   username: "aaaaaa",
      //   name: "aaaaaa",
      //   unsignedName: "aaaaaa",
      //   gender: "woman",
      //   ethnic: "Kinh",
      //   phone: "",
      //   dateOfBirth: "",
      //   insuranceCode: "",
      //   identification: "",
      //   address: {
      //     country: "Việt Nam",
      //     province: "Thành phố Hà Nội",
      //     district: "Quận Ba Đình",
      //     ward: "",
      //   },
      //   contact: "",
      //   detail_address: "",
      // };
      this.showOrHideDialog(true);
    },
    assignResult(result) {
      if (result) {
        this.link = `http://127.0.0.1:8000/tlc_result/result/${result.id}/`;
        console.log(this.link);
        this.resultRight = result.right_lung;
        this.resultLeft = result.left_lung;
        this.totalLung = result.lung_volume;
        this.showResult();
      }
    },
    closeListResult() {
      const a = document.getElementById("listResults");
      a.setAttribute("hidden", true);
    },
    showListResult() {
      const a = document.getElementById("listResults");
      a.removeAttribute("hidden", true);
    },
    // Lâm
    seeResults(id) {
      this.modalHistory = true;
      const me = this;
      axios
        .post(
          `http://127.0.0.1:8000/pc/get_result_by_patient_id?pk=${id}`,
          {},
          {
            headers: { Authorization: `Bearer ${me.accessToken}` },
          }
        )
        .then((res) => {
          me.listHistoryPatient = res.data.data;
          console.log(me.listHistoryPatient);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    showLung3D() {
      const a = document.getElementById("lungVolumn");
      a.removeAttribute("hidden", true);
      this.$message.warning(
        "Lần đầu sẽ mất nhiều thời gian để tạo phổi 3D. Vui lòng đợi ..."
      );
      // var iframe = document.querySelector(".iframe-lung");
      // setInterval(() => {
      //   var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
      //   console.log(innerDoc);
      // }, 1000);
      // console.log(123323);
      // setInterval(() => {
      //   console.log(document.querySelector("#myDiv"));
      // }, 1000);
    },
    showResult() {
      const a = document.getElementById("resultTlc");
      a.removeAttribute("hidden", true);
    },
    clickInput(idPatient) {
      this.test123 = true;
      //   const input = document.getElementById("dicomFiles");
      //   input.click();
      this.idPatient = idPatient;
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
      if (!isShow) {
        this.formMode = null;
      }
    },
    /**
     * Mô tả : Mô tả code
     * @param
     * @return
     * Created by: Cao Thanh Lâm - MF1103
     * Created date: 18:32 05/07/2022
     */
    showChoiceAction(e) {
      console.log(e.target);
      let choicesAction = e.target.querySelector(
        ".dropdown-menu.dropdown-menu-right.bg-black"
      );
      if (!choicesAction) {
        console.log(123);
        choicesAction = e.target.parentElement.parentElement.querySelector(
          ".dropdown-menu.dropdown-menu-right.bg-black"
        );
      }
      try {
        if (choicesAction.classList.contains("show")) {
          choicesAction.classList.remove("show");
        } else {
          console.log("show");
          choicesAction.classList.add("show");
        }
      } catch (error) {}
    },
    async callData() {
      const me = this;
      if (this.role == "role3") {
        this.isLoading = true;
        await axios
          .get(
            `http://127.0.0.1:8000/medical_unit/list_patient_by_medical_unit/?dataFilter=null`,
            {
              headers: { Authorization: `Bearer ${me.accessToken}` },
            }
          )
          .then(function (res) {
            me.patients = res.data;
            me.cloneFull = res.data;
            me.listRendered = res.data.slice(0, me.pageSize);
            me.isLoading = false;
          })
          .catch(function (err) {
            console.log(err);
            me.isLoading = false;
          });
        // Danh sách bác sĩ
        await axios
          .get(
            "http://localhost:8000/medical_unit/list_doctor_by_medical_unit/?dataFilter=null",
            {
              headers: { Authorization: `Bearer ${me.accessToken}` },
            }
          )
          .then(function (res) {
            res.data.forEach((item) => {
              me.optionDoctor.push({
                value: `${item.name}  --  email: ${item.email}`,
                id: item.id,
              });
            });
            console.log(me.optionDoctor);
          })
          .catch(function (err) {
            console.log(err);
          });
      } else if (this.role == "role1") {
        this.isLoading = true;
        await axios
          .get(
            `http://127.0.0.1:8000/patient_management/list_patient_by_doctor?pk=${this.idProfile}`,
            {
              headers: { Authorization: `Bearer ${me.accessToken}` },
            }
          )
          .then(function (res) {
            res.data.forEach((item) => {
              me.patients.push(item.patient);
              me.cloneFull.push(item.patient);
            });
            me.listRendered = me.patients.slice(0, me.pageSize);
            me.isLoading = false;
          })
          .catch(function (err) {
            me.isLoading = false;
            console.log(err);
          });

        // // Danh sách bác sĩ
        // await axios
        //   .get(
        //     "http://localhost:8000/medical_unit/list_doctor_by_medical_unit/?dataFilter=null",
        //     {
        //       headers: { Authorization: `Bearer ${me.accessToken}` },
        //     }
        //   )
        //   .then(function (res) {
        //     res.data.forEach((item) => {
        //       me.optionDoctor.push({
        //         value: `${item.name}  --  email: ${item.email}`,
        //         id: item.id,
        //       });
        //     });
        //     console.log(me.optionDoctor);
        //   })
        //   .catch(function (err) {
        //     console.log(err);
        //   });
      }
    },
  },
  async created() {
    await this.callData();
  },
};
</script>

<style scoped>
.pagination {
  direction: ltr;
  margin: 30px auto 0px;
}
div#content {
  width: 86vw;
  position: relative;
}
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
<style>
.diagnose-cancer .ant-modal-content {
  position: relative;
  top: -50px;
  height: 800px;
}
.view-cancer .ant-modal-body {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
