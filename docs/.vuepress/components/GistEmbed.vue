<template>
    <vue-embed-gist
            gist-id={{gistId}}
            file={{file}}/>
</template>

<script>
  import VueEmbedGist from 'vue-embed-gist'

  export default {
    props: {
      gistId: String,
      file: String
    },
    components: {
      VueEmbedGist
    }
  }
</script>
