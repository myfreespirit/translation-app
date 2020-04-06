<template>
  <div class="about">

    <md-divider></md-divider>

    <div class="md-layout md-gutter md-alignment-center">
      <div class="md-layout-item md-large-size-30 md-small-size-90">
        On the homepage you can specify text and a language that you want the translation to be in.
        You're allowed to provide the text either in the text-area or by uploading a txt file.
      </div>

      <div class="md-layout-item md-large-size-60 md-small-size-90">
        The text itself can be in any supported language as Google Cloud API client library will automatically detect it.
        The app utilizes Google Translate API. Currently it requires an API key (process.env.API_KEY_GOOGLE_TRANSLATE).
      </div>
    </div>

    <md-divider></md-divider>

    <div class="md-layout md-gutter md-alignment-center">
      <div class="md-layout-item md-large-size-45 md-small-size-90">
        This SPA is built with VueJS, Express (NodeJS) and is hosted on Heroku.
      </div>

      <div class="md-layout-item md-large-size-45 md-small-size-90">
        A more secure way would be to utilize GCP's service account and export it via an environmental
        variable (GOOGLE_APPLICATION_CREDENTIALS) that points to the path of the private key.
        Or even host it on Google Cloud Platform, in which case the service account will be automatically resolved.
      </div>
    </div>

    <md-divider></md-divider>

    <div class="md-layout md-gutter md-alignment-center">
      <div class="md-layout-item md-large-size-30 md-small-size-90">
        The three last rows in the statistics panel are currently inactive, but in the future they will be extended (most popular languages). And it will also be possible to download your translations, share hidden links (which can expire) and even translate to multiple languages at the same time!
      </div>

      <div class="md-layout-item md-large-size-60 md-small-size-90">
        The statistics are currently only kept on the client-side, but there are plans to centralize them and store in a database.
      </div>
    </div>

    <md-divider></md-divider>

    <div class="md-layout md-gutter md-alignment-center">
      <div class="md-layout-item md-large-size-30 md-small-size-90">

      </div>

      <div class="md-layout-item md-large-size-60 md-small-size-90">

      </div>
    </div>

    <md-divider></md-divider>

    <div class="md-layout md-gutter md-alignment-center">
      <div class="md-layout-item md-large-size-30 md-small-size-90">
        <md-icon>code</md-icon> <a href="https://github.com/puntje/translation-app" target="_blank">Github</a>
      </div>

      <div class="md-layout-item md-large-size-60 md-small-size-90">
        <md-icon>email</md-icon> ebesjentsev@gmail.com
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "About"
  };
</script>
