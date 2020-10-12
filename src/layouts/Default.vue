<template>
  <div class="layout">
    <div class="bg-gray-200">
      <div class="max-w-screen-md m-auto text-xs text-gray-700 py-1">
        Un service de l'Incubateur des Territoires de l'Agence Nationale de la Cohesion des Territoires
      </div>
    </div>
    
    <div class="max-w-screen-md m-auto px-2">
      <header class=" mt-8">
        <h1 class="text-5xl leading-tight font-bold text-gray-900">📖 Territoires Store</h1>
        <h2 class="text-gray-800 text-xl">Le catalogue des services publics numériques</h2>
      </header>
      
      <slot/>
    </div>

    <footer class="bg-gray-200 mt-12 h-64">
    </footer>
  </div>
</template>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
}
</style>
