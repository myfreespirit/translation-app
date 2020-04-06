<template>
  <div class="statistics viewport">
    <md-toolbar :md-elevation="1">
      <span class="md-title">Statistics</span>
    </md-toolbar>

    <md-card>
      <md-card-content>
        <md-list>
          <md-list-item>
            {{ numberOfFailedTranslations }} failed translations
          </md-list-item>

          <md-list-item> {{ numberOfTanslations }} translations </md-list-item>

          <md-list-item> {{ numberOfUploads }} uploads </md-list-item>

          <md-list-item> {{ numberOfDownloads }} downloads </md-list-item>

          <md-list-item> {{ numberOfSharedLinks }} shared links </md-list-item>

          <md-list-item> {{ numberOfActiveLinks }} active links </md-list-item>

          <md-list-item>
            size of longest text: {{ sizeOfLongestSourceText }}
          </md-list-item>
        </md-list>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Statistics",
  computed: mapState([
    "numberOfFailedTranslations",
    "numberOfTanslations",
    "numberOfUploads",
    "numberOfDownloads",
    "numberOfSharedLinks",
    "numberOfActiveLinks",
    "sizeOfLongestSourceText" // sizeOfLongestSourceText: state => state.sizeOfLongestSourceText
  ])
};
</script>
