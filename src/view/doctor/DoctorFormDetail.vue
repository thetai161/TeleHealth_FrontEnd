<template>
  <div
    class="dialog-form doctor-form-detail"
    :class="{ 'show-doctor-detail': isShow }"
  >
    <div id="cardDoctor" class="card">
      <div class="card-header" style="font-size: 16px">
        <strong>Thông tin chi tiết</strong>
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
              readonly
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
                  disabled
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
                  disabled
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
                  disabled
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
              readonly
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
              readonly
              class="form-control"
              v-model="doctorProfile.phone"
            />
          </div>
        </div>
        <div class="form-group row d-flex" style="margin-right: -13px">
          <label class="col-form-label">Hộ khẩu</label>
          <div class="col">
            <div class="row row-cols-2">
              <div class="col-6">
                <div class="form-group row">
                  <label class="col-form-label"  style="min-width: 80px" for="inlineRadio1"
                    >Quốc gia</label
                  >
                  <div class="col-sm-8">
                    <select
                      name="country"
                      id=""
                      v-model="doctorProfile.address.country"
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
                  <label class="col-form-label" style="min-width: 80px" for="inlineRadio2"
                    >Thành phố</label
                  >
                  <div class="col-sm-8">
                    <select
                      name="city"
                      id=""
                      v-model="doctorProfile.address.province"
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
                  <label class="col-form-label" style="min-width: 80px" for="inlineRadio3"
                    >Quận/huyện</label
                  >
                  <div class="col-sm-8">
                    <select
                      name="city"
                      id=""
                      v-model="doctorProfile.address.district"
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
                  <label class="col-form-label" style="min-width: 80px" for="inlineRadio3"
                    >Xã Phường</label
                  >
                  <div class="col-sm-8">
                    <select
                      name="city"
                      id=""
                      v-model="doctorProfile.address.ward"
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
              readonly
              id="formGroupInputSmall"
              v-model="doctorProfile.detail_address"
            />
          </div>
        </div>

        <!-- <div class="form-group row">
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
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "the-doctor-detail",
  props: ["isShow", "doctorSelected"],
  watch: {
    doctorSelected: function (newValue) {
      this.doctorProfile = newValue;
      console.log(this.doctorProfile);
      this.handleCountryChange();
      this.handleCityChange();
      this.handleDistrictChange();
      this.handleWardChange();
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
        address: {
          country: "",
          ward: "",
          district: "",
          province: "",
        },
        detail_address: "",
      },
    };
  },
  computed: {
    accessToken() {
      return this.$store.getters.accessToken;
    },
  },
  methods: {
    closeOnClick() {
      this.$emit("closeOnClick", false);
    },
    async btnSaveOnClick() {
      const me = this;
      me.doctorProfile.medical_unit = "79a42bd6-353f-4e5f-8b18-6dfebf986103";
      await axios
        .post(
          `http://127.0.0.1:8000/doctor/update_profile_doctor/`,
          me.doctorProfile,
          {
            headers: { Authorization: `Bearer ${me.accessToken}` },
          }
        )
        .then((result) => {
          console.log(result);
          me.closeOnClick();
        })
        .catch((err) => {
          console.log(err);
        });
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
          // this.setSelectedAddress();
        })
        .catch((err) => {
          console.log(err);
        });
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
        (item) => item.name == this.doctorProfile.address.province
      );
      this.address.districts = arr_tmp.districts.map((item) => {
        return item.name;
      });
    },

    // hàm lọc quận huyện
    handleDistrictChange() {
      let city_tmp = this.fullAddress.find(
        (item) => item.name == this.doctorProfile.address.province
      );

      let distric_tmp = city_tmp.districts.find(
        (item) => item.name == this.doctorProfile.address.district
      );

      this.address.wards = distric_tmp.wards.map((item) => {
        return item.name;
      });
    },

    // hàm lọc xã phường
    handleWardChange() {
      console.log(this.doctorProfile);
    },
  },
  created() {
    const me = this;
    this.getLocation();
    // me.address.cities = ["Hà Nội"];
    // me.address.wards = ["Phường Phúc Xá", "abc"];
    // me.address.districts = ["Quận Ba Đình", "Thanh Xuân"];
    // me.address.countries = ["Việt Nam", "Anh"];
    // me.ethnics = ["Kinh"];
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
  height: 430px;
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
