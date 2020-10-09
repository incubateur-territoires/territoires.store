<template>
  <div class="px-2 py-1 rounded-sm hover:bg-gray-200 flex items-center">
    <input class="flex" type="checkbox" :id="service.fileInfo.name" :value="payload" v-model="selectedServices">
    <label class="ml-2 font-semibold flex flex-grow" :for="service.fileInfo.name">{{service.action}}</label>
    <g-link class="flex float-right text-sm border-solid">{{service.service}}</g-link>
  </div>
</template>

<script>
export default {
  props: {
    service: Object,
    value: Array
  },
  computed: {
    payload() {
      return {
        service: this.service.fileInfo.name,
        contact: this.service.contact
      }
    },
    selectedServices: {
      get() { return this.value },
      set(selectedServices) {this.$emit('input', selectedServices)}
    }
  }
}
</script>
