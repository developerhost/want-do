<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    
      <v-btn
        href="/"
        text
        class="ml-0 pl-0"
      >
                <v-icon large color="darken-2" class="mr-5">
                mdi-message-text
              </v-icon>
        <span class="title font-weight-bold mr-5">死ぬまでにやりたいことリスト</span>

      </v-btn>
      
    </v-app-bar>

    <v-main>
          <div id="nav">
      <router-link to="/">HOME</router-link>
      <router-link to="/signin">Singin</router-link>
      <router-link to="/signup">Signuop</router-link>
      <router-link to="/todo">todo</router-link>
    </div>
    <router-view />
    </v-main>

  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {
    // HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
