<template>
  <Layout>
    <div class="bg-gray-200">
      <div class="max-w-screen-md m-auto text-xs text-gray-700 py-1">
        Un service de l'Incubateur des Territoires de l'Agence Nationale de la Cohesion des Territoires
      </div>
    </div>
    
    <div class="px-2">
      <header class="max-w-screen-md m-auto mt-8">
        <h1 class="text-5xl leading-tight font-bold text-gray-900">📖 Territoires Store</h1>
        <h2 class="text-gray-800 text-xl">Le catalogue des services publics numériques</h2>
      </header>

      <div v-if="step === 'selection'">
        <div class="max-w-screen-md m-auto mt-8 text-gray-800 bg-gray-200 py-2 px-4 rounded-md">
          Sélectionner les services qui vous intéressent. Nous vous contacterons avec des informations complémentaires pour les déployer sur votre territoire.
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

          <div class="my-12 p-4 rounded-md  bg-blue-200 hover:bg-blue-300">
            <div class="flex items-center">
              <input class="flex h-12 w-12" type="checkbox" id="investigation" v-model="selectedInvestigation">
              <label class="ml-4 flex flex-col" for="investigation">
                <div class="flex mb-2 font-semibold">
                Vous avez besoin d'un service public numérique qui n'existe pas encore ?<br />
                Nous pouvons le construire ensemble !
                </div>
                <div class="flex">
                  Le programme d'investigation de l'Incubateur des Territoires propose d'accompagnier votre 
                  collectivité dans un programme d'intrapreneuriat au sein de vos services avec ambition de 
                  faire emerger des services numériques avec forte impacte pour vos administrés et votre administration.
                </div>
              </label>
            </div>
          </div>
        </div>

        <div class="max-w-screen-md m-auto mt-8 text-gray-800 text-right">
          <button 
            class="inline-block py-2 px-4 bg-blue-500 text-white font-semibold rounded-md cursor-pointer hover:bg-blue-800"
            v-on:click="step = 'form'"
          >
            Être recontacté
          </button>
        </div>
      </div>

      <ConfirmationForm
        class="max-w-screen-md m-auto mt-8 text-gray-800"
        v-if="step === 'form'"
        :selectedServices="selectedServices"
      />
    </div>

    <footer class="bg-gray-200 mt-12 h-64">
    </footer>
  </Layout>
</template>

<script>
import ServicesParThematique from '~/components/ServicesParThematique';
import ConfirmationForm from '~/components/ConfirmationForm.vue'

export default {
  metaInfo: {
    title: '📖 Territoires Store'
  },
  components: {
    ServicesParThematique,
    ConfirmationForm
  },
  data() {
    return {
      step: "selection",
      selectedServices: [],
      selectedInvestigation: false
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
