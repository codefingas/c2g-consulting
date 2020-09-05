<template>
  <Fragment>
    <v-app-bar app color="black" dark>
      <div class="d-flex align-center">
        <Logo />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/codefingas/c2g-consulting"
        target="_blank"
        text
      >
        <span class="mr-2">view code</span>
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </v-app-bar>
  </Fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
import Logo from "./logo";

export default {
  components: {
    Fragment,
    Logo,
  },
};
</script>
