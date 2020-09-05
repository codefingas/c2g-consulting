<template>
  <div>
    <div class="d-flex justify-center mt-12">
      <v-card class="form-card" max-width="300px">
        <v-card-title class="d-flex justify-center">
          <Logo />
        </v-card-title>
        <v-tabs-items v-model="tab">
          <v-tab-item v-for="item in items" :key="item.tab">
            <v-card flat>
              <v-card-text>
                <component :is="item.content"></component>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>

        <v-tabs v-model="tab" dark>
          <v-tab v-for="item in items" :key="item.tab">
            {{ item.tab }}
          </v-tab>
        </v-tabs>
      </v-card>
    </div>
  </div>
</template>

<script>
import Logo from "../components/Resources/logo";
import SignUp from "../components/onboarding/signup";
import Login from "../components/onboarding/login";

export default {
  components: {
    Logo,
    SignUp,
    Login,
  },
  data() {
    return {
      tab: null,
      items: [
        { tab: "Sign In", content: Login },
        { tab: "Sign Up", content: SignUp },
      ],
    };
  },
};
</script>

<style lang=""></style>
