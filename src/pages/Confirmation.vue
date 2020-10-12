<template>
  <Layout>
    <div class="my-8 text-xl p-4 border-4 border-green-200 rounded-md">
      🎉 Votre demande a été bien enregistrée !<br />
      Nos équipes vont prendre contact avec vous prochainement.
    </div>
    
    <!-- <div class="my-4">
      Les services pour lesquels vous avez demandé des précisions sont les suivants 
      <div v-for="service in selectedServices" :key="service.service">
        {{service.action}}
      </div>
    </div> -->

    <div class="mt-4">
      <button 
        class="inline-block py-2 px-4 bg-green-500 text-white font-semibold rounded-md cursor-pointer hover:bg-green-800"
        v-on:click="$router.go(-1)"
      >
        Revenir à la liste
      </button>
    </div>
  </Layout>
</template>
