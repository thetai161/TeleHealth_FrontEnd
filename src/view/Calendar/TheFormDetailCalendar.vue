<template>
  <div class="dialog-form-location" v-if="isShow">
    <div class="card card-locations">
      <div class="card-header">
        <strong>Thông tin hội chẩn</strong>
        <div
          @click="closeForm"
          id="closeFormLocation"
          class="col-6 col-sm-3 py-3"
        >
          <svg
            @click="closeForm"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-x mx-2"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </div>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent>
          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-3 col-form-label"
              >Tên hội chẩn</label
            >
            <div class="col-sm-9">
              <input
                type="text"
                class="form-control"
                id="inputEmail3"
                placeholder="Ex: Hội chẩn số 1"
                v-model="formMeeting.meeting_title"
                :readonly="isInvited || method != 'E'"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-3 col-form-label"
              >Nội dung</label
            >
            <div class="col-sm-9">
              <input
                type="text"
                class="form-control"
                id="inputEmail3"
                placeholder="Ex: Hội chẩn số 1"
                v-model="formMeeting.meeting_content"
                :readonly="isInvited || method != 'E'"
              />
            </div>
          </div>
          <!-- <div class="form-group row">
              <label for="inputEmail3" class="col-sm-3 col-form-label"
                >Thời gian bắt đầu</label
              >
              <div class="col-sm-9">
                <a-date-picker size="medium" :show-time="{ format: 'HH:mm' }" />
              </div>
            </div> -->
          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-3 col-form-label"
              >Thời gian</label
            >
            <div class="col-sm-9">
              <a-range-picker
                :format="'YYYY-MM-DD HH:mm'"
                @change="onChangeDateTime"
                :show-time="{ format: 'HH:mm' }"
                style="width: 100%"
                :disabledDate="disabledDate"
                :default-value="[
                  moment(valueStart, dateFormat),
                  moment(valueEnd, dateFormat),
                ]"
                :disabled="[
                  isInvited || method != 'E',
                  isInvited || method != 'E',
                ]"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-3 col-form-label"
              >Đường dẫn</label
            >
            <div class="col-sm-9">
              <input
                type="text"
                class="form-control"
                id="inputEmail3"
                placeholder="Ex: Hội chẩn số 1"
                v-model="formMeeting.meeting_url"
                :readonly="isInvited || method != 'E'"
              />
            </div>
          </div>
          <div class="form-group row" v-if="method == 'E'">
            <label for="inputEmail3" class="col-sm-3 col-form-label"
              >Người tham gia</label
            >
            <div class="col-sm-9">
              <a-select
                class="calendar-select"
                mode="tags"
                style="width: 450px"
                :token-separators="[',']"
                @select="handleChange"
                :max-tag-count="5"
                :value="valueOptions"
                @deselect="deselect"
                placeholder="abc@gmail.com"
                :disabled="isInvited || method != 'E'"
              >
              </a-select>
            </div>
          </div>
          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-3 col-form-label"
              >Link đính kèm</label
            >
            <div class="col-sm-9">
              <input
                type="text"
                class="form-control"
                id="inputEmail3"
                placeholder="Ex:https://www.abc.com.vn/"
                v-model="formMeeting.url_file"
                :readonly="isInvited || method != 'E'"
              />
            </div>
          </div>
          <div class="form-group row" v-if="method != 'E'">
            <label for="inputEmail3" class="col-sm-3 col-form-label"
              >Kết luận</label
            >
            <div class="col-sm-9">
              <input
                type="text"
                class="form-control"
                id="inputEmail3"
                placeholder="Ex: Kết thúc hội chẩn"
                v-model="formMeeting.conclusion"
                :readonly="isInvited || method == 'D'"
              />
            </div>
          </div>
          <div
            class="form-group row"
            v-if="(method == 'U' || method == 'E') && !isInvited"
          >
            <div class="flex-save-cancle">
              <button
                @click="btnSaveOnClick"
                type="submit"
                class="btn btn-primary mt-1"
                style="min-width: 100px"
              >
                Xác nhận
              </button>
              <button @click="closeForm">Hủy</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
