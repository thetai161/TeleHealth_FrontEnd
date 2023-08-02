<template>
  <div class="dialog-form-location" v-if="isShow">
    <div class="card card-locations">
      <div class="card-header"></div>
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
                v-model="meeting.meeting_title"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-3 col-form-label"
              >Biên bản</label
            >
            <div class="col-sm-9">
            </div>
            <TheMeetingMinutesDetail v-model:conclusion="meeting.conclusion"/>
          </div>
          <div class="form-group row">
            <div class="flex-save-cancle">
              <button @click="closeForm">Đóng</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import TheMeetingMinutesDetail from "../Calendar/TheMeetingMinutesDetail.vue"
export default {
  props: ["isShow","meeting"],
  components: {
    TheMeetingMinutesDetail
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
  },
  data() {
    return {
    };
  },
  methods: {
    closeForm() {
      this.$emit("closeOnClick", false);
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
  z-index: 1000;
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
