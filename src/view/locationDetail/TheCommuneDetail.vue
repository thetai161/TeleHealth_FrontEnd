<template>
  <div class="dialog-form-location" :class="{ 'show-location': showLocations }">
    <div class="card card-locations">
      <div class="card-header">
        <strong v-if="isEdit">Chi tiết xã phường</strong>
        <strong v-else>Thêm xã phường</strong>
        <div
          @click="closeLocations"
          id="closeFormLocation"
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
      <div class="card-body">
        <form>
          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-3 col-form-label">Mã</label>
            <div class="col-sm-9">
              <input
                type="text"
                class="form-control"
                id="inputEmail3"
                placeholder="001"
                v-model="ward.code"
                disabled
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-3 col-form-label"
              >Tên xã phường</label
            >
            <div class="col-sm-9">
              <input
                type="text"
                class="form-control"
                id="inputEmail3"
                placeholder="Kinh"
                v-model="ward.name"
                disabled
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-3 col-form-label"
              >Tên không dấu</label
            >
            <div class="col-sm-9">
              <input
                type="text"
                class="form-control"
                id="inputEmail3"
                placeholder="Kinh"
                v-model="ward.codename"
                disabled
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-3 col-form-label"
              >Loại</label
            >
            <div class="col-sm-9">
              <input
                type="text"
                class="form-control"
                id="inputEmail3"
                placeholder="Kinh"
                v-model="ward.division_type"
                disabled
              />
            </div>
          </div>
          <!-- <div class="form-group row">
            <label for="inputEmail3" class="col-sm-3 col-form-label"
              >Quốc gia</label
            >
            <div class="input-group mb-3" id="dropdown-input-location">
              <input
                type="text"
                class="form-control"
                aria-label="Text input with dropdown button"
              />
              <div class="input-group-append">
                <button
                  class="btn btn-outline-secondary dropdown-toggle dropdown"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Xem
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                  <div role="separator" class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Separated link</a>
                </div>
              </div>
            </div>
          </div> -->
          <div class="form-group row" v-if="false">
            <div class="flex-save-cancle">
              <button
                @click="btnSaveOnClick"
                type="submit"
                class="btn btn-primary mt-1"
              >
                Lưu
              </button>
              <button @click="closeLocations">Hủy</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["showLocations", "isEdit", "dataLocation"],
  watch: {
    dataLocation: {
      handler(value) {
        this.ward = value;
      },
      deep: true,
    },
    isEdit(value) {
      if (!value) {
        this.ward = {};
      }
    },
  },
  data() {
    return {
      ward: {},
    };
  },
  methods: {
    closeLocations() {
      this.$emit("showOrHideDetailLocation", false);
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
  /* flex-direction: row-reverse; */
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

.dialog-form-location {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10000;
  align-items: center;
  justify-content: center;
  display: flex;
  display: none;
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
  position: absolute;
  right: -130px;
  transform: scale(1.3);
  opacity: 0.7;
} */
div#closeFormLocation:hover {
  opacity: 1;
}
</style>
