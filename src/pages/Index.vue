<template>
  <Layout>
    <div class="bg-gray-200">
      <div class="max-w-screen-md m-auto text-xs text-gray-700 py-1">
        Un service de l'Incubateur des Territoires de l'Agence Nationale de la Cohesion des Territoires
      </div>
    </div>
    
    <header class="max-w-screen-md m-auto mt-8">
      <h1 class="text-5xl font-bold text-gray-900">📖 Territoires Store</h1>
      <h2 class="text-gray-800">Le catalogue des services publics numériques</h2>
    </header>
 
    <div class="max-w-screen-md m-auto mt-8 text-gray-800">
      Vous pouvez sélectionner les services qui vous intéressent, être recontacté et recevoir des informations complémentaires pour les déployer sur votre territoire.
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
    </div>
  </Layout>
</template>

<script>
import ServicesParThematique from '~/components/ServicesParThematique';

export default {
  metaInfo: {
    title: '📖 Territoires Store'
  },
  components: {
    ServicesParThematique
  },
  data() {
    return {
      selectedServices: []
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
