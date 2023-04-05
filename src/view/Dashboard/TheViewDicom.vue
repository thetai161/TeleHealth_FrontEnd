<template>
  <div>
    <iframe
      v-show="show"
      class="iframe"
      src="http://localhost:3000/"
      title="W3Schools Free Online Web Tutorials"
    ></iframe>
    <div>
      <a-spin
        v-if="!show"
        size="large"
        style="
          display: inline-block;
          opacity: 1;
          position: fixed;
          top: 50%;
          left: 54%;
          transform: scale(1.5);
        "
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    document.querySelector(".iframe").onload = () => {
      this.show = true;
    };
  },
};
</script>

<style scoped>
.iframe {
  margin-top: 20px;
  margin-left: -5px;
  width: 100%;
  height: 800px;
  border-radius: 10px;
  border: 1px solid #ccc;
}
</style>
