<template>
  <v-app>
    <v-app-bar
      app
      color="black"
      dark
    >
      <div class="d-flex align-center">
        <Logo />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/codefingas/c2g-consulting"
        target="_blank"
        text
      >
        <span class="mr-2">Github</span>
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
        <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Logo from "./components/Resources/logo";
export default {
  name: 'App',
  components: {
    Logo
  },
  data: () => ({
    //
  }),
};
</script>
