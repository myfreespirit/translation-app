<template>
  <div class="language-selector">
    <div class="md-layout md-gutter">
      <div class="md-layout-item">
        <md-field>
          <label>Target language</label>
          <md-select v-model="selectedLanguage" name="supportedLanguages" id="supportedLanguages" @md-selected="updateTargetLanguage">
            <md-option v-for="language in supportedLanguages" :key="language.code" :value="language.code">{{ language.name }}</md-option>
          </md-select>
        </md-field>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from "vuex";

  export default {
  name: "LanguageSelector",
  data: () => ({
    selectedLanguage: 'fr'
  }),
    computed: {
      ...mapState(["supportedLanguages"])
    },
    methods: {
      updateTargetLanguage() {
        this.$store.dispatch('setTargetLanguage', this.selectedLanguage);
      }
    }
};
</script>
