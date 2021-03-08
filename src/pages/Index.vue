<template>
  <Layout>
    <div class="max-w-screen-md m-auto mt-8 text-gray-800 bg-gray-200 py-2 px-4 rounded-md">
      Sélectionner les services qui vous intéressent.
      Nous vous contacterons avec des informations complémentaires pour les déployer sur votre territoire.
    </div>

    <div class="max-w-screen-md m-auto mt-8 text-gray-800">
      <ServicesParThematique 
        thematique="Mobilité"
        :services="$page.mobilite"
        v-model="selectedServices"
      />
      <ServicesParThematique 
        thematique="Déchets"
        :services="$page.dechets"
        v-model="selectedServices"
      />
      <ServicesParThematique 
        thematique="Logement"
        :services="$page.logement"
        v-model="selectedServices"
      />
      <ServicesParThematique 
        thematique="Démarches administratives"
        :services="$page.demarchesAdministratives" 
        v-model="selectedServices"
      />
      <ServicesParThematique 
        thematique="Aides pour collectivités"
        :services="$page.aidePourCollectivites"
        v-model="selectedServices"
      />
      <ServicesParThematique 
        thematique="Accessibilité"
        :services="$page.accessibilite"
        v-model="selectedServices"
      />
      <ServicesParThematique 
        thematique="Emploi et Entreprise"
        :services="$page.emploiEtEntreprise"
        v-model="selectedServices"
      />
      <ServicesParThematique 
        thematique="Données"
        :services="$page.donnees"
        v-model="selectedServices"
      />
      <ServicesParThematique 
        thematique="Urbanisme"
        :services="$page.urbanisme"
        v-model="selectedServices"
      />
      <ServicesParThematique 
        thematique="Solidarité"
        :services="$page.solidarite"
        v-model="selectedServices"
      />
      <ServicesParThematique 
        thematique="Agriculture"
        :services="$page.agriculture"
        v-model="selectedServices"
      />

      <div class="my-12 p-4 rounded-md border-4 border-green-400">
        <div class="flex flex-col">
          <div class="flex mb-4 font-semibold">
            Vous êtes en zone rurale, de montagne, en quartier prioritaire de la politique de la ville, en coeur de ville ou une “Petite Ville de Demain” ?
          </div>
          <div class="mb-4">
            Découvrir le <g-link class="text-blue-800 border-b-2 border-transparent hover:border-blue-800 font-semibold" to="https://incubateur.anct.gouv.fr/relance/investigations/">Programme National d'Investigations</g-link> jusqu’au <span class="font-bold">15 mars 2021</span> pour bénéficier de l’accompagnement d’experts du numérique et de designers sur des problématiques rencontrées par vos agents au contact des usagers.
          </div>
          <div class="flex items-center px-4 py-2 rounded-md hover:bg-gray-200">
            <input class="flex h-6 w-6" type="checkbox" id="investigation" v-model="selectedInvestigation">
            <label class="ml-4 flex i font-semibold text-lg" for="investigation">
              Etre recontacté au sujet du programme national d’investigations
            </label>
          </div>

        </div>
      </div>
    </div>

    <div class="max-w-screen-md rounded-md m-auto my-8 bg-gray-200">
    <FormulateForm
        v-model="contact"
        class="p-8"
      >
        <FormulateInput
          type="text"
          name="collectivite"
          label="Collectivité"
          validation="required"
        />

        <FormulateInput
          name="civilite"
          :options="{M: 'M', Mme: 'Mme'}"
          type="select"
          placeholder="Civilité"
          validation="required"
        />

        <FormulateInput
          type="text"
          name="nom"
          label="Nom"
          validation="required"
        />

        <FormulateInput
          type="text"
          name="prenom"
          label="Prénom"
          validation="required"
        />

        <FormulateInput
          name="fonction"
          :options="{élu: 'Élu', dgs: 'DGS/DGA', agent: 'Agent public', autre: 'Autre'}"
          type="select"
          placeholder="Votre fonction"
          validation="required"
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

        <button 
          class="inline-block mt-4 py-2 px-4 bg-blue-500 text-white font-semibold text-lg rounded-md cursor-pointer hover:bg-blue-800"
          v-on:click="submit"
        >
          Être recontacté
        </button>
      </FormulateForm>
    </div>

  </Layout>
