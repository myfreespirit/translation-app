<template>
  <div class="home">
    <div class="md-layout md-gutter md-alignment-center">
      <div class="md-layout-item md-large-size-60 md-small-size-90">
        <translation-panel />
      </div>

      <div class="md-layout-item md-large-size-30 md-small-size-90">
        <stats />
      </div>
    </div>
  </div>
</template>

<script>
import TranslationPanel from "./TranslationPanel";
import Statistics from "./Statistics";

export default {
  name: "Home",
  components: {
    "translation-panel": TranslationPanel,
    stats: Statistics
  }
};
</script>
