<template>
  <section>
    <TheNavbar></TheNavbar>
    <TheHeader></TheHeader>
    <TheLoading v-if="isLoading"></TheLoading>
    <TheContent v-else></TheContent>
  </section>
</template>

<script>
/* eslint-disable */
import TheContent from "../components/layout/TheContent.vue";
import TheNavbar from "../components/layout/TheNavbar.vue";
import TheHeader from "../components/layout/TheHeader.vue";
import TheLoading from "../components/layout/TheLoading.vue";
export default {
  data() {
    return {
      isLoading: true,
    };
  },
  name: "App",
  components: {
    TheContent,
    TheNavbar,
    TheHeader,
    TheLoading,
  },
  created() {
    const me = this;
    setTimeout(() => {
      me.isLoading = false;
    }, 500);
  },
};
</script>

<style></style>
