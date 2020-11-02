<template>
  <div id="app">

    <v-app id="inspire">

      <!-- Menu vertical gauche -->
      <v-navigation-drawer v-model="burger" app>
        <v-sheet class="pa-4" >
          <v-avatar class="mb-4" color="grey darken-1" size="64"></v-avatar>
          <div>Username</div>
        </v-sheet>

      <!-- Menu -->
      <v-list class="text-left">
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <!-- Icon menu -->
          <v-list-item-icon>
            <v-icon class="pl-6" color="teal lighten-1">{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <!-- Text menu -->
          <v-list-item-content>
            <v-list-item-title class="pl-6">{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>  
      </v-list>
      </v-navigation-drawer>

      <!-- Burger Icon + barre top -->
      <v-app-bar class="teal lighten-3" app>
        <v-app-bar-nav-icon @click="burger = !burger"></v-app-bar-nav-icon>

        <v-toolbar-title><router-link class="text-decoration-none black--text" :to="{name: 'Home'}">MADERA</router-link></v-toolbar-title>  
      </v-app-bar>

      <v-main>
        <router-view/>
          <!-- Footer -->
          <v-footer color="brown darken-4" absolute>
            <v-row justify="center" no-gutters>
              <v-btn v-for="link in links" :key="link.text" color="white" text rounded class="my-1"> {{ link.text }} </v-btn>
              <v-col class="brown darken-4 py-2 text-center white--text" cols="12"> {{ new Date().getFullYear() }} — <strong>CESI Nantes</strong> </v-col>
            </v-row>
          </v-footer>
      </v-main>

    </v-app>
    
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>

<script>
  export default {
    data: () => ({ 
      burger: null,
      links: [
        {icon: 'fa-home', text: 'Accueil', route: '/'},
        {icon: 'fa-folder-open', text: 'Projets', route: '/Project'},
        {icon: 'fa-file-signature', text: 'Devis', route: '/Quote'},
        {icon: 'fa-user-alt', text: 'Clients', route: '/Customer'},
        {icon: 'fa-book', text: 'Catalogue', route: '/Catalog'},
        {icon: 'fa-info-circle', text: 'A propos', route: '/About'}
      ],}),
  }
</script>