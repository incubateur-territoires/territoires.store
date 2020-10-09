<template>
  <div class="my-6">
    <h2 class="uppercase my-2">{{ this.thematique }}</h2>  
    <Service 
      v-for="edge in services.edges"
      :key="edge.node.fileInfo.name"
      :service="edge.node"
      v-model="selectedServices"
    />
  </div>
</template>

<script>
import Service from '~/components/Service.vue'

export default {
  props: {
    thematique: String,
    services: Object,
    value: Array
  },
  components: {
    Service
  },
  computed: {
    selectedServices: {
      get() { return this.value },
      set(selectedServices) {this.$emit('input', selectedServices)}
    }
  }
}
</script>
