<template>
    <ul>
        <li v-for="content in contents">
            <router-link :to="content.path">{{ content.title }}</router-link>
        </li>
    </ul>
</template>

<script>
  export default {
    props: ["category"],
    computed: {
      contents() {
        return this.$site.pages
          .filter(x => x.path !== "/" && x.path.startsWith(`/${this.category}`));
      }
    }
  };
</script>
