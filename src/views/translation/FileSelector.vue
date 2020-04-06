<template>
  <md-field>
    <label>Upload file</label>
    <md-file
      placeholder="Or select a txt file to be translated."
      @md-change="translateFromFile($event)"
    />
  </md-field>
</template>

<script>
export default {
  name: "FileSelector",
  methods: {
    translateFromFile(event) {
      // TODO: validate file extension
      const file = event[0];

      if (file) {
        const reader = new FileReader();

        reader.onload = e => {
          this.$store.dispatch("setSourceText", {
            sourceText: e.target.result
          });

          // Note: to track amount of translated files, we actually need to extend this.$store.state
          // so that we can verify whether or not the sourceText was reset / modified after file upload
          this.$store.dispatch("increaseNumberOfUploads");
        };

        reader.onerror = function() {
          // TODO: notify user of the error
          console.log("Error reading file");
        };

        reader.readAsText(file, "UTF-8");
      }
    }
  }
};
</script>
