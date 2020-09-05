<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col sm12 md12>
          <input id="fileUpload" type="file" hidden />
          <v-btn @click="chooseFiles()">
            <v-icon>mdi-export-variant</v-icon>
            choose file
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col sm12 md12>
          <v-text-field
            label="FIRSTNAME"
            v-model="firstname"
            clearable
            :rules="nameRules"
            :disabled="loading"
            ref="firstnameInput"
            placeholder="."
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col sm12 md12>
          <v-text-field
            label="LASTNAME"
            v-model="lastname"
            clearable
            :rules="nameRules"
            :disabled="loading"
            ref="lastnameInput"
            placeholder="."
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col sm12 md12>
          <v-text-field
            label="LASTNAME"
            v-model="lastname"
            clearable
            :rules="nameRules"
            :disabled="loading"
            ref="lastnameInput"
            placeholder="."
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-text-field
          label="EMAIL ADDRESS"
          v-model="email"
          clearable
          :rules="emailRules"
          :disabled="loading"
          ref="emailInput"
          placeholder="."
        ></v-text-field>
      </v-row>

      <v-row>
        <v-col md12 sm12>
          <v-select
            v-model="state"
            :disabled="loading"
            :rules="countryRules"
            :items="states"
            label="STATE OF ORIGIN"
            placeholder="."
          ></v-select>
        </v-col>
      </v-row>

      <v-row>
        <v-col sm12 md12>
          <v-text-field
            label="OCCUPATION"
            v-model="occupation"
            clearable
            :rules="nameRules"
            :disabled="loading"
            ref="occupationInput"
            placeholder="."
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col sm12 md12>
          <v-text-field
            label="RESIDENTIAL ADDRESS"
            v-model="address"
            clearable
            :rules="nameRules"
            :disabled="loading"
            ref="addressInput"
            placeholder="."
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col sm12 md12 lg12>
          <v-text-field
            :append-icon="show_password ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show_password ? 'text' : 'password'"
            label="ENTER YOUR PASSWORD"
            v-model="password"
            clearable
            :rules="passwordRules"
            @click:append="show_password = !show_password"
            :disabled="loading"
            placeholder="."
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col sm12 md12 lg12>
          <v-text-field
            :append-icon="show_password ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show_password ? 'text' : 'password'"
            label="CONFIRM PASSWORD"
            v-model="confirmPassword"
            clearable
            :rules="confirmPasswordRules"
            @click:append="show_password = !show_password"
            :disabled="loading"
            placeholder="."
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
          
      </v-row>
    </v-container>
    <v-alert dense outlined type="error" v-show="displayError">
      {{ error }}
    </v-alert>
  </div>
</template>

<script>
import { states } from "../Resources/options";
export default {
  data() {
    return {
      states,
      state: "",
      occupatuion: "",
      address: "",
      firstname: "",
      lastname: "",
      password: "",
      confirmPassword: "",
      email: "",
      phone: "",
      nameRules: [
        (v) => v.length !== 0 || "This is a required field", //this rule checks the input field if we are dealing with 3 characters
      ],
      phoneNumRules: [
        (v) =>
          (!isNaN(v) && v.length >= 10) || "Please put a valid phone number",
      ],
      emailRules: [
        (v) => v.length >= 3 || "Invaild E-mail", //this rule checks the input field if we are dealing with 3 characters
        (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          this.displayError = false; // hiding the alert when the user is entering email
          return pattern.test(value) || "Invalid E-mail.";
        },
      ],
      passwordRules: [
        (v) => v.length >= 6 || "Minimum length is 6 characters", //this rule checks the input field if we are dealing with 3 characters
      ],
      confirmPasswordRules: [
        (value) => value === this.password || "passwords do not match",
      ],
      countryRules: [(v) => v.length !== 0 || "You have to select a country"],
    };
  },
  methods: {
    chooseFiles() {
      document.getElementById("fileUpload").click();
    },
  },
};
</script>
