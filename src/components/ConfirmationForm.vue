<template>
  <div>
    <div v-for="service in selectedServices" :key="service.service">
      {{service.action}}
    </div>

    <FormulateForm
      v-model="contact"
    >
      <FormulateInput
        type="text"
        name="nom"
        label="Prénom et nom"
        validation="required"
        error-behavior="live"
      />

      <FormulateInput
        type="email"
        name="email"
        label="Adresse mail professionnelle"
        placeholder="nom@pro.gouv.fr"
        validation="required|email"
      />

      <FormulateInput
        type="tel"
        name="tel"
        label="Numéro de téléphone professionnel"
        placeholder="+33 1 55 55 55 55"
      />
    </FormulateForm>

    <div class="mt-4">
      <button 
        class="inline-block py-2 px-4 bg-blue-500 text-white font-semibold rounded-md cursor-pointer hover:bg-blue-800"
        v-on:click="submit"
      >
        Je confirme
      </button>

      <button 
        class="inline-block py-2 px-4 ml-4 bg-orange-500 text-white font-semibold rounded-md cursor-pointer hover:bg-orange-800"
        v-on:click="step = 'selection'"
      >
        Changer mes choix
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    selectedServices: Array
  },
  data() {
    return {
      contact: {}
    }
  },
  methods: {
    submit: function (event) {
      axios.post('/.netlify/functions/store-request', {
        contact: this.contact,
        services: this.selectedServices
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
}
</script>
