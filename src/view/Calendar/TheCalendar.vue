<template style="direction: rtl">
  <a-tabs default-active-key="1" style="direction: ltr">
    <a-tab-pane key="1" tab="Lịch hội chẩn tham gia">
      <TheTableCalendar :dataMeeting="dataInvited" :isInvited="true" />
    </a-tab-pane>
    <a-tab-pane key="3" tab="Lịch hội chẩn đã tạo">
      <TheTableCalendar :dataMeeting="dataCreated" :isInvited="false" />
    </a-tab-pane>
  </a-tabs>
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
  methods: {},
  async created() {
    const me = this;
    await axios
      .get("http://localhost:8000/meeting/list_meeting_creator_for_user/", {
        headers: { Authorization: `Bearer ${me.accessToken}` },
      })
      .then(function (res) {
        me.dataCreated = res.data.data;
      })
      .catch(function (err) {
        console.log(err);
      });
    await axios
      .get("http://localhost:8000/meeting/list_meeting_valid_for_user/", {
        headers: { Authorization: `Bearer ${me.accessToken}` },
      })
      .then(function (res) {
        me.dataInvited = res.data.data;
      })
      .catch(function (err) {
        console.log(err);
      });
    // me.dataCreated = [
    //   {
    //     id: "dd5f3c3f-8d28-4465-8d51-f198fec90f06",
    //     meeting_title: "tiêu đề 3",
    //     meeting_time_start: "2023-01-03T15:54:52.822000+07:00",
    //     meeting_time_end: "2023-01-02T16:56:04.822000+07:00",
    //     meeting_content: "reprehenderit Duis labore cillum",
    //     calendar_id: "fgmj9bems30r1qj2n6kisij544",
    //     calendar_url:
    //       "https://www.google.com/calendar/event?eid=ZmdtajliZW1zMzByMXFqMm42a2lzaWo1NDQgdGVsZWhlYWx0aC5pYm1lbGFiQG0",
    //     meeting_url: "https://meet.google.com/fwk-xopr-bjm",
    //     conclusion: null,
    //     url_file:
    //       "https://drive.google.com/file/d/10zVdYm6dYP21yjuEGo_MeOa2s3zMh9y2/view?usp=sharing",
    //     is_valid: true,
    //     created_at: "2023-01-02T22:27:15.066541+07:00",
    //     update_at: "2023-01-02T00:54:10.877654+07:00",
    //     meeting_creator: "3f58a449-3e0a-4b54-96e1-9d3e91efe968",
    //     meeting_guest: [
    //       {
    //         value: "abc1@gmail.com",
    //       },
    //       {
    //         value: "abc2@gmail.com",
    //       },
    //       {
    //         value: "abc3@gmail.com",
    //       },
    //       {
    //         value: "abc4@gmail.com",
    //       },
    //       {
    //         value: "abc5@gmail.com",
    //       },
    //       {
    //         value: "abc6@gmail.com",
    //       },
    //       {
    //         value: "abc7@gmail.com",
    //       },
    //       {
    //         value: "abc8@gmail.com",
    //       },

    //     ],
    //   },
    //   {
    //     id: "dd5f3c3f-8d28-4465-8d51-f198fec90f06",
    //     meeting_title: "tiêu đề 31",
    //     meeting_time_start: "2023-01-02T01:54:52.822000+07:00",
    //     meeting_time_end: "2023-01-02T02:56:04.822000+07:00",
    //     meeting_content: "reprehenderit Duis labore cillum",
    //     calendar_id: "fgmj9bems30r1qj2n6kisij544",
    //     calendar_url:
    //       "https://www.google.com/calendar/event?eid=ZmdtajliZW1zMzByMXFqMm42a2lzaWo1NDQgdGVsZWhlYWx0aC5pYm1lbGFiQG0",
    //     meeting_url: "https://meet.google.com/fwk-xopr-bjm",
    //     conclusion: null,
    //     url_file:
    //       "https://drive.google.com/file/d/10zVdYm6dYP21yjuEGo_MeOa2s3zMh9y2/view?usp=sharing",
    //     is_valid: true,
    //     created_at: "2022-12-29T22:27:15.066541+07:00",
    //     update_at: "2023-01-02T00:54:10.877654+07:00",
    //     meeting_creator: "3f58a449-3e0a-4b54-96e1-9d3e91efe968",
    //     meeting_guest: [
    //       "abc@gmail.com",
    //       "abc1@gmail.com",
    //       "abc2@gmail.com",
    //       "abc3@gmail.com",
    //       "abc4@gmail.com",
    //     ],
    //   },
    //   {
    //     id: "dd5f3c3f-8d28-4465-8d51-f198fec90f06",
    //     meeting_title: "tiêu đề 31",
    //     meeting_time_start: "2023-01-02T01:54:52.822000+07:00",
    //     meeting_time_end: "2023-01-02T02:56:04.822000+07:00",
    //     meeting_content: "reprehenderit Duis labore cillum",
    //     calendar_id: "fgmj9bems30r1qj2n6kisij544",
    //     calendar_url:
    //       "https://www.google.com/calendar/event?eid=ZmdtajliZW1zMzByMXFqMm42a2lzaWo1NDQgdGVsZWhlYWx0aC5pYm1lbGFiQG0",
    //     meeting_url: "https://meet.google.com/fwk-xopr-bjm",
    //     conclusion: "Đã kết luận",
    //     url_file:
    //       "https://drive.google.com/file/d/10zVdYm6dYP21yjuEGo_MeOa2s3zMh9y2/view?usp=sharing",
    //     is_valid: true,
    //     created_at: "2022-12-29T22:27:15.066541+07:00",
    //     update_at: "2023-01-02T00:54:10.877654+07:00",
    //     meeting_creator: "3f58a449-3e0a-4b54-96e1-9d3e91efe968",
    //     meeting_guest: [
    //       "abc@gmail.com",
    //       "abc1@gmail.com",
    //       "abc2@gmail.com",
    //       "abc3@gmail.com",
    //       "abc4@gmail.com",
    //     ],
    //   },
    //   {
    //     id: "dd5f3c3f-8d28-4465-8d51-f198fec90f06",
    //     meeting_title: "tiêu đề 32",
    //     meeting_time_start: "2023-01-04T01:54:52.822000+07:00",
    //     meeting_time_end: "2023-01-05T02:56:04.822000+07:00",
    //     meeting_content: "reprehenderit Duis labore cillum",
    //     calendar_id: "fgmj9bems30r1qj2n6kisij544",
    //     calendar_url:
    //       "https://www.google.com/calendar/event?eid=ZmdtajliZW1zMzByMXFqMm42a2lzaWo1NDQgdGVsZWhlYWx0aC5pYm1lbGFiQG0",
    //     meeting_url: "https://meet.google.com/fwk-xopr-bjm",
    //     conclusion: null,
    //     url_file:
    //       "https://drive.google.com/file/d/10zVdYm6dYP21yjuEGo_MeOa2s3zMh9y2/view?usp=sharing",
    //     is_valid: true,
    //     created_at: "2022-12-29T22:27:15.066541+07:00",
    //     update_at: "2023-01-02T00:54:10.877654+07:00",
    //     meeting_creator: "3f58a449-3e0a-4b54-96e1-9d3e91efe968",
    //   },
    //   {
    //     id: "62942154-2ac3-4781-a038-9dfb17fbaaae",
    //     meeting_title: "tiêu đề 1",
    //     meeting_time_start: "2023-01-28T09:25:00+07:00",
    //     meeting_time_end: "2023-01-28T10:25:00+07:00",
    //     meeting_content: "reprehenderit Duis labore cillum",
    //     calendar_id: "v0rlnq5a49c9aj56e46g8jnc18",
    //     calendar_url:
    //       "https://www.google.com/calendar/event?eid=djBybG5xNWE0OWM5YWo1NmU0Nmc4am5jMTggdGVsZWhlYWx0aC5pYm1lbGFiQG0",
    //     meeting_url: "https://meet.google.com/qrz-ufkx-osi",
    //     conclusion: "đã kết luận",
    //     url_file:
    //       "https://drive.google.com/file/d/10zVdYm6dYP21yjuEGo_MeOa2s3zMh9y2/view?usp=sharing",
    //     is_valid: true,
    //     created_at: "2023-01-26T23:44:43.124207+07:00",
    //     update_at: "2023-01-26T23:44:43.124207+07:00",
    //     meeting_creator: "3f58a449-3e0a-4b54-96e1-9d3e91efe968",
    //   },
    //   {
    //     id: "62942154-2ac3-4781-a038-9dfb17fbaaae",
    //     meeting_title: "tiêu đề 2",
    //     meeting_time_start: "2023-01-28T09:25:00+07:00",
    //     meeting_time_end: "2023-11-28T10:25:00+07:00",
    //     meeting_content: "reprehenderit Duis labore cillum",
    //     calendar_id: "v0rlnq5a49c9aj56e46g8jnc18",
    //     calendar_url:
    //       "https://www.google.com/calendar/event?eid=djBybG5xNWE0OWM5YWo1NmU0Nmc4am5jMTggdGVsZWhlYWx0aC5pYm1lbGFiQG0",
    //     meeting_url: "https://meet.google.com/qrz-ufkx-osi",
    //     conclusion: null,
    //     url_file:
    //       "https://drive.google.com/file/d/10zVdYm6dYP21yjuEGo_MeOa2s3zMh9y2/view?usp=sharing",
    //     is_valid: true,
    //     created_at: "2023-01-26T23:44:43.124207+07:00",
    //     update_at: "2023-01-26T23:44:43.124207+07:00",
    //     meeting_creator: "3f58a449-3e0a-4b54-96e1-9d3e91efe968",
    //   },
    //   {
    //     id: "62942154-2ac3-4781-a038-9dfb17fbaaae",
    //     meeting_title: "tiêu đề 3",
    //     meeting_time_start: "2023-01-28T09:25:00+07:00",
    //     meeting_time_end: "2023-01-28T10:25:00+07:00",
    //     meeting_content: "reprehenderit Duis labore cillum",
    //     calendar_id: "v0rlnq5a49c9aj56e46g8jnc18",
    //     calendar_url:
    //       "https://www.google.com/calendar/event?eid=djBybG5xNWE0OWM5YWo1NmU0Nmc4am5jMTggdGVsZWhlYWx0aC5pYm1lbGFiQG0",
    //     meeting_url: "https://meet.google.com/qrz-ufkx-osi",
    //     conclusion: null,
    //     url_file:
    //       "https://drive.google.com/file/d/10zVdYm6dYP21yjuEGo_MeOa2s3zMh9y2/view?usp=sharing",
    //     is_valid: true,
    //     created_at: "2023-01-26T23:44:43.124207+07:00",
    //     update_at: "2023-01-26T23:44:43.124207+07:00",
    //     meeting_creator: "3f58a449-3e0a-4b54-96e1-9d3e91efe968",
    //   },
    //   {
    //     id: "62942154-2ac3-4781-a038-9dfb17fbaaae",
    //     meeting_title: "tiêu đề 4",
    //     meeting_time_start: "2023-01-28T09:25:00+07:00",
    //     meeting_time_end: "2023-01-28T10:25:00+07:00",
    //     meeting_content: "reprehenderit Duis labore cillum",
    //     calendar_id: "v0rlnq5a49c9aj56e46g8jnc18",
    //     calendar_url:
    //       "https://www.google.com/calendar/event?eid=djBybG5xNWE0OWM5YWo1NmU0Nmc4am5jMTggdGVsZWhlYWx0aC5pYm1lbGFiQG0",
    //     meeting_url: "https://meet.google.com/qrz-ufkx-osi",
    //     conclusion: null,
    //     url_file:
    //       "https://drive.google.com/file/d/10zVdYm6dYP21yjuEGo_MeOa2s3zMh9y2/view?usp=sharing",
    //     is_valid: true,
    //     created_at: "2023-01-26T23:44:43.124207+07:00",
    //     update_at: "2023-01-26T23:44:43.124207+07:00",
    //     meeting_creator: "3f58a449-3e0a-4b54-96e1-9d3e91efe968",
    //   },
    //   {
    //     id: "62942154-2ac3-4781-a038-9dfb17fbaaae",
    //     meeting_title: "tiêu đề 112212121",
    //     meeting_time_start: "2023-01-29T09:25:00+07:00",
    //     meeting_time_end: "2023-01-30T10:25:00+07:00",
    //     meeting_content: "reprehenderit Duis labore cillum",
    //     calendar_id: "v0rlnq5a49c9aj56e46g8jnc18",
    //     calendar_url:
    //       "https://www.google.com/calendar/event?eid=djBybG5xNWE0OWM5YWo1NmU0Nmc4am5jMTggdGVsZWhlYWx0aC5pYm1lbGFiQG0",
    //     meeting_url: "https://meet.google.com/qrz-ufkx-osi",
    //     conclusion: null,
    //     url_file:
    //       "https://drive.google.com/file/d/10zVdYm6dYP21yjuEGo_MeOa2s3zMh9y2/view?usp=sharing",
    //     is_valid: true,
    //     created_at: "2023-01-26T23:44:43.124207+07:00",
    //     update_at: "2023-01-26T23:44:43.124207+07:00",
    //     meeting_creator: "3f58a449-3e0a-4b54-96e1-9d3e91efe968",
    //   },
    //   {
    //     id: "62942154-2ac3-4781-a038-9dfb17fbaaae",
    //     meeting_title: "tiêu đề 1122121",
    //     meeting_time_start: "2023-01-30T09:25:00+07:00",
    //     meeting_time_end: "2023-01-30T10:25:00+07:00",
    //     meeting_content: "reprehenderit Duis labore cillum",
    //     calendar_id: "v0rlnq5a49c9aj56e46g8jnc18",
    //     calendar_url:
    //       "https://www.google.com/calendar/event?eid=djBybG5xNWE0OWM5YWo1NmU0Nmc4am5jMTggdGVsZWhlYWx0aC5pYm1lbGFiQG0",
    //     meeting_url: "https://meet.google.com/qrz-ufkx-osi",
    //     conclusion: null,
    //     url_file:
    //       "https://drive.google.com/file/d/10zVdYm6dYP21yjuEGo_MeOa2s3zMh9y2/view?usp=sharing",
    //     is_valid: true,
    //     created_at: "2023-01-26T23:44:43.124207+07:00",
    //     update_at: "2023-01-26T23:44:43.124207+07:00",
    //     meeting_creator: "3f58a449-3e0a-4b54-96e1-9d3e91efe968",
    //   },
    // ];
    // me.dataInvited = [
    //   {
    //     id: "dd5f3c3f-8d28-4465-8d51-f198fec90f06",
    //     meeting_title: "tiêu đề 3",
    //     meeting_time_start: "2023-01-03T13:54:52.822000+07:00",
    //     meeting_time_end: "2023-01-02T14:56:04.822000+07:00",
    //     meeting_content: "reprehenderit Duis labore cillum",
    //     calendar_id: "fgmj9bems30r1qj2n6kisij544",
    //     calendar_url:
    //       "https://www.google.com/calendar/event?eid=ZmdtajliZW1zMzByMXFqMm42a2lzaWo1NDQgdGVsZWhlYWx0aC5pYm1lbGFiQG0",
    //     meeting_url: "https://meet.google.com/fwk-xopr-bjm",
    //     conclusion: null,
    //     url_file:
    //       "https://drive.google.com/file/d/10zVdYm6dYP21yjuEGo_MeOa2s3zMh9y2/view?usp=sharing",
    //     is_valid: true,
    //     created_at: "2023-01-02T22:27:15.066541+07:00",
    //     update_at: "2023-01-02T00:54:10.877654+07:00",
    //     meeting_creator: "3f58a449-3e0a-4b54-96e1-9d3e91efe968",
    //     meeting_guest: [
    //       "abc@gmail.com",
    //       "abc1@gmail.com",
    //       "abc2@gmail.com",
    //       "abc3@gmail.com",
    //       "abc4@gmail.com",
    //       "abc4@gmail.com",
    //       "abc4@gmail.com",
    //       "abc4@gmail.com",
    //       "abc4@gmail.com",
    //       "abc4@gmail.com",
    //     ],
    //   },
    //   {
    //     id: "dd5f3c3f-8d28-4465-8d51-f198fec90f06",
    //     meeting_title: "tiêu đề 31",
    //     meeting_time_start: "2023-01-03T01:54:52.822000+07:00",
    //     meeting_time_end: "2023-01-04T02:56:04.822000+07:00",
    //     meeting_content: "reprehenderit Duis labore cillum",
    //     calendar_id: "fgmj9bems30r1qj2n6kisij544",
    //     calendar_url:
    //       "https://www.google.com/calendar/event?eid=ZmdtajliZW1zMzByMXFqMm42a2lzaWo1NDQgdGVsZWhlYWx0aC5pYm1lbGFiQG0",
    //     meeting_url: "https://meet.google.com/fwk-xopr-bjm",
    //     conclusion: null,
    //     url_file:
    //       "https://drive.google.com/file/d/10zVdYm6dYP21yjuEGo_MeOa2s3zMh9y2/view?usp=sharing",
    //     is_valid: true,
    //     created_at: "2022-12-29T22:27:15.066541+07:00",
    //     update_at: "2023-01-02T00:54:10.877654+07:00",
    //     meeting_creator: "3f58a449-3e0a-4b54-96e1-9d3e91efe968",
    //     meeting_guest: [
    //       "abc@gmail.com",
    //       "abc1@gmail.com",
    //       "abc2@gmail.com",
    //       "abc3@gmail.com",
    //       "abc4@gmail.com",
    //     ],
    //   },
    //   {
    //     id: "dd5f3c3f-8d28-4465-8d51-f198fec90f06",
    //     meeting_title: "tiêu đề 31",
    //     meeting_time_start: "2023-01-02T01:54:52.822000+07:00",
    //     meeting_time_end: "2023-01-02T02:56:04.822000+07:00",
    //     meeting_content: "reprehenderit Duis labore cillum",
    //     calendar_id: "fgmj9bems30r1qj2n6kisij544",
    //     calendar_url:
    //       "https://www.google.com/calendar/event?eid=ZmdtajliZW1zMzByMXFqMm42a2lzaWo1NDQgdGVsZWhlYWx0aC5pYm1lbGFiQG0",
    //     meeting_url: "https://meet.google.com/fwk-xopr-bjm",
    //     conclusion: "Đã kết luận",
    //     url_file:
    //       "https://drive.google.com/file/d/10zVdYm6dYP21yjuEGo_MeOa2s3zMh9y2/view?usp=sharing",
    //     is_valid: true,
    //     created_at: "2022-12-29T22:27:15.066541+07:00",
    //     update_at: "2023-01-02T00:54:10.877654+07:00",
    //     meeting_creator: "3f58a449-3e0a-4b54-96e1-9d3e91efe968",
    //     meeting_guest: [
    //       "abc@gmail.com",
    //       "abc1@gmail.com",
    //       "abc2@gmail.com",
    //       "abc3@gmail.com",
    //       "abc4@gmail.com",
    //     ],
    //   },
    //   {
    //     id: "dd5f3c3f-8d28-4465-8d51-f198fec90f06",
    //     meeting_title: "tiêu đề 32",
    //     meeting_time_start: "2023-01-04T01:54:52.822000+07:00",
    //     meeting_time_end: "2023-01-05T02:56:04.822000+07:00",
    //     meeting_content: "reprehenderit Duis labore cillum",
    //     calendar_id: "fgmj9bems30r1qj2n6kisij544",
    //     calendar_url:
    //       "https://www.google.com/calendar/event?eid=ZmdtajliZW1zMzByMXFqMm42a2lzaWo1NDQgdGVsZWhlYWx0aC5pYm1lbGFiQG0",
    //     meeting_url: "https://meet.google.com/fwk-xopr-bjm",
    //     conclusion: null,
    //     url_file:
    //       "https://drive.google.com/file/d/10zVdYm6dYP21yjuEGo_MeOa2s3zMh9y2/view?usp=sharing",
    //     is_valid: true,
    //     created_at: "2022-12-29T22:27:15.066541+07:00",
    //     update_at: "2023-01-02T00:54:10.877654+07:00",
    //     meeting_creator: "3f58a449-3e0a-4b54-96e1-9d3e91efe968",
    //   },
    //   {
    //     id: "dd5f3c3f-8d28-4465-8d51-f198fec90f06",
    //     meeting_title: "tiêu đề 345",
    //     meeting_time_start: "2023-01-07T01:54:52.822000+07:00",
    //     meeting_time_end: "2023-01-08T02:56:04.822000+07:00",
    //     meeting_content: "reprehenderit Duis labore cillum",
    //     calendar_id: "fgmj9bems30r1qj2n6kisij544",
    //     calendar_url:
    //       "https://www.google.com/calendar/event?eid=ZmdtajliZW1zMzByMXFqMm42a2lzaWo1NDQgdGVsZWhlYWx0aC5pYm1lbGFiQG0",
    //     meeting_url: "https://meet.google.com/fwk-xopr-bjm",
    //     conclusion: null,
    //     url_file:
    //       "https://drive.google.com/file/d/10zVdYm6dYP21yjuEGo_MeOa2s3zMh9y2/view?usp=sharing",
    //     is_valid: true,
    //     created_at: "2022-12-29T22:27:15.066541+07:00",
    //     update_at: "2023-01-02T00:54:10.877654+07:00",
    //     meeting_creator: "3f58a449-3e0a-4b54-96e1-9d3e91efe968",
    //   },
    //   {
    //     id: "dd5f3c3f-8d28-4465-8d51-f198fec90f06",
    //     meeting_title: "tiêu đề 323123213213123",
    //     meeting_time_start: "2023-01-05T01:54:52.822000+07:00",
    //     meeting_time_end: "2023-01-06T02:56:04.822000+07:00",
    //     meeting_content: "reprehenderit Duis labore cillum",
    //     calendar_id: "fgmj9bems30r1qj2n6kisij544",
    //     calendar_url:
    //       "https://www.google.com/calendar/event?eid=ZmdtajliZW1zMzByMXFqMm42a2lzaWo1NDQgdGVsZWhlYWx0aC5pYm1lbGFiQG0",
    //     meeting_url: "https://meet.google.com/fwk-xopr-bjm",
    //     conclusion: null,
    //     url_file:
    //       "https://drive.google.com/file/d/10zVdYm6dYP21yjuEGo_MeOa2s3zMh9y2/view?usp=sharing",
    //     is_valid: true,
    //     created_at: "2022-12-29T22:27:15.066541+07:00",
    //     update_at: "2023-01-02T00:54:10.877654+07:00",
    //     meeting_creator: "3f58a449-3e0a-4b54-96e1-9d3e91efe968",
    //   },
    // ];
  },
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