</template>

<script>
import ServicesParThematique from '~/components/ServicesParThematique';
import axios from 'axios'

function initialState() {
  return {
    contact: {},
    selectedServices: [],
    selectedInvestigation: false
  }
}

export default {
  metaInfo: {
    title: 'Territoires Store',
    meta: [
      {
          key: 'description',
          name: 'description',
          content: 'Le catalogue des services publics numériques'
      }
    ]
  },
  components: {
    ServicesParThematique
  },
  data() {
    return initialState()
  },
  methods: {
    submit: function (event) {
      axios.post('/.netlify/functions/store-request', {
        contact: this.contact,
        investigation: this.selectedInvestigation,
        services: this.selectedServices
      })
      .then(function (response) {
        window._paq.push(['trackEvent', 'Form Events', 'Demandé par', this.contact.fonction])

        this.selectedServices.forEach(service => {
          window._paq.push(['trackEvent', 'Form Events', 'Renseignements demandés', service.value])
        });
        
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

      this.$router.push('confirmation')
    }
  }
}
</script>

<page-query>
query {
	mobilite: allService(filter: { thematique: { contains: ["Mobilité"] }}) {
    edges {
      node {
        service
        action
        url
        contact
        thematique
        fileInfo {
          name
        }
      }
    }
  }

	dechets: allService(filter: { thematique: { contains: ["Déchets"] }}) {
    edges {
      node {
        service
        action
        url
        contact
        thematique
        fileInfo {
          name
        }
      }
    }
  }

  logement: allService(filter: { thematique: { contains: ["Logement"] }}) {
    edges {
      node {
        service
        action
        url
        contact
        thematique
        fileInfo {
          name
        }
      }
    }
  }

  demarchesAdministratives: allService(filter: { thematique: { contains: ["Démarches administratives"] }}) {
    edges {
      node {
        service
        action
        url
        contact
        thematique
        fileInfo {
          name
        }
      }
    }
  }

  aidePourCollectivites: allService(filter: { thematique: { contains: ["Aides pour collectivités"] }}) {
    edges {
      node {
        service
        action
        url
        contact
        thematique
        fileInfo {
          name
        }
      }
    }
  }

  accessibilite: allService(filter: { thematique: { contains: ["Accessibilité"] }}) {
    edges {
      node {
        service
        action
        url
        contact
        thematique
        fileInfo {
          name
        }
      }
    }
  }

  emploiEtEntreprise: allService(filter: { thematique: { contains: ["Emploi et Entreprise"] }}) {
    edges {
      node {
        service
        action
        url
        contact
        thematique
        fileInfo {
          name
        }
      }
    }
  }

  donnees: allService(filter: { thematique: { contains: ["Données"] }}) {
    edges {
      node {
        service
        action
        url
        contact
        thematique
        fileInfo {
          name
        }
      }
    }
  }

  urbanisme: allService(filter: { thematique: { contains: ["Urbanisme"] }}) {
    edges {
      node {
        service
        action
        url
        contact
        thematique
        fileInfo {
          name
        }
      }
    }
  }

  solidarite: allService(filter: { thematique: { contains: ["Solidarité"] }}) {
    edges {
      node {
        service
        action
        url
        contact
        thematique
        fileInfo {
          name
        }
      }
    }
  }

	agriculture: allService(filter: { thematique: { contains: ["Agriculture"] }}) {
    edges {
      node {
        service
        action
        url
        contact
        thematique
        fileInfo {
          name
        }
      }
    }
  }
}
</page-query>
