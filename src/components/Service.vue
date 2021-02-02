<template>
  <div class="service-item">
    <input class="flex flex-grow-0 w-4" type="checkbox" :id="service.fileInfo.name" :value="service" v-model="selectedServices">
    <label class="flex flex-grow-0 ml-2 w-3/4 font-medium" :for="service.fileInfo.name">{{service.action}}</label>
    <g-link class="service-link hidden text-sm text-blue-800" v-if="service.url" :to="service.url">↗︎ Decouvrir le service</g-link>
  </div>
</template>

<script>
export default {
  props: {
    service: Object,
    value: Array
  },
  computed: {
    selectedServices: {
      get() { return this.value },
      set(selectedServices) {this.$emit('input', selectedServices)}
    }
  }
}
</script>

<style lang="scss">
.service-item {
  @apply px-2 py-1 rounded-sm flex items-center;

  &:hover {
    @apply bg-gray-200;

    .service-link {
      display: inline-block;
    }
  }
}
</style>