export default {
  props: ["isShow", "method", "inforCalendar", "inforCalendar", "isInvited"],
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
  },
  watch: {
    inforCalendar(newValue, oldValue) {
      this.formMeeting = { ...newValue, guest: [] };
      this.valueStart = newValue.meeting_time_start;
      this.valueEnd = newValue.meeting_time_end;
      newValue.meeting_guest.forEach((item) => {
        this.valueOptions.push({
          value: item.meeting_guest_email,
        });
      });
      console.log(this.valueOptions);
    },
  },
  data() {
    return {
      valueStart: "",
      valueEnd: "",
      dataSchedule: {},
      valueOptions: [],
      formMeeting: {
        // meeting_title: "",
        // meeting_time_start: "",
        // meeting_time_end: "",
        // meeting_content: "",
        // meeting_url:"",
        // conclusion:"",
        // url_file: [
        //   {
        //     fileUrl: "",
        //     title: "Tệp đính kèm",
        //   },
        // ],
      },
    };
  },
  methods: {
    moment,
    onChangeDateTime(value) {
      this.formMeeting = {
        ...this.formMeeting,
        meeting_time_start: value[0].toISOString(),
        meeting_time_end: value[1].toISOString(),
      };
    },
    disabledDate(current) {
      // Can not select days before today and today
      //   return current && current < moment(this.startDate).subtract(2, 'day');
      return current && current < moment().subtract(1, "days").endOf("day");
    },
    handleChange(value) {
      console.log("valueChange");
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        this.valueOptions.push({
          value: value,
        });
      } else {
        this.$message.warning("Email không hợp lệ !");
      }
    },
    deselect(value) {
      this.valueOptions = this.valueOptions.filter(
        (item) => item.value !== value
      );
      console.log(this.valueOptions);
    },
    btnSaveOnClick() {
      const me = this;
      if (me.method == "U") {
        let conclusion = this.formMeeting.conclusion;
        if (!conclusion || !conclusion.trim()) {
          this.$message.warning("Vui lòng nhập kết luận để tiếp tục");
        } else {
          axios
            .post(
              `http://127.0.0.1:8000/meeting/add_meeting_conclusion?pk=${this.formMeeting.id}`,
              { conclusion },
              {
                headers: { Authorization: `Bearer ${me.accessToken}` },
              }
            )
            .then((response) => {
              console.log(response);
              me.closeForm();
              // me.$emit("getListPatients");
            })
            .catch((err) => {
              console.log(err);
            });
        }
      } else if (me.method == "E") {
        this.formMeeting.guest = [];
        this.valueOptions.forEach((item) => {
          this.formMeeting.guest.push({
            email: item.value,
            displayName: "string",
            optional: false,
            responseStatus: "accepted",
            organizer: true,
          });
        });
        console.log(me.formMeeting);
        axios
          .put(
            `http://127.0.0.1:8000/meeting/:id/?pk=${this.formMeeting.id}`,
            me.formMeeting,
            {
              headers: { Authorization: `Bearer ${me.accessToken}` },
            }
          )
          .then((response) => {
            console.log(response);
            me.closeForm();
            // me.$emit("getListPatients");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    closeForm() {
      this.dataSchedule = {};
      this.$emit("showOrHideForm", false);
    },
  },
};
</script>

<style scoped>
.flex-save-cancle {
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
}
.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
div#closeFormLocation {
  cursor: pointer;
  position: relative;
  height: 10px;
  left: 115px;
  top: -13px;
  opacity: 0.7;
}
div#closeFormLocation:hover {
  opacity: 1;
}

.dialog-form-location {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10000 !important;
  align-items: center;
  justify-content: center;
  display: flex;
}
.card-locations button {
  border: none;
  outline: none;
  width: 80px;
  height: 32px;
  border-radius: 2px;
  border: 1px solid #ccc;
  margin-right: 320px;
  cursor: pointer;
  opacity: 0.8;
  margin-right: 0;
}
.card-locations button:hover {
  opacity: 1;
}
input.form-control {
  border-radius: 3px;
}
.dialog-form-location .dropdown {
  border: 1px solid #ecedee;
  border-radius: 3px;
  height: 34px;
}
.dialog-form-location .dropdown:hover {
  background-color: #ccc;
}
.dialog-form-location.show-location {
  display: flex;
}
.card {
  min-width: 650px;
}
div#dropdown-input-location {
  width: 450px;
  margin-right: 15px;
}
/* div#closeFormLocation {
    cursor: pointer;
    position: relative;
    top: -18px;
    transform: scale(1.3);
    opacity: 0.7;
  } */
/* div#closeFormLocation:hover {
    opacity: 1;
  } */
</style>

<style lang="css">
.dialog-form-location {
  direction: ltr;
}
/* .rc-virtual-list {
    display: none;
  } */
</style>
