<template>
  <!-- TODO: visualize loading effect -->
  <div class="translation-panel align-top">
    <language-selector />

    <form>
      <md-field>
        <md-textarea
          v-model="source"
          placeholder="Place your text here..."
          required
          md-autogrow
        ></md-textarea>
      </md-field>

      <file-selector />

      <md-card-actions>
        <md-button
          type="button"
          class="md-primary"
          :disabled="loading"
          @click="translate({ sourceText: sourceText })"
          >Translate</md-button
        >
      </md-card-actions>

      <md-card>
        <md-card-content>
          {{ getTranslatedText }}
        </md-card-content>
      </md-card>
    </form>
  </div>
</template>

<script>
import LanguageSelector from "./LanguageSelector";
import FileSelector from "./FileSelector";
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  name: "TranslationPanel",
  components: {
    "language-selector": LanguageSelector,
    "file-selector": FileSelector
  },
  computed: {
    ...mapState(["loading"]),
    source: {
      get() {
        return this.sourceText;
      },
      set(text) {
        this.$store.dispatch("setSourceText", { sourceText: text });
      }
    },
    ...mapGetters(["getTranslatedText"]),
    ...mapGetters({
      sourceText: "getSourceText"
    })
  },
  methods: {
    ...mapActions(["translate"])
  }
};
</script>
