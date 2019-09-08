<template>
    <vue-embed-gist
            gist-id={{gistId}}
            file={{file}}/>
</template>

<script>
  import VueEmbedGist from 'vue-embed-gist'

  export default {
    props: ["gistId", "file"],
    components: {
      VueEmbedGist
    }
  };
</script>
