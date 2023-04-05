<template>
  <div
    class="dialog-form doctor-form-detail"
    :class="{ 'show-doctor-detail': isShow }"
    style="z-index: 100"
  >
    <div id="cardDoctor" class="card">
      <div class="card-header" style="font-size: 16px">
        <strong>Thông tin cá nhân</strong>
        <div
          @click="closeOnClick"
          id="closeFormDoctor"
          class="col-6 col-sm-3 py-3"
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
            class="feather feather-x mx-2"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </div>
      </div>

      <div id="formDetailDoctor" class="card-body">
        <div class="form-group row">
          <label class="col-form-label">Họ và tên</label>
          <div class="col-sm-8">
            <input
              type="text"
              class="form-control"
              v-model="doctorProfile.name"
            />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-form-label">Giới tính</label>
          <div class="col-sm-8">
            <div class="mt-2 mb-2">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="man"
                  v-model="doctorProfile.gender"
                />
                <label class="form-check-label" for="man">Nam</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="woman"
                  v-model="doctorProfile.gender"
                />
                <label class="form-check-label" for="woman">Nữ</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio3"
                  value="orther"
                  v-model="doctorProfile.gender"
                />
                <label class="form-check-label" for="orther">Khác</label>
              </div>
            </div>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-form-label">Tên không dấu</label>
          <div class="col-sm-8">
            <input
              type="text"
              class="form-control"
              v-model="doctorProfile.unsignedName"
            />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-form-label">Số điện thoại</label>
          <div class="col-sm-8">
            <input
              type="text"
              class="form-control"
              v-model="doctorProfile.phone"
            />
          </div>
        </div>
        <div class="form-group row d-flex" style="margin-right: -8px">
          <label class="col-form-label">Hộ khẩu</label>
          <div class="col">
            <div class="row row-cols-2">
              <div class="col-6">
                <div class="form-group row">
                  <label
                    style="min-width: 80px"
                    class="col-form-label"
                    for="inlineRadio1"
                    >Quốc gia</label
                  >
                  <div class="col-sm-8">
                    <select
                      name="country"
                      id=""
                      v-model="doctorProfile.country"
                      class="form-control"
                      @change="handleCountryChange"
                    >
                      <option
                        :value="country"
                        v-for="country in address.countries"
                        :key="country"
                      >
                        {{ country }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="form-group row">
                  <label
                    style="min-width: 80px"
                    class="col-form-label"
                    for="inlineRadio2"
                    >Thành phố</label
                  >
                  <div class="col-sm-8">
                    <select
                      name="city"
                      id="city"
                      v-model="doctorProfile.province"
                      class="form-control"
                      @change="handleCityChange"
                    >
                      <option
                        :value="city"
                        v-for="city in address.cities"
                        :key="city.id"
                      >
                        {{ city }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="form-group row">
                  <label
                    style="min-width: 80px"
                    class="col-form-label"
                    for="inlineRadio3"
                    >Quận/huyện</label
                  >
                  <div class="col-sm-8">
                    <select
                      name="city"
                      id=""
                      v-model="doctorProfile.district"
                      class="form-control"
                      @change="handleDistrictChange"
                    >
                      <option
                        :value="district"
                        v-for="district in address.districts"
                        :key="district"
                      >
                        {{ district }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="form-group row">
                  <label
                    style="min-width: 80px"
                    class="col-form-label"
                    for="inlineRadio3"
                    >Xã Phường</label
                  >
                  <div class="col-sm-8">
                    <select
                      name="city"
                      id=""
                      v-model="doctorProfile.ward"
                      class="form-control"
                      @change="handleWardChange"
                    >
                      <option
                        :value="ward"
                        v-for="ward in address.wards"
                        :key="ward.id"
                      >
                        {{ ward }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-form-label" for="formGroupInputSmall"
            >Địa chỉ thường trú</label
          >
          <div class="col-sm-8">
            <input
              class="form-control form-control-sm"
              type="text"
              id="formGroupInputSmall"
              v-model="doctorProfile.detail_address"
            />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-form-label" for="formGroupInputSmall"
            >Nơi làm việc</label
          >
          <div class="col-sm-8">
            <a-select
              v-model:value="nameDepartment"
              show-search
              placeholder="Chọn nơi làm việc"
              style="width: 530px"
              :options="optionDepartments"
              @change="selectDepartment"
            ></a-select>
            <!-- <input
              class="form-control form-control-sm"
              type="text"
              id="formGroupInputSmall"
              v-model="doctorProfile.medicalUnit"
            /> -->
          </div>
        </div>

        <div class="form-group row">
          <div class="flex-save-cancle">
            <button @click="closeOnClick">Hủy</button>
            <button
              @click="btnSaveOnClick"
              type="submit"
              class="btn btn-primary mt-1"
            >
              Lưu
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "the-doctor-detail",
  props: ["isShow", "inforDoctor"],
  watch: {
    inforDoctor: function (newValue) {
      this.doctorProfile = newValue;
    },
  },
  data() {
    return {
      fullAddress: [],
      address: {
        countries: ["Việt Nam"],
        cities: [],
        districts: [],
        wards: [],
      },
      doctorProfile: {
        name: "",
        gender: "",
        unsignedName: "",
        phone: "",

        country: "",
        ward: "",
        district: "",
        province: "",

        detail_address: "",
        medicalUnit: "",
      },
      optionDepartments: [],
      nameDepartment: "",
    };
  },
  computed: {
    accessToken() {
      return this.$store.getters.accessToken;
    },
    idDoctor() {
      return this.$store.getters.idProfile;
    },
    role() {
      return this.$store.getters.role;
    },
  },
  methods: {
    selectDepartment(value, object) {
      this.doctorProfile.medicalUnit = object.id;
      console.log(this.doctorProfile);
    },
    // Hàm lọc Quốc gia
    handleCountryChange() {
      if (this.fullAddress.length > 0) {
        this.address.cities = this.fullAddress.map((item) => {
          return item.name;
        });
      }
    },

    // hàm lọc thành phố
    handleCityChange() {
      let arr_tmp = this.fullAddress.find(
        (item) => item.name == this.doctorProfile.province
      );
      this.address.districts = arr_tmp.districts.map((item) => {
        return item.name;
      });
    },

    // hàm lọc quận huyện
    handleDistrictChange() {
      let city_tmp = this.fullAddress.find(
        (item) => item.name == this.doctorProfile.province
      );

      let distric_tmp = city_tmp.districts.find(
        (item) => item.name == this.doctorProfile.district
      );

      this.address.wards = distric_tmp.wards.map((item) => {
        return item.name;
      });
    },

    // hàm lọc xã phường
    handleWardChange() {
      console.log(this.doctorProfile);
    },
    getLocation() {
      const url = "https://provinces.open-api.vn/api/";
      axios
        .get(
          url,
          {
            params: {
              depth: 3,
            },
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          this.fullAddress = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    closeOnClick() {
      this.$emit("closeOnClick", false);
    },
    async btnSaveOnClick() {
      const me = this;
      console.log(me.doctorProfile);
      me.doctorProfile.medical_unit = "b0dcef8c-b82f-4711-9fd8-cb82f0d0c974";
      await axios
        .post(
          `http://127.0.0.1:8000/doctor/update_profile_doctor/`,
          me.doctorProfile,
          {
            headers: { Authorization: `Bearer ${me.accessToken}` },
          }
        )
        .then((result) => {
          this.$message.success("Cập nhật thông tin thành công !");
          me.closeOnClick();
        })
        .catch((err) => {
          this.$message.error("Cập nhật thất bại !");
          console.log(err);
        });
    },
  },
  async created() {
    const me = this;
    await this.getLocation();
    setTimeout(() => {
      axios
        .get(`http://localhost:8000/medical_unit/`, {
          headers: {
            Authorization: `Bearer ${this.$store.getters.accessToken}`,
          },
        })
        .then((res) => {
          res.data.forEach((item) => {
            me.optionDepartments.push({
              value: `${item.name} `,
              id: item.id,
            });
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }, 500);
    if (this.role == "role1") {
      console.log('vào đâty');
      setTimeout(() => {
        axios
          .get(
            `http://127.0.0.1:8000/doctor/detail_doctor?pk=${this.idDoctor}`,
            {
              headers: {
                Authorization: `Bearer ${this.$store.getters.accessToken}`,
              },
            }
          )
          .then((res) => {
            this.doctorProfile = {
              ...res.data,
              country: res.data.address.country,
              ward: res.data.address.ward,
              province: res.data.address.province,
              district: res.data.address.district,
            };
            this.handleWardChange();
            this.handleDistrictChange();
            this.handleCityChange();
            this.handleCountryChange();

            me.optionDepartments.forEach((item) => {
              if (item.id == res.data.medicalUnit) {
                this.nameDepartment = item.value;
                console.log(this.nameDepartment);
                this.doctorProfile.medicalUnit = item.id;
              }
            });
          })
          .catch((err) => {
            console.log(err);
            if (this.role == "role1") {
              this.$message.warning("Bạn nên cập nhật đẩy đủ thông tin cá nhân !");
            }
          });
      }, 1000);
    }

    // axios.get("http://127.0.0.1:8000/address/province/").then((res) => {
    //   me.address.cities = res.data;
    // });
    // axios.get("http://127.0.0.1:8000/address/ward/").then((res) => {
    //   me.address.wards = res.data;
    // });
    // axios.get("http://127.0.0.1:8000/address/country/").then((result) => {
    //   me.address.countries = result.data;
    // });
    // axios.get("http://127.0.0.1:8000/address/district/").then((res) => {
    //   me.address.districts = res.data;
    //   console.log(me.address);
    // });
  },
};
</script>

<style scoped>
.dialog-form.doctor-form-detail {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10000;
  display: none;
  align-items: center;
  justify-content: center;
}
.dialog-form.doctor-form-detail.show-doctor-detail {
  display: flex;
}
#cardDoctor {
  width: 720px;
  height: 540px;
  direction: ltr;
}
#cardDoctor button {
  border: none;
  outline: none;
  width: 80px;
  height: 32px;
  border-radius: 2px;
  border: 1px solid #ccc;
  margin-right: 320px;
  margin-top: 20px;
  cursor: pointer;
  opacity: 0.8;
  margin-right: 0;
}
#cardDoctor button:hover {
  opacity: 1;
}
.flex-save-cancle {
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
}
label.form-check-label {
  min-width: 76px;
}
.form-check-input {
  margin-left: 5px;
}
.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
div#closeFormDoctor {
  cursor: pointer;
  position: absolute;
  right: -130px;
  transform: scale(1.3);
  opacity: 0.7;
}
div#closeFormDoctor:hover {
  opacity: 1;
}
button.btn.btn-primary.mt-1 {
  position: relative;
  top: 10px;
}
select {
  border: 1px solid #ccc;
  border-radius: 3px;
  outline: none;
  min-width: 104px;
  margin-bottom: 5px;
  margin-right: 5px;
}
label.col-form-label {
  min-width: 130px;
  margin-left: 10px;
}
input.form-control {
  width: 530px;
}
</style>
