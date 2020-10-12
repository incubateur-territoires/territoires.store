<template>
  <div class="service-item">
    <input class="flex" type="checkbox" :id="service.fileInfo.name" :value="service" v-model="selectedServices">
    <label class="ml-2 font-medium flex flex-grow" :for="service.fileInfo.name">{{service.action}}</label>
    <g-link class="service-link hidden flex text-sm border-solid text-blue-800" v-if="service.url" :to="service.url">↗︎ Decouvrir le service</g-link>
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
      display: flex;
    }
  }
}
</style>
