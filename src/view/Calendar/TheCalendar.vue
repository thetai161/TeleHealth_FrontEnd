<template style="direction: rtl">
  <div v-if="isLoading">
    ...
  </div>
  <div v-else>
    <a-tabs default-active-key="1" style="direction: ltr">
      <a-tab-pane key="1" tab="Lịch hội chẩn tham gia">
        <TheTableCalendar :dataMeeting="dataInvited" :isInvited="true" />
      </a-tab-pane>
      <a-tab-pane key="3" tab="Lịch hội chẩn đã tạo">
        <TheTableCalendar :dataMeeting="dataCreated" :isInvited="false" />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import TheTableCalendar from "../Calendar/TheTableCalendar.vue";
import axios from "axios";

export default {
  components: {
    TheTableCalendar,
  },
  data() {
    return {
      dataCreated: [],
      dataInvited: [],
      isLoading: true
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
  },
  async created() {
    await this.callAPI();
  },
  methods: {
    async callAPI() {
      const me = this;
      await axios
        .get("http://localhost:8000/meeting/list_meeting_creator_for_user/", {
          headers: { Authorization: `Bearer ${me.accessToken}` },
        })
        .then((res) => {
          me.dataCreated = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
      await axios
        .get("http://localhost:8000/meeting/list_meeting_valid_for_user/", {
          headers: { Authorization: `Bearer ${me.accessToken}` },
        })
        .then((res) => {
          me.dataInvited = res.data.data;
          me.isLoading = false
        })    
        .catch((err) => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
.modal-schedule .ant-modal-content {
  min-height: 300px !important;
}
.ant-select-dropdown.ant-select-dropdown-placement-bottomLeft {
  z-index: 10000 !important;
  max-height: 200px;
  overflow-y: scroll;
  direction: ltr;
}
.custom-celandar-table .ant-select-dropdown {
  z-index: 10000 !important;
  max-height: 200px;
  /* overflow-y: scroll; */
  direction: ltr;
  overflow: hidden;
}
</style>
