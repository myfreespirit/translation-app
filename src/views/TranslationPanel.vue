<template>
  <!-- TODO: visualize loading effect -->
  <div class="translation-panel align-top">
    <language-selector />

    <form>
      <md-field>
        <md-textarea
          v-model="sourceText"
          placeholder="Place your text here..."
          required
          md-autogrow
        ></md-textarea>
      </md-field>

      <md-card>
        <md-card-content>
          {{ getTargetText }}
        </md-card-content>
      </md-card>

      <md-card-actions>
        <md-button
          type="button"
          class="md-primary"
          :disabled="loading"
          @click="
            translate({ sourceText: sourceText })
          "
          >Translate</md-button
        >
      </md-card-actions>
    </form>
  </div>
</template>

<script>
  import LanguageSelector from "./LanguageSelector";
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  name: "TranslationPanel",
  components: {
    "language-selector": LanguageSelector
  },
  data: () => ({
    sourceText: null
  }),
  computed: {
    ...mapState(["loading"]),
    ...mapGetters(["getTargetText"])
  },
  methods: {
    ...mapActions(["translate"])
  }
};
</script>
