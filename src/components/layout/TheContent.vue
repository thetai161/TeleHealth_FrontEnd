<template>
  <div id="content">
    <router-view v-slot="slotsProps">
      <transition name="route" mode="out-in">
        <component :is="slotsProps.Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div#content {
  margin: 10px 0 0 125px;
  padding-top: 20px;
  padding-right: 10px;
}
.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
