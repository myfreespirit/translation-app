<template>
  <div class="translation-panel">
    <form>
      <md-field>
        <md-textarea
          v-model="sourceText"
          placeholder="Place your text here..."
          required
          md-autogrow
        ></md-textarea>
      </md-field>
      <md-field>
        <md-textarea
          v-model="targetText"
          placeholder="Translation"
          md-autogrow
        ></md-textarea>
      </md-field>

      <md-card-actions>
        <md-button type="submit" class="md-primary" :disabled="translating"
          >Translate</md-button
        >
      </md-card-actions>
    </form>
  </div>
</template>

<script>
export default {
  name: "TranslationPanel",
  data: () => ({
    sourceText: null,
    targetText: null,
    translating: false
  })
};
</script>
